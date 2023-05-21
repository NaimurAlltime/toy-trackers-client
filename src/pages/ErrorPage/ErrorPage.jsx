import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div className="px-5 mx-auto my-5">
      <img
        src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=740&t=st=1684648758~exp=1684649358~hmac=9ab72a2c5b08d13b8cb757429b3a0efe5aa6bc96c96184c6cd02afbc772af9bf"
        className="w-96 h-96"
        alt=""
      />
      <div className="max-w-md text-center">
        <h2 className="mb-8 fw-semibold fs-2 text-secondary">
          <span className="sr-only">Error</span> {status || 404}
        </h2>
        <p className="fs-4 fw-semibold mb-8">{error?.message}</p>
        <Link
          to="/"
          className="px-5 py-2 fw-semibold rounded border-0 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-decoration-none"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
