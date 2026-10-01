type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className="rounded-full bg-gradient-to-r from-[#d9a441] to-[#e0835f] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:opacity-90">
      {children}
    </button>
  );
}
