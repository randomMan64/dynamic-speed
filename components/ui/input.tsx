import type { InputHTMLAttributes } from "react";

export function Input({ className = "", ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`flex h-11 w-full border border-[#d7d3cd] bg-[#fbfaf8] px-3 text-sm text-[#171717] outline-none transition placeholder:text-[#a19c95] focus:border-[#ff5a1f] focus:ring-2 focus:ring-[#ff5a1f]/10 ${className}`}
      {...props}
    />
  );
}
