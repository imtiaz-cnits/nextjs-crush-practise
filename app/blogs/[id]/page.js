import { notFound } from "next/navigation";

export default async function BlogPage({ params }) {
    const { id } = await params;

    if (id === '4') {
        notFound();
    }

  return (
    <div className="mt-6">The blog id is: {id}</div>
  )
}
