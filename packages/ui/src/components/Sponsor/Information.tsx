import { Button } from "@workspace/ui/components/button"
import { Heading } from "@workspace/ui/components/heading"
function Information(){

  const INFORMATION_CONTENT = `フロントエンドカンファレンス関西では、共にイベントを盛り上げてくださるスポンサー企業様を募集しております。 \r\n
      協賛をご検討いただける皆さま向けに、イベントの概要やスポンサー特典、協賛プランなどをまとめた「スポンサー協賛資料」を公開しております。\r\n
      ぜひご一読の上、ご検討いただけますと幸いです。\r\n
      皆さまと共に、関西のフロントエンドコミュニティをさらに活性化できることを楽しみにしております。`

  return (
    <div className="flex flex-col gap-8 items-center">
      <Heading>スポンサー</Heading>
      <p className="text-white whitespace-pre-wrap text-center">{INFORMATION_CONTENT}</p>
      <Button className="my-3" variant="neon-red">スポンサー協賛資料</Button>
    </div>
  )
}

export {Information}
