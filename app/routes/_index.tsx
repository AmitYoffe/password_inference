import type { MetaFunction } from "@remix-run/node";
import { ModeToggle } from "~/components/mode-toggle";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [{ title: "PassCode inference" }];
};

export default function Index() {
  return (
    <div className="grid grid-cols-[30%_40%_30%] grid-rows-[20%_80%] h-screen gap-1	p-2">
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
        <Button>Some random button that doesnt do anything!</Button>
        <ModeToggle />
      </div>
    </div>
  );
}
