interface ErrorProps {
  error?: string;
}

const Error = ({ error }: ErrorProps) =>
  error ? <p className="text-red-500 text-xs italic">{error}</p> : null;

export default Error;
