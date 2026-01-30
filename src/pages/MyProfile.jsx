import { use } from "react";
import { AuthContext } from "../provider/AuthContext";
import { Link, useLocation } from "react-router";
import userLogo from "../assets/user-logo.png"

const MyProfile = () => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  console.log(location);

  console.log(user);

  if (loading) {
    return <p>Loading..</p>;
  }

  return (
    <>
      {user ? (
        <div className="flex py-3 items-center justify-center flex-1">
          <div className=" flex flex-col items-center justify-center gap-3 shadow-2xl p-5 md:p-10 rounded-3xl">
            <h2 className="font-medium text-md md:text-xl">
              Name: <span className="font-light"> {user.displayName}</span>
            </h2>
            <p className="font-medium text-md md:text-xl">
              Email: <span className="font-light">{user.email}</span>{" "}
            </p>
            <div className="rounded-md w-32 h-32 overflow-hidden">
              <img className="w-full h-full rounded-md object-cover" src={user.photoURL || userLogo } alt="User-Photo" onError={e =>{e.target.src = userLogo}} />
            </div>
            <Link to="/update-profile" className="btn btn-primary">
              Update Profile
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center flex-1">
          <p className="font-semibold text-2xl">
            Please &nbsp;
            <Link
              state={location.pathname}
              to="/auth/login"
              className="text-secondary hover:underline"
            >
              Login &nbsp;
            </Link>
            First!
          </p>
        </div>
      )}
    </>
  );
};

export default MyProfile;
