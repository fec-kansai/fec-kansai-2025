import { Heading, Text } from "@workspace/ui";

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
  {
    name: "スー",
  },
];

function IndividualSponsor() {
  return (
    <section
      id="individual-sponsor"
      className="flex flex-col gap-6 items-center"
    >
      <Heading>個人スポンサー</Heading>
      <ul className="flex flex-wrap gap-x-4 gap-y-6 justify-center max-w-screen-lg mx-auto px-4">
        {individualSponsors.map((staff) => {
          return (
            <li key={staff.name} className="flex items-center justify-center">
              <Text className="font-bold">{staff.name}</Text>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export { IndividualSponsor };
