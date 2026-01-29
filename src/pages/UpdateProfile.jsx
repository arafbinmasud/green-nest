import  { use } from "react";
import { AuthContext } from "../provider/AuthContext";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "../firebase/firebase.config";


const UpdateProfile = () => {
  const { user, setUser } = use(AuthContext);
  const navigate = useNavigate();

    const handleProfileUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const userInfo = {displayName: name, photoURL: photo};
        console.log( user, userInfo);
        updateProfile(auth.currentUser, userInfo)
        .then(()=>{
            setUser({...auth.currentUser});
            navigate("/my-profile")
        })
        .catch(err => {
            console.log(err);
            
        })
        
    }

  return (
    <div className="flex flex-1 items-center justify-center m-5 ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleProfileUpdate}>
            <fieldset className="fieldset">
              {/* Name  */}
              <label className="label font-bold">Name</label>
              <input
                type="text"
                className="input"
                name="name"
                placeholder={user.displayName}
                required
                
              />

              {/* Photo URL  */}
              <label className="label font-bold">Photo URL</label>
              <input
                type="text"
                className="input"
                name="photo"
                placeholder={user.photoURL}
               
              />
              <button className="btn btn-primary mt-4">Update</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
