import { signOut, auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const userName = session.user.name;
  const userImage = session.user.image ? session.user.image : "";

  return (
    <>
      {/* <nav className="grid w-screen min-w-full grid-flow-row items-center bg-gray-600 p-2 md:h-16 md:grid-flow-col">
        <div>
          <span className="text-xl font-extrabold tracking-widest">
            Hi {userName}
          </span>
          <Link
            href="/dashboard/home"
            className="mx-4 transition hover:text-slate-200"
          >
            Home
          </Link>
          <Link
            href="/dashboard/providers"
            className="mx-4 transition hover:text-slate-200"
          >
            Providers
          </Link>
        </div>
        <div className="grid w-full grid-flow-col items-center justify-end">
          <Image
            className="mr-4 rounded-full"
            src={userImage}
            alt={`${userName}'s Image`}
            width="50"
            height="50"
          ></Image>
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/" });
            }}
          >
            <button className="rounded-lg bg-white p-2 text-black transition hover:bg-gray-300">
              Sign Out
            </button>
          </form>
        </div>
      </nav> */}

      <nav className="grid w-screen grid-flow-row grid-cols-2 grid-rows-1 bg-gray-600 p-2 md:grid-flow-col md:grid-cols-[3fr_2fr_2fr_15fr]">
        <span className="col-start-1 row-start-1 flex items-center text-xl font-extrabold tracking-widest">
          Hi {userName}
        </span>
        <div className="col-start-[-2] row-start-1 grid grid-flow-col justify-end">
          <Image
            src={userImage}
            alt={`${userName}'s Image`}
            className="mr-4 max-w-max rounded-full"
            width={50}
            height={50}
          />
          <form className="flex items-center justify-center">
            <button
              formAction={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
              }}
              className="max-w-max rounded-lg bg-white p-2 text-black transition hover:bg-gray-300"
            >
              Sign Out
            </button>
          </form>
        </div>

        {/* links */}
        <Link
          href={`/dashboard/home`}
          className="col-span-2 m-2 flex items-center md:col-span-1"
        >
          Home
        </Link>
        <Link
          href={`/dashboard/providers`}
          className="col-span-2 m-2 flex items-center md:col-span-1"
        >
          Providers
        </Link>
      </nav>

      <main className="mt-8">{children}</main>
    </>
  );
}
