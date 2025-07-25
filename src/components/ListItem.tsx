import { formatCurrency } from '@/lib/helpers';
import { CoinList } from '@/lib/types';
import React from 'react'

interface ComponentProps {
    index: Number,
    data: CoinList,
}

const ListItem: React.FC<ComponentProps> = (props) => {

    const data = props.data;
    const index = props.index;

    return (
        <div className='p-6 bg-white rounded flex flex-col sm:flex-row sm:items-center gap-3 justify-between w-full hover:scale-101 transition hover:cursor-pointer'>
            <div>
                <p className="text-sm font-light text-gray-600">{data.symbol}</p>
                <p className="text-xl md:text-2xl">{data.name}</p>
            </div>
            <div>
                <p className="text-xl md:text-2xl font-bold">{formatCurrency(data.current_price)}</p>
            </div>            
        </div>
    )
}

export default ListItem