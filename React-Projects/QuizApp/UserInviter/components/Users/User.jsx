import React from "react";

export const User = ({ data, onClickInvite, invites, onInviteAdd }) => (
  <li>
    <div>
      <img className="avatar" src={data.avatar} alt="User" />
      <div>
        <h3>{data.first_name + " " + data.last_name}</h3>
        <p>
          <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
            <path d="M48,0a48,48,0,0,0,0,96,6,6,0,0,0,0-12A36,36,0,1,1,84,48V66a6,6,0,0,1-12,0V48A24,24,0,1,0,48,72a23.7365,23.7365,0,0,0,12.2549-3.4783A17.9586,17.9586,0,0,0,96,66V48A48.0474,48.0474,0,0,0,48,0Zm0,60A12,12,0,1,1,60,48,12.0081,12.0081,0,0,1,48,60Z" />
          </svg>
          {data.email}
        </p>
      </div>
    </div>
    <img
      onClick={() => {
        onInviteAdd(data.id);
      }}
      className="action"
      src={
        invites.includes(data.id)
          ? "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.b-DB04W9b1STyjvzP4krwAHaFK%26pid%3DApi&f=1&ipt=36927cb73c71b9f81a880fb00fd48aa588485520062e10793383a6eb81a0c90d&ipo=images"
          : "https://clipground.com/images/plus-sign-clipart-3.jpg"
      }
      alt="Action"
    />
  </li>
);
