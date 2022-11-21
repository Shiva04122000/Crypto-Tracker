import React from "react";
import './CoinPage.css'
function Info({ name, desc }) {
  return (
    <div>
      <h3 style={{ marginTop: "0rem" }}>{name}</h3>
      <p className="desc-links" dangerouslySetInnerHTML={{ __html: desc }} />
    </div>
  );
}

export default Info;