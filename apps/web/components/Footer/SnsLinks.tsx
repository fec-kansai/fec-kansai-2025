import { LogoHeader } from "@workspace/ui";
import { BskyLogoIcon } from "@workspace/ui/components/icons/ui/BskyLogoIcon";
import { GitHubLogoIcon } from "@workspace/ui/components/icons/ui/GitHubLogoIcon";
import { MediumLogoIcon } from "@workspace/ui/components/icons/ui/MediumLogoIcon";
import { XLogoIcon } from "@workspace/ui/components/icons/ui/XLogoIcon";

export default function SnsLinks() {
  return (
    <div className="flex flex-col gap-4 flex-1 mx-auto md:mx-0">
      <LogoHeader
        width={240}
        aria-label="フロントエンドカンファレンス関西2025のロゴ"
      />
      <div className="flex gap-4 mx-auto md:mx-0">
        <a
          href="https://x.com/fec_kansai"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Xのロゴ"
        >
          <XLogoIcon width={24} height={24} />
        </a>
        <a
          href="https://bsky.app/profile/fec-kansai.bsky.social"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Blueskyのロゴ"
        >
          <BskyLogoIcon width={24} height={24} />
        </a>
        <a
          href="https://github.com/fec-kansai"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHubのロゴ"
        >
          <GitHubLogoIcon width={24} height={24} />
        </a>
        <a
          href="https://medium.com/fec-kansai"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Mediumのロゴ"
        >
          <MediumLogoIcon width={24} height={24} />
        </a>
      </div>
    </div>
  );
}
