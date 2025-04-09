enum BadgeColor {
  primary = "bg-blue-100 text-blue-800",
  secondary = "bg-gray-100 text-gray-800",
  success = "bg-green-100 text-green-800",
  error = "bg-red-100 text-red-800",
  warning = "bg-yellow-100 text-yellow-800",
  contrast = "bg-background-contrast text-text-contrast"
}

type BadgeColorType = keyof typeof BadgeColor;
type Props = {
  color?: BadgeColorType;
  children: React.ReactNode;
};

export default function Badge({ color = "contrast", children }: Props) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-md px-2 py-1 font-medium ring-1 ring-gray-500/10 ring-inset ${BadgeColor[color]}`}
    >
      {children}
    </span>
  );
}
