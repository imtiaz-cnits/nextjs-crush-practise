
export default function Home() {
  console.log("Home Page Rendered");
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
          Welcome to <span className="text-blue-600">Next.js!</span>
        </h1>
      </main>
    </div>
  );
}
