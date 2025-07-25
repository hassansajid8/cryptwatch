import { formatCurrency } from '@/lib/helpers';
import { CoinList } from '@/lib/types'
import React, { useEffect, useState } from 'react'
import { Icon } from "@iconify/react"
import { Smokum } from 'next/font/google';

interface ComponentProps {
    data: CoinList,
}

const FeaturedItem: React.FC<ComponentProps> = (props) => {
    const coin = props.data;

    /* const [chart, setchart] = useState();

    useEffect(() => {
        getChartData();
    }, []);

    async function getChartData(){
        const response = await fetch("/api/chart", {
            headers: {
                "id": coin.id,
                "days": "1",
            }
        });

        const data = await response.json();
        console.log(data);
        setchart(data);
    } */

    return (
        <div className='p-4 bg-white rounded border min-h-64 shrink-0 w-51 sm:w-64 md:w-72 snap-center transition'>
            <div className='flex items-center gap-4'>
                <div className='flex-1'>
                    <p className="text-sm text-gray-500">{coin.symbol}</p>
                    <p className="text-lg">{coin.name}</p>
                </div>
                <img src={coin.image} className='w-12' alt="" />
            </div>

            <div className='my-6 flex flex-col  gap-2 justify-between'>
                <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-violet-500">{formatCurrency(coin.current_price)}</p>
                {coin.price_change_percentage_24h > 0 ?
                    (
                        <div className='flex items-center gap-2 text-green-500'>
                        <p className="text-sm">{(coin.price_change_percentage_24h).toFixed(2)}%</p>
                        <Icon className='rotate-180' icon="teenyicons:down-solid" width="15" height="15" />
                        </div>
                        
                    )
                    :
                    (
                        <div className='flex items-center gap-2 text-red-500'>
                        <Icon className='' icon="teenyicons:down-solid" width="15" height="15" />
                        <p className="text-xs">{(coin.price_change_percentage_24h).toFixed(2)}%</p>
                        </div>
                    )
                }
            </div>

            <div>
                <p className='flex items-center gap-4 text-sm'>
                    <span>24h High</span>
                    <span>{formatCurrency((coin.high_24h).toString())}</span>
                </p>

                <p className='flex items-center gap-4 text-sm'>
                    <span>24h Low</span>
                    <span>{formatCurrency((coin.low_24h).toString())}</span>
                </p>
            </div>

        </div>
    )
}

export default FeaturedItem