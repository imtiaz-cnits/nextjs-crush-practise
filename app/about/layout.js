import Link from "next/link";

export const metadata = {
  title: "About | Next.js Crush Course",
  description: "About Next.js Crush Course with LWS",
};

export default function AboutLayout({ children }) {
  return (
    <div>
        <nav className="dark:bg-black p-5">
          <ul className="flex gap-6">
            <li><Link href="/about/mission">Mission</Link></li>
            <li><Link href="/about/vision">Vision</Link></li>
          </ul>
        </nav>
        {children}
    </div>
  )
}
