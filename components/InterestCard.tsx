// File: components/InterestCard.tsx

import React from "react";

const InterestCard = ({
  interest,
}: {
  interest: { id: number; name: string };
}) => {
  return (
    <div className="p-4 border border-red-950 rounded-md bg-gray-950 text-white">
      {interest.name}
    </div>
  );
};

export default InterestCard;
