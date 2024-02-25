import type { MetaFunction } from "@remix-run/node";
import Keypad from "~/components/keypadComps/Keypad";
import { ModeToggle } from "~/components/mode-toggle";
import { Chart } from "~/components/ui/graph";

export const meta: MetaFunction = () => {
  return [{ title: "PassCode inference" }];
};

export default function Index(): JSX.Element {
  return (
    <div className="h-screen gap-1 p-2 grid grid-cols-[30%_40%_30%]">
      <div className="">
        <Chart />
      </div>
      <div className="flex items-center justify-center">
        <Keypad />
      </div>
      <div className="absolute top-2 right-2">
        <ModeToggle />
      </div>
    </div>
  );
}
