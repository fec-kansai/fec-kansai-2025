import Header from "@/components/Header";
import MainVisual from "@/components/MainVisual";

export default function Page() {
  return (
    <div className="min-h-svh flex flex-col">
      <Header />
      <main className="flex-1">
        <MainVisual />
      </main>
    </div>
  );
}
