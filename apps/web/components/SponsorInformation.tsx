import {
  SPONSOR_ACCEPT_FORM_LINK,
  SPONSOR_DOCS_LINK,
} from "@/app/consts/sponsor";
import { SponsorInformation as Information } from "@/components/Sponsor";

function SponsorInformation() {
  return (
    <Information
      docsLink={SPONSOR_DOCS_LINK}
      formLink={SPONSOR_ACCEPT_FORM_LINK}
    />
  );
}

export { SponsorInformation };
