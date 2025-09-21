
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


  //---------- Add card function ----------//
  const addCard = (title, board_id) => {
    const card = {
      id: date.now() + Math.random(),
      title: "",
      labels: [],
      tasks: [],
      date: "",
      des: ""
    }

    const index = board.findIndex(item => item.id === board_id)

    if (index < 0) return;
    else {
      const tempBoards = [...board];
      tempBoards[index].cards.push(card);
      setBoard(tempBoards);
    }
  }


  //---------- Remove card function ----------//
  const removeCard = (card_id, board_id) => {
    const bIndex = board.findIndex(item => item.id === board_id)
    if (bIndex < 0) return;
    else {

      const cIndex = board[bIndex].cards.findIndex(item => item.id === card_id)
      if (cIndex < 0) return;
      else {
        const tempBoard = [...board];
        tempBoard[bIndex].cards.splice(cIndex, 1);
        setBoard(tempBoard);
      }
    }
  }


  //---------- Add Board function ----------//
  const addBoard = (title) => {
    console.log(title)
    setBoard([...board,
    {
      id: Date.now() + Math.random(),
      title,
      cards: [],
    },
    ]);
  }


  //---------- Remove Board function ----------//
  const removeBoard = (board_id) => {
    const tempBoard = board.filter(item => item.id !== board_id );
    setBoard(tempBoard)

  }

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
              return <Board key={item.id} BoardItem={item} removeBoard={removeBoard} />
            })

          }
          <div className='min-w-[320px] w-[320px] h-fit '>
            <EditTask
              displayClass="add-Board"
              padding={"100px"} text="Add Card"
              placeholder="Enter Item"
              onSubmit={(value) => addBoard(value)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
