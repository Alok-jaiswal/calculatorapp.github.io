import { TextField } from "@mui/material";
import React from "react";
interface inputProps {
  getValue: React.Dispatch<React.SetStateAction<number>> | any;
  placeholder?: string;
  type?: string;
  error?: boolean;
  value:number | any;
  focus?:boolean;
}
const Input = ({ getValue, placeholder, type, error,value ,focus}: inputProps) => {
  const inputValue = (e: any) => {
    getValue(parseInt(e.target.value));
  };

  return (
    <div>
      <TextField
        error={error}
        value={value}
        autoFocus={focus}
        style={{width:"95%"}}
        className="m-2 justify-content-center rounded-4  "
        type={type ? type : "number"}
        label={`Enter the ${placeholder ? placeholder : "number"}`}
        onChange={(e) => inputValue(e)}
      />
    </div>
  );
};

export default Input;
