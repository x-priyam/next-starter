import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center text-center align-middle">
      <h1 className="mb-8 text-6xl font-extrabold leading-tight">
        Next Starter Kit
      </h1>
      <span className="mb-4 text-lg font-thin">Made by Priyam</span>
      <div className="m-4 flex justify-center align-middle">
        <Button
          asChild
          variant={`link`}
        >
          <Link href={`/login`}>Try Now</Link>
        </Button>
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
