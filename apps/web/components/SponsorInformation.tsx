import { SPONSOR_DOCS_LINK } from "@/app/consts/test";
import { SponsorInformation as Information } from "@/components/s_ponsor";

function SponsorInformation() {
  return <Information docsLink={SPONSOR_DOCS_LINK} />;
}

export { SponsorInformation };
