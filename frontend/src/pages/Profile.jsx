import { useState } from "react";
import btc from "../assets/btc.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState(btc);

  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  if (!token) {
    return navigate("/login");
  }

  return (
    <div className="min-h-screen bg-[#0B1426] text-white flex items-center justify-center px-4 relative">
      <div className="w-full max-w-md bg-[#12233D] rounded-2xl p-8 border border-white/5 shadow-2xl shadow-green-500/10">
        <h1 className="text-3xl font-semibold text-center mb-8">Profile</h1>

        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 p-[3px]">
            <div className="w-full h-full rounded-full bg-[#0F172A] flex items-center justify-center">
              <img
                src={preview}
                alt="profile"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
          </div>

          <p className="mt-4 text-sm text-gray-400">Profile Picture</p>
        </div>

        <div className="mt-8 space-y-6">
          <div>
            <p className="text-sm text-gray-400">Name</p>
            <p className="text-lg font-semibold">Samet Karakurt</p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Username</p>
            <p className="text-lg font-semibold">@samet</p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Email</p>
            <p className="text-lg font-semibold">samet@email.com</p>
          </div>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="mt-8 w-full bg-gradient-to-r from-green-400 to-emerald-500 py-2 rounded-lg font-medium hover:opacity-90 transition"
        >
          Edit Profile
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          ></div>

          <div className="relative w-full max-w-md bg-[#12233D] rounded-2xl p-8 border border-white/5 shadow-2xl shadow-green-500/20 animate-[fadeIn_0.2s_ease]">
            <h2 className="text-xl font-semibold mb-6">Edit Profile</h2>

            <div className="flex flex-col items-center mb-6">
              <label className="cursor-pointer">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-green-400">
                  <img
                    src={preview}
                    alt="preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <input type="file" className="hidden" />
              </label>
              <p className="text-xs text-gray-400 mt-2">
                Click image to change
              </p>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded-lg bg-[#0F172A] border border-white/5 focus:border-green-400 outline-none"
              />

              <input
                type="password"
                placeholder="New Password"
                className="w-full p-3 rounded-lg bg-[#0F172A] border border-white/5 focus:border-green-400 outline-none"
              />
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setOpen(false)}
                className="w-full bg-gray-700 py-2 rounded-lg"
              >
                Cancel
              </button>

              <button className="w-full bg-gradient-to-r from-green-400 to-emerald-500 py-2 rounded-lg">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
