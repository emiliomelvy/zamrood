import BeyondPremium from "@/modules/home/BeyondPremium";
import Hero from "@/modules/home/Hero";
import DiscoverTailoredExp from "@/modules/home/DiscoverTailoredExp";
import Separator from "@/modules/home/Separator";

export default function Home() {
  return (
    <main>
      <Hero />
      <BeyondPremium />
      <DiscoverTailoredExp />
      <Separator />
    </main>
  );
}
