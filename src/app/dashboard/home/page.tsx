import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="mx-auto w-4/5 md:w-2/5">
        <div className="mt-32 text-center">
          <h1 className="m-8 text-8xl">Hi Mum!</h1>
          <span className="font-thin">and everyone else</span>
        </div>

        <div className="mt-32 text-right">
          <p>
            From:{" "}
            <Link
              href="https://github.com/x-priyam"
              target="_blank"
              className="italic underline"
            >
              @x-priyam
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
