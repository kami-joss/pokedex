interface Props {
  value: number;
  max: number;
  label?: string;
}

export default function DataBar({ value, max, label }: Props) {
  const dataWidth = (value / max) * 100;

  const getColor = (value: number) => {
    if (value < 50) {
      return "bg-red-500";
    } else if (value < 95) {
      return "bg-yellow-500";
    } else if (value < 130) {
      return "bg-green-500";
    } else {
      return "bg-blue-500";
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <span>{label}</span>
      <div className="flex items-center bg-background rounded">
        <div
          className={`p-2 ${getColor(value)} flex items-center font-bold text-lg rounded`}
          style={{
            width: `${dataWidth}%`,
          }}
        >
          {value}
        </div>
      </div>
    </div>
  );
}
