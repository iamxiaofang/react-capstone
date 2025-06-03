export function Button({
  className = '',
  children,
  ...props
}) {
  return (
    <button
      className={`rounded-md px-4 py-2 shadow-sm 
        focus:outline-none focus:ring-2 focus:ring-offset-2 
        bg-pink-500 hover:bg-pink-600 text-white focus:ring-pink-500
        dark:bg-pink-700 dark:hover:bg-pink-800 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}