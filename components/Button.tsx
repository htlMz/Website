type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className="rounded-full bg-violet-600 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-violet-500">
      {children}
    </button>
  );
}
