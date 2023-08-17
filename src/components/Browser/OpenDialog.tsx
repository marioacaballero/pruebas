import { useState } from "react";
import { performAction } from "../../utils/perform-action";

function OpenDialog({ action }: { action: string }) {
  const [message, setMessage] = useState<string>("");

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    performAction(action, { message });

    setMessage("");
  };
  return (
    <form onSubmit={(e) => onFormSubmit(e)}>
      <label>
        Body Text
        <input value={message} type="text" onChange={(e) => onChangeValue(e)} />
      </label>
      <button type="submit">Ejecutar Funcion</button>
    </form>
  );
}

export default OpenDialog;
