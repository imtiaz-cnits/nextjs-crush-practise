'use client'

export default function Button() {
  return (
    <div className="mt-5">
        <button
          className="rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
          onClick={() => alert('Button clicked!')}
        >
            Click Here!
        </button>
    </div>
  )
}
