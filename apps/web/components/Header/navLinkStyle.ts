import { cn } from "@workspace/ui/lib/utils";

const baseNavLinkClass =
  "block w-full text-white text-base font-medium transition-all px-2 py-1";

export const getNavLinkClass = (isActive?: boolean) => {
  if (isActive) return cn(baseNavLinkClass, "text-stroke-neon-pink-active");
  return cn(
    baseNavLinkClass,
    "hover:text-white hover:drop-shadow-[0_0_4px_var(--neon-pink)]",
  );
};
