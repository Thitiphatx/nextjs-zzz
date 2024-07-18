
interface BadgeProps {
    children: React.ReactNode;
    hasIcon?: boolean;
    icon?: React.ReactNode;
}

export default function Badge({ children, hasIcon, icon }: BadgeProps) {
    return (
        <div className={`bg-black rounded-full w-fit px-2 text-sm ${hasIcon ? "flex" : ""}`}>
            {hasIcon && icon}
            {children}
        </div>
    )
}
