'use client'

import ListItem from "@/components/ListItem";
import { CoinList } from "@/lib/types";
import { Icon } from "@iconify/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export default function Home() {
  let searchValue;
  let [pageCount, set_pageCount] = useState(0);

  const router = useRouter();
  const searchParams = useSearchParams();

  const [coins, set_coins] = useState<CoinList[]>();

  searchValue = searchParams.get('search');

  useEffect(() => {
    getCoinsList(pageCount+1);
    set_pageCount(pageCount + 1);
  }, []);

  async function getCoinsList(page: Number) {
    const response = await fetch("/api/list", {
      headers: {
        "page": page.toString(),
      }
    });
    const data = await response.json();
    set_coins(data.data);

    console.log(data.data);
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <main className="w-full bg-gray-100">
      <div className="flex flex-col items-center justify-center px-4 pt-8 pb-4 border-b">
        <h1 className="text-3xl sm:text-4xl md:text-5xl max-w-156 text-center font-bold text-transparent bg-clip-text bg-gradient-to-tr from-violet-500 to-fuchsia-500 inline-block pt-16">
          Get cryptocurrency information all on<br />one platform.
          <p className="text-base text-center text-violet-700 font-light my-6">Get all info on your favourite crypto coin for free.</p>
        </h1>

        <div className="md:w-108">
          <div className="p-[2px] rounded-full focus-within:bg-gradient-to-br from-violet-500 to-fuchsia-500 bg-black">
            <div className="bg-gray-100 flex rounded-full">
              <input type="text" name="search" id="" className="px-3 text-lg py-3 rounded-l-full flex-1 border-r focus:outline-none" autoComplete="off" placeholder="Search crypto coin..." />
              <button className="p-3 rounded-r-full hover:cursor-pointer hover:text-violet-700">
                <Icon icon="ri:search-2-fill" width="24" height="24" />
              </button>
            </div>
          </div>
        </div>

        <a href="#content" className="font-light mt-24 flex items-center justify-center text-center hover:underline hover:cursor-pointer">
          <p>See all currencies</p> <Icon icon="fe:arrow-down" width="24" height="24" />
        </a>

      </div>

      <div className="p-12">
        <p className="text-2xl font-[600] text-violet-500">Featured</p>

        <div className="grid grid-cols-3 py-8 gap-8">
          <div className="border w-fit p-3">helo</div>
          <div className="border w-fit p-3">helo</div>
          <div className="border w-fit p-3">helo</div>
        </div>
      </div>

      <div className="p-12" id="content">
        <p className="text-2xl font-[600] text-violet-500 mb-8">{searchValue ? 'Search for "' + searchValue + '"' : 'All Currencies'}</p>

        <div className="flex items-top flex-col-reverse md:flex-row gap-4">
          <div className="w-full flex flex-col gap-4 md:flex-2/3">
            {coins?.map((coin, index) => (
              <ListItem data={coin} index={index} key={index} />
            ))}

            <div className="w-full p-3 text-center flex items-center justify-center gap-3">
              <button className="rotate-90 cursor-pointer hover:bg-gray-200 rounded-full p-1">
                <Icon icon="fe:arrow-down" width="24" height="24" />
              </button>
              <p>Page {pageCount}</p>
              <button className="rotate-270 cursor-pointer hover:bg-gray-200 rounded-full p-1">
                <Icon icon="fe:arrow-down" width="24" height="24" />
              </button>
            </div>
          </div>

          <details className="shadow-lg md:flex-1/3 bg-white rounded p-2 h-fit group sticky top-2" open>

            <summary className="list-none p-1 flex flex-wrap items-center justify-between hover:cursor-pointer focus-visible:outline-none focus-visible:ring focus-visible:ring rounded">
              <p className="flex-1">Filters</p>
              <div className="hover:bg-gray-200 rounded-full cursor-pointer p-2 rotate-270 group-open:rotate-360 transition-transform">
                <Icon icon="fe:arrow-down" width="24" height="24" />
              </div>
            </summary>

            <div className="py-3 flex flex-col gap-4">
            <input type="text" name="search" id="" className="px-3 text-sm py-3 rounded-full outline-none w-full bg-gray-200 " autoComplete="off" placeholder="Search..." />

            <button className="w-full p-2 bg-gradient-to-tr from-violet-500 to-violet-600 rounded text-white cursor-pointer hover:to-violet-500">Search</button>
            </div>


          </details>
        </div>
      </div>
    </main>
    </Suspense>
  );
}
