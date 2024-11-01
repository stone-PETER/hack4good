import React from "react";

export const Register = () => {
  const FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSfFNtMTHDDjeyyOGusSjXXyGJiTn0zOBniP8HGSXzbaNjgLTQ/viewform";

  return (
    <div className="register-container" style={{ padding: "20px" }}>
      <h1>Registration Form</h1>
      <div
        className="form-container"
        style={{
          position: "relative",
          overflow: "hidden",
          paddingTop: "56.25%", // 16:9 aspect ratio
        }}
      >
        <iframe
          src={FORM_URL}
          title="Registration Form"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
        />
      </div>
    </div>
  );
};
