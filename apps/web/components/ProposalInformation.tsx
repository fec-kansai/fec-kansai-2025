import { Button, Heading, Text } from "@workspace/ui";

const PROPOSAL_CONTENT =
  `フロントエンドカンファレンス関西では、フロントエンドに関わるあらゆるテーマで登壇いただけるセッションスピーカーを募集しています。
日々の開発で得た知見や挑戦、チームでの工夫、技術やデザインとの連携など、実践的な内容から未来を見据えた話題まで幅広く歓迎します。
ご自身の経験やアイデアを、関西のコミュニティにシェアしてみませんか？
登壇経験の有無は問いません。初めての方もぜひご応募ください。` as const;

const PROPOSAL_FORM_LINK =
  "https://fortee.jp/fec-kansai-2025/speaker/proposal/cfp" as const;

interface ProposalInformationProps {
  isExpired?: boolean;
}

function ProposalInformation({ isExpired }: ProposalInformationProps) {
  return (
    <section id="proposal" className="flex flex-col gap-6 items-center">
      <Heading>プロポーザル</Heading>
      <Text className="text-white whitespace-pre-wrap">{PROPOSAL_CONTENT}</Text>
      <div className="flex flex-wrap gap-5 md:gap-20 justify-center my-0 md:mt-3 md:mb-10">
        <Button
          disabled={isExpired}
          className="w-full sm:w-auto py-2.5 px-10"
          variant="neon-pink"
          asChild
        >
          <a href={PROPOSAL_FORM_LINK} target="_blank" rel="noreferrer">
            プロポーザル募集フォーム
          </a>
        </Button>
      </div>
    </section>
  );
}

export { ProposalInformation };
