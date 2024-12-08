import { FC, HTMLAttributes } from "react";
import cn from "classnames";

interface PaperProps extends HTMLAttributes<HTMLDivElement> {
	as?: "div" | "section" | "main";
	variant?: "black" | "white" | "primary" | "secondary";
}

const styles: Record<"black" | "white" | "primary" | "secondary", string> = {
	black: "bg-[#000]",
	primary: "bg-[#F4F4F4]",
	secondary: "bg-[#E7E9ED]",
	white: "bg-[#fff]",
};

export const Paper: FC<PaperProps> = ({ className, variant = "primary", as: Component = "div", ...props }) => {
	return <Component className={cn(styles[variant], className)} {...props} />;
};
