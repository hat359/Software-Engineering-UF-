package codenine

import (
	"fmt"
	"go/ast"
	"go/token"
	"strings"
)

const debugResolve = false

var unresolved = new(ast.Object)

type resolver struct {
	handle      *token.File
	declErr     func(token.Pos, string)
	pkgScope    *ast.Scope
	topScope    *ast.Scope
	unresolved  []*ast.Ident
	depth       int
	labelScope  *ast.Scope
	targetStack [][]*ast.Ident
}

func (r *resolver) resolve(ident *ast.Ident, collectUnresolved bool) {
	for s := r.topScope; s != nil; s = s.Outer {
		if obj := s.Lookup(ident.Name); obj != nil {
			if debugResolve {
				r.trace("resolved %v:%s to %v", ident.Pos(), ident.Name, obj)
			}
			assert(obj.Name != "", "obj with no name")
			if _, ok := obj.Decl.(*ast.Ident); !ok {
				ident.Obj = obj
			}
			return
		}
	}
}

func (r *resolver) Visit(node ast.Node) ast.Visitor {
	if debugResolve && node != nil {
		r.trace("node %T@%v", node, node.Pos())
	}

	switch n := node.(type) {
	case *ast.Ident:
		r.resolve(n, true)

	case *ast.FuncLit:
		r.openScope(n.Pos())
		defer r.closeScope()
		r.walkFuncType(n.Type)
		r.walkBody(n.Body)

	case *ast.SelectorExpr:
		ast.Walk(r, n.X)

	case *ast.StructType:
		r.openScope(n.Pos())
		defer r.closeScope()
		r.walkFieldList(n.Fields, ast.Var)

	case *ast.FuncType:
		r.openScope(n.Pos())
		defer r.closeScope()
		r.walkFuncType(n)

	case *ast.CompositeLit:
		if n.Type != nil {
			ast.Walk(r, n.Type)
		}
		for _, e := range n.Elts {
			if kv, _ := e.(*ast.KeyValueExpr); kv != nil {

				if ident, _ := kv.Key.(*ast.Ident); ident != nil {
					r.resolve(ident, false)
				} else {
					ast.Walk(r, kv.Key)
				}
				ast.Walk(r, kv.Value)
			} else {
				ast.Walk(r, e)
			}
		}

	case *ast.InterfaceType:
		r.openScope(n.Pos())
		defer r.closeScope()
		r.walkFieldList(n.Methods, ast.Fun)

	case *ast.LabeledStmt:
		r.declare(n, nil, r.labelScope, ast.Lbl, n.Label)
		ast.Walk(r, n.Stmt)

	case *ast.AssignStmt:
		r.walkExprs(n.Rhs)
		if n.Tok == token.DEFINE {
			r.shortVarDecl(n)
		} else {
			r.walkExprs(n.Lhs)
		}

	case *ast.BranchStmt:
		if n.Tok != token.FALLTHROUGH && n.Label != nil {
			depth := len(r.targetStack) - 1
			r.targetStack[depth] = append(r.targetStack[depth], n.Label)
		}

	case *ast.BlockStmt:
		r.openScope(n.Pos())
		defer r.closeScope()
		r.walkStmts(n.List)

	case *ast.IfStmt:
		r.openScope(n.Pos())
		defer r.closeScope()
		if n.Init != nil {
			ast.Walk(r, n.Init)
		}
		ast.Walk(r, n.Cond)
		ast.Walk(r, n.Body)
		if n.Else != nil {
			ast.Walk(r, n.Else)
		}

	case *ast.CaseClause:
		r.walkExprs(n.List)
		r.openScope(n.Pos())
		defer r.closeScope()
		r.walkStmts(n.Body)

	case *ast.SwitchStmt:
		r.openScope(n.Pos())
		defer r.closeScope()
		if n.Init != nil {
			ast.Walk(r, n.Init)
		}
		if n.Tag != nil {
			if n.Init != nil {
				r.openScope(n.Tag.Pos())
				defer r.closeScope()
			}
			ast.Walk(r, n.Tag)
		}
		if n.Body != nil {
			r.walkStmts(n.Body.List)
		}

	case *ast.TypeSwitchStmt:
		if n.Init != nil {
			r.openScope(n.Pos())
			defer r.closeScope()
			ast.Walk(r, n.Init)
		}
		r.openScope(n.Assign.Pos())
		defer r.closeScope()
		ast.Walk(r, n.Assign)
		if n.Body != nil {
			r.walkStmts(n.Body.List)
		}

	case *ast.CommClause:
		r.openScope(n.Pos())
		defer r.closeScope()
		if n.Comm != nil {
			ast.Walk(r, n.Comm)
		}
		r.walkStmts(n.Body)

	case *ast.SelectStmt:
		if n.Body != nil {
			r.walkStmts(n.Body.List)
		}

	case *ast.ForStmt:
		r.openScope(n.Pos())
		defer r.closeScope()
		if n.Init != nil {
			ast.Walk(r, n.Init)
		}
		if n.Cond != nil {
			ast.Walk(r, n.Cond)
		}
		if n.Post != nil {
			ast.Walk(r, n.Post)
		}
		ast.Walk(r, n.Body)

	case *ast.RangeStmt:
		r.openScope(n.Pos())
		defer r.closeScope()
		ast.Walk(r, n.X)
		var lhs []ast.Expr
		if n.Key != nil {
			lhs = append(lhs, n.Key)
		}
		if n.Value != nil {
			lhs = append(lhs, n.Value)
		}
		if len(lhs) > 0 {
			if n.Tok == token.DEFINE {
				as := &ast.AssignStmt{
					Lhs:    lhs,
					Tok:    token.DEFINE,
					TokPos: n.TokPos,
					Rhs:    []ast.Expr{&ast.UnaryExpr{Op: token.RANGE, X: n.X}},
				}
				r.walkLHS(lhs)
				r.shortVarDecl(as)
			} else {
				r.walkExprs(lhs)
			}
		}
		ast.Walk(r, n.Body)

	case *ast.GenDecl:
		switch n.Tok {
		case token.CONST, token.VAR:
			for i, spec := range n.Specs {
				spec := spec.(*ast.ValueSpec)
				kind := ast.Con
				if n.Tok == token.VAR {
					kind = ast.Var
				}
				r.walkExprs(spec.Values)
				if spec.Type != nil {
					ast.Walk(r, spec.Type)
				}
				r.declare(spec, i, r.topScope, kind, spec.Names...)
			}
		case token.TYPE:
			for _, spec := range n.Specs {
				spec := spec.(*ast.TypeSpec)
				r.declare(spec, nil, r.topScope, ast.Typ, spec.Name)
				if spec.TypeParams != nil {
					r.openScope(spec.Pos())
					defer r.closeScope()
					r.walkTParams(spec.TypeParams)
				}
				ast.Walk(r, spec.Type)
			}
		}

	case *ast.FuncDecl:
		r.openScope(n.Pos())
		defer r.closeScope()

		r.walkRecv(n.Recv)
		if n.Type.TypeParams != nil {
			r.walkTParams(n.Type.TypeParams)
		}
		r.resolveList(n.Type.Params)
		r.resolveList(n.Type.Results)
		r.declareList(n.Recv, ast.Var)
		r.declareList(n.Type.Params, ast.Var)
		r.declareList(n.Type.Results, ast.Var)

		r.walkBody(n.Body)
		if n.Recv == nil && n.Name.Name != "init" {
			r.declare(n, nil, r.pkgScope, ast.Fun, n.Name)
		}

	default:
		return r
	}

	return nil
}
