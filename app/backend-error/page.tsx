import Link from "next/link";

export default function BackendError() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="text-6xl font-bold text-red-600">404</h1>

      <p className="mt-4 text-lg text-gray-700">
        Backend Not Connected
      </p>

      <p className="mt-2 text-sm text-gray-500">
        Please try again later.
      </p>

      <div className="mt-4 rounded-md bg-gray-100 px-4 py-3 text-left text-sm text-gray-700">
        <p className="font-semibold">Quick test links:</p>
        <p>
          Email:{" "}
          <a
            href="http://localhost:3000/verify-email?contact=test@example.com"
            className="text-blue-700 underline"
          >
            http://localhost:3000/verify-email?contact=test@example.com
          </a>
        </p>
        <p>
          Forgot:{" "}
          <a href="/index.html#forgot" className="text-blue-700 underline">
            index.html#forgot
          </a>
        </p>
      </div>

      <Link
        href="/login"
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Go Back
      </Link>
    </div>
  );
}