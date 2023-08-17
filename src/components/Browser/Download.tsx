import { useState } from "react";
import { performAction } from "../../utils/perform-action";

function Download({ action }: { action: string }) {
  const [url, setUrl] = useState<string>("");
  const onChangeUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const onFormSubmitDownload = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    performAction(action, { url });
  };
  return (
    <form onSubmit={(e) => onFormSubmitDownload(e)}>
      <label>
        url
        <input value={url} type="text" onChange={(e) => onChangeUrl(e)} />
      </label>
      <button type="submit">Ejecutar Funcion</button>
    </form>
  );
}

export default Download;
