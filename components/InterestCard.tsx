"use client";
import React from "react";

const InterestCard = ({
  interest,
  selected,
  toggleSelection,
}: {
  interest: { id: number; name: string };
  selected: boolean;
  toggleSelection: () => void;
}) => {
  return (
    <div
      onClick={toggleSelection}
      className={`p-4 border rounded-md text-white cursor-pointer ${
        selected ? "bg-gray-700 border-white" : "border-red-950 bg-gray-950"
      }`}
    >
      {interest.name}
    </div>
  );
};

export default InterestCard;
