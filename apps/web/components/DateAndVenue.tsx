import { Heading, Text } from "@workspace/ui";

export default function DateAndVenue() {
  return (
    <section className="flex flex-col gap-6 items-center">
      <Heading variant="primary">開催日程</Heading>
      <Heading variant="accent">2025年 11月 30日</Heading>
      <Text className="font-bold">マイドームおおさか　８F</Text>
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3280.8470548504115!2d135.5092312413864!3d34.68380938831403!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e726b2987b83%3A0xa5aaca7ccf486fcf!2z44Oe44Kk44OJ44O844Og44GK44GK44GV44GL!5e0!3m2!1sja!2sus!4v1746251611295!5m2!1sja!2sus"
          className="absolute top-0 left-0 w-full"
          height="400"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="マイドームおおさかの場所を表しているGoogle Map"
        />
      </div>
    </section>
  );
}
