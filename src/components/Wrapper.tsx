interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

function Wrapper({ children, className }: WrapperProps): JSX.Element {
  return <div className={className}>{children}</div>;
}

export default Wrapper;
