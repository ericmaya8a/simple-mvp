export function ErrorMessage({ errors }: { errors: string[] }) {
  return (
    <div aria-live="polite" aria-atomic="true">
      {errors.map((error: string) => (
        <p className="mt-1 text-xs text-red-500" key={error}>
          {error}
        </p>
      ))}
    </div>
  );
}
