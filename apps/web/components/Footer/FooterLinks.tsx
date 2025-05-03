import {
  contactListItem as contactListItems,
  sponsorListItem as sponsorListItems,
} from "@/components/Footer/links";
import { Link } from "@/components/Link";
import { Text } from "@workspace/ui";

export default function FooterLinks() {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col gap-6">
        <Text className="text-lg font-bold">スポンサー募集</Text>
        <ul className="flex flex-col gap-4">
          {sponsorListItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href} target="_blank" rel="noopener noreferrer">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-6">
        <Text className="text-lg font-bold">お問い合わせ</Text>
        <ul className="flex flex-col gap-4">
          {contactListItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href} target="_blank" rel="noopener noreferrer">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
