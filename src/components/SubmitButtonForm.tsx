import { useFormStatus } from "react-dom";

export function SubmitButtonForm() {
  const { pending } = useFormStatus();

  return (
    <button
      className="p-3 bg-blue-600 text-white uppercase rounded disabled:opacity-30"
      type="submit"
      disabled={pending}
    >
      {pending ? "Adding..." : "Add"}
    </button>
  );
}
