import AuthForm from "@/parts/auth/AuthForm";
import { getSafeNextPath } from "@/auth/auth-routing";

export const metadata = {
  title: "Sign in",
  description: "Sign in to your Kiyo Cloud account.",
  alternates: { canonical: "/login" },
};

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ next?: string | string[] }> }) {
  const nextPath = getSafeNextPath((await searchParams).next);
  return <main className="main auth-page"><div className="container"><AuthForm mode="login" nextPath={nextPath} /></div></main>;
}
