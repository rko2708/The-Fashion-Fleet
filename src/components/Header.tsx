"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Search, Bell, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="flex flex-col md:flex-row justify-between items-center p-4 md:p-6 space-y-4 md:space-y-0 bg-white shadow-sm">
			<div className="flex items-center justify-between w-full md:w-auto">
				<Link href="/" className="text-2xl font-bold text-primary">
					gp
				</Link>
				<Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
					<SheetTrigger asChild>
						<Button
							variant="ghost"
							size="icon"
							className="md:hidden"
						>
							<Menu className="h-5 w-5" />
							<span className="sr-only">Toggle menu</span>
						</Button>
					</SheetTrigger>
					{/* @ts-ignore */}
					<SheetContent
						side="left"
						className="w-[300px] sm:w-[400px]"
					>
						<nav className="flex flex-col space-y-4">
							<Link
								href="#"
								className="text-lg"
								onClick={() => setIsMenuOpen(false)}
							>
								Women
							</Link>
							<Link
								href="#"
								className="text-lg"
								onClick={() => setIsMenuOpen(false)}
							>
								Men
							</Link>
							<Link
								href="#"
								className="text-lg"
								onClick={() => setIsMenuOpen(false)}
							>
								Kids
							</Link>
						</nav>
					</SheetContent>
				</Sheet>
			</div>
			<nav className="hidden md:flex space-x-6">
				<Link href="#" className="text-gray-600 hover:text-gray-900">
					Women
				</Link>
				<Link href="#" className="text-gray-600 hover:text-gray-900">
					Men
				</Link>
				<Link href="#" className="text-gray-600 hover:text-gray-900">
					Kids
				</Link>
			</nav>
			<div className="flex items-center space-x-4 w-full md:w-auto">
				<div className="relative flex-grow md:max-w-md">
					<Input
						type="search"
						placeholder="Search..."
						className="pl-10 pr-4 py-2 w-full rounded-full"
					/>
					<Search
						className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
						size={18}
					/>
				</div>
				<Button
					variant="ghost"
					size="icon"
					className="hidden md:inline-flex"
				>
					<Bell className="h-5 w-5" />
					<span className="sr-only">Notifications</span>
				</Button>
				<Button
					variant="ghost"
					size="icon"
					className="hidden md:inline-flex"
				>
					<ShoppingCart className="h-5 w-5" />
					<span className="sr-only">Cart</span>
				</Button>
				<div className="w-10 h-10 rounded-full overflow-hidden">
					<Image
						src="/placeholder.svg"
						alt="Profile"
						width={40}
						height={40}
						className="object-cover"
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
