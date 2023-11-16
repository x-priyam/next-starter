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
      <nav className="grid h-16 w-screen min-w-full grid-flow-col items-center bg-gray-600 p-2">
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
      </nav>

      <main className="mt-4">{children}</main>
    </>
  );
}
