"use client";

import BeyondPremium from "@/modules/home/BeyondPremium";
import Hero from "@/modules/home/Hero";
import DiscoverTailoredExp from "@/modules/home/DiscoverTailoredExp";
import Separator from "@/modules/home/Separator";
import Destinations from "@/modules/home/Destinations";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <Hero />
        <BeyondPremium />
        <DiscoverTailoredExp />
        <Separator />
        <Destinations />
      </main>
    </QueryClientProvider>
  );
}
