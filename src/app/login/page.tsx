import { signIn } from "@/auth";

export default function Page() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/dashboard/home" });
      }}
    >
      <button>Sign in with Github</button>
    </form>
  );
}
