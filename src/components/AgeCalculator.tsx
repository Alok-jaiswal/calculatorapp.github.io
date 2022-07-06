import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import Buttons from "./part_components/Buttons";
import Display from "./part_components/Display";
import ShowSome from "./part_components/ShowSome";

const AgeCalculator = () => {
  const padTo2Digits = (num: any) => {
    return num.toString().padStart(2, "0");
  };

  const formatDate = (date: any) => {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join("-");
  };
  const todayDate = formatDate(new Date());

  const [userDate, setUserDate] = useState<any>(todayDate);
  const [age, setAge] = useState<any>(0);

  function getAge(birthDate: any) {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    const onBirth = new Date(birthDate);
    var birthYear = onBirth.getFullYear();
    const age = currentYear - birthYear;
    return age;
  }

  const calAge = () => {
    setAge(getAge(userDate));
  };
  return (
    <Box
      className="container mt-4 justify-content-center"
      sx={{
        p: 2,
        border: "1px solid grey",
        borderRadius: "16px",
        width: 500,
        height:400,
      }}
    >
        <h1 className="heading">Age Calculator</h1>
      <TextField
        value={userDate}
        autoFocus={true}
        style={{ width: "95%" }}
        className="m-2 justify-content-center rounded-4  "
        type="date"
        label={`Enter the date of birth :-`}
        onChange={(e: any) => {
          setUserDate(e.target.value);
        }}
      />
      <Buttons onclick={calAge} btnTitle="Calculate" />
      <Display showText="You are age " result={age} />
      <ShowSome text={`In this year ,you  are complete ${age} years`}/>
    </Box>
  );
};

export default AgeCalculator;
