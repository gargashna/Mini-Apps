import React, { useState } from 'react';

export default function Header(props){
    
    return(

        <div className="info">
        <h2>Rock, Paper, Scissors</h2>
        <div className="status">
          <div className="wins">
          <span className="number ">{props.wins}</span>
          <span className="text ">{props.wins===1 ?'Win' :'Wins'}</span>
          </div>

          <div className="loss">
          <span className="number ">{props.looses}</span>
          <span className="text ">{props.looses===1 ?'Loss' :'Looses'}</span>
          </div>
         
        
        </div>

      </div>
    )
   

}
