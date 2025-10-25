import { redirect } from "next/navigation";

export default function SponsorsIndexRedirect() {
  // /sponsors にアクセスされた場合はトップページにリダイレクト
  redirect("/");
}
