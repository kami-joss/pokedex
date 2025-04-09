interface Props {
  label?: string;
  name?: string;
  id?: string;
  [key: string]: unknown;
}
export default function TextInput({ label, name, id, ...props }: Props) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <label htmlFor={id || name}>{label}</label>}
      <input
        type="text"
        className="border rounded p-2"
        id={id || name}
        name={name}
        {...props}
      />
    </div>
  );
}
