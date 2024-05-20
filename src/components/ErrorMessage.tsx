export function ErrorMessage({ errors }: { errors?: string[] }) {
  if (errors)
    return (
      <div aria-live="polite" aria-atomic="true">
        {errors.map((error: string) => (
          <p className="mt-1 text-xs text-red-500" key={error}>
            {error}
          </p>
        ))}
      </div>
    );

  return null;
}
