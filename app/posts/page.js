import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";

export default async function Posts() {

    const posts = await getAllPosts();
    console.log(posts);

  return (
    <div className="mt-5">
        <h1 className="text-xl font-bold mx-5">Posts Page</h1>

        <ul>
            {posts.map(post => (
                <li key={post.id} className="mx-5">
                    <Link href={`/posts/${post.id}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}
