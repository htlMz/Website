type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className="rounded-full bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:opacity-90">
      {children}
    </button>
  );
}
