import { signOut } from "@/auth";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <form
        className="p-4"
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/" });
        }}
      >
        <button className="rounded-lg bg-white p-4 text-black">Sign Out</button>
      </form>
      {children}
    </>
  );
}
