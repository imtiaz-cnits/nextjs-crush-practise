import Link from "next/link"

export default function Blogs() {

  const blogs = [
    {
      id: 1,
      title: "First Blog",
      description: "This is the description of the first blog.",
      date: "2024-06-01",
    },
    {
      id: 2,
      title: "Second Blog",
      description: "This is the description of the second blog.",
      date: "2024-06-02",
    },
    {
      id: 3,
      title: "Third Blog",
      description: "This is the description of the third blog.",
      date: "2024-06-03",
    },
  ]

  return (
    <main className="flex mt-4 bg-zinc-50 font-sans dark:bg-black">
      <ul>
        {blogs.map((blog) => (
          <li className="mb-5" key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
