
// import React, {useState, useEffect} from 'react'
// import {FaHandPeace} from "react-icons/fa"
// import {FaHandPaper} from "react-icons/fa"
// import {FaHandRock} from "react-icons/fa"
// import {BsQuestionCircleFill} from "react-icons/bs"

// const choices= [
//     {id:1, name:'rock', component:FaHandRock },
//     {id:2, name: 'paper', component: FaHandPaper},
//     {id:3, name: 'scissors' , component: FaHandPeace}
//   ];


// export default function GameArea(){
//     const [userChoice, setUserChoice]=useState(null);
//     const[computerChoice, setComputerchoice] =useState(null);
//     useEffect(()=>{
//      // const randomChoice=choices.find(Math.floor(Math.random()*choices.length))
//       const randomChoice=choices[Math.floor(Math.random()*choices.length)];
//       setComputerchoice(randomChoice)
  
//     },[])
  
  
//     const handleUserChoice=(choice)=>{
//           const chosenChoice = choices.find( c=> c.id===choice);
//           setUserChoice(chosenChoice);
//     }
//     return(
//         <div className="gameArea">
          
          
//           <div className="you">
           
//             <button className="rock button1" onClick={()=>handleUserChoice(1)}>
//             <FaHandRock/>
//             </button>
//             <button className="paper button1" onClick={()=>handleUserChoice(2)}>
//             <FaHandPaper/>
//             </button>
//             <button className="scissors button1" onClick={()=>handleUserChoice(3)}>
//            <FaHandPeace/>
//             </button>
//          </div>


//           <div className="computer">
//          <button className=" question button1">
//            <BsQuestionCircleFill/>
//          </button>

//         </div>
//     </div>

//     )
// }
