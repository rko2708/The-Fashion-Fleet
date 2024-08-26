/* eslint-disable react/no-unescaped-entities */
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/oiSGfRFwKCy
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"

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
                src="/image-2.jpg"
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
                src="/image-top.jpg"
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
        <section className="bg-gradient-to-r from-[#FFF0F5] to-[#FFF0F5] py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 text-center space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">How Fashion Fleet Works</h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Our unique delivery service allows you to try on the latest fashion trends in the comfort of your own
              home. Here's how it works:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-white rounded-lg shadow-md p-4 md:p-6 space-y-2">
                <ShirtIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-medium">Browse and Order</h3>
                <p className="text-muted-foreground">
                  Browse our selection of the latest fashion trends and add your desired items to your cart.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 md:p-6 space-y-2">
                <TruckIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-medium">2-Hour Delivery</h3>
                <p className="text-muted-foreground">
                  Your order will be delivered to your doorstep within 2 hours, free of charge.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 md:p-6 space-y-2">
                <CheckIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-medium">Try and Decide</h3>
                <p className="text-muted-foreground">
                  Try on the items in the comfort of your own home and decide what you want to keep.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="we-are-building" className="bg-white py-12 md:py-24 lg:py-32">
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
        <section className="bg-gradient-to-r from-[#FFF0F5] to-[#FFF0F5] py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 text-center space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">FAQs</h2>
            <div className="space-y-4 md:space-y-6 text-left">
              <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between w-full bg-muted p-4 rounded-lg">
                  <h3 className="text-lg font-medium">
                    <span className="mr-2">+</span>
                    What is the delivery time for your service?
                  </h3>
                </CollapsibleTrigger>
                <CollapsibleContent className="bg-muted p-4 rounded-lg">
                  <p className="text-muted-foreground">
                    We offer a 2-hour delivery service for all orders placed within our delivery area. Our team works
                    hard to ensure your items arrive quickly and in perfect condition.
                  </p>
                </CollapsibleContent>
              </Collapsible>
              <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between w-full bg-muted p-4 rounded-lg">
                  <h3 className="text-lg font-medium">
                    <span className="mr-2">+</span>
                    Do you offer any returns or exchanges?
                  </h3>
                </CollapsibleTrigger>
                <CollapsibleContent className="bg-muted p-4 rounded-lg">
                  <p className="text-muted-foreground">
                    Yes, we have a 30-day return policy for all items. If you're not satisfied with your purchase, you
                    can return it for a full refund or exchange. Simply contact our customer service team to initiate
                    the process.
                  </p>
                </CollapsibleContent>
              </Collapsible>
              <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between w-full bg-muted p-4 rounded-lg">
                  <h3 className="text-lg font-medium">
                    <span className="mr-2">+</span>
                    What payment methods do you accept?
                  </h3>
                </CollapsibleTrigger>
                <CollapsibleContent className="bg-muted p-4 rounded-lg">
                  <p className="text-muted-foreground">
                    We accept all major credit and debit cards, as well as mobile payment options like Apple Pay and
                    Google Pay. We also offer the option to pay with PayPal or Affirm for flexible financing.
                  </p>
                </CollapsibleContent>
              </Collapsible>
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
                  <PhoneIcon className="mr-2 inline-block h-4 w-4 text-muted-foreground" />
                  <a href="#" className="hover:underline">
                    +91 8076958337
                  </a>
                </p>
                <p>
                  <MailIcon className="mr-2 inline-block h-4 w-4 text-muted-foreground" />
                  <a href="#" className="hover:underline">
                    rahulkumarojha27@gmail.com
                  </a>
                </p>
                <p>
                  <PhoneIcon className="mr-2 inline-block h-4 w-4 text-muted-foreground" />
                  <a href="#" className="hover:underline">
                    +91 9971945929
                  </a>
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[100px_1fr] gap-2">
              <p className="font-medium">Address:</p>
              <p>
                <LocateIcon className="mr-2 inline-block h-4 w-4 text-muted-foreground" />
                B-514, Sree Utopia Apartments, Kadubeesanahalli, Bangalore 560103
              </p>
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

function CheckIcon(props) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function LocateIcon(props) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function MailIcon(props) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function PhoneIcon(props) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
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


function TruckIcon(props) {
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
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  )
}