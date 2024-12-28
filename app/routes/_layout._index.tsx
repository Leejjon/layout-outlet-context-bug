import type { MetaFunction } from "@remix-run/node";
import { useExistingCustomOutletContext } from "~/contexts/CustomOutletContext";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const {setMessage} = useExistingCustomOutletContext()

  return (
    <div>
      Bla bla page content
      <button onClick={() => {setMessage("ERROR 500!")}}>Trigger error message</button>
      <button onClick={() => {setMessage(undefined)}}>Reset</button>
    </div>
  );
}
