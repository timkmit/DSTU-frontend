import { FC, ReactNode } from "react";
import styles from "./Modal.module.css";
import { Typography } from "../../Text";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
	if (!isOpen) return null;

	return (
		<div className={styles.modalOverlay} onClick={onClose}>
			<div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
				<Typography.Title as="h2" className="text-center">
					{title}
				</Typography.Title>
				<div className={styles.modalBody}>{children}</div>
			</div>
		</div>
	);
};
