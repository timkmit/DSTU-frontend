import React, { ReactNode, useState } from "react";
import styles from "./TextField.module.css";
import cn from "classnames";

interface TextFieldProps
	extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	title?: string;
	caption?: string;
	error?: string;
	disabled?: boolean;
	label?: string;
	before?: ReactNode;
	after?: ReactNode;
}

export const TextField: React.FC<TextFieldProps> = ({
	title,
	caption,
	error,
	disabled,
	label,
	before,
	after,
	...props
}) => {
	const [isFocused, setIsFocused] = useState(false);
	const titleClass = error ? styles.errorTitle : styles.title;
	const captionClass = error ? styles.errorCaption : styles.caption;
	return (
		<div>
			{title && <div className={titleClass}>{title}</div>}
			<div
				className={cn(
					styles.inputWrapper,
					{ [styles.errorWrapper]: !!error },
					{ [styles.disabledInput]: disabled },
					{
						[styles.focucedWrapper]: isFocused,
					},
				)}
			>
				{before ? before : null}
				<input
					{...props}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					type="text"
					className={cn(styles.input, error ? "text-[#E44444] placeholder:text-[#E44]" : "")}
					disabled={disabled}
					placeholder={label}
				/>
				{after ? (
					after
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className={cn(styles.closeIcon)}
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
					</svg>
				)}
			</div>

			{caption && <div className={captionClass}>{caption}</div>}
			{error && <div className={styles.error}>{error}</div>}
		</div>
	);
};
