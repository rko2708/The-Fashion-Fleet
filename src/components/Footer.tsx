import Link from "next/link";
import { Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import React from "react";

const footerLinks = [
	{
		title: "Use cases",
		links: [
			"UI design",
			"UX design",
			"Wireframing",
			"Diagramming",
			"Brainstorming",
			"Online whiteboard",
			"Team collaboration",
		],
	},
	{
		title: "Explore",
		links: [
			"Design",
			"Prototyping",
			"Development features",
			"Design systems",
			"Collaboration features",
			"Design process",
			"FigJam",
		],
	},
	{
		title: "Resources",
		links: [
			"Blog",
			"Best practices",
			"Colors",
			"Color wheel",
			"Support",
			"Developers",
			"Resource library",
		],
	},
];

const Footer = () => (
	<footer className="bg-white pt-12 pb-6">
		<div className="container mx-auto px-4">
			<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
				{footerLinks.map((column, index) => (
					<div key={index}>
						<h3 className="font-semibold mb-4">{column.title}</h3>
						<ul className="space-y-2">
							{column.links.map((link, linkIndex) => (
								<li key={linkIndex}>
									<Link
										href="#"
										className="text-sm text-gray-600 hover:text-gray-900"
									>
										{link}
									</Link>
								</li>
							))}
						</ul>
					</div>
				))}
				<div>
					<Link
						href="/"
						className="text-2xl font-bold mb-4 inline-block text-primary"
					>
						gp
					</Link>
					<div className="flex space-x-4 mt-4">
						<Link href="#" aria-label="Twitter">
							<Twitter size={20} />
						</Link>
						<Link href="#" aria-label="Instagram">
							<Instagram size={20} />
						</Link>
						<Link href="#" aria-label="YouTube">
							<Youtube size={20} />
						</Link>
						<Link href="#" aria-label="LinkedIn">
							<Linkedin size={20} />
						</Link>
					</div>
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;
