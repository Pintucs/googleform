import React from 'react';
import "./a.css";

const TopPage = ({ name, onSwitchUser }) => {
  const handleSwitchUserClick = () => {
    // You can implement logic here to switch the user's Gmail account.
    // For this example, we'll just call the onSwitchUser prop function.
    onSwitchUser();
  };

  return (
    <>
      <form className='form'>
        <p>
          pintucs9695@gmail.com{" "}
            <button
              style={{
                textDecoration: "none",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                color:"blue"
              }}
              onClick={handleSwitchUserClick}
            >
              switch user
            </button>
        </p>
        <p>
          The name and photo associated with your Google account will be
          recorded when you upload files and submit this form. Your email is not
          part of your response.
        </p>
      </form>
    </>
  );
};

export default TopPage;
