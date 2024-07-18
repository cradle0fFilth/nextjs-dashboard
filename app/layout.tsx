import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts'

// /app/layout 根布局 所有文件之间共享

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //antialiased 是tailwind,使字体平滑
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
