import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';
import { updateProfile } from 'firebase/auth';

const Profile = () => {
  const { user, signout } = useContext(AuthContext);
  const [reviewCount, setReviewCount] = useState(0);
  const [newName, setNewName] = useState(user?.displayName || '');
  const [newPhoto, setNewPhoto] = useState(user?.photoURL || '');

  useEffect(() => {
    if (user?.email) {
      fetch(`https://chill-gaming-server.vercel.app/user-reviews/${user?.email}`)
        .then(res => res.json())
        .then(data => setReviewCount(data.length))
        .catch(console.error);
    }
  }, [user]);

  const handleUpdate = async () => {
    try {
      await updateProfile(user, {
        displayName: newName,
        photoURL: newPhoto,
      });
      alert('Profile updated successfully!');
      document.getElementById('edit_modal').close();
      window.location.reload(); // optional, refresh to reflect changes
    } catch (error) {
      console.error(error);
      alert('Failed to update profile.');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-base-100 shadow-lg p-6 rounded-lg mt-10">
      <div className="flex flex-col items-center gap-4">
        <img
          src={user?.photoURL || 'https://i.ibb.co/tp7bdSS/default-user.png'}
          alt="User Profile"
          className="w-24 h-24 rounded-full border-4 border-primary"
        />
        <h2 className="text-xl font-bold">{user?.displayName || 'No Name'}</h2>
        <p className="text-gray-500">{user?.email}</p>

        <div className="bg-info text-white px-4 py-2 rounded mt-4">
          Total Reviews: {reviewCount}
        </div>

        <button className="btn btn-primary mt-4" onClick={() => document.getElementById('edit_modal').showModal()}>
          Edit Profile
        </button>

        <button onClick={signout} className="btn bg-red-500 text-white mt-4">
          Log Out
        </button>
      </div>

      {/* Edit Modal */}
      <dialog id="edit_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Edit Profile</h3>
          <label className="label">
            <span className="label-text">Display Name</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full mb-3"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full mb-3"
            value={newPhoto}
            onChange={(e) => setNewPhoto(e.target.value)}
          />

          <div className="modal-action">
            <form method="dialog" className="flex gap-3">
              <button className="btn" type="button" onClick={handleUpdate}>Save</button>
              <button className="btn btn-ghost">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Profile;
