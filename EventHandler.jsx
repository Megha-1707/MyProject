import React from 'react'
import './event.css'

function EventHandler() {
  document.addEventListener('keydown', (e) => {
    {
      if (e.key === 'ArrowUp') {
        document.getElementById('blue').style.backgroundColor = "blue";
      }

      else if (e.key === 'ArrowDown') {
        document.getElementById('green').style.backgroundColor = "green";
      }
      else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        document.getElementById('yellow').style.backgroundColor = "yellow";
      }
      else if (e.key === 'Control') {
        document.getElementById('blue').style.backgroundColor = "white";
        document.getElementById('yellow').style.backgroundColor = "white";
        document.getElementById('green').style.backgroundColor = "white";
      }
    }
  }
  );

  function blueInfo() {
    const ele = document.getElementById('main');
    ele.style.backgroundColor = "blue";
    ele.style.color='white';
    ele.innerText = "“Let the blue sky meet the blue sea, and all is blue for a time.”";
    
  };

  function yellowInfo() {
    const ele = document.getElementById('main');
    ele.style.backgroundColor = "yellow";
    ele.innerText = "“Some painters transform the sun into a yellow spot. Others transform a yellow spot into the sun.”";

  };

  function greenInfo() {
    const ele = document.getElementById('main');
    ele.style.backgroundColor = "green";
    ele.style.color='white';
    ele.innerText = "“Beauty, strength, and youth are flowers but fading; Duty, faith, and love are roots and ever green.”";
    ele.text
  };

  
  return (
    <div id='container'>
      <div id='main'>
        <div id='blue' className='circle' onClick={blueInfo}></div>
        <div id='yellow' className='circle' onClick={yellowInfo}></div>
        <div id='green' className='circle' onClick={greenInfo} ></div>
      </div>
    </div>
  )
}

export default EventHandler
