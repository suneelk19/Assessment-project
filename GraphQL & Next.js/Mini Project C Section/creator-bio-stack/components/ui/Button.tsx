interface ButtonProps {
  text: string;
  onClick: () => void;
}

export default function Button({
  text,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        background: "#2563eb",
        color: "white",
        padding: "12px",
        marginTop: "10px",
        fontSize: "16px",
      }}
    >
      {text}
    </button>
  );
}