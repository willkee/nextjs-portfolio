import styles from "../../styles/appbar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function AppBar() {
	return (
		<nav className={styles.container}>
			<div>
				<Image
					src="/wk.svg"
					alt="WK Personal Logo"
					className={styles.wk_logo}
					width={100}
					height={100}
					priority
				/>
			</div>
			<div className={styles.links}>
				<Link href="/about">About</Link>
				<Link href="/projects">Projects</Link>
				<Link href="/contact">Contact</Link>
			</div>
		</nav>
	);
}
