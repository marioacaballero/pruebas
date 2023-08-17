import { useState } from "react";
import { performAction } from "../../utils/perform-action";

function CloseDialog({ action }: { action: string }) {
  const [dialogId, setDialogId] = useState<string>("");

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDialogId(e.target.value);
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    performAction(action, { dialogId });

    setDialogId("");
  };
  return (
    <form onSubmit={(e) => onFormSubmit(e)}>
      <label>
        Dialog ID
        <input
          value={dialogId}
          type="text"
          onChange={(e) => onChangeValue(e)}
        />
      </label>
      <button type="submit">Ejecutar Funcion</button>
    </form>
  );
}

export default CloseDialog;
