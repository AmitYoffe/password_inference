import { Button } from "../ui/button";

function Keypad(): JSX.Element {
  const characters = "012345678*9#";
  const buttons = Array.from(characters).map((char, index) => (
    <Button key={index} className="h-24 w-24">
      {char}
    </Button>
  ));

  return (
    <>
      <div className="grid grid-cols-3 h-full gap-1">
        {buttons.map((numButton, index) => (
          <div key={index} className="flex items-center justify-center">
            {numButton}
          </div>
        ))}
      </div>
      {/* <NumButton number={1} /> all buttons */}
    </>
  );
}

export default Keypad;
