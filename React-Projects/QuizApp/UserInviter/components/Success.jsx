import React from "react";

export const Success = ({ count, onGoBackClick }) => {
  return (
    <div class="success-block">
      <img
        src="https://raw.githubusercontent.com/Archakov06/react-beginner-projects/8adf80464e1ee4b084592b47c432cf1f9a864981/public/assets/success.svg"
        alt="Success"
      />
      <h3>Success!</h3>
      <p>All {count} invites sent</p>
      <button onClick={onGoBackClick} className="send-invite-btn">
        Back
      </button>
    </div>
  );
};
