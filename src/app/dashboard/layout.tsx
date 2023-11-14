import { signOut } from "@/auth";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/" });
        }}
      >
        <button>Sign Out</button>
      </form>
      {children}
    </>
  );
}
