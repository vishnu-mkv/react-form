import Error from "./Error";
import Label from "./Label";

const Checkbox = ({
  label,
  name,
  checked,
  onChange,
  error,
}: {
  label: string;
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}) => (
  <div className="mb-4">
    <div className="flex gap-2 items-center">
      <input
        className="mb-2 mr-2 leading-tight"
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <Label label={label} name={name} />
    </div>
    <Error error={error} />
  </div>
);

export default Checkbox;
