import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { WorkIndex } from "@/components/WorkIndex";
import { SmallThings } from "@/components/SmallThings";
import { About } from "@/components/About";
import { Timeline } from "@/components/Timeline";
import { Colophon } from "@/components/Colophon";
import { ScrollIndicator } from "@/components/ScrollIndicator";

export default function Home() {
  return (
    <>
      <Nav />
      <ScrollIndicator />
      <main>
        <Hero />
        <WorkIndex />
        <SmallThings />
        <About />
        <Timeline />
      </main>
      <Colophon />
    </>
  );
}
