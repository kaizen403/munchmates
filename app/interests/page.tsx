"use client";

import React, { useState, useEffect } from "react";
import InterestCard from "../../components/InterestCard";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

const PAGE_SIZE = 14; // Number of interests to load per page

interface Interest {
  id: number;
  name: string;
}

const Interests: React.FC = () => {
  const [interests, setInterests] = useState<Interest[]>([]);
  const [totalInterests, setTotalInterests] = useState<number>(0);
  const [loadedInterests, setLoadedInterests] = useState<number>(0);

  useEffect(() => {
    loadInterests();
  }, []);

  const loadInterests = async () => {
    const res = await fetch(
      `/api/interests?skip=${loadedInterests}&take=${PAGE_SIZE}`,
    );
    const data = await res.json();
    const newInterests: Interest[] = data.interests;
    setInterests((prev) => [...prev, ...newInterests]);
    setTotalInterests(data.totalInterests);
    setLoadedInterests((prev) => prev + newInterests.length);
  };

  const remainingInterests = totalInterests - loadedInterests;

  return (
    <div className="p-4 bg-black bg-dot-red-950 min-h-screen">
      <h1
        className="text-3xl mb-4 text-white text-center"
        style={{ fontFamily: caveat.style.fontFamily }}
      >
        Select Your Interests
      </h1>
      <p className="text-center text-gray-400 mb-4">
        Select at least 6 interests and a maximum of 12 interests.
      </p>
      <div className="flex flex-wrap gap-2 justify-center">
        {interests.map((interest) => (
          <InterestCard key={interest.id} interest={interest} />
        ))}
      </div>
      {remainingInterests > 0 && (
        <div className="flex flex-col items-center mt-4">
          <button
            onClick={loadInterests}
            className="bg-red-700 text-white px-4 py-2 rounded flex items-center"
          >
            <span className="mr-2">...</span>
            <span>{remainingInterests} more</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Interests;
