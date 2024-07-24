"use client";
import { CircularProgress } from "@nextui-org/progress";
import { useEffect, useState } from "react";
import InterestCard from "../../components/InterestCard";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  weight: "400",
  style: "normal",
  display: "swap",
  subsets: ["latin"],
});

const PAGE_SIZE = 10;

const getInterests = async (skip: number, take: number) => {
  const res = await fetch(`/api/interests?skip=${skip}&take=${take}`);
  const data = await res.json();
  return data;
};

const Interests = () => {
  const [interests, setInterests] = useState<{ id: number; name: string }[]>(
    [],
  );
  const [loadedInterests, setLoadedInterests] = useState(0);
  const [totalInterests, setTotalInterests] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadInterests();
  }, []);

  const loadInterests = async () => {
    setLoading(true);
    const data = await getInterests(loadedInterests, PAGE_SIZE);
    setInterests((prev) => [...prev, ...data.interests]);
    setTotalInterests(data.totalInterests);
    setLoadedInterests((prev) => prev + data.interests.length);
    setLoading(false);
  };

  return (
    <div className="p-4 bg-black bg-dot-red-950 min-h-screen">
      <h1
        className="text-3xl mb-4 text-white text-center"
        style={{ fontFamily: caveat.style.fontFamily }}
      >
        Select Your Interests
      </h1>
      <div className="text-center text-white mb-6">
        Note: Select at least 6 interests and a maximum of 12 interests.
      </div>
      {loading && loadedInterests === 0 ? (
        <div className="flex justify-center items-center h-full">
          <CircularProgress color="danger" aria-label="Loading..." />
        </div>
      ) : (
        <>
          <div className="flex flex-wrap gap-2 justify-center">
            {interests.map((interest, index) => (
              <InterestCard
                key={`${interest.id}-${index}`}
                interest={interest}
              />
            ))}
          </div>
          {loadedInterests < totalInterests && (
            <div className="text-center mt-4">
              <button
                className="bg-red-900 border border-white text-white py-2 px-4 rounded"
                onClick={loadInterests}
                disabled={loading}
              >
                {loading ? (
                  <CircularProgress color="danger" aria-label="Loading..." />
                ) : (
                  `Load More Interests (${totalInterests - loadedInterests} left)`
                )}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Interests;
