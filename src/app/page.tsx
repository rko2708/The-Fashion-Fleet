import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";

const designers = [
	{
		name: "Allen Solly",
		products: [
			{
				name: "Classic T-Shirt",
				price: "$29.99",
				image: "/placeholder.svg",
			},
			{
				name: "Slim Fit Jeans",
				price: "$59.99",
				image: "/placeholder.svg",
			},
			{
				name: "Cotton Shirt",
				price: "$39.99",
				image: "/placeholder.svg",
			},
			{
				name: "Casual Blazer",
				price: "$89.99",
				image: "/placeholder.svg",
			},
		],
	},
	{
		name: "Peter England",
		products: [
			{
				name: "Formal Shirt",
				price: "$49.99",
				image: "/placeholder.svg",
			},
			{
				name: "Tailored Suit",
				price: "$199.99",
				image: "/placeholder.svg",
			},
			{
				name: "Leather Belt",
				price: "$29.99",
				image: "/placeholder.svg",
			},
			{ name: "Silk Tie", price: "$24.99", image: "/placeholder.svg" },
		],
	},
];

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main className="flex-grow container mx-auto px-4">
				<Hero />
				{designers.map((designer, index) => (
					<ProductSection
						key={index}
						name={designer.name}
						products={designer.products}
					/>
				))}
			</main>
			<Footer />
		</div>
	);
}
