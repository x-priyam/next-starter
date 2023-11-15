import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();
  return (
    <>
      <div className="mx-auto w-2/5">
        <div className="mt-32 text-center">
          <h1 className="m-8 text-8xl">Hi Mum!</h1>
          <span className="font-thin">and everyone else</span>
        </div>

        <div className="mt-32 text-right">
          <p>From: {session?.user?.name}</p>
        </div>
      </div>
    </>
  );
}
