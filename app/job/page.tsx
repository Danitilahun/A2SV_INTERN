"use client";
import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import Link from "next/link";
import Card from "@/components/Card";
import { useGetOpportunitiesQuery } from "@/lib/api/job/jobSlice";

const Job = () => {
  const { data: opportunities } = useGetOpportunitiesQuery();
  return (
    <main className="w-screen flex flex-col gap-4 items-center justify-center m-10">
      <div className="w-custom-width flex justify-between items-start mb-4">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-custom-text-darkblue">
            Opportunities
          </h1>
          <p>Showing 73 results</p>
        </div>

        <div className="flex gap-1">
          <p>Sort by : </p>
          <div className="flex items-center gap-1">
            <p> Most relevant</p>
            <FaAngleDown />
          </div>
        </div>
      </div>
      {opportunities?.data?.slice(2).map((item, index) => (
        <Link key={index} href={`/job/${item.id}`}>
          <Card key={index} Opportunity={item} />{" "}
        </Link>
      ))}
    </main>
  );
};

export default Job;
