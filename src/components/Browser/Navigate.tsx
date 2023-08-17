import { useState } from "react";
import { performAction } from "../../utils/perform-action";

function Navigate({ action }: { action: string }) {
  const [target, setTarget] = useState<string>("_self");
  const [path, setPath] = useState<string>("");

  const onChangeSelectTarget = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTarget(e.target.value);
  };

  const onChangePath = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPath(e.target.value);
  };

  const onFormSubmitNavigate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    performAction(action, { path, target });
  };
  return (
    <form onSubmit={(e) => onFormSubmitNavigate(e)}>
      <label>
        path
        <input value={path} type="text" onChange={(e) => onChangePath(e)} />
      </label>
      <label>
        target
        <select onChange={(e) => onChangeSelectTarget(e)}>
          <option value="_self">Self: the current browsing context</option>
          <option value="_blank">Blank: a new tab</option>
          <option value="_parent">
            Parent: the parent browsing context of the current one
          </option>
          <option value="_top">Top: the topmost browsing context</option>
        </select>
      </label>
      <button type="submit">Ejecutar Funcion</button>
    </form>
  );
}

export default Navigate;
