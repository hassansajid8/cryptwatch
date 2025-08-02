import { formatCurrency } from '@/lib/helpers';
import { CoinList } from '@/lib/types';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

interface ComponentProps {
    index: Number,
    data: CoinList,
}

const ListItem: React.FC<ComponentProps> = (props) => {
    const data = props.data;
    const index = props.index;

    const router  = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname()

    function open(){
        const params = new URLSearchParams(searchParams);
        params.set('showcoin', data.symbol);
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }

    return (
        <div onClick={open} className='p-6 bg-white rounded flex flex-col sm:flex-row sm:items-center gap-3 justify-between w-full hover:scale-101 transition hover:cursor-pointer'>
            <div className='flex items-center gap-3'>
                <div className='w-8 h-8'>
                    <img src={data.image} alt="image" />
                </div>
                <div>
                    <p className="text-sm font-light text-gray-600">{data.symbol}</p>
                    <p className="text-lg md:text-xl">{data.name}</p>
                </div>
            </div>
            <div>
                <p className="text-lg md:text-xl font-bold">{formatCurrency(data.current_price)}</p>
            </div>
        </div>
    )
}

export default ListItem