import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col justify-center text-center align-middle">
      <h1 className="text-6xl font-extrabold leading-loose">
        Next Starter Kit
      </h1>
      <span className="text-lg font-thin">Made by Priyam</span>
      <div className="m-4 flex justify-center align-middle">
        <Link
          className="block rounded-lg bg-white p-4 text-black no-underline"
          href="/login"
        >
          Try Now
        </Link>
      </div>
      <span>
        Check out the source code @{" "}
        <Link
          href="https://github.com/x-priyam/next-starter"
          target="_blank"
          className="italic underline"
        >
          Github
        </Link>
      </span>
    </main>
  );
}
