import React, { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import "./ProfileCard.css";

const ProfileCard = () => {
  const [userDetails, setUserDetails] = useState({});
  const [updatedDetails, setUpdatedDetails] = useState({});
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authtoken = sessionStorage.getItem("auth-token");
    if (!authtoken) {
      navigate("/login");
    } else {
      fetchUserProfile();
    }
  }, [navigate]);

  const fetchUserProfile = async () => {
    try {
      const authtoken = sessionStorage.getItem("auth-token");
      const email = sessionStorage.getItem("email");
      const response = await fetch(`${API_URL}/api/auth/user`, {
        headers: {
          Authorization: `Bearer ${authtoken}`,
          Email: email,
        },
      });
      if (response.ok) {
        const user = await response.json();
        setUserDetails(user);
        setUpdatedDetails(user);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = () => setEditMode(true);

  const handleInputChange = (e) => {
    setUpdatedDetails({ ...updatedDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const authtoken = sessionStorage.getItem("auth-token");
      const email = sessionStorage.getItem("email");
      const response = await fetch(`${API_URL}/api/auth/user`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${authtoken}`,
          "Content-Type": "application/json",
          Email: email,
        },
        body: JSON.stringify(updatedDetails),
      });
      if (response.ok) {
        sessionStorage.setItem("name", updatedDetails.name);
        sessionStorage.setItem("phone", updatedDetails.phone);
        setUserDetails(updatedDetails);
        setEditMode(false);
        alert("Profile Updated Successfully!");
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="profile-container">
      {/* Profile Card UI */}
      {editMode ? (
        // Edit form
        <div className="profile-card">
          <h2>Edit Profile</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={userDetails.email || ""}
                disabled
              />
            </div>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={updatedDetails.name || ""}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={updatedDetails.phone || ""}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="btn-save">Save Changes</button>
            <button
              type="button"
              className="btn-cancel"
              onClick={() => setEditMode(false)}
            >
              Cancel
            </button>
          </form>
        </div>
      ) : (
        // Profile card display UI
        <div className="profile-card">
          <div className="profile-avatar">
            {userDetails.name ? userDetails.name[0].toUpperCase() : "U"}
          </div>
          <h2>Welcome, {userDetails.name}</h2>
          <div className="profile-info">
            <div className="info-row">
              <span className="info-label">📧 Email:</span>
              <span>{userDetails.email}</span>
            </div>
            <div className="info-row">
              <span className="info-label">📞 Phone:</span>
              <span>{userDetails.phone}</span>
            </div>
          </div>
          <button className="btn-edit" onClick={handleEdit}>
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;