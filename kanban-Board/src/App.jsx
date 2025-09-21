
import { useState } from 'react'
import './App.css'
import Board from './Components/Board'
import EditTask from './Components/EditTask'

function App() {
  const [board, setBoard] = useState([
    {
      id: Date.now() + Math.random() * 10,
      title: "To Do",
      cards: [
        {
          id: Date.now() + Math.random() * 2,
          title: "card1",
          tasks: [],
          labels: [
            {
              text: "Frontend",
              color: "pink"
            },
          ],
          description: "This is a frontend",
          date: ""

        },
        {
          id: Date.now() + Math.random() * 2,
          title: "card2",
          tasks: [],
          labels: [
            {
              text: "Backend",
              color: "green"
            },
          ],
          description: "This is a backend",
          date: ""

        }
      ]

    }
  ])


  return (
    <div className='bg-zinc-600   min-h-screen h-full w-screen'>

      {/* Navbar */}
      <div className='w-full  bg-zinc-800 '>
        <div className='text-2xl uppercase p-5 text-amber-50'>
          Kanban
        </div>
      </div>

      {/* board */}
      <div className=''>
        <div className='px-10 py-5  flex gap-8 flex-wrap'>
          {
            board.map((item) => {
              return <Board key={item.id} BoardItem={item} />
            })

          }
          <div className='min-w-[320px] w-[320px] h-fit '>
            <EditTask
              displayClass="add-Board"
              padding={"100px"} text={"Add Card"} placeholder={"Enter Item"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
