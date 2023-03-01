import React from 'react'
import foto from "../assets/myfoto.jpg";

function Profile() {
  return (
    <div className="profile">
      <img className="mypic" src={foto} />
      <div style={{margin:"auto", textAlign:"left"}}>
        <h2>Muhammad Rizkiansyah</h2>
        I'm a Web Developer<br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nihil asperiores numquam, in saepe amet maxime temporibus quam facere. Est omnis laboriosam blanditiis sequi atque officia, quas alias consectetur nam.
      </div>
    </div>
  )
}

export default Profile