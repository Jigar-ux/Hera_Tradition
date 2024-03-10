import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import "../About/About.css";
import { useState, useRef } from "react";

export default function Component() {
  const [menu, setMenu] = useState("shop");
  const menuRef = useRef();
  return (
    <>
      <div
        className="py-12 md:py-24 lg:py-32"
        style={{
          paddingTop: "200px",
          background: "linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%)",
        }}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-3xl">
                About Hera Tradition
              </h1>
              <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Hera Tradition is committed to providing a seamless and
                enjoyable shopping experience for all our customers. Our mission
                is to connect fashion enthusiasts with the latest trends and
                timeless classics, offering a curated collection of high-quality
                apparel, accessories, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-b border-gray-200 border-gray-200 dark:border-gray-800 dark:border-gray-800">
        <div className="container px-4 md:px-6">
          <hr />
          <div className="grid items-center gap-6 py-12 md:grid-cols-[1fr_500px] md:gap-12 lg:grid-cols-[500px_1fr] lg:gap-24 xl:grid-cols-[500px_1fr]">
            <img src={logo} alt="" style={{ borderRadius: "20px" }} />
            <div className="prose max-w-none dark:prose-dark">
              <p>
                Hera Tradition was founded in 2023 by a team of fashion
                enthusiasts who shared a passion for style and a vision of
                creating an inclusive platform that celebrates individuality
                through fashion. With a focus on the intersection of technology
                and trends, Hera Tradition has evolved into a go-to destination
                for on-trend looks, classic pieces, and everything in between.
              </p>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-3xl">
                Experience the Hera Tradition Difference
              </h2>
              <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                At Hera Tradition, we're dedicated to enhancing your shopping
                journey with features that elevate your style and simplify the
                process. Here are some of the key aspects that set us apart:
              </p>
            </div>
          </div>
          <div
            className="mx-auto grid max-w-sm items-start gap-1 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3"
            style={{ paddingTop: "50px", paddingLeft: "50px" }}
          >
            <div className="grid gap-1">
              <CheckCircleIcon className="h-4 w-4" />
              <span className="font-medium">Seamless Navigation</span>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Find what you love with ease using our intuitive and elegant
                interface.
              </p>
            </div>
            <div className="grid gap-1">
              <CheckCircleIcon className="h-4 w-4" />
              <span className="font-medium">Exclusive Access</span>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Be the first to discover new arrivals and limited collections
                from top designers.
              </p>
            </div>
            <div className="grid gap-1">
              <CheckCircleIcon className="h-4 w-4" />
              <span className="font-medium">Effortless Shopping</span>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                From browsing to checkout, we've streamlined the process for
                your convenience.
              </p>
            </div>
            <div className="grid gap-1">
              <CheckCircleIcon className="h-4 w-4" />
              <span className="font-medium">Trend Insights</span>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Stay ahead of the fashion curve with our magazine-style articles
                and trend reports.
              </p>
            </div>
            <div className="grid gap-1">
              <CheckCircleIcon className="h-4 w-4" />
              <span className="font-medium">Secure Transactions</span>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Shop with confidence knowing that your data is protected and
                your information is safe.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Hear from Our Customers
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Don't just take our word for it. Here are some testimonials from
                the stylish shoppers who love what we do:
              </p>
            </div>
            <div className="grid gap-4">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Sophie</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  "Hera Tradition has completely transformed my wardrobe. I
                  always find the most amazing pieces that suit my style, and
                  the personalized recommendations make it so easy to discover
                  new brands. Plus, the customer service is top-notch!"
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Ethan</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  "As a busy professional, I appreciate the convenience of Hera
                  Tradition. The platform is user-friendly, the selection is
                  fantastic, and I can trust that my orders will arrive on time
                  and in perfect condition. It's like having a personal shopper
                  in my pocket!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 md:py-24 lg:py-32">
        <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Ready to Elevate Your Style?
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Embrace the power of fashion with Hera Tradition. Discover the
              perfect pieces to express your individuality and elevate your
              style with just a few clicks.
            </p>
          </div>
          <div
            className="flex flex-col gap-2 min-[400px]:flex-row justify-center"
            ref={menuRef}
            onClick={() => {
              setMenu("new collection");
            }}
            id="navMenu"
          >
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              to="/new collection"
              style={{
                textDecoration: "none",
                background: "black",
                color: "white",
              }}
            >
              Explore Collections
            </Link>
            {menu === "new collection" ? <hr /> : <></>}
          </div>
        </div>
      </div>
    </>
  );
}

function CheckCircleIcon(props) {
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
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
