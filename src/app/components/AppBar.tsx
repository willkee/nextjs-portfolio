"use client";

import styles from "../../styles/appbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AppBar() {
	const router = useRouter();
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
					onClick={() => router.push("/")}
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
