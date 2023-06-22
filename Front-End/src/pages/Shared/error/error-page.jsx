import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page " className="body">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url("https://i.ibb.co/d2DKDfz/error.jpg")` }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md mt-96">
            <Link className="btn bg-orange-600" to="/">
              Back to HomePage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
