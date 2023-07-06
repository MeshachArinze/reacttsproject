"use client"
// import { cookies } from "next/headers";

import Dashboard from '@/components/dashboard';
import Loader from '@/components/loader';
import { useSession } from 'next-auth/react';
import { useRouter } from "next/navigation";
import { RecoilRoot } from "recoil";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page",
};


export default function Home() {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
  });

  // const cookieStore = cookies();

  // if (cookieStore) {
  //   return cookieStore.getAll().map((cookie) => (
  //     <div key={cookie.name}>
  //       <p>Name: {cookie.name}</p>
  //       <p>Value: {cookie.value}</p>
  //     </div>
  //   ));
  // }

  if (status === "loading") {
    return <Loader />;
  }
  return (
    <RecoilRoot>
      <Dashboard />
    </RecoilRoot>
  );
}
