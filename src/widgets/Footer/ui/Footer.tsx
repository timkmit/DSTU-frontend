import { Typography } from "@/shared/ui/Text";
import styles from "./Footer.module.css";

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.section}>
				<div className={styles.slogan}>
					<Typography.Title as="h4" className="text-white">
						Учись. Исследуй. Действуй.
					</Typography.Title>
					<div className={styles.socialMedia}>
						<Typography.Paragraph variant="caption">VK</Typography.Paragraph>
						<Typography.Paragraph variant="caption">Telegram</Typography.Paragraph>
						<Typography.Paragraph variant="caption">R</Typography.Paragraph>
					</div>
				</div>
			</div>
			<div className={styles.sectionGroup}>
				<div className={styles.section}>
					<Typography.Title as="h4" className="text-white">
						Приёмная ректора
					</Typography.Title>
					<Typography.Paragraph variant="caption">Будние дни с 8:30 до 17:00</Typography.Paragraph>
					<Typography.Paragraph variant="caption">8 863 273 85 25</Typography.Paragraph>
					<Typography.Paragraph variant="caption">reception@donstu.ru</Typography.Paragraph>
					<Typography.Paragraph variant="caption">
						344000, г. Ростов-на-Дону, пл. Гагарина, 1, ауд. 250
					</Typography.Paragraph>
				</div>
			</div>
		</footer>
	);
};
