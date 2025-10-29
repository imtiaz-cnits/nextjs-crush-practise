import getPost from "@/lib/getPost";

export async function generateMetadata({params}) {
    const {id} = await params;
    const post = await getPost(id);

    return {
        title: post.title,
        description: post.body,
    }
}

export default async function PostPage({params}) {

    const {id} = await params;
    const post = await getPost(id);

  return (
    <div className="mt-6 mx-5">
        <h2 className="text-xl text-blue-500">{post.title}</h2>
        <p className="mt-2">{post.body}</p>
    </div>
  )
}
