export function Input({
  className = '',
  ...props
}) {
  return (
    <input
      className={`rounded-md border border-gray-300 shadow-sm bg-white px-3 py-2 text-sm  focus:outline-none focus:ring-1
        focus:border-pink-500 focus:ring-pink-500
        dark:border-gray-600 dark:bg-slate-800 dark:text-white ${className}`}
      {...props}
    />
  );
}