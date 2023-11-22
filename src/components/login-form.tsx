import { authConfig, signIn } from "@/auth";
import { Button } from "@/components/ui/button";

export default function LoginForm({ className }: { className?: string }) {
  const authProviders = authConfig.providers;

  return (
    <div
      className={`mx-auto grid w-4/5 justify-items-center rounded-lg bg-white bg-opacity-60 p-8 md:w-1/3 ${className}`}
    >
      <h1 className="mb-8 text-center text-4xl font-extralight text-black">
        Choose your Provider
      </h1>
      <form className="w-4/5 p-4">
        {authProviders.map((provider) => (
          <Button
            variant={`default`}
            key={provider.name}
            formAction={async () => {
              "use server";
              // @ts-expect-error: id exists but TS thinks it doesn't. No idea why :)
              await signIn(provider.id, { redirect: true });
            }}
            className="my-2 w-full p-8 text-lg"
          >
            Sign in with {provider.name}
          </Button>
        ))}
      </form>
    </div>
  );
}
