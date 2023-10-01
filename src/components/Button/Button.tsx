import "./Button.scss";

type buttonProps = {
  text: string;
  action: (text: string) => void;
  disabled: boolean;
};

export default function Button({ text, action, disabled }: buttonProps) {
  return (
    <button
      disabled={disabled}
      className={disabled ? "button button__disabled" : "button"}
      type="button"
      onClick={() => action(text)}
    >
      {text}
    </button>
  );
}

export { Button };
