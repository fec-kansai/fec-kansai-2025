import { TICKETS, TICKET_SITE_LINK } from "@/app/consts/ticket";
import { Button, Heading, Text } from "@workspace/ui";

const TICKET_CONTENT =
  `フロントエンドカンファレンス関西 2025 では、現在、参加チケットを絶賛販売中です！

フロントエンドに関わる多彩なテーマを扱うセッションが勢ぞろい。
現場でのリアルな知見から、これからの未来を見据えた話題まで、学びも刺激もたっぷりの一日です。

関西のフロントエンドコミュニティに触れてみたい方、日々の業務に新しい視点を取り入れたい方、仲間とつながりたい方——
この機会にぜひご参加ください！` as const;

function TicketInformation() {
  const tickets = TICKETS;
  return (
    <section id="ticket" className="flex flex-col gap-6 items-center">
      <Heading>チケット販売</Heading>
      <Text className="text-white whitespace-pre-wrap">{TICKET_CONTENT}</Text>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 max-w-4xl">
        {tickets.map((ticket) => (
          <div
            key={ticket.title}
            className="bg-white/10 rounded-lg p-6 text-white flex flex-col gap-3 shadow-lg"
          >
            <div className="text-3xl">{ticket.emoji}</div>
            <h3 className="text-xl font-semibold">{ticket.title}</h3>
            <p className="text-sm whitespace-pre-wrap">{ticket.description}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-5 md:gap-20 justify-center my-0 md:mt-5 md:mb-10">
        <Button
          className="w-full sm:w-auto py-2.5 px-10"
          variant="neon-pink"
          asChild
        >
          <a href={TICKET_SITE_LINK} target="_blank" rel="noreferrer">
            チケットを購入する
          </a>
        </Button>
      </div>
    </section>
  );
}

export { TicketInformation };
