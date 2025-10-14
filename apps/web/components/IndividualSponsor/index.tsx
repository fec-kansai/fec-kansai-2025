import { Heading, Text } from "@workspace/ui";

const INFORMATION_CONTENT = `個人スポンサーの募集は終了いたしました。
ご支援いただいた皆さま、誠にありがとうございます！
` as const;

const individualSponsors = [
  {
    name: "岡山 叶太",
  },
  {
    name: "spring-raining",
  },
  {
    name: "jiyuujin",
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
