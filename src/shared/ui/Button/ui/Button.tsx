import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { ShortArrowRight } from "../../icons";
import { Typography } from "../../Text";
import cn from "classnames";

type ButtonVariants = "main" | "text" | "small" | "icon" | "link-main" | "socials" | "large";

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	variant?: ButtonVariants;
	icon?: React.ReactNode;
	children: React.ReactNode;
	onClick?: () => void;
	href?: string;
}

const buttonStyles: Record<ButtonVariants, string> = {
	main: "pr-3 pl-4 py-3  rounded-lg",
	text: "text-blue-500 hover:text-blue-700 py-4 px-2",
	small: "bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-800 py-2 px-2",
	icon: "max-w-14 text-gray-400 hover:text-gray-600 aspect-square p-4 rounded-lg",
	"link-main": "text-blue-500 hover:text-blue-700 underline py-2 px-4",
	socials: "text-gray-400 hover:text-gray-600 p-2",
	large: "py-3 px-4 border-[3px] border-[#D2DAE3] rounded-lg text-base",
};

export const Button: React.FC<ButtonProps> = ({
	variant = "main",
	icon,
	children,
	onClick,
	href,
	className,
	...props
}) => {
	const baseStyles =
		"flex justify-center items-center rounded-md active:outline-none active:ring-2 active:ring-offset-2";

	const combinedStyles = `${baseStyles} ${buttonStyles[variant]}`;

	if (href) {
		return (
			// @ts-ignore
			<a href={href} className={cn(combinedStyles, className)} {...props}>
				{children}
			</a>
		);
	}

	return (
		<button onClick={onClick} className={cn(combinedStyles, className)} {...props}>
			<Typography.Paragraph
				variant={variant === "small" ? "button_small" : "button"}
				className="flex-1 text-center justify-center flex"
			>
				{children}
			</Typography.Paragraph>
			{["main", "text", "small", "large"].includes(variant) && (
				<span
					className={`${variant === "small" ? "p-2" : "p-3"} ml-2 rounded-lg aspect-square flex justify-center items-center  bg-blue-500 hover:bg-blue-700`}
				>
					{icon ? icon : <ShortArrowRight stroke="#fff" />}
				</span>
			)}
		</button>
	);
};
