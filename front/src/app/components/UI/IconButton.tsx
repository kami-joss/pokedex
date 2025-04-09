import Tooltip from "@/app/components/UI/Tooltip";

interface Props {
  children: React.ReactNode;
  tooltip: string;
  className?: string;
  onClick?: () => void;
}

export default function IconButton({
  children,
  tooltip,
  className,
  onClick,
}: Props) {
  return tooltip ? (
    <Tooltip text={tooltip}>
      <button onClick={onClick} className={"rounded-full px-2 hover:bg-background bg-opacity-0 duration-100 " + className}>
        {children}
      </button>
    </Tooltip>
  ) : (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
