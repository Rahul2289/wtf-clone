import React from "react";

const Benefits = ({ singleGymDetail }) => {
  console.log(singleGymDetail[0]["benefits"]);
  return (
    <div style={{ width: "100%" }}>
      <h1 style={{ fontSize: "21px", textAlign: "center" }}>Facilities</h1>
      {singleGymDetail[0]["benefits"]?.map((data, i) => (
        <div key={i} className="row">
          <p> {data.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Benefits;
