import { Link } from "@/components/Link";
import { Badge, Button } from "@workspace/ui";
import { BskyLogoIcon } from "@workspace/ui/components/icons/ui/BskyLogoIcon";
import { XLogoIcon } from "@workspace/ui/components/icons/ui/XLogoIcon";
import { ExternalLink } from "lucide-react";

export type SponsorDetailPageProps = {
  image?: string;
  name?: string;
  description?: string;
  url?: string;
};

export default function SponsorDetailPage(props: SponsorDetailPageProps) {
  return (
    <main className="md:flex-1 relative overflow-hidden">
      <div className="flex flex-col md:flex-row mx-4 md:mx-auto md:max-w-4xl border-4 border-solid border-neon-light-blue box-shadow-neon-blue shadow-lg rounded-3xl mt-10 mb-20 px-6 py-10 gap-6 bg-black/55 z-10">
        <a
          href="https://careers.miidas.co.jp/tech/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-[300px] h-[200px] flex-shrink-0"
        >
          <img
            className="w-full h-full object-cover rounded-md"
            src="/sponsors/miidas.webp"
            alt="ミイダス"
          />
        </a>
        <div className="flex flex-col gap-6">
          <Badge />
          <h1 className="text-3xl font-bold text-white">ミイダス株式会社</h1>
          <p className="text-white leading-[200%]">
            ミイダスは、あなたの市場価値を無料で診断できるサービスです。登録者数は200万人を超え、多くの企業がミイダスを通じて優秀な人材を採用しています。
          </p>
          <div className="flex flex-col">
            <Link
              href="https://careers.miidas.co.jp/tech/"
              className="flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tech Blog
              <ExternalLink className="inline-block ml-1" size={16} />
            </Link>
            <Link
              href="https://careers.miidas.co.jp/tech/"
              className="flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              採用サイト
              <ExternalLink className="inline-block ml-1" size={16} />
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-white">公式SNS</h2>
            <div className="flex gap-4">
              <a
                href="https://x.com/fec_kansai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Xのロゴ"
              >
                <XLogoIcon width={24} height={24} role="img" />
              </a>
              <a
                href="https://bsky.app/profile/fec-kansai.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Blueskyのロゴ"
              >
                <BskyLogoIcon width={24} height={24} role="img" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Button variant="neon-red">
          <a href="/" className="w-[200px]">
            トップに戻る
          </a>
        </Button>
      </div>
    </main>
  );
}
