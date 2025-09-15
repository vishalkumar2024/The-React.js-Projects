
import './App.css'
import Board from './Components/Board'

function App() {

  return (
    <div className='bg-zinc-600 h-screen w-screen'>

      {/* Navbar */}
      <div className='w-full  bg-zinc-800 '>
        <div className='text-2xl uppercase p-5 text-amber-50'>
          Kanban
        </div>
      </div>

      {/* board */}
      <div>
        <div className='px-10 py-5 flex gap-8 flex-wrap'>
          <Board />
          <Board />
          <Board />
        </div>
      </div>
    </div>
  )
}

export default App
