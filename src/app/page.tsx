"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BeyondPremium from "@/modules/home/BeyondPremium";
import Hero from "@/modules/home/Hero";
import DiscoverTailoredExp from "@/modules/home/DiscoverTailoredExp";
import Separator from "@/modules/home/Separator";
import Destinations from "@/modules/home/Destinations";
import ExploreMore from "@/modules/home/ExploreMore";
import LuxuryFootages from "@/modules/home/LuxuryFootages";
import Website from "@/modules/home/Website";
import Articles from "@/modules/home/Articles";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Hero />
        <BeyondPremium />
        <DiscoverTailoredExp />
        <Separator />
        <Destinations />
        <ExploreMore />
        <LuxuryFootages />
        <Website />
        <Articles />
      </>
    </QueryClientProvider>
  );
}
