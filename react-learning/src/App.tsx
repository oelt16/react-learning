import './App.css'
import { useFetch } from './hooks';

interface Data{
  name : string,
  lastName: string,
  age: number
}

const url = "https://jsonplaceholder.typicode.com/posts";
function App() {

  const {data, error, loading} = useFetch<Data>(url)


  

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  return (
    <>
      <div>{JSON.stringify(data)}</div>
    </>
  )
}

export default App
