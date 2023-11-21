import React from "react";
// import blog from "../data.blog"

function About({ image ="https://via.placeholder.com/215Links to an external site." }) {
    return (
<aside className="about">
    <img
        src={image}
        alt="blog logo"
    />
    <p>
        About this blog
    </p>
</aside>
    );
}

export default About;