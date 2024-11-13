
function App() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-0">
    <div className="col-span-2 bg-red-400 p-4">Nav</div>
    <div className="hidden md:block bg-yellow-400 p-4">Aside</div>
    <div className="bg-blue-500 p-4 md:col-span-1">Main</div>
  </div>
    </>
  )
}

export default App
