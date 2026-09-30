import type { Tone } from "@/data/tuap";

// Literal class strings so Tailwind can see them at build time.
export const toneClasses: Record<
  Tone,
  { bg: string; soft: string; text: string; ring: string; dot: string }
> = {
  pink: { bg: "bg-[#e4508f]", soft: "bg-[#fde8f1]", text: "text-[#b3276a]", ring: "ring-[#e4508f]", dot: "bg-[#e4508f]" },
  blue: { bg: "bg-[#2f6feb]", soft: "bg-[#e6eefd]", text: "text-[#1f55c2]", ring: "ring-[#2f6feb]", dot: "bg-[#2f6feb]" },
  orange: { bg: "bg-[#f08a24]", soft: "bg-[#fdf0e1]", text: "text-[#b8600e]", ring: "ring-[#f08a24]", dot: "bg-[#f08a24]" },
  green: { bg: "bg-[#1f9d55]", soft: "bg-[#e3f5ea]", text: "text-[#157a41]", ring: "ring-[#1f9d55]", dot: "bg-[#1f9d55]" },
  red: { bg: "bg-[#e5484d]", soft: "bg-[#fde7e7]", text: "text-[#bb2f33]", ring: "ring-[#e5484d]", dot: "bg-[#e5484d]" },
  purple: { bg: "bg-[#7c5cfa]", soft: "bg-[#efeafe]", text: "text-[#5b3ed6]", ring: "ring-[#7c5cfa]", dot: "bg-[#7c5cfa]" },
};
