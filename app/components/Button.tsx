"use client"

export default function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`
      border p-2 border-blue-200 rounded m-2 cursor-pointer 
      hover:bg-blue-400 hover:text-white`}
    >
      {children}
    </button>
  );
}