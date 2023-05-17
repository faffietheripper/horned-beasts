import React from "react";
import HornedBeast from "./HornedBeast";

export default function Main({ data, handleModal, hornsFilter }) {
  const filteredData = data.filter((beast) => !hornsFilter || beast.horns == hornsFilter);
  console.log(hornsFilter);
  console.log(filteredData);

  return (
    <main>
      {filteredData.map((beast) => {
        return <HornedBeast title={beast.title} imageUrl={beast.image_url} description={beast.description} handleModal={handleModal} beast={beast} />;
      })}
    </main>
  );
}
