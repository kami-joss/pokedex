import CloseIcon from "@/app/components/UI/Icons/CloseIcon";

interface Props {
  onClose: (e: React.MouseEvent) => void;
  isOpen: boolean;
  children: React.ReactNode;
}

export default function Drawer({ onClose, isOpen, children }: Props) {
  return (
    <div className="flex flex-col relative">
      <div
        className={`z-50 absolute top-0 left-0 w-full xl:w-96 h-screen bg-background border-2 border-foreground transition-transform ease-in-out ${
          !isOpen ? "translate-x-[-96rem]" : "translate-x-0"
        }`}
      >
        <div
          className="flex justify-center items-center cursor-pointer p-2 bg-foreground"
          onClick={onClose}
        >
          <CloseIcon />
        </div>
        {children}
      </div>
    </div>
  );
}
