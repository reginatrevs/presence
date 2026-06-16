import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { WorkIndex } from "@/components/WorkIndex";
import { SmallThings } from "@/components/SmallThings";
import { About } from "@/components/About";
import { Colophon } from "@/components/Colophon";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WorkIndex />
        <SmallThings />
        <About />
      </main>
      <Colophon />
    </>
  );
}
