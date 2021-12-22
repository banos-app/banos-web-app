interface Props {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  size?: "sm";
}

export function ButtonOutlined({ children, icon, size, className }: Props) {
  const h = size === "sm" ? "h-7" : "h-10";
  const w = size === "sm" ? "w-7" : "w-10";

  if (icon && !children) {
    return (
      <div
        className={`inline-flex items-center justify-center ${w} ${h} border-2 border-gray-300 rounded-full text-gray-400 font-semibold hover:border-red-400 hover:text-red-400 transition cursor-pointer ${className}`}
      >
        {icon}
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center ${h} px-5 border-2 border-gray-300 rounded-full text-gray-400 font-semibold hover:border-red-400 hover:text-red-400 transition cursor-pointer ${className}`}
    >
      {icon && icon}
      {children}
    </div>
  );
}
