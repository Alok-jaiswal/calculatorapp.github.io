import { Button } from "@mui/material"
interface Props{
  onclick:()=>void;
  btnTitle:string | any;
  color?:"btn-light"| "btn-info"|"btn-warning"|"btn-success"|"btn-secondary"|"btn-primary"|"btn-light"
}
const Buttons = ({onclick,btnTitle,color}:Props) => {
  return (
    <>
        <Button variant="contained" className={`${color ? color:"btn-info"} m-4`} onClick={onclick}>{btnTitle}</Button>
    </>
  )
}

export default Buttons