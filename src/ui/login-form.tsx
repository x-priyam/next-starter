import { authConfig, signIn } from "@/auth";

export default function LoginForm() {
  return (
    <div className="mx-auto grid w-4/5 justify-items-center rounded-lg bg-white bg-opacity-60 p-8 md:w-1/3">
      <h1 className="mb-8 text-center text-4xl font-extralight text-black">
        Choose your Provider
      </h1>
      <form className="w-4/5 p-4">
        {authConfig.providers.map((provider) => (
          <button
            key={provider.name}
            formAction={async () => {
              "use server";
              // @ts-expect-error: id exists on provider but TS thinks it doesn't for some reason
              await signIn(provider.id);
            }}
            className="my-2 w-full rounded-lg bg-white p-4 text-black"
          >
            Sign in with <span>{provider.name}</span>
          </button>
        ))}
      </form>
    </div>
  );
}
