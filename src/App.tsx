import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <div className="align-element grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-0">
        <div className="col-span-2  p-2">
          <NavBar />
        </div>
        <div className="hidden md:block p-4">Aside</div>
        <div className="p-4 md:col-span-1">Main</div>
      </div>
    </>
  )
}

export default App
