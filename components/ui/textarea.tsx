import type { TextareaHTMLAttributes } from "react";

export function Textarea({ className = "", ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={`flex min-h-32 w-full resize-y border border-[#d7d3cd] bg-[#fbfaf8] px-3 py-3 text-sm text-[#171717] outline-none transition placeholder:text-[#a19c95] focus:border-[#ff5a1f] focus:ring-2 focus:ring-[#ff5a1f]/10 ${className}`}
      {...props}
    />
  );
}
