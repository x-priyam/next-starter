import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();
  return <pre>{JSON.stringify(session?.user)}</pre>;
}
