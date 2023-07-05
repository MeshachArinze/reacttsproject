import Myapp from '@/app/pages/app'
import Dashboard from './pages/dashboard';
import Loader from './pages/loader';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { RecoilRoot } from "recoil";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page",
};


export default function Home() {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth/signin");
    },
  });

  if (status === "loading") {
    return <Loader />;
  }
  return (
    <RecoilRoot>
      <Dashboard />
    </RecoilRoot>
  );
}
