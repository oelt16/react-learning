import { useEffect, useState } from 'react'
import './App.css'
import { Button } from './components/Button/Button'

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [data, setData ] = useState([])

  const fetchData = async () => {

    setLoading(true)
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      if (!response.ok) throw new Error('Network response was not ok')

      const json = await response.json()
      setData(json)
    } catch (error) {
      setError(error as string)
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
    /*return () => {
      // manejar el estado de la memoria, por ejemplo desuscribirnos de obsevables...
    }*/
  }, [data])

  const countMore = () => {
    setCount((count)=>count + 1)
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  return (
    <>
      <div>{JSON.stringify(data)}</div>
    </>
  )
}

export default App
