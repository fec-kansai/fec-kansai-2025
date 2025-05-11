import { Button, Heading, Text } from "@workspace/ui";

interface SponsorInformationProps {
  docsLink: string;
}

function SponsorInformation({ docsLink }: SponsorInformationProps) {
  const INFORMATION_CONTENT = `フロントエンドカンファレンス関西では、共にイベントを盛り上げてくださるスポンサー企業様を募集しております。 \r\n
協賛をご検討いただける皆さま向けに、イベントの概要やスポンサー特典、協賛プランなどをまとめた「スポンサー協賛資料」を公開しております。\r\n\r\n
ぜひご一読の上、ご検討いただけますと幸いです。\r\n
皆さまと共に、関西のフロントエンドコミュニティをさらに活性化できることを楽しみにしております。`;

  return (
    <section className="flex flex-col gap-6 items-center">
      <Heading>スポンサー</Heading>
      <Text className="text-white leading-none whitespace-pre-wrap">
        {INFORMATION_CONTENT}
      </Text>
      <Button className="my-3" variant="neon-red" asChild>
        <a href={docsLink} target="_blank" rel="noreferrer">
          スポンサー協賛資料
        </a>
      </Button>
    </section>
  );
}

export { SponsorInformation };
