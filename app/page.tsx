import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { SetupGuide } from "@/components/SetupGuide";
import { InstallGuide } from "@/components/InstallGuide";
import { SecurityBanner } from "@/components/SecurityBanner";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <SetupGuide />
        <InstallGuide />
        <SecurityBanner />
      </main>
      <Footer />
    </>
  );
}
