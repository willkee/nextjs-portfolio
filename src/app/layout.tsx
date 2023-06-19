import "../styles/globals.css";
import { Inter } from "next/font/google";
import AppBar from "./components/AppBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Will Kee's Portfolio",
	description: "Will Kee's Portfolio",
};

type Props = { children: React.ReactNode };
export default function Root({ children }: Props) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/logo.svg" type="image/svg" />
			</head>
			<body className={`${inter.className} content`}>
				<div>
					<AppBar />
					{children}
				</div>
			</body>
		</html>
	);
}
