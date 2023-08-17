import { useState } from "react";
import { performAction } from "../../utils/perform-action";

type Input = {
  message: string;
  duration: number;
};

const initialInput: Input = {
  message: "",
  duration: 3000,
};

function Pop({ action }: { action: string }) {
  const [input, setInput] = useState<Input>(initialInput);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    performAction(action, { message: input.message, duration: input.duration });

    setInput(initialInput);
  };
  return (
    <form onSubmit={(e) => onFormSubmit(e)}>
      <label>
        Message
        <input
          value={input.message}
          name="message"
          type="text"
          onChange={(e) => onChangeValue(e)}
        />
      </label>
      <label>
        Duration (ms)
        <input
          value={input.duration}
          name="duration"
          type="number"
          min={0}
          onChange={(e) => onChangeValue(e)}
        />
      </label>
      <button type="submit">Ejecutar Funcion</button>
    </form>
  );
}

export default Pop;
