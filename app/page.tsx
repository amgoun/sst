import ButtonCustomerPortal from "@/components/ButtonCustomerPortal";
import Pricing from "@/components/pricing";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="">
      <nav className=" bg-stone-500 flex justify-between items-center py-2 mx-4">
        <UserButton />
        <Link href="/dashboard"> dashboard</Link>
      </nav>
      <div>
        <header className="p-4 flex justify-end max-w-7xl mx-auto">
          <ButtonCustomerPortal />
        </header>

        <main className="bg-base-200 min-h-screen">
          <Pricing />
        </main>
      </div>
    </div>
  );
}
