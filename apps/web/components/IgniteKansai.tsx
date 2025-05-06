import { Link } from "@/components/Link";
import { Heading, Text } from "@workspace/ui";

export default function IgniteKansai() {
  return (
    <section className="flex flex-col gap-6 items-center">
      <Heading variant="primary">IGNITE KANSAI</Heading>
      <Heading variant="secondary">出会いが共鳴し、次の誰かを動かす</Heading>
      <Text>
        運営に携わるコアスタッフをはじめ、登壇するスピーカーや参加者など、すべての関係者の熱が混ざり合い、相互に影響しあうカンファレンスを目指します。
        <br />
        誰かのことばが誰かの心に火を灯し、その灯火が外へ、コミュニティへ、そして来年へと伝播していく様子が実現すれば、これほど嬉しいことはありません。
        <br />
        今回のフロントエンドカンファレンス関西が、その連鎖のはじまりとなることを願って。
        <br />
        一般社団法人関西開発者会議 代表 北村勇磨（{" "}
        <Link
          href="https://yuma-kitamura.nekohack.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          @jiyuujin
        </Link>{" "}
        ）
      </Text>
    </section>
  );
}
