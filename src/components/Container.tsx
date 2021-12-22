interface Props {
  children?: React.ReactNode;
  isMin?: boolean;
}

export function Container({ children, isMin }: Props) {
  return (
    <div className={`${isMin ? "w-11/12" : "w-9/12"} w-full  m-auto`}>
      {children}
    </div>
  );
}
