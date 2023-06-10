import { PropsWithChildren } from "react";
import { bodyFont } from "~/app/fonts";
import "~/styles/index.scss";

export const metadata = {
  title: "Product preview card component - Frontend Mentor - Nguyen Anh Tuan",
  description:
    "Product preview card component - Frontend Mentor - Nguyen Anh Tuan",
};

type Props = PropsWithChildren;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>{children}</body>
    </html>
  );
}
