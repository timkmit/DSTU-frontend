import { ShortArrowRight } from "../../icons";

type ButtonVariants = "main" | "text" | "small" | "icon" | "link-main" | "socials" | "large";

interface ButtonProps {
	variant?: ButtonVariants;
	icon?: React.ReactNode;
	children: React.ReactNode;
	onClick?: () => void;
	href?: string;
}

const buttonStyles: Record<ButtonVariants, string> = {
	main: "pr-3 pl-4 py-3 shadow",
	text: "text-blue-500 hover:text-blue-700 py-4 px-2",
	small: "bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-800 py-4 px-2",
	icon: "max-w-14 text-gray-400 hover:text-gray-600 p-4 aspect-square",
	"link-main": "text-blue-500 hover:text-blue-700 underline py-2 px-4",
	socials: "text-gray-400 hover:text-gray-600 p-2",
	large: "py-3 px-6 shadow text-base",
};

export const Button: React.FC<ButtonProps> = ({ variant = "main", icon, children, onClick, href }) => {
	const baseStyles =
		"flex justify-center items-center rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 relative";

	const combinedStyles = `${baseStyles} ${buttonStyles[variant]} ${["main", "text", "small", "large"].includes(variant) ? "pr-12" : ""}`;

	if (href) {
		return (
			<a href={href} className={combinedStyles}>
				{children}
			</a>
		);
	}

	return (
		<button onClick={onClick} className={combinedStyles}>
			{children}
			{["main", "text", "small", "large"].includes(variant) && (
				<span
					className={`absolute ${variant === "small" ? "p-2" : "p-3"} right-1 rounded-lg aspect-square flex justify-center items-center  bg-blue-500 hover:bg-blue-700`}
				>
					{icon ? icon : <ShortArrowRight />}
				</span>
			)}
		</button>
	);
};
