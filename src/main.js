import React from 'react';

const Main = () => {
  return (
      <div className="min-vh-100 container-fluid masthead text-center justify-content-between" id="welcome">
        <img height="300px" src='https://shivamsinghydv.github.io/dev-portfolio/assets/profile_pic.png' className="mb-5 masthead-avatar" alt="avatar" />
          <div className='text-center h3'>Hi, I'm Shivam Singh. I'm a Full Stack Web Developer. I'm currently working on my portfolio.</div>
          <br />
          <div className=" flex-wrap align-items-center">
            <button id="target" className=" btn btn-outline-primary contact-link"><a className="contact-link" href="contact.html">Drop a message!</a></button>
        </div>
    </div>
  );
};

export default Main;