import React from "react";

export const ProfileCard = ({ profile }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
      }}
    >
      <h2>{profile.name}</h2>
      <p>{profile.age}</p>
      <p>{profile.bio}</p>
    </div>
  );
};
