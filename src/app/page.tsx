import Hero from "@/components/Hero";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
