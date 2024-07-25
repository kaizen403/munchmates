"use client";
import { Button } from "@/components/ani_ui/Movingborder";

import { CircularProgress } from "@nextui-org/progress";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  interestsState,
  selectedInterestsState,
  totalInterestsState,
  loadedInterestsState,
  loadingState,
} from "../../recoil/atoms";
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

type Interest = {
  id: number;
  name: string;
};

const Interests = () => {
  const [interests, setInterests] = useRecoilState<Interest[]>(interestsState);
  const [selectedInterests, setSelectedInterests] = useRecoilState<Set<number>>(
    selectedInterestsState,
  );
  const [loadedInterests, setLoadedInterests] =
    useRecoilState<number>(loadedInterestsState);
  const [totalInterests, setTotalInterests] =
    useRecoilState<number>(totalInterestsState);
  const [loading, setLoading] = useRecoilState<boolean>(loadingState);

  const loadInterests = async () => {
    setLoading(true);
    const data = await getInterests(loadedInterests, PAGE_SIZE);
    setInterests((prev) => {
      const newInterests = data.interests.filter(
        (interest: Interest) =>
          !prev.some((prevInterest) => prevInterest.id === interest.id),
      );
      return [...prev, ...newInterests];
    });
    setTotalInterests(data.totalInterests);
    setLoadedInterests((prev) => prev + data.interests.length);
    setLoading(false);
  };

  useEffect(() => {
    if (interests.length === 0) {
      loadInterests();
    }
  }, [interests.length]); // Remove loadInterests from dependency array

  const toggleInterestSelection = (id: number) => {
    setSelectedInterests((prev) => {
      const newSelected = new Set(prev);
      if (newSelected.has(id)) {
        newSelected.delete(id);
      } else if (newSelected.size < 12) {
        newSelected.add(id);
      }
      return newSelected;
    });
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
                selected={selectedInterests.has(interest.id)}
                toggleSelection={() => toggleInterestSelection(interest.id)}
              />
            ))}
          </div>
          {loadedInterests < totalInterests && (
            <div className="text-center mt-6">
              <button
                className="bg-red-950 border border-white text-sm text-gray-400 py-1 px-2 rounded-3xl"
                onClick={loadInterests}
                disabled={loading}
              >
                {loading ? (
                  <CircularProgress color="danger" aria-label="Loading..." />
                ) : (
                  `More... (${totalInterests - loadedInterests} left)`
                )}
              </button>
            </div>
          )}
          {selectedInterests.size >= 6 && (
            <div className="text-center mt-8">
              <Button
                borderRadius="2px"
                className="bg-black text-white text-lg bg-slate-900 dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Next
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Interests;
