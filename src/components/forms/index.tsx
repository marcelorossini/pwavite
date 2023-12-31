export interface IInputComponent {
  name?: string;
  children: React.ReactNode;
  className?: string;
}

export function InputComponent(props: IInputComponent) {
  const { name, children, className } = props;
  return (
    <div>
      {!!name ? (
        <label>
          <strong>{name}</strong>
        </label>
      ) : null}
      <div className={`h-full w-full ${className}`}>{children}</div>
    </div>
  );
}

export default <></>