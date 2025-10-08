import { useState } from 'react'
import './App.css'
import Board from './Components/Board'
import EditTask from './Components/EditTask'
import Iridescence from './ReactBit/Iridescence';
import Navbar from './Components/Navbar';

function App() {
  const [board, setBoard] = useState([

    //First Board
    {
      id: Date.now() + Math.random() * 10,
      title: "To Do",
      cards: []

    },

    // Second Board //
    {
      id: Date.now() + Math.random() * 10,
      title: "Progress",
      cards: []

    },

    //Third Board
    {
      id: Date.now() + Math.random() * 10,
      title: "Done",
      cards: []

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


  const [theme, setTheme] = useState("light");


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
    <div className={` min-h-screen h-full w-full relative`}>
      {
        theme == "light" ? (

          <Iridescence
            className="absolute h-full w-full inset-0 -z-50 pointer-events-none"
            color={[0.8, 1, 1]}
            mouseReact={false}
            amplitude={0.1}
            speed={0.19}
          />
        ) : (
          <Iridescence
            className="absolute h-full w-full inset-0 -z-50 pointer-events-none"
            color={[0.1, 0.2, 0.2]}
            mouseReact={false}
            amplitude={0.1}
            speed={0.4}
          />
        )
      }



      {/* Navbar */}
      <div className=' pt-5 pb-8' >
        <Navbar theme={theme} setTheme={setTheme} />
      </div>


      {/* boards */}
      <div className=' flex justify-center px-3 gap-12 flex-wrap pb-4'>
        {
          board.map((item) => {
            return <Board
              theme={theme} 
              setTheme={setTheme}
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
            text="Add Board"
            placeholder="Enter new board"
            onSubmit={(value) => addBoard(value)}
            theme={theme}
          />
        </div>
      </div>
    </div>
  )
}

export default App
