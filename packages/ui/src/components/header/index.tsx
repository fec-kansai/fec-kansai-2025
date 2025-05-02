import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@workspace/ui/lib/utils";
import { LogoHeader } from "../icons/ui";
import { Menu } from "lucide-react";

const headerVariants = cva(
    "w-full flex justify-between items-center px-4 py-2 shadow-sm bg-zinc-900 text-white",
    {
        variants: {
            size: {
                sm: "h-12 text-sm",
                md: "h-16 text-base",
                lg: "h-20 text-lg",
            },
        },
        defaultVariants: {
            size: "md",
        },
    }
);

const navLinkVariants = cva("text-white text-base font-medium transition-all px-2 py-1", {
    variants: {
        isActive: {
            true: "drop-shadow-[0_0_6px_var(--neon-pink)] text-white rounded-md bg-zinc-800/50",
            false: "",
        },
        isDisabled: {
            true: "text-gray-400 pointer-events-none",
            false: "hover:text-white hover:drop-shadow-[0_0_4px_var(--neon-pink)]",
        },
    },
    compoundVariants: [
        {
            isActive: true,
            isDisabled: false,
            className: "text-white drop-shadow-[0_0_6px_var(--neon-pink)]",
        },
    ],
    defaultVariants: {
        isActive: false,
        isDisabled: false,
    },
});

type HeaderProps = React.HTMLAttributes<HTMLElement> & VariantProps<typeof headerVariants>;

export function Header({ className, size, ...props }: HeaderProps) {
    const navLinks = [
        { name: "概要", href: "#", isDisabled: false, isActive: true },
        { name: "チケット", href: "#", isDisabled: false, isActive: false },
        { name: "スピーカー", href: "#", isDisabled: false, isActive: false },
        { name: "スケジュール", href: "#", isDisabled: false, isActive: false },
        { name: "スポンサー", href: "#", isDisabled: false, isActive: false },
        { name: "会場", href: "#", isDisabled: false, isActive: false },
    ];

    return (
        <header className={cn(headerVariants({ size }), className)} {...props}>
            <a href="/">
                <LogoHeader width={180} height={37} />
            </a>

            {/* ハンバーガー（モバイル） */}
            <button className="block lg:hidden p-2">
                <Menu className="w-6 h-6 text-white" />
            </button>

            {/* ナビゲーション（PC表示のみ） */}
            <nav className="hidden lg:block">
                <ul className="flex items-center gap-4">
                    {navLinks.map((link) => (
                        <li key={link.name} className="inline-block">
                            <a
                                href={link.href}
                                className={cn(
                                    navLinkVariants({
                                        isActive: link.isActive,
                                        isDisabled: link.isDisabled,
                                    })
                                )}
                                aria-disabled={link.isDisabled}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
