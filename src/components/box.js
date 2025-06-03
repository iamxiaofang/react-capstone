export function Box({ children, className = '', ...props }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 rounded-md bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}