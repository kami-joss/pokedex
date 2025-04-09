interface Props {
  children: React.ReactNode;
  text: string;
}
export default function Tooltip({ children, text }: Props) {
  return (
    <div className="relative group flex">
      {children}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-sm rounded py-1 px-2">
        {text}
      </div>
    </div>
  );
}
