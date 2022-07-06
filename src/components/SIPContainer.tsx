import { useState } from "react";
import { Box } from "@mui/material";
import Buttons from "./part_components/Buttons";
import Input from "./part_components/Input";
import Display from "./part_components/Display";
import ShowSome from "./part_components/ShowSome";

const SIPContainer = () => {
  const [investValue, setInvestValue] = useState<number>(Number);
  const [percentage, setPercentage] = useState<number>(Number);
  const [years, setYears] = useState<number>(Number);
  const [showValue,setShowValue]=useState<number>(Number);
  const [totalInvest,setTotalInvest]=useState<number>(Number);


  const monthlyRate =percentage / 12 / 100;
  const months = years*12;

  const totalAmount = ()=>{
    const ourAmount = investValue * months;
    setTotalInvest(ourAmount);
  }

  const calculateSIP = () => {
    totalAmount();
   const  futureValue = investValue * (Math.pow(1 + monthlyRate, months) - 1) / 
    monthlyRate;
    setShowValue(Math.round(futureValue));
  };

  return (
    <Box
      className="container mt-4 justify-content-center"
      sx={{
        p: 2,
        border: "1px solid grey",
        borderRadius: "16px",
        width: 500,
        height: 540,
      }}
    >
      <h1 className="heading ">SIP Calculator</h1>
      <Input
        placeholder="Investment Amount"
        value={investValue}
        getValue={setInvestValue}
        focus={true}
      />
      <Input
        placeholder="Expected Rate of Return"
        value={percentage}
        getValue={setPercentage}
      />
      <Input placeholder="Number of years" value={years} getValue={setYears} />
      <Buttons onclick={calculateSIP} btnTitle="Calculate" color="btn-info" />
      <ShowSome text="Wealth Gain" amount={showValue-totalInvest}/>
      <Display result={totalInvest} showText="Amount Invested" />
      <Display result={showValue} showText="Expected Amount"/>
    </Box>
  );
};

export default SIPContainer;
