/* eslint-disable react/no-unescaped-entities */
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/iNVz2ERMo9z
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-background px-4 lg:px-6 py-4 flex items-center justify-between shadow-sm">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <ShirtIcon className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold">The Fashion Fleet</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#we-are-building"
            onClick={() => (window.location.href = "#we-are-building")}
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Try at Home
          </Link>
          <Link
            href="#contact-info"
            onClick={() => (window.location.href = "#contact-info")}
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <Button size="sm" className="md:hidden hover:bg-primary hover:text-primary-foreground font-bold">
          Menu
        </Button>
      </header>
      <main className="flex-1">
        <section className="bg-gradient-to-r from-[#FFF0F5] to-[#FFF0F5] py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#5C2018]">
                Luxury Fashion Delivered in 2 Hours
              </h1>
              <p className="text-lg md:text-xl text-[#5C2018]">
                Experience the ultimate in convenience and style with our premium fashion delivery service. Try on the
                latest trends in the comfort of your own home.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-primary border border-primary hover:bg-primary hover:text-primary-foreground font-bold"
                  onClick={() => (window.location.href = "#we-are-building")}
                >
                  Try at Home
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-primary border border-primary hover:bg-primary hover:text-primary-foreground font-bold"
                  onClick={() => (window.location.href = "#we-are-building")}
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="/placeholder.svg"
                width={600}
                height={600}
                alt="Fashion Delivery"
                className="rounded-xl shadow-xl"
                style={{ aspectRatio: "600/600", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <img
                src="/placeholder.svg"
                width={600}
                height={600}
                alt="Try at Home"
                className="rounded-xl shadow-xl"
                style={{ aspectRatio: "600/600", objectFit: "cover" }}
              />
            </div>
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Try Before You Buy</h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Our unique delivery service allows you to try on the latest fashion trends in the comfort of your own
                home. Order now and we'll deliver your items within 2 hours, free of charge.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="text-primary border border-primary hover:bg-primary hover:text-primary-foreground font-bold"
                onClick={() => (window.location.href = "#we-are-building")}
              >
                Try at Home
              </Button>
            </div>
          </div>
        </section>
        <section id="we-are-building" className="bg-gradient-to-r from-[#FFF0F5] to-[#FFF0F5] py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 text-center space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">We're Still Building</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Our product selection is currently limited, but we're working hard to bring you the best in luxury
              fashion. Stay tuned for more updates and exciting new arrivals.
            </p>
            <div className="flex justify-center gap-2">
              <Input type="email" placeholder="Enter your email" className="flex-1 max-w-[300px]" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </section>
      </main>
      <section id="contact-info" className="bg-white py-6 md:py-12 lg:py-16">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="grid grid-cols-1 gap-2">
            <div className="grid grid-cols-[100px_1fr] gap-2">
              <p className="font-medium">Name:</p>
              <p>The Fashion Fleet</p>
            </div>
            <div className="grid grid-cols-[100px_1fr] gap-2">
              <p className="font-medium">Contact Information:</p>
              <div className="space-y-1">
                <p>
                  <a href="#" className="hover:underline">
                    rahulkumarojha27@gmail.com
                  </a>
                </p>
                <p>
                  <a href="#" className="hover:underline">
                    +91 8076958337
                  </a>
                </p>
                <p>
                  <a href="#" className="hover:underline">
                    +91 9971945929
                  </a>
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[100px_1fr] gap-2">
              <p className="font-medium">Address:</p>
              <p>B-514, Sree Utopia Apartments, Kadubeesanahalli, Bangalore 560103</p>
            </div>
          </div>
          <div className="space-x-4 md:space-x-6">
            <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
              Terms of Service
            </Link>
          </div>
        </div>
      </section>
      <footer className="bg-background px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t">
        <p className="text-sm text-muted-foreground">&copy; 2024 The Fashion Fleet. All rights reserved.</p>
      </footer>
    </div>
  )
}

function ShirtIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>
  )
}