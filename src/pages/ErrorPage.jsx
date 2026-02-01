import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 p-5 text-center">

      <div className="relative">

        <h1 className="text-[150px] font-black text-gray-200">404</h1>

        <p className="text-2xl font-bold text-emerald-800 absolute bottom-25 left-0 right-0">
          Oops! Page Not Found.
        </p>

        <Link
          to="/"
          className="btn btn-outline btn-primary rounded-2xl"
        >
          Back to Home
        </Link>

      </div>

    </div>
  );
};

export default ErrorPage;
