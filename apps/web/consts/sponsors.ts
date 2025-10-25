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
  urls: { type: string; link: string }[];
  accounts: { type: "X" | "BlueSky"; link: string }[];
  basicPlan?: SponsorBasicPlan;
  optionPlan?: SponsorOptionPlan;
  imgClassName?: string;
};

// TODO: スポンサー情報は一覧に合わせて修正する
export const SPONSORS: readonly Sponsor[] = [
  {
    id: "miidas",
    name: "ミイダス株式会社",
    image: "/sponsors/miidas.webp",
    description:
      "ミイダスは、マッチングをゴールとした従来の人材サービスとは一線を画し、データとテクノロジーを駆使して、人と仕事、人と組織のフィッティングを科学しています。 ミイダスが提唱する客観的・数値的な評価に基づいた採用「アセスメントリクルーティング」が日本の採用・転職の常識を変え、適材適所を見い出します。",
    url: "https://careers.miidas.co.jp/tech/",
    urls: [{ type: "Tech Blog", link: "https://note.com/miidas_tech" }],
    accounts: [{ type: "X", link: "https://x.com/miidas_tech" }],
    basicPlan: SPONSOR_BASIC_PLANS.VENUE,
  },
  {
    id: "line-yahoo",
    name: "LINEヤフー株式会社",
    image: "/sponsors/line-yahoo.png",
    description:
      "LINEヤフー株式会社は『「WOW」なライフプラットフォームを創り、日常に「！」を届ける。』をミッションに掲げ、検索・ポータル、eコマース、メッセンジャー、広告など、多様な領域において事業を展開しています。",
    url: "https://www.lycorp.co.jp/ja/technology-design/",
    urls: [
      { type: "Tech Blog", link: "https://techblog.lycorp.co.jp/ja" },
      { type: "採用情報", link: "https://www.lycorp.co.jp/ja/recruit/" },
    ],
    accounts: [{ type: "X", link: "https://x.com/lycorptech_jp" }],
    basicPlan: SPONSOR_BASIC_PLANS.OSAKA_MAIDO,
  },
  {
    id: "kinto-technologies",
    name: "KINTOテクノロジーズ株式会社",
    image: "/sponsors/KINTOtechnologies.svg",
    description:
      "KINTOテクノロジーズは、トヨタグループ各社が展開するモビリティサービスやビジネスをテクノロジーで支援するために、2021年4月に創設されたテックカンパニーです。\nトヨタグループ内でも唯一の「BtoC・DtoC領域に特化した内製開発組織」であり、世界30ヵ国で展開するグローバルモビリティブランド『KINTO』関連プロダクトや、マルチモーダルモビリティサービス『my route』など、クルマに乗る「人」に焦点を当てた新しいサービスの開発・運用を行っています。\nまた、弊社はモダンな技術を積極的に採用する文化があります。各種AWSサービスを活用しており、良質なUI・UXを実現するために新しいWeb技術も取り入れています。エンジニアがボトムアップで特定技術の利用を提案し、採用された事例も数多くあります。\n大阪拠点となるOsaka Tech Labは、2025年6月、大阪駅直結のノースゲートビルディングに移転しました。\nエンジニア、デザイナー、PdMなど多様な職種の仲間が集まり、関西発モビリティプロダクトを企画・開発しています。\nぜひ、一緒に関西からモビリティプロダクト開発を盛り上げて行きましょう！",
    url: "https://www.kinto-technologies.com/",
    urls: [{ type: "Tech Blog", link: "https://blog.kinto-technologies.com/" }],
    accounts: [{ type: "X", link: "https://x.com/KintoTech_Dev" }],
    basicPlan: SPONSOR_BASIC_PLANS.OSAKA_MAIDO,
    imgClassName: "p-4",
  },
  {
    id: "chot-inc",
    name: "ちょっと株式会社",
    image: "/sponsors/chot-inc.png",
    description:
      "ちょっと株式会社は、Next.jsやTypeScriptを中心としたモダン技術を活用し、スピーディかつ高品質なWebサイト・サービスの開発支援を行うフロントエンド特化の技術者集団です。大規模サイトのリニューアルやサーバーレスを活用したWebアプリ・モバイルアプリ開発まで幅広く対応し、技術選定からデザイン、運用保守まで一気通貫で支援します。UXに優れた「魅力的品質」を追求し、アクセシビリティやパフォーマンスの最適化にも注力することで、あらゆるデバイスで最高のユーザー体験を提供します。さらに独自開発のCMSプラットフォーム「Orizm」により、従来のCMSでは難しかったフルカスタマイズをスピーディかつ低コストに実現。業界特化のCMS開発や運用改善など、幅広いユースケースに対応可能です。お客様に寄り添い、技術的なパートナーとして課題解決とビジネス成長に貢献します。",
    url: "https://chot-inc.com/",
    urls: [
      { type: "Tech Blog", link: "https://zenn.dev/p/chot" },
      { type: "採用ページ", link: "https://recruit.chot-inc.com/" },
    ],
    accounts: [{ type: "X", link: "https://x.com/chot_inc" }],
    basicPlan: SPONSOR_BASIC_PLANS.OSAKA_MAIDO,
    imgClassName: "p-4",
  },
  {
    id: "kaonavi",
    name: "株式会社カオナビ",
    image: "/sponsors/kaonavi.png",
    description:
      "私たちカオナビは「'はたらく'にテクノロジーを実装し、個の力から社会の仕様を変える」をPurposeに掲げ、タレントマネジメント市場No.1（導入社数4,000社超）の『カオナビ』を開発・提供しています。\n性別、学歴、肩書きといったラベルにとらわれず、「個」の力が開かれる社会の実現を目指し、人材データベースを核とした人事DXからタレントマネジメントまで幅広いソリューションを展開。企業の人事業務を革新するタレントマネジメントシステムとして、多くの企業様にご活用いただいています。\nフロントエンド開発ではReact・TypeScriptを採用し、ユーザビリティを重視したUI/UX設計により、様々な利用者が直感的に操作できるシステムを追求。テクノロジーの力で働く人すべてが自分らしく活躍できる未来を創造します。\nFace you, Face next. 向き合おう、すべての人が先へ進めるように。",
    url: "https://corp.kaonavi.jp/",
    urls: [
      {
        type: "エンジニア採用ページ",
        link: "https://corp.kaonavi.jp/recruit/recruitment/",
      },
      { type: "技術広報", link: "https://note.com/kaonavi_devs" },
    ],
    accounts: [{ type: "X", link: "https://x.com/kaonavi_jp" }],
    basicPlan: SPONSOR_BASIC_PLANS.OSAKA_MAIDO,
  },
  {
    id: "kakehashi",
    name: "株式会社カケハシ",
    image: "/sponsors/kakehashi.png",
    description:
      "株式会社カケハシは日本の医療システムの再構築を目指すヘルステックスタートアップ企業です。テクノロジーを駆使し、患者さんにとってより良い医療を医療現場にとって持続可能な形で実現します。\n薬局体験アシスタント「Musubi」のほか、複数プロダクトを開発・提供し、国内の薬局の1万店舗超をカバー。服薬期間中の患者フォローによる治療効果最大化や医薬品の市中在庫可視化・安定供給などをサポートします。薬局や医療機関をはじめとしたステークホルダーとともに、より良い医療を実現するプラットフォームを構築していきます。",
    url: "https://hrmos.co/pages/kakehashi",
    urls: [
      {
        type: "KAKEHASHI Tech Blog",
        link: "https://kakehashi-dev.hatenablog.com/",
      },
      { type: "採用ページ", link: "https://recruit.kakehashi.life/" },
      { type: "公式ページ", link: "https://www.kakehashi.life/" },
    ],
    accounts: [{ type: "X", link: "https://x.com/kakehashi_dev" }],

    basicPlan: SPONSOR_BASIC_PLANS.OSAKA_MAIDO,
    optionPlan: SPONSOR_OPTION_PLANS.NAME_CARD,
  },
  {
    id: "knowledge-work",
    name: "株式会社ナレッジワーク",
    image: "/sponsors/KnowledgeWork.png",
    description:
      "ナレッジワークは「LIFE WITH ENABLEMENT できる喜びが巡る日々を届ける」をミッションに掲げ、一人ひとりのイネーブルメント（成果創出や能力向上）の実現を目指すスタートアップです。営業力を強化するセールスイネーブルメントAI「ナレッジワーク」を開発・提供し、営業担当の方々にとって欠かせない存在となることを目指しています。エンジニア組織は専門性豊かなメンバーで構成され、チーム横断で知見を共有しながら新しい技術的挑戦に取り組んでいます。私たちのプロダクトは、BtoCのように直感的で心地よいUI/UXを備え、現場の営業活動を力強くサポートします。顧客の声をスピーディかつ透明性をもってプロダクトに反映する開発体制や、再現性を重視したドキュメンテーション文化も私たちの強みです。また、AIとの協働を前提とした開発スタイルの標準化を積極的に推進しています。技術と文化の両面で挑戦を続けるナレッジワークと、ぜひ会場で未来のフロントエンドについて語りましょう！",
    url: "https://knowledgework.com/",
    urls: [
      { type: "Zenn", link: "https://zenn.dev/p/knowledgework" },
      { type: "note", link: "https://note.com/knowledgework" },
    ],
    accounts: [{ type: "X", link: "https://x.com/kworkdev" }],
    basicPlan: SPONSOR_BASIC_PLANS.OSAKA_MAIDO,
    optionPlan: SPONSOR_OPTION_PLANS.NAME_RIGHTS,
  },
  {
    id: "joint-crew",
    name: "株式会社JOINT CREW",
    image: "/sponsors/jointcrew.png",
    description:
      "私たちJOINT CREWは、Web,クラウド技術を通じて社会課題の解決に取り組むIT企業です。\n\n育児課題に向き合うBabyTech事業、クライアントへのDX支援やWebシステム開発、クラウド構築など、あらゆる取り組みにおいて人に寄り添う姿勢を大切にしながら、リモートワークを基軸としたエンジニアリングを行っています。\n\n「日本の子供たちを笑顔にする」という企業ビジョンの実現に向け、社員が心地よく働ける環境づくりにも力を入れています。\n\n今、そして未来を生きる子供たちのために、私たちはWebとクラウド技術を用いてできることを、一つひとつ丁寧に形にしていきます。",
    url: "http://www.jointcrew.co.jp/",
    urls: [
      {
        type: "Wantedly",
        link: "https://www.wantedly.com/companies/jointcrew",
      },
    ],
    accounts: [{ type: "X", link: "https://x.com/JOINTCREW_inc" }],
    basicPlan: SPONSOR_BASIC_PLANS.MINI_TAKOYAKI,
  },
  {
    id: "cyber-agent",
    name: "株式会社サイバーエージェント",
    image: "/sponsors/CyberAgent.png",
    description:
      "サイバーエージェントは「21世紀を代表する会社を創る」をビジョンに掲げ、メディア＆IP事業事業、インターネット広告事業、ゲーム事業など、ITを主軸にしたビジネスを多角的に展開しています。",
    url: "https://www.cyberagent.co.jp/",
    urls: [
      {
        type: "Developers Blog",
        link: "https://developers.cyberagent.co.jp/blog/",
      },
      {
        type: "採用ページ",
        link: "https://www.cyberagent.co.jp/careers/students/tech/",
      },
    ],
    accounts: [{ type: "X", link: "https://x.com/ca_developers" }],
    optionPlan: SPONSOR_OPTION_PLANS.STUDENT,
    imgClassName: "p-2",
  },
] as const;
