import FooterLinks from "@/components/Footer/FooterLinks";
import SnsLinks from "@/components/Footer/SnsLinks";
import { Text } from "@workspace/ui";
import { ExternalLinkIcon } from "@workspace/ui/components/icons/ui/ExternalLinkIcon";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-14 md:gap-12 py-12 px-20">
      <div className="flex flex-col gap-14 md:flex-row md:gap-0 justify-between">
        <SnsLinks />
        <FooterLinks />
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:gap-0 justify-between">
        <div className="flex-1 flex items-center gap-4 mx-auto md:mx-0">
          <Text className="font-bold text-sm">運営団体</Text>
          <a
            href="https://k3jp.org/"
            className="text-[#C084FC] hover:text-[#A855F7] underline transition-duration-300 flex items-center gap-1 text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            一般社団法人関西開発者会議
            <ExternalLinkIcon
              aria-label="別タブで開きます"
              width={20}
              height={20}
            />
          </a>
        </div>
        <div className="text-[#6B7280] text-sm">
          © 2025 フロントエンドカンファレンス関西実行委員会. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
