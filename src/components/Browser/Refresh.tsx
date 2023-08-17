import { performAction } from "../../utils/perform-action";

function Refresh({ action }: { action: string }) {
  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    performAction(action, { text: "undefined" });
  };
  return (
    <form onSubmit={(e) => onFormSubmit(e)}>
      <button type="submit">Ejecutar Funcion</button>
    </form>
  );
}

export default Refresh;
