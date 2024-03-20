import Card from "@/components/Card";
import data from "@/data/data.json";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";

export default function Home() {
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
      {data.map((item, index) => (
        <Link key={index} href={`/job/${index}`}>
          <Card key={index} item={item} />{" "}
        </Link>
      ))}
    </main>
  );
}
