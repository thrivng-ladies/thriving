import Navbar from "@/components/landingui/Navbar";
import Footer from "@/components/landingui/Footer";

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	);
}