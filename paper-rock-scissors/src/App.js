import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import {GiFist} from "react-icons/gi"
import {FaHandPeace} from "react-icons/fa"
import {FaHandPaper} from "react-icons/fa"
import {FaHandRock} from "react-icons/fa"
import {BsQuestionCircleFill} from "react-icons/bs"
import Header from './components/Header'

const choices= [
  {id:1, name:'rock', component:FaHandRock, loosesTo: 2 },
  {id:2, name: 'paper', component: FaHandPaper,loosesTo: 3},
  {id:3, name: 'scissors' , component: FaHandPeace, loosesTo: 1}
];

//handles wins and looses
//determine winner
//reset the game

function App() {
  const [wins, setWins]= useState(0);
  const [looses, setLooses]= useState(0);
  const [userChoice, setUserChoice]=useState(null);
  const[computerChoice, setComputerchoice] =useState(null);
  const[gamestate, setGameState] =useState(null);

  useEffect(()=>{
   // const randomChoice=choices.find(Math.floor(Math.random()*choices.length))
    // const randomChoice= choices[Math.floor(Math.random()*choices.length)];
    // console.log(randomChoice);
    // setComputerchoice(randomChoice)
    restartGame();

  },[])


  const handleUserChoice=(choice)=>{
        const chosenChoice = choices.find( c=> c.id===choice);
        setUserChoice(chosenChoice);

      if(chosenChoice.loosesTo===computerChoice.id){
        //loose
        setGameState('lose');
        setLooses(looses => looses+1)
        
      }
      else if(computerChoice.loosesTo===chosenChoice.id){//win
      setGameState('win');
      setWins(wins=>wins+1)
    
    }
      else if(computerChoice.id===chosenChoice.id){//draw
      setGameState('draw')}
  }

  const renderComponent=(choice)=>{
     const Component = choice.component;
      return <Component/>
  }

  const restartGame=()=>{
    setGameState(null);
    setUserChoice(null);
    const randomChoice= choices[Math.floor(Math.random()*choices.length)];
    setComputerchoice(randomChoice)

  }

return (
    
    <div className="App">
      <Header wins={wins} looses={looses}/>
        

        <div className="gameArea">
          
          
          <div className="you">
           
            <button className="rock button1" onClick={()=>handleUserChoice(1)}>
            <FaHandRock/>
            </button>
            <button className="paper button1" onClick={()=>handleUserChoice(2)}>
            <FaHandPaper/>
            </button>
            <button className="scissors button1" onClick={()=>handleUserChoice(3)}>
           <FaHandPeace/>
            </button>
         </div>


          <div className="computer">
         <button className=" question button1">
           <BsQuestionCircleFill/>
         </button>

        </div>
    </div>


    {gamestate && (
       <div className={`game-state ${gamestate}`}>
       <div className="game-state-content">
       <p>{renderComponent(userChoice)}</p>  
    <p>you {gamestate}!</p>   
    {gamestate==='lose' && <p>Try again</p>}
      <p>{renderComponent(computerChoice)}</p>  
       </div>
       </div>
    )}
   <button onClick={()=> restartGame()}>
     Play again!
   </button>
   

    </div>
  );
}

export default App;
