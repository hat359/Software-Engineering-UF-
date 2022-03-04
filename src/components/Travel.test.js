import {render, fireEvent, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Nav from '../Nav'
import Travel from './Travel'
import Answermodal from '../rep-components/Answermodal'
import Modal from '../rep-components/Modal'
import Landing from '../components/Landing'


test('loads items eventually', async () => {
    render(<Nav />)
  
    
    
  })

  test('loads items eventually', async () => {
    render(<Travel />)
    
    expect(screen.getByRole('table'))
    expect (screen.findByRole('button',{name:'Before You Travel'}))
    
    userEvent.type(screen.getByPlaceholderText('Question',"How you doin?"))
    fireEvent.click(screen.getByRole('button',{name:'Post'}))

    
  })

  test('loads items evetually', async () => {
    render(<Answermodal/>)


    fireEvent.click(screen.getByRole('button',{name:'View Answers'}))
   
   })


   test('loads items evetually', async () => {
    render(<Modal/>)


    fireEvent.click(screen.getByRole('button'))
   
   })



   test('landing page', async () => {
    render(<Landing/>)
    fireEvent.click(screen.getByRole('button',{name:'Get Started'}))
})


