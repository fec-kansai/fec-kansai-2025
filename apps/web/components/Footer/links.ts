interface Link {
  href: string;
  label: string;
}

export const sponsorListItem = [
  {
    href: "https://docs.google.com/presentation/d/1R7_pY5LdboES_HFNLobQLq44iw1A5F7TMzJ4OLyWCRo/edit?usp=sharing",
    label: "協賛資料",
  },
  {
    href: "https://forms.gle/gGdRz6CVNkEVkEFo7",
    label: "スポンサー募集URL",
  },
] as const satisfies Link[];

export const contactListItem = [
  {
    href: "https://docs.google.com/document/d/1ehwr1skJ_HS0Ef2VL18Hoka1WSB_Qvi5WYOOrRP_zSA/edit?usp=sharing",
    label: "行動規範",
  },
  {
    href: "https://docs.google.com/document/d/1EZ-C2aJ_mzKHgZa3IYePkB5zC9TYBBTDJRiwA7KxotM/edit?usp=sharing",
    label: "プライバシーポリシー",
  },
  {
    href: "https://docs.google.com/document/d/187gfjUQYCNd0SI2h5VrQCPG6FyIvodq_foECA_9eCpw/edit?usp=sharing",
    label: "反社会性力排除ポリシー",
  },
  {
    href: "https://docs.google.com/document/d/107_5Vfr-dFtrKDtJWbHezFlomkG5chJez51tWMuGV98/edit?usp=sharing",
    label: "関連イベントのガイドライン",
  },
  {
    href: "https://docs.google.com/document/d/1wTOrXAN6pgCtEe7DGj5sfMccSk1AaJ1PTQZXuY6TVWU/edit?usp=sharing",
    label: "ロゴ利用ガイドライン",
  },
  {
    href: "https://docs.google.com/document/d/1YKUO01ROvD2nnEN8YW37VKkF35HKavWQ9uG4JDJcaco/edit?usp=sharing",
    label: "キャンセルポリシー",
  },
] as const satisfies Link[];
