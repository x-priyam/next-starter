import { signIn, authConfig } from "@/auth";

export default function Page() {
  return (
    <main className="mx-auto grid h-screen w-1/3 items-center justify-items-stretch">
      <div className="grid w-full justify-items-center rounded-lg bg-white bg-opacity-60 p-8">
        <h1 className="mb-8 text-4xl font-extralight text-black">
          Choose your Provider
        </h1>
        <form className="w-4/5 p-4">
          {authConfig.providers.map((provider) => (
            <button
              key={provider.name}
              formAction={async () => {
                "use server";
                // @ts-expect-error: id exists but TS thinks it does not
                await signIn(provider.id, { redirectTo: "/dashboard/home" });
              }}
              className="my-2 w-full rounded-lg bg-white p-4 text-black"
            >
              Sign in with <span>{provider.name}</span>
            </button>
          ))}
        </form>
      </div>
    </main>
  );
}
