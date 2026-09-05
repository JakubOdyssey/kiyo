import AuthForm from "@/parts/auth/AuthForm";
import { getSafeNextPath } from "@/auth/auth-routing";

export const metadata = {
  title: "Create your Kiyo account",
  description: "Create a Kiyo Cloud account for your hosting and domains.",
  alternates: { canonical: "/signup" },
};

export default async function SignupPage({ searchParams }: { searchParams: Promise<{ next?: string | string[] }> }) {
  const nextPath = getSafeNextPath((await searchParams).next);
  return <main className="main auth-page"><div className="container"><AuthForm mode="signup" nextPath={nextPath} /></div></main>;
}
