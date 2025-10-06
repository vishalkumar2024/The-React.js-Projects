import { useState } from 'react'
import './App.css'
import Board from './Components/Board'
import EditTask from './Components/EditTask'
import Shuffle from './ReactBit/Shuffle';
import Iridescence from './ReactBit/Iridescence';
import Navbar from './Components/Navbar';

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

  const [target, setTarget] = useState({
    card_id: "",
    board_id: "",
  })

  //---------- Add card function ----------//
  const addCard = (title, board_id) => {
    const card = {
      id: Date.now() + Math.random(),
      title: title,
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
    const tempBoard = board.filter(item => item.id !== board_id);
    setBoard(tempBoard)

  }


  //-----------  Handle Drag Start function  ---------- //
  const handleDragEnter = (card_id, board_id) => {
    setTarget({
      card_id,
      board_id,
    })
  }


  //-----------  Handle Drag End function  ---------- //
  const handleDragEnd = (card_id, board_id) => {
    let s_Bindex, s_Cindex, t_Bindex, t_Cindex;

    s_Bindex = board.findIndex((item) => item.id === board_id)
    if (s_Bindex < 0) return;

    s_Cindex = board[s_Bindex].cards?.findIndex((item) => item.id === card_id)
    if (s_Cindex < 0) return;


    t_Bindex = board.findIndex((item) => item.id === target.board_id)
    if (t_Bindex < 0) return;

    t_Cindex = board[t_Bindex].cards.findIndex((item) => item.id === target.card_id)
    if (t_Cindex < 0) return;

    const tempBoard = [...board];
    const tempCard = tempBoard[s_Bindex].cards[s_Cindex];

    tempBoard[s_Bindex].cards.splice(s_Cindex, 1);
    tempBoard[t_Bindex].cards.splice(t_Cindex, 0, tempCard);

    setBoard(tempBoard)
  }


  const updateCard = (card_id, board_id, card) => {
    const bIndex = board.findIndex(item => item.id === board_id)
    if (bIndex < 0) return;
    else {

      const cIndex = board[bIndex].cards.findIndex(item => item.id === card_id)
      if (cIndex < 0) return;
      else {
        const tempBoard = [...board];
        tempBoard[bIndex].cards[cIndex] = card;
        setBoard(tempBoard);
      }
    }
  }


  return (
    <div className=' min-h-screen h-full w-screen relative'>
      
        <Iridescence
        className="absolute h-full w-full inset-0 -z-50 pointer-events-none"
          color={[0.8, 1, 1]}
          mouseReact={false}
          amplitude={0.1}
          speed={0.19}
        />


      {/* Navbar */}
      <div className=' py-5' >
         <Navbar />
      </div>


      {/* board */}
      <div className=''>
        <div className='px-10  pb-4  flex gap-8 flex-wrap'>
          {
            board.map((item) => {
              return <Board
                key={item.id}
                BoardItem={item}
                removeBoard={removeBoard}
                addCard={addCard}
                removeCard={removeCard}
                handleDragEnd={handleDragEnd}
                handleDragEnter={handleDragEnter}
                updateCard={updateCard}
              />
            })

          }
          <div className='min-w-[320px] w-[320px] h-fit pb-4'>
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
