import { Link } from "@/components/Link";
import { SPONSORS } from "@/consts/sponsors";
import {
  Badge,
  BskyLogoIcon,
  Button,
  CssIcon,
  ReactIcon,
  TakoyakiIcon,
  VueIcon,
  XLogoIcon,
} from "@workspace/ui";
import { cn } from "@workspace/ui/lib/utils";
import styles from "assets/css/neon.module.css";
import { ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";

type PageProps = {
  params: { sponsorId: string };
};

export function generateStaticParams() {
  return SPONSORS.map((s) => ({ sponsorId: s.id }));
}

export function generateMetadata({ params }: PageProps) {
  const sponsor = SPONSORS.find((s) => s.id === params.sponsorId);
  const title = sponsor ? `${sponsor.name} | スポンサー` : "スポンサー";
  return { title };
}

export default function SponsorDetailPage({ params }: PageProps) {
  const sponsor = SPONSORS.find((s) => s.id === params.sponsorId);
  if (!sponsor) return notFound();

  return (
    <main className="md:flex-1 relative overflow-hidden">
      <div className="relative flex flex-col md:flex-row mx-4 md:mx-auto md:max-w-4xl border-4 border-solid border-neon-light-blue box-shadow-neon-blue shadow-lg rounded-3xl mt-10 mb-20 px-6 py-10 gap-6 bg-black/55 z-10">
        {/* icons */}
        <div className="md:inline hidden absolute left-[-30%] top-[30%] w-[76px] md:w-[182px] animate-float5 rotate-20 -z-10">
          <CssIcon className={styles["neon-icon"]} />
        </div>
        <div className="md:inline hidden absolute left-[-28%] top-[-30%] w-[76px] md:w-[182px] animate-float5 rotate-340 -z-10">
          <VueIcon className={styles["neon-icon"]} />
        </div>
        <div className="md:inline hidden absolute right-[-29.5%] top-[-25%] w-[76px] md:w-[182px] animate-float5 -rotate-350 -z-10">
          <ReactIcon className={styles["neon-icon"]} />
        </div>
        <div className="md:inline hidden absolute right-[-31%] top-[35%] w-[76px] md:w-[182px] animate-float5 -rotate-20 -z-10">
          <TakoyakiIcon className={styles["neon-icon"]} />
        </div>
        <div className="flex justify-center md:justify-start">
          <a
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-sm md:w-[300px] md:h-[200px] flex-shrink-0 bg-white rounded-lg overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={cn(
                "w-full h-full aspect-3/2 object-contain hover:opacity-70 hover:scale-110 duration-200 focus:scale-105 active:scale-95",
                sponsor.imgClassName,
              )}
              src={sponsor.image}
              alt={sponsor.name}
            />
          </a>
        </div>
        <div className="flex flex-col gap-6">
          {(sponsor.basicPlan || sponsor.optionPlan) && (
            <div className="flex flex-wrap gap-3">
              {sponsor.basicPlan && <Badge plan={sponsor.basicPlan} />}
              {sponsor.optionPlan && <Badge plan={sponsor.optionPlan} />}
            </div>
          )}
          <h1 className="text-3xl font-bold text-white">{sponsor.name}</h1>
          <p className="text-white leading-[200%] whitespace-pre-wrap">
            {sponsor.description}
          </p>
          {sponsor.urls?.length ? (
            <div className="flex flex-col gap-2">
              {sponsor.urls.map((u) => (
                <Link
                  key={u.link}
                  href={u.link}
                  className="flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {u.type}
                  <ExternalLink className="inline-block ml-1" size={16} />
                </Link>
              ))}
            </div>
          ) : null}
          {sponsor.accounts?.length ? (
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold text-white mb-2">公式SNS</h2>
              <div className="flex gap-4">
                {sponsor.accounts.map((a) => (
                  <a
                    key={a.link}
                    href={a.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={a.type}
                  >
                    {a.type === "X" ? (
                      <XLogoIcon width={24} height={24} role="img" />
                    ) : (
                      <BskyLogoIcon width={24} height={24} role="img" />
                    )}
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex justify-center mb-20">
        <Button variant="neon-red" asChild>
          <Link href="/" className="w-[200px] text-center">
            トップに戻る
          </Link>
        </Button>
      </div>
    </main>
  );
}
