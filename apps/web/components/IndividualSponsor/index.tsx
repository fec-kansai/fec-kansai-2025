import { Heading, Text } from "@workspace/ui";

const INFORMATION_CONTENT = `個人スポンサーの募集は終了いたしました。
ご支援いただいた皆さま、誠にありがとうございます！
` as const;

// 仮
const individualSponsors = [
  {
    // href: "https://twitter.com/username1",
    name: "個人スポンサー 1",
    alt: "個人スポンサー 1",
  },
  {
    // href: "https://twitter.com/username2",
    name: "個人スポンサー 2",
    alt: "個人スポンサー 2",
  },
  {
    // href: "https://twitter.com/username3",
    name: "個人スポンサー 3",
    alt: "個人スポンサー 3",
  },
  {
    // href: "https://twitter.com/username4",
    name: "個人スポンサー 4",
    alt: "個人スポンサー 4",
  },
  {
    // href: "https://twitter.com/username5",
    name: "個人スポンサー 5",
    alt: "個人スポンサー 5",
  },
];

function IndividualSponsor() {
  return (
    <section
      id="individual-sponsor"
      className="flex flex-col gap-6 items-center"
    >
      <Heading>個人スポンサー</Heading>
      <Text className="text-white whitespace-pre-wrap">
        {INFORMATION_CONTENT}
      </Text>
      <ul className="flex flex-wrap gap-x-4 gap-y-6 justify-center max-w-screen-lg mx-auto px-4">
        {individualSponsors.map((staff) => {
          return (
            <li key={staff.name} className="flex items-center justify-center">
              <Text>{staff.name}</Text>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export { IndividualSponsor };
