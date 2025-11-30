import { TICKETS } from "@/consts/ticket";
import { Heading, Text } from "@workspace/ui";

const TICKET_CONTENT =
  `フロントエンドカンファレンス関西 2025 のチケット購入受付は、終了いたしました。
ご購入いただいた皆さま、そして関心をお寄せくださった皆さまに、心より感謝申し上げます。

当日は、フロントエンドに関わる多彩なテーマのセッションが勢ぞろい。
現場でのリアルな知見から、これからの未来を見据えた話題まで、学びも刺激もたっぷりの一日をお届けします。

関西のフロントエンドコミュニティに触れ、日々の業務に新しい視点を取り入れ、仲間とつながる絶好の機会です。
当日、皆さまとお会いできるのを楽しみにしています！` as const;

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
    </section>
  );
}

export { TicketInformation };
