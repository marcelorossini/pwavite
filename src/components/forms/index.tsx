export interface IInputComponent {
  name?: string;
  children: React.ReactNode;
}

export function InputComponent(props: IInputComponent) {
  const { name, children } = props;
  return (
    <div>
      {!!name ? (
        <label>
          <strong>{name}</strong>
        </label>
      ) : null}
      <div className="h-full w-full">{children}</div>
    </div>
  );
}

export default <></>