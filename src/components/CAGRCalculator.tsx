import { Box } from "@mui/material";
import { useState } from "react";
import Buttons from "./part_components/Buttons";
import Display from "./part_components/Display";
import Input from "./part_components/Input";

const CAGRCalculator = () => {
  const [startValue, setStartValue] = useState<number>(0);
  const [endValue, setEndValue] = useState<number>(0);
  const [years, setYears] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  console.log("values", startValue, endValue, years);

  const calculateCAGR = () => {
    const ev = endValue / startValue;
    const dv = 1 / years;
    const cagr = Math.pow(ev, dv);
    const gv=cagr-1;
    const finalCAGR = gv * 100;
    const CAGR= Number(finalCAGR.toFixed(2));

    setResult(CAGR);
  };

  return (
    <Box
      className="container mt-4 justify-content-center"
      sx={{
        p: 2,
        border: "1px solid grey",
        borderRadius: "16px",
        width: 500,
        height: 520,
      }}
    >
      <h1 className="heading ">CAGR Calculator</h1>
      <Input
        getValue={setStartValue}
        focus={true}
        type="number"
        value={startValue}
        placeholder="Investment's Starting Value"
      />
      <Input
        getValue={setEndValue}
        type="number"
        value={endValue}
        placeholder="Investment's Ending Value"
      />
      <Input
        getValue={setYears}
        type="number"
        value={years}
        placeholder="Number of investment periods"
      />
      <Buttons onclick={calculateCAGR} btnTitle="Calculate" />
      <Display
        result={result}
        showText="CAGR [Compound Annual Growth Rate] (in %)"
      />
    </Box>
  );
};

export default CAGRCalculator;
