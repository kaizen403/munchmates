import React from "react";

interface InterestCardProps {
  interest: {
    id: number;
    name: string;
  };
}

const InterestCard: React.FC<InterestCardProps> = ({ interest }) => {
  return (
    <div className="p-3 border rounded bg-gray-950 tracking-wide font-lexend font-semibold text-white text-lg border-red-950">
      {interest.name}
    </div>
  );
};

export default InterestCard;
