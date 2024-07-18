
interface ButtonProps {
    children: React.ReactNode;
    hasIcon?: boolean;
    icon?: React.ReactNode;
}

export default function Button({ children, hasIcon, icon }: ButtonProps) {
    return (
        <button className={`bg-black rounded-full w-fit px-2 text-sm ${hasIcon ? "flex" : ""}`}>
            {hasIcon && icon}
            {children}
        </button>
    )
}
