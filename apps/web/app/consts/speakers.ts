export interface Track {
  startTime: string;
  endTime: string;
  title: string;
  speaker: string;
  description: string;
  url: string;
  type?: "session" | "lt";
}

export const tracks = {
  trackA: "ナレッジワークルーム",
  trackB: "Ignite Kansaiルーム",
};

export const trackA: Track[] = [
  {
    startTime: "10:30",
    endTime: "10:50",
    title: "オープニング",
    speaker: "jiyuujin & is_ryo",
    description:
      "フロントエンドカンファレンス関西2025のオープニングセッションです。",
    url: "",
  },
  {
    startTime: "10:50",
    endTime: "11:30",
    title: "基調講演",
    speaker: "Sakito",
    description: "基調講演の内容について。",
    url: "/#keynote",
  },
  {
    startTime: "11:40",
    endTime: "12:10",
    title: "デザインシステムドキュメントの技術選定2025",
    speaker: "takanorip",
    description: "",
    url: "https://fortee.jp/fec-kansai-2025/proposal/d1231aed-dcea-417c-8ed5-e2b1240b7730",
    type: "session",
  },
  {
    startTime: "12:10",
    endTime: "13:25",
    title: "ランチ",
    speaker: "",
    description: "",
    url: "",
    type: "session",
  },
  {
    startTime: "13:25",
    endTime: "13:55",
    title: "なぜ僕たちのNext.js導入はうまくいかなかったのか",
    speaker: "奥山 聡",
    description: "",
    url: "https://fortee.jp/fec-kansai-2025/proposal/9ba2b9bc-c30a-4468-8e1a-e46bbcc165b3",
    type: "session",
  },
  {
    startTime: "14:05",
    endTime: "14:35",
    title:
      "「え？！それ今ではHTMLだけでできるの！？」驚きの進化を遂げたモダンHTML",
    speaker: "西 悠太",
    description: "",
    url: "https://fortee.jp/fec-kansai-2025/proposal/b02b6eba-fab9-40f8-bffc-8889bf354d9c",
    type: "session",
  },
  {
    startTime: "14:55",
    endTime: "15:25",
    title: "堅牢なフロントエンドテスト基盤を構築するために行った取り組み",
    speaker: "Shogo Fukami",
    description: "",
    url: "https://fortee.jp/fec-kansai-2025/proposal/2519d69a-1694-4d58-88f2-5287d61fa522",
    type: "session",
  },
  {
    startTime: "15:35",
    endTime: "16:05",
    title: "心地よいアニメーションのつくりかた",
    speaker: "wattanx",
    description: "",
    url: "https://fortee.jp/fec-kansai-2025/proposal/51c129e0-4107-42e8-b9bc-f70c6028da15",
    type: "session",
  },
  {
    startTime: "16:15",
    endTime: "16:20",
    title:
      "レイアウト構築の基本を理解しよう ~ 横スクロールが起きない！？ Flex脱却編 ~",
    speaker: "澤 佳祐",
    description: "",
    url: "https://fortee.jp/fec-kansai-2025/proposal/e872735f-ffe2-4c53-8bc8-a9bcbe0c1d98",
    type: "lt",
  },
  {
    startTime: "16:20",
    endTime: "16:25",
    title:
      "その複雑な型、いつ使うんですか？OSSから学ぶ、高度な型定義の活用方法",
    speaker: "Shimmy",
    description: "",
    url: "https://fortee.jp/fec-kansai-2025/proposal/0a38a4c9-06f5-4559-afe4-e72b775c553d",
    type: "lt",
  },
  {
    startTime: "16:25",
    endTime: "16:30",
    title: "useEffectってなんで非推奨みたいなこと言われてるの？",
    speaker: "マグロ",
    description: "",
    url: "https://fortee.jp/fec-kansai-2025/proposal/46c9c3d3-3129-4f1e-bc49-3d035e58c45e",
    type: "lt",
  },
  {
    startTime: "16:30",
    endTime: "16:35",
    title:
      "ウェブ上の学術論文 — PDFの代替になれるか / アクセシビリティーの観点 / 先進的取組の事例",
    speaker: "tarek",
    description: "",
    url: "https://fortee.jp/fec-kansai-2025/proposal/341b72d6-7061-4b76-b721-ada14d47705f",
    type: "lt",
  },
  {
    startTime: "16:35",
    endTime: "16:40",
    title:
      "BCD Designに学ぶ、package by featureのための一貫したfeatureの切り方",
    speaker: "airRnot",
    description: "",
    url: "https://fortee.jp/fec-kansai-2025/proposal/52cc5845-e109-49bd-ac87-cfbd466d7763",
    type: "lt",
  },
  {
    startTime: "16:40",
    endTime: "16:45",
    title: "TypeScriptがブラウザで実行されるまでの流れを5分で伝えたい",
    speaker: "ジン",
    description: "",
    url: "https://fortee.jp/fec-kansai-2025/proposal/26aad93c-e778-4c4e-a0ca-906b6600bcdb",
    type: "lt",
  },
  {
    startTime: "16:45",
    endTime: "16:50",
    title:
      "Matter.jsでつくる「ぷにゃっ」と動く物理演算Webエフェクトとパフォーマンス改善",
    speaker: "てつを。",
    description: "",
    url: "https://fortee.jp/fec-kansai-2025/proposal/3168307a-c275-411e-9db3-50da79fe267d",
    type: "lt",
  },
  {
    startTime: "16:50",
    endTime: "16:55",
    title: "ソースマップはどのように元コードへの参照を保持するか",
    speaker: "yuta-ike",
    description: "",
    url: "https://fortee.jp/fec-kansai-2025/proposal/7af4912e-deb3-41ac-92eb-435f5b5ea4b6",
    type: "lt",
  },
  {
    startTime: "16:55",
    endTime: "17:15",
    title: "クロージング",
    speaker: "jiyuujin & is_ryo",
    description:
      "フロントエンドカンファレンス関西2025のクロージングセッションです。",
    url: "",
  },
  {
    startTime: "17:15",
    endTime: "18:00",
    title: "転換",
    speaker: "",
    description: "",
    url: "",
  },
  {
    startTime: "18:00",
    endTime: "20:00",
    title: "懇親会",
    speaker: "",
    description: "懇親会付まいどチケットをご購入の方が対象です。",
    url: "",
  },
];

export const trackB: Track[] = [
  {
    startTime: "11:40",
    endTime: "12:10",
    title: "俺流レスポンシブコーディング 2025",
    speaker: "TAK",
    description: "",
    url: "https://fortee.jp/fec-kansai-2025/proposal/0845f5b7-ee5c-4e94-a2c4-7c4f3716d4aa",
    type: "session",
  },
  {
    startTime: "12:10",
    endTime: "13:25",
    title: "ランチ",
    speaker: "",
    description: "",
    url: "",
    type: "session",
  },
  {
    startTime: "13:25",
    endTime: "13:55",
    title:
      "ハイパーメディア駆動アプリケーションとIslandアーキテクチャ: htmxによるWebアプリケーション開発と動的UIの局所的適用",
    speaker: "中村 遼大",
    description: "",
    url: "https://fortee.jp/fec-kansai-2025/proposal/8ed831ef-5aea-474b-ba3c-53628a76d6e9",
    type: "session",
  },
  {
    startTime: "14:05",
    endTime: "14:35",
    title: "このプロパティいつ使うん？~mdnのCSSリファレンス、全部読んでみた~",
    speaker: "yata",
    description: "",
    url: "https://fortee.jp/fec-kansai-2025/proposal/803f82d5-ae54-4576-ae28-3f83bdde4315",
    type: "session",
  },
  {
    startTime: "14:55",
    endTime: "15:25",
    title:
      "細粒度リアクティブステートのスコープ設計 — React と Jotai/Bunshi に見るスコープ管理の課題と解決策",
    speaker: "恩田 崇",
    description: "",
    url: "https://fortee.jp/fec-kansai-2025/proposal/036ae153-ba4c-4b85-a433-7070a7edfdee",
    type: "session",
  },
  {
    startTime: "15:35",
    endTime: "16:05",
    title: "Wasm×C++で実現するフロントエンドAI画像処理",
    speaker: "Ken Watanabe",
    description: "",
    url: "https://fortee.jp/fec-kansai-2025/proposal/da67de1a-3c29-4df1-8ee6-c43d0e0a6428",
    type: "session",
  },
];
