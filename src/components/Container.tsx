interface Props {
  children?: React.ReactNode;
  isMin?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function Container({ children, size = 'lg', isMin }: Props) {
  if (size === 'sm') {
    return (
      <div className="lg:w-7/12 w-9/12 m-auto">
        {children}
      </div>
    )
  }

  if (size === 'md') {
    return (
      <div className="lg:w-9/12 w-11/12 m-auto">
        {children}
      </div>
    )
  }

  return (
    <div className="lg:w-11/12 w-full m-auto">
      {children}
    </div>
  );
}
