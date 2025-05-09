import { SponsorInformation as Information } from "@workspace/ui/components/sponsor";

function SponsorInformation() {
  const SPONSOR_DOCS_LINK =
    "https://docs.google.com/presentation/d/1R7_pY5LdboES_HFNLobQLq44iw1A5F7TMzJ4OLyWCRo/edit?usp=sharing";

  return <Information docsLink={SPONSOR_DOCS_LINK} />;
}

export { SponsorInformation };
