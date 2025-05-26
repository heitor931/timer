import Link from "next/link";

function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md w-full text-center">
          <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">Welcome to Timer App</h1>
          <p className="text-gray-600 mb-8">
        Track your time efficiently with our simple and easy-to-use timer application.
          </p>
          <Link href={"/timer"} className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold shadow hover:bg-indigo-700 transition">
        Get Started
          </Link>
        </div>
      </div>
      
    </main>
  );
}

export default Home;