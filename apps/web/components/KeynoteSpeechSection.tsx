import { Avatar, Heading, Text } from "@workspace/ui";

export const KeynoteSpeechSection = () => {
  return (
    <section id="keynote" className="flex flex-col gap-6 items-center">
      <Heading>キーノートセクション</Heading>
      <div className="flex items-center flex-col gap-2">
        <Avatar
          avatar="/speakers/sakito.jpg"
          url=""
          x="__sakito__"
          github=""
          className="w-[12rem] h-[12rem]"
        />
        <Text colorScheme="white" className="text-4xl">
          Sakito
        </Text>
      </div>
    </section>
  );
};
