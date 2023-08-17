import { useState } from "react";
import { performAction } from "../../utils/perform-action";

function Clipboard({ action }: { action: string }) {
  const [text, setText] = useState<string>("");

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    performAction(action, { text });

    setText("");

    alert("Copied to clipboard");
  };
  return (
    <form onSubmit={(e) => onFormSubmit(e)}>
      <label>
        Value to copy
        <input value={text} type="text" onChange={(e) => onChangeValue(e)} />
      </label>
      <button type="submit">Ejecutar Funcion</button>
    </form>
  );
}

export default Clipboard;
