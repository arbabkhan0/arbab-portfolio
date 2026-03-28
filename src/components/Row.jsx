import React from "react";
import Card from "./Card";

const Row = ({ title, data }) => {
  if (!data) {
    return <h1 className="text-white">No Data Found</h1>;
  }

  return (
    <div className="px-10 mt-10">

      <h1 className="text-2xl font-bold mb-4">
        {title}
      </h1>

      <div className="flex space-x-4 overflow-x-auto">
        {data.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>

    </div>
  );
};

export default Row;