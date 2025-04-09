interface Props {
  label: string;
  children: React.ReactNode;
}

export default function InfoRow({ label, children }: Props) {
  return (
    <div className="grid grid-cols-2">
      <span className="font-bold">{label}</span>
      <span>{children}</span>
    </div>
  );
}
