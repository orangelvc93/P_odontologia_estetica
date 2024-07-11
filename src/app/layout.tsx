import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Odontología Estética | Dr.Marcelo Novoa",
	description:
		"Clínica especializada en odontología estética, ofreciendo tratamientos avanzados para mejorar tu sonrisa. Dirigida por el Dr. Marcelo Novoa, experto en estética dental.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className="bg-gradient-to-t from-slate-200 to-slate-50 w-full "
		>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
