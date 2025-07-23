'use client'

import { Icon } from "@iconify/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  let searchValue;
  let [renderCount, setRenderCount] = useState(0);

  const router = useRouter();
  const searchParams = useSearchParams();

  const [coins, setcoins] = useState();

  searchValue = searchParams.get('search');

  useEffect(() => {
    // getCoinsList();
  }, []);

  async function getCoinsList(){
    const response = await fetch("/api/list");
    const data = await response.json();
    setcoins(data.data);

    console.log(data.data);
  }

  return (
    <main className="h-screen w-full bg-gray-100">
        <div className="flex flex-col items-center justify-center pt-8 pb-4 border-b">
          <h1 className="text-5xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-tr from-violet-500 to-fuchsia-500 inline-block pt-16">
            Get cryptocurrency information all on<br/>one platform. 
            <p className="text-lg text-center text-violet-700 font-light my-6">Get all info on your favourite crypto coin for free.</p>
          </h1>

          <div className="w-108">
            <div className="p-[2px] rounded-full focus-within:bg-gradient-to-br from-violet-500 to-fuchsia-500 bg-black">
              <div className="bg-gray-100 flex rounded-full">
              <input type="text" name="search" id="" className="px-3 text-lg py-3 rounded-l-full flex-1 border-r focus:outline-none" placeholder="Search cryptocurrency..." />
              <button className="p-3 rounded-r-full hover:cursor-pointer hover:text-violet-700">
                <Icon icon="ri:search-2-fill" width="24" height="24" />
              </button>
              </div>
            </div>
          </div>

          <div className="font-light mt-24 flex items-center justify-center text-center hover:underline hover:cursor-pointer">
            <p>See all currencies</p> <Icon icon="fe:arrow-down" width="24" height="24" />
          </div>
          
        </div>

        <div className="p-12">
          <p className="text-2xl font-[600] text-violet-500">Featured</p>

          <div className="grid grid-cols-3 py-8 gap-8">
            <div className="border w-fit p-3">helo</div>
            <div className="border w-fit p-3">helo</div>
            <div className="border w-fit p-3">helo</div>
          </div>          
        </div>

        <div className="p-12">
          <p className="text-2xl font-[600] text-violet-500">{searchValue ? 'Search for "' + searchValue + '"': 'All Currencies'}</p>
        </div>
    </main>
  );
}
