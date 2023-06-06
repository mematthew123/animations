import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto mt-10 px-6 sm:px-8 lg:px-10 xl:px-20 2xl:px-40">
      <div className="space-y-8 text-center">
        <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900">
          Welcome to the React Animation Playground!
        </h1>
        <h2 className="text-2xl font-semibold leading-normal tracking-tight text-gray-700">
          This is a collection of animations that I have created using React,
          GSAP, and Framer Motion.
        </h2>
        <div className="space-y-4">
          <Link href="/cards" passHref>
            <p className="inline-block text-2xl font-semibold text-blue-600 hover:text-blue-500">
              Click here to see the cards
            </p>
          </Link>
          <br />
          <Link href="/buttons" passHref>
            <p className="inline-block text-2xl font-semibold text-blue-600 hover:text-blue-500">
              Click here to see the button animations
            </p>
          </Link>
          <br />
          <Link href="/clock" passHref>
            <p className="inline-block text-2xl font-semibold text-blue-600 hover:text-blue-500">
              Click here to see the clocks
            </p>
          </Link>
          <br />
          <Link href="/notifications" passHref>
            <p className="inline-block text-2xl font-semibold text-blue-600 hover:text-blue-500">
              Click here to see the notifications
            </p>
          </Link>

          <br />
        </div>
      </div>
    </div>
  );
}
