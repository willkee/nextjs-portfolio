import "../styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

type Children = { children: React.ReactNode };
export default function Root({ children }: Children) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
