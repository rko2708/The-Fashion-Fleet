"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const ProductCard = ({ product }) => (
	<Card className="w-[150px] md:w-[200px] flex-shrink-0">
		<CardContent className="p-4">
			<div className="aspect-w-1 aspect-h-1 mb-4">
				<Image
					src={product.image}
					alt={product.name}
					width={200}
					height={200}
					className="rounded-md object-cover"
				/>
			</div>
			<h3 className="text-sm font-semibold truncate">{product.name}</h3>
			<p className="text-xs text-gray-600">{product.price}</p>
			<Button className="mt-2 w-full text-xs" size="sm">
				Add to Cart
			</Button>
		</CardContent>
	</Card>
);

const ProductCarousel = ({ products }) => {
	const [currentIndex, setCurrentIndex] = React.useState(0);

	const nextSlide = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex + 1) % Math.max(products.length - 3, 1)
		);
	};

	const prevSlide = () => {
		setCurrentIndex(
			(prevIndex) =>
				(prevIndex - 1 + Math.max(products.length - 3, 1)) %
				Math.max(products.length - 3, 1)
		);
	};

	return (
		<div className="relative">
			<div className="flex overflow-hidden">
				{products.map((product, index) => (
					<div
						key={index}
						className={`transition-transform duration-300 ease-in-out transform ${
							index >= currentIndex && index < currentIndex + 3
								? "translate-x-0"
								: "translate-x-full"
						}`}
					>
						<ProductCard product={product} />
					</div>
				))}
			</div>
			<Button
				variant="outline"
				size="icon"
				className="absolute top-1/2 left-2 transform -translate-y-1/2"
				onClick={prevSlide}
			>
				<ChevronLeft className="h-4 w-4" />
			</Button>
			<Button
				variant="outline"
				size="icon"
				className="absolute top-1/2 right-2 transform -translate-y-1/2"
				onClick={nextSlide}
			>
				<ChevronRight className="h-4 w-4" />
			</Button>
		</div>
	);
};

const ProductSection = ({ name, products }) => (
	<section className="mb-12">
		<div className="flex justify-between items-baseline mb-4">
			<h2 className="text-xl font-bold">{name}</h2>
			<Link
				href="#"
				className="text-sm text-primary hover:text-primary/90"
			>
				View All
			</Link>
		</div>
		<ProductCarousel products={products} />
	</section>
);

export default ProductSection;
