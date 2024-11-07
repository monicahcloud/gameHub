import ListGroup from "./components/ListGroup"


const App = () => {
   const items = ['New York', 'San Fransico', 'Miami', 'New York', 'Paris']
  return (
    <>
      <ListGroup items={items} heading='Cities'/>
    </>
  )
}

export default App
