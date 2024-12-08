import { FC, HTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Typography.module.css";

interface TextProps<T extends string, isType extends boolean> extends HTMLAttributes<HTMLParagraphElement> {
	as?: T;
	variant?: isType extends true ? "button" | "button_small" | "accent" | "body" | "caption" : undefined;
}

const styleMapping = {
	h1: styles.title_h1,
	h2: styles.title_h2,
	h3: styles.title_h3,
	h4: styles.title_h4,
	button: styles.button,
	button_small: styles.button_small,
	accent: styles.accent,
	body: styles.body,
	caption: styles.caption,
};

export const Typography: FC<HTMLAttributes<HTMLParagraphElement>> & {
	Title: FC<TextProps<"h1" | "h2" | "h3" | "h4", false>>;
	Paragraph: FC<TextProps<"p", true>>;
} = (props) => {
	return <p {...props} />;
};

Typography.Title = ({ as: Component = "h1", className, ...props }: TextProps<"h1" | "h2" | "h3" | "h4", false>) => (
	<Component className={cn(styleMapping[Component], className)} {...props} />
);

Typography.Paragraph = ({ as: Component = "p", variant = "body", className, ...props }: TextProps<"p", true>) => (
	<Component className={cn(styleMapping[variant], className)} {...props} />
);
