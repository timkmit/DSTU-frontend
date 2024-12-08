import React, { useState } from "react";
import styles from "./Header.module.css";
import { DGTUIcon } from "../../../shared/ui/icons/ui/DGTUIcon";

export const Header = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<header className={styles.header}>
			<div className={styles.topBar}>
				<div className={styles.leftItems}>
					{/* Иконка "Сайты ДГТУ" */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className={styles.icon}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
						/>
					</svg>
					<span className={styles.text}>Сайты ДГТУ</span>
					<span className={styles.text}>Медиапортал</span>
					<span className={styles.text}>Сервисы</span>
					<span className={styles.text}>8 800 100 19 30</span>
					<span className={styles.prioritetText}>приоритет2030^</span>
				</div>
				<div className={styles.rightItems}>
					<select className={styles.select}>
						<option value="en">En</option>
						<option value="ru">Ru</option>
					</select>
					{/* Иконка "Личный кабинет" */}
					<button className={styles.rightButton}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className={styles.icon}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
							/>
						</svg>
						<span className={styles.text}>Личный кабинет</span>
					</button>

					<button className={styles.rightButton}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className={styles.icon}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
							/>
						</svg>
					</button>
					{/* Переключатель темной темы */}
					<button className={styles.toggleButton} onClick={toggleDarkMode}>
						<div className={isDarkMode ? styles.toggleIconActive : styles.toggleIconInactive}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className={styles.icon}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
								/>
							</svg>
						</div>
					</button>
				</div>
			</div>
			<div className={styles.bottomBar}>
				<div className={styles.logoAndUniversityName}>
					<DGTUIcon className={styles.logo} />
					<span className={styles.universityName}>Донской государственный технический университет</span>
				</div>

				<div className={styles.menuItems}>
					<span className={styles.menuItem}>Поступление</span>
					<span className={styles.menuItem}>Университет</span>
					<span className={styles.menuItem}>Образование</span>
					<span className={styles.menuItem}>Наука и инновации</span>
				</div>

				<button className={styles.menuButton}>
					<div className={styles.menuButtonText}>Меню</div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="white"
						className={styles.menuIcon}
					>
						<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
					</svg>
				</button>
			</div>
		</header>
	);
};

export default Header;
