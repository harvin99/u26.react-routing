import React from "react";

import "./AboutStyle.css";

export default function About(props) {
  return (
    <div class="about__me">
      <h2>About me</h2>
      <p>
        Hi, my name is Hung. I'm a student of University of Science and my major
        is Information Technology. I want to become a web front end developer in
        the future
      </p>
      <div class="avatar">
        <img src="/images/avatar.jpg" alt="avatar" />
      </div>
      <h2>My skill</h2>
      <h3>Front end</h3>
      <div class="skill">
        <img
          src="https://image.flaticon.com/icons/png/512/1216/1216733.png"
          alt="html5"
        />
        <img
          src="https://cdn.iconscout.com/icon/free/png-512/css3-9-1175237.png"
          alt="css3"
        />
        <img
          src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg"
          alt="javascript"
        />
        <img
          src="https://cdn.auth0.com/blog/react-js/react.png"
          alt="reactjs"
        />
      </div>
      <h3>Back end</h3>
      <div class="skill">
        <img
          src="https://icon-library.com/images/node-js-icon/node-js-icon-8.jpg"
          alt="nodejs"
        />
        <img
          src="https://stackjava.com/wp-content/uploads/2018/07/mongodb.png"
          alt="mongodb"
        />
        <img
          src="https://icons-for-free.com/iconfiles/png/512/development+logo+mysql+icon-1320184807686758112.png"
          alt="mysql"
        />
      </div>
      <h2>Contact</h2>
      <div class="infor">
        <a href="https://facebook.com/tranvanhung1001">
          <i class="fab fa-facebook-square">
            <span>/tranvanhung1001</span>
          </i>
        </a>
        <a href="https://github.com/harvin99">
          <i class="fab fa-github">
            <span>/harvin99</span>
          </i>
        </a>
      </div>
    </div>
  );
}
