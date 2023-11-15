import { signIn } from "@/auth";

export default function Page() {
  return (
    <form
      className="p-4"
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/dashboard/home" });
      }}
    >
      <button className="rounded-lg bg-white p-4 text-black">
        Sign in with Github
      </button>
    </form>
  );
}
