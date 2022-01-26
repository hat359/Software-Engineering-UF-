
import Nav from './Nav'
import Logo from './Logo.tsx'
import {Card,Button} from 'react-bootstrap'


function Main(){

   
          return(
        
      

              <div >
             {<Nav/>}
             <div class="logo">
             {<Logo/>}</div>

              <div class="container">
                <div class="row">
                    <div class="col-md-4">
                      <a href={`/travel`}>
                    <Card style={{ width: '18rem' }}>
                    <i class="fas fa-route fa-7x"></i>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    
  </Card.Body>
</Card>
</a>


                    </div>
                    <div class="col-md-4">
                    <Card style={{ width: '18rem' }} className="card">
                    <i class="fas fa-home fa-7x" ></i>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    
  </Card.Body>
</Card>


                    </div>
                    <div class="col-md-4">
                    <Card style={{ width: '18rem' }}>
                    <i class="fas fa-user-friends fa-7x"></i>
  <Card.Body >
    <Card.Title>Card Title</Card.Title>
    
  </Card.Body>
</Card>


                    </div>
                    
                </div>
                <div class="row">
                    <div class="col-md-4">
                    <Card style={{ width: '18rem' }}>
                    <i class="fas fa-donate fa-7x"></i>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    
  </Card.Body>
</Card>


                    </div>
                    <div class="col-md-4">
                    <Card style={{ width: '18rem' }} className="card">
                    <i class="fas fa-book fa-7x"></i>
  
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    
  </Card.Body>
</Card>


                    </div>
                    <div class="col-md-4">
                    <Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    
  </Card.Body>
</Card>


                    </div>
                    
                </div>
              </div>

              </div>

           


)



}

export default Main