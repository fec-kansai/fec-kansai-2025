import { SPONSOR_DOCS_LINK } from "@/app/consts/test";
import { SponsorInformation as Information } from "@/components/Sponsor";

function SponsorInformation() {
  return <Information docsLink={SPONSOR_DOCS_LINK} />;
}

export { SponsorInformation };
