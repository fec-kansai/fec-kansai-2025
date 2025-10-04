import { staffs } from "@/app/consts/staffs";
import { Avatar, Heading, Text } from "@workspace/ui";

const INFORMATION_CONTENT =
  `こんなにもたくさんのスタッフが、イベントを一緒に作っています！
「関西のフロントエンドを盛り上げたい」その想いのもと、全員でおもてなしします！` as const;

function StaffInformation() {
  const staffList = staffs;

  return (
    <section id="staff" className="flex flex-col gap-6 items-center">
      <Heading>スタッフ</Heading>
      <Text className="text-white whitespace-pre-wrap">
        {INFORMATION_CONTENT}
      </Text>
      <ul className="flex flex-wrap gap-x-4 gap-y-6 justify-center max-w-screen-lg mx-auto px-4">
        {staffList.map((staff) => {
          return (
            <li
              key={staff.displayName}
              className="flex items-center justify-center"
            >
              <Avatar {...staff} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export { StaffInformation };
