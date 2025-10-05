export const SPONSOR_BASIC_PLANS = {
  VENUE: "venue",
  OSAKA_MAIDO: "osaka-maido",
  MINI_TAKOYAKI: "mini-takoyaki",
} as const;

export const SPONSOR_OPTION_PLANS = {
  STUDENT: "student",
  NAME_CARD: "name-card",
  NAME_RIGHTS: "name-rights",
} as const;

export type SponsorBasicPlan =
  (typeof SPONSOR_BASIC_PLANS)[keyof typeof SPONSOR_BASIC_PLANS];
export type SponsorOptionPlan =
  (typeof SPONSOR_OPTION_PLANS)[keyof typeof SPONSOR_OPTION_PLANS];

export type Sponsor = {
  id: string;
  name: string;
  image: string;
  description: string;
  url: string;
  basicPlan?: SponsorBasicPlan;
  optionPlan?: SponsorOptionPlan;
};

// TODO: スポンサー情報は一覧に合わせて修正する
export const SPONSORS: readonly Sponsor[] = [
  {
    id: "",
    name: "ミイダス株式会社",
    image: "",
    description: "",
    url: "https://miidas.co.jp/",
    basicPlan: SPONSOR_BASIC_PLANS.VENUE,
  },
  {
    id: "line-yahoo",
    name: "LINEヤフー株式会社",
    image: "",
    description: "",
    url: "https://about.yahoo.co.jp/",
    basicPlan: SPONSOR_BASIC_PLANS.OSAKA_MAIDO,
  },
  {
    id: "kinto-technologies",
    name: "KINTOテクノロジーズ株式会社",
    image: "",
    description: "",
    url: "https://about.kinto-technologies.co.jp/",
    basicPlan: SPONSOR_BASIC_PLANS.OSAKA_MAIDO,
  },
  {
    id: "chot-inc",
    name: "ちょっと株式会社",
    image: "",
    description: "",
    url: "https://chot-inc.co.jp/",
    basicPlan: SPONSOR_BASIC_PLANS.OSAKA_MAIDO,
  },
  {
    id: "",
    name: "株式会社カオナシ",
    image: "",
    description: "",
    url: "https://kaonashi.co.jp/",
    basicPlan: SPONSOR_BASIC_PLANS.OSAKA_MAIDO,
  },
  {
    id: "kakehashi",
    name: "株式会社カケハシ",
    image: "",
    description: "",
    url: "https://kakehashi.co.jp/",
    basicPlan: SPONSOR_BASIC_PLANS.OSAKA_MAIDO,
    optionPlan: SPONSOR_OPTION_PLANS.NAME_RIGHTS,
  },
  {
    id: "knowledge-work",
    name: "株式会社ナレッジワーク",
    image: "",
    description: "",
    url: "https://knowledge-work.jp/",
    basicPlan: SPONSOR_BASIC_PLANS.OSAKA_MAIDO,
    optionPlan: SPONSOR_OPTION_PLANS.NAME_RIGHTS,
  },
  {
    id: "joint-crew",
    name: "株式会社JOINT CREW",
    image: "",
    description: "",
    url: "https://joint-crew.co.jp/",
    basicPlan: SPONSOR_BASIC_PLANS.MINI_TAKOYAKI,
  },
  {
    id: "cyber-agent",
    name: "株式会社サイバーエージェント",
    image: "",
    description: "",
    url: "https://www.cyberagent.co.jp/",
    optionPlan: SPONSOR_OPTION_PLANS.STUDENT,
  },
] as const;
