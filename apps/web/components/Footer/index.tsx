import FooterLinks from "@/components/Footer/FooterLinks";
import SnsLinks from "@/components/Footer/SnsLinks";
import { Text } from "@workspace/ui";
import { ExternalLinkIcon } from "@workspace/ui/components/icons/ui/ExternalLinkIcon";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-12 py-12 px-20">
      <div className="flex justify-between">
        <SnsLinks />
        <FooterLinks />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex-1 flex items-center gap-4">
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
