interface InputProps {
  value: string;
  placeholder: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export default function Input({
  value,
  placeholder,
  onChange,
}: InputProps) {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}