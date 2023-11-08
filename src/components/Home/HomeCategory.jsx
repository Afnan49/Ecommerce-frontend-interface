import React from "react";
import style from "./Home.module.css";

function HomeCategory(props) {
  //   console.log("this is the props ", props);
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
      <a className="text-decoration-none" href>
        <div
          className={` d-flex align-items-center mb-4  ${style.categoryCard} ${style.category_body}`}
        >
          <div
            className={`${style.category_image} overflow-hidden`}
            style={{
              width: 100,
              height: 100,
              backgroundImage: `url(${props.image})`,
            }}
          ></div>
          <div className={`flex-fill pl-3 px-4 ${style.category_body}`}>
            <h6 className=" text-body">{props.name}</h6>
            <small className="text-body">
              {props.categoryToSub.length} Subcategory
            </small>
          </div>
        </div>
      </a>
    </div>
  );
}

export default HomeCategory;
