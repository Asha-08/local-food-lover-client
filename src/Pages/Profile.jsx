import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const [editBasic, setEditBasic] = useState(false);

  // GET profile from backend
  useEffect(() => {
    if (user?.email) {
      fetch(`https://local-food-server-pi.vercel.app/users?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setProfile(data))
        .catch((err) => console.log(err));
    }
  }, [user]);

  // PATCH - update name & photo
  const handleUpdateBasic = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;

    const updatedBasic = {
      email: user.email, // email never changes
      name,
      photoURL,
    };

    try {
      // 1️⃣ Update MongoDB
      const res = await fetch("https://local-food-server-pi.vercel.app/users", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedBasic),
      });

      if (!res.ok) {
        throw new Error("MongoDB update failed");
      }

      // 2️⃣ Update Firebase Auth using EXISTING context method
      await updateUserProfile(name, photoURL);

      // 3️⃣ Update local profile state (Profile page UI)
      setProfile({ ...profile, ...updatedBasic });

      Swal.fire({
        icon: "success",
        title: "Profile Updated",
        text: "Name and photo updated successfully!",
        confirmButtonColor: "#f97316",
      });

      setEditBasic(false);
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: "Something went wrong. Please try again.",
        confirmButtonColor: "#f97316",
      });
    }
  };

  if (!profile) return <p className="text-center mt-12">Loading...</p>;

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">My Profile</h1>

      {/* Centered Basic Info */}
      <div className="basic-info flex flex-col items-center justify-center mt-12 mb-8">
        <img
          src={profile.photoURL}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-orange-400 shadow-lg"
        />
        <p className="text-2xl font-bold mt-4">{profile.name}</p>
        <p className="text-gray-500 mt-1">{profile.email}</p>

        <button
          onClick={() => setEditBasic(true)}
          className="btn bg-orange-500 text-white hover:bg-orange-600 mt-4 px-6"
        >
          Edit Basic
        </button>
      </div>

      {/* Edit Form */}
      {editBasic && (
        <form onSubmit={handleUpdateBasic} className="space-y-4 mt-4">
          <input
            name="name"
            defaultValue={profile.name}
            className="input input-bordered w-full"
            placeholder="Name"
          />
          <input
            name="photoURL"
            defaultValue={profile.photoURL}
            className="input input-bordered w-full"
            placeholder="Photo URL"
          />
          <div className="flex gap-3">
            <button className="btn btn-success">Save</button>
            <button
              type="button"
              onClick={() => setEditBasic(false)}
              className="btn btn-outline"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Profile;
