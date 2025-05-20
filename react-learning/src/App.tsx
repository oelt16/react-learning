import { useEffect, type ReactNode } from 'react';
import './App.css'
import { Button } from './components'
import { shareValueChildren } from './services'


interface FormProps {
  children : ReactNode
}
const Form = ({children}: FormProps) => {
  return (
    <form>
      {children}
    </form>
  ) 
}

function App() {
  
  const service = shareValueChildren;
  const handleClick = () => {
    console.log('click')
  }

  useEffect(() => {
    service.setValue('hola')
  }, [])

  return (
    <>
      <Button parentMethod={handleClick}><div>My Label</div></Button>
    </>
  )
}

export default App
