import React from "react";
import attributes from "@/data/attributes.json";
function AttributesList() {
  return (
    <>
      <ul className="text-gray-500 list-disc list-inside dark:text-gray-400">
        {attributes.map((attribute, index) => (
          <li key={index}>
            <span className="font-bold">{attribute.label}</span>:{" "}
            {attribute.description}
          </li>
        ))}
      </ul>
    </>
  );
}

export default AttributesList;
