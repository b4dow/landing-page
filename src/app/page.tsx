import { CoverParticles, Introduction, TransitionPage } from "@/components";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div
        className="flex min-h-[100vh] h-full 
        bg-no-repeat "
      >
        <CoverParticles />
        <Introduction />
      </div>
    </main>
  );
}
