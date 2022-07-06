import React from 'react'
interface Props{
    result:number;
    showText?:string;
}
const Display = ({result,showText}:Props) => {
  return (
    <div className='border border-2 border-success rounded m-2   p-3'>{showText?showText:"Output"} :- {result}</div>
  )
}

export default Display