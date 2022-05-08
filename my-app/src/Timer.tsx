import React from "react";

function myRef(d: any) {
  debugger;
  setInterval(() => {
    const t = new Date().toLocaleString();
    d.innerText = `this ia ref ${t}`;
  }, 1000);
}

export function Timer() {
  console.log(`this is TIMER {${Date.now()}}`)
  return (
    <div>
      <h1 ref={myRef}>start .....</h1>
      <h1 >this is render {new Date().toLocaleString()}</h1>
    </div>
  );
}