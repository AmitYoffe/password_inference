import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

function Keypad(): JSX.Element {
  const [code, setCode] = useState("");
  const characters = "012345678*9#";
  const buttons = Array.from(characters).map((char, index) => (
    <Button
      key={index}
      onClick={() => handleClick(char)}
      className="h-4/5 w-4/5 text-4xl focus:bg-red-800"
    >
      {char}
    </Button>
  ));

  function handleClick(value: string): void {
    // throw new Error("Function not implemented.");
    setCode((prev) => prev + value);
  }

  return (
    <Card className="h-full p-4">
      <div className="w-full h-1/5 flex items-center">
        <Card className="p-2 h-24 w-full overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent">
          <p className="text-7xl">{code}</p>
        </Card>
      </div>
      <Card className="grid grid-cols-3 h-4/5 gap-1 place-items-center">
        {buttons}
      </Card>
      {/* <NumButton number={1} /> all buttons */}
    </Card>
  );
}

export default Keypad;
