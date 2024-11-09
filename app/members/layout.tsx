// import { GoogleAnalytics } from '@next/third-parties/google';
import Sheet from "@/app/_components/Sheet";
import Hero from "@/app/_components/Hero";

export const metadata = {
  title: "メンバー",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      {children}
      <Hero title="Members" sub="メンバー" />
      <Sheet>{children}</Sheet>
      {/* <GoogleAnalytics gaId="G-XXX" /> */}
    </>
  );
}