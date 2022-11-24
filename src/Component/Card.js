import React from "react";
import { Link } from "react-router-dom";
import "./c.css";
export const CardCAR = ({ el }) => {
  return (
    <div style={{ margin: "20px" }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
              <Link to={`/${el.char_id}`}>  <img className="img-fluid" src={el.img} alt="" /></Link>
              </div>
              <div className="team-content">
                <h3 className="name">{el.name}</h3>
                <h4 className="title">{el.nickname}</h4>
              </div>
              {/* <ul className="social">
              <li>
                <a
                  href="https://codepen.io/collection/XdWJOQ/"
                  className="fab fa-facebook"
                  aria-hidden="true"/>
              </li>
              <li>
                <a
                  href="https://codepen.io/collection/XdWJOQ/"
                  className="fab fa-twitter"
                  aria-hidden="true"
                />
              </li>
              <li>
                <a
                  href="https://codepen.io/collection/XdWJOQ/"
                  className="fab fa-google-plus"
                  aria-hidden="true"
                />
              </li>
              <li>
                <a
                  href="https://codepen.io/collection/XdWJOQ/"
                  className="fab fa-linkedin"
                  aria-hidden="true"
                />
              </li>
            </ul> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
