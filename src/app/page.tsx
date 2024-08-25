/**
 * v0 by Vercel.
 * @see https://v0.dev/t/DKYLUpHadNw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-background px-4 lg:px-6 py-4 flex items-center justify-between shadow-sm">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <DiamondIcon className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold">The Fashion Fleet</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Try at Home
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
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
                >
                  Try at Home
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-primary border border-primary hover:bg-primary hover:text-primary-foreground font-bold"
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
              >
                Try at Home
              </Button>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 text-center space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">We're Still Building</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Our product selection is currently limited, but we're working hard to bring you the best in luxury
              fashion. Stay tuned for more updates and exciting new arrivals.
            </p>
            <div className="flex justify-center">
              <Button
                variant="outline"
                size="lg"
                className="text-primary border border-primary hover:bg-primary hover:text-primary-foreground font-bold"
              >
                Sign Up for Updates
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-background px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t">
        <p className="text-sm text-muted-foreground">&copy; 2024 The Fashion Fleet. All rights reserved.</p>
        <nav className="flex items-center gap-4 md:gap-6">
          <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function DiamondIcon(props) {
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
      <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" />
    </svg>
  )
}