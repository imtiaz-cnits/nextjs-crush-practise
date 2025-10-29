import { Sora } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next.js Crush Course",
  description: "Next.js Crush Course with LWS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} antialiased`}>
      <body >
        <nav className="dark:bg-black p-4">
          <ul className="flex gap-6">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
            <li><Link href="/posts">Posts</Link></li>
          </ul>
        </nav>
        <hr />
        {children}
      </body>
    </html>
  );
}
