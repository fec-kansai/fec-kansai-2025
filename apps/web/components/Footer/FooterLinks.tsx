import { contactListItems, policyListItems } from "@/components/Footer/links";
import { Link } from "@/components/Link";
import { Text } from "@workspace/ui";

export default function FooterLinks() {
  return (
    <div className="flex flex-col md:flex-row gap-9 md:gap-6">
      <div className="flex flex-col gap-4 md:gap-6">
        <Text className="text-lg font-bold">お問い合わせ</Text>
        <ul className="flex flex-col gap-3 md:gap-4">
          {contactListItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href} target="_blank" rel="noopener noreferrer">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-4 md:gap-6">
        <Text className="text-lg font-bold">規約・ポリシー</Text>
        <ul className="flex flex-col gap-3 md:gap-4">
          {policyListItems.map((item) => (
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
