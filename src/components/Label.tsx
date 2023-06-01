interface LabelProps {
  label: string;
  name: string;
}

const Label = ({ label, name }: LabelProps) => (
  <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor={name}>
    {label}
  </label>
);

export default Label;
