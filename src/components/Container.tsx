import { Box } from "@mui/material";
import { useState } from "react";
import Buttons from "./part_components/Buttons";
import Display from "./part_components/Display";
import Input from "./part_components/Input";

const Container = () => {
  const [value1, setvalue1] = useState(Number);
  const [value2, setvalue2] = useState(Number);
  const [result, setResult] = useState(Number);
  const [error, setError] = useState<boolean>(false);

  const add = () => {
    if (value1 === 0 || value2 === 0) {
      setError(true);
      return;
    } else {
      setError(false);
      const output = value1 + value2;
      setResult(output);
    }
  };
  const sub = () => {
    if (value1 === 0 || value2 === 0) {
      setError(true);
      return;
    } else {
      setError(false);
      const output = value1 - value2;
      setResult(output);
    }
  };
  const muli = () => {
    if (value1 === 0 || value2 === 0) {
      setError(true);
      return;
    } else {
      setError(false);
      const output = value1 * value2;
      setResult(output);
    }
  };
  const div = () => {
    if (value1 === 0 || value2 === 0) {
      setError(true);
      return;
    } else {
      setError(false);
      const output = value1 / value2;
      setResult(output);
    }
  };

  const ref = () => {
    setResult(0);
    setvalue1(0);
    setvalue2(0);
  };
  return (
    <Box
      className="container mt-4 justify-content-center"
      sx={{
        p: 2,
        border: "1px solid grey",
        borderRadius:"16px",
        width: 500,
        height: 520,
      }}
    >
      <h1 className="heading ">Calculator</h1>
      <Input
        getValue={setvalue1}
        value={value1}
        error={error}
        placeholder="num 1"
        focus={true}
      />
      <Input
        getValue={setvalue2}
        value={value2}
        error={error}
        placeholder="num 2"
      />
      <div className="justify-content-center ml-4">
        <Buttons onclick={add} btnTitle="Add" />
        <Buttons onclick={sub} btnTitle="Sub" />
        <Buttons onclick={muli} btnTitle="Muli" />
        <Buttons onclick={div} btnTitle="Div" />
      </div>
      <Display result={result} />
      <Buttons onclick={ref} btnTitle="🔃" color="btn-success" />
    </Box>
  );
};

export default Container;
