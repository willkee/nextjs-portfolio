import Image from "next/image";
import styles from "../styles/page.module.css";
import AppBar from "./components/AppBar";
import Router from "next/router";

export default function Home() {
	return (
		<>
			{/* <AppBar /> */}
			<main className={styles.main}>
				{/* <div className={styles.center}></div> */}
				<div className={styles.grid}>
					{/* <a
						href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
						className={styles.card}
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2>
							Learn <span>-&gt;</span>
						</h2>
						<p>
						</p>
					</a>

					<a
						href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
						className={styles.card}
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2>
							Templates <span>-&gt;</span>
						</h2>
						<p>Explore the Next.js 13 playground.</p>
					</a> */}
				</div>
			</main>
		</>
	);
}
