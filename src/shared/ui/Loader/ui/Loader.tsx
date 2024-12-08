import styles from "./Loader.module.css";

export const Loader = () => {
	return (
		<div className={styles.loaderContainer}>
			<div className={styles.loader}>
				<div className={styles.innerOne}></div>
				<div className={styles.innerTwo}></div>
				<div className={styles.innerThree}></div>
			</div>
		</div>
	);
};
