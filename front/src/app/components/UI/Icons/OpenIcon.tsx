export default function OpenIcon({
  width = 24,
  height = 24,
  fill = "currentColor",
}: {
  width?: number;
  height?: number;
  fill?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="M9 20V4q0-.425.288-.712T10 3t.713.288T11 4v16q0 .425-.288.713T10 21t-.712-.288T9 20m4-4.2V8.2q0-.35.3-.475t.55.125l3.45 3.45q.3.3.3.7t-.3.7l-3.45 3.45q-.25.25-.55.125T13 15.8"
      ></path>
    </svg>
  );
}
