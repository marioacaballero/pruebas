import { useState } from "react";
import "./App.css";
import Browser from "./components/Browser/Browser";

function App() {
  const [action, setAction] = useState<string>("browser");

  const onChangeSelectAction = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAction(e.target.value);
  };
  return (
    <>
      <select onChange={(e) => onChangeSelectAction(e)}>
        <option value="browser">$Browser</option>
        <option value="javascript">$JavaScriptVM</option>
        <option value="node">$NodeJSServerVM</option>
        <option value="session">$UserSession</option>
      </select>

      {action === "browser" ? <Browser /> : <></>}
    </>
  );
}

export default App;
