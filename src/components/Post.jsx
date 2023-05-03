import React from "react";

const Post = ({ item }) => {
  return (
    <article className="travelPost">
      <img src={`../images/${item.image}`} alt="" className="travelImg" />
      <div className="travelInfo">
        <div className="locationPost">
          <i className="fa-solid fa-location-dot"></i>
          <h2>{item.location}</h2>
        </div>
        <h1>{item.title}</h1>
        <h3>{item.date}</h3>
        <p>{item.description}</p>
      </div>
    </article>
  );
};

export default Post;
