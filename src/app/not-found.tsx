import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center py-32 flex-col text-center px-4">
      <div className="text-7xl mb-6">📡</div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-600 mb-2">
        Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <p className="text-gray-500 mb-8">
        Browse our services or top up your airtime on SSTOPUP Exchange.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/"
          className="bg-green-500 text-white py-3 px-6 rounded-full hover:bg-green-600 transition duration-300 font-medium"
        >
          Go Home
        </Link>
        <Link
          href="/services"
          className="bg-black text-white py-3 px-6 rounded-full hover:scale-105 transition duration-300 font-medium"
        >
          View Services
        </Link>
        <Link
          href="https://datarush.lunar.cyou/sstopup"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-full hover:border-green-500 hover:text-green-600 transition duration-300 font-medium"
        >
          Top Up Now
        </Link>
      </div>
    </div>
  );
};
export default NotFoundPage;