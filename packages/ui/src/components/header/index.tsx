import { useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@workspace/ui/lib/utils";
import { LogoHeader } from "../icons/ui";
import { Menu, X } from "lucide-react";

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

type HeaderProps = React.HTMLAttributes<HTMLElement> & VariantProps<typeof headerVariants> 
& {
    navLinks: {
        name: string;
        href: string;
        isDisabled?: boolean;
        isActive?: boolean;
    }[];
};

export function Header({ className, size, navLinks, ...props }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // メニューの開閉状態
    return (
        <header className={cn(headerVariants({ size }), className)} {...props}>
            <a href="/">
                <LogoHeader width={180} height={37} />
            </a>

            {/* ハンバーガーメニュー（モバイル） */}
            <button
                className="block lg:hidden p-2"
                onClick={() => setIsMenuOpen(true)} // 開くときのみtrueに
            >
                <Menu className="w-6 h-6 text-white" />
            </button>

            {/* モバイル用スライドインメニュー */}
            <div
                className={cn(
                    "lg:hidden fixed top-0 right-0 h-auto w-[150px] bg-black p-4 z-50 transition-transform duration-300",
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                {/* 閉じるボタン（サイドバー右上） */}
                <button
                    className="absolute top-3 right-4 p-2 w-[40px] h-[40px] flex items-center justify-center"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <X className="w-5 h-5 text-white" />
                </button>

                <ul className="mt-12 space-y-4">
                    {navLinks.map((link) => (
                        <li key={link.name}>
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
            </div>

            {/* ナビゲーション（PC表示のみ） */}
            <nav className="hidden lg:block">
                <ul className="flex items-center">
                    {navLinks.map((link) => (
                        <li key={link.name} className="inline-block mr-4">
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
