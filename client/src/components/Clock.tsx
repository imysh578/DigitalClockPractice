import React, { useEffect } from 'react'
import Hours from './Hours';

const Clock = () => {
  useEffect(() => {
    const intervalId = initial();
    return () => 
      clearInterval(intervalId)
  }, [])

  const initial = () => {
    let hr: HTMLDivElement|null = document.querySelector("#hr");
    let mn: HTMLDivElement|null = document.querySelector("#mn");
    let sc: HTMLDivElement|null = document.querySelector("#sc");
  
    const intervalId = setInterval(() => {
      let day: Date = new Date();
      let hh: number = day.getHours() * 30;
      let mm: number = day.getMinutes() * 6;
      let ss: number = day.getSeconds() * 6;
  
      if(hr) hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`
      if(mn) mn.style.transform = `rotateZ(${mm}deg)`
      if(sc) sc.style.transform = `rotateZ(${ss}deg)`
    }, 1000)

    return intervalId;
  }

  return (
		<div className="container">
			<div className="clock">
        <div className="circle" id='sc' style={{"--clr": "var(--circle1-color)"} as React.CSSProperties}><i></i></div>
        <div className="circle circle2" id='mn' style={{"--clr": "var(--circle2-color)"} as React.CSSProperties}><i></i></div>
        <div className="circle circle3" id='hr' style={{"--clr": "var(--circle3-color)"} as React.CSSProperties}><i></i></div>
        <Hours/>
      </div>
		</div>
	);
}

export default Clock