'use client';
import React from 'react'
import { Icon } from '@iconify/react'
import { usePathname, useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation';

const Details = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    function close(){
        const params = new URLSearchParams(searchParams);
        params.delete('showcoin');
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }

    return (
        <div className='w-full h-screen fixed top-0 z-50 backdrop-filter backdrop-blur backdrop-opacity-75 p-6 md:p-12'>
            <div className='w-full h-full rounded bg-white p-3 shadow-lg'>
                <div className='pb-2 border-b border-gray-300 flex items-center justify-between'>
                    <div className='flex-1'>
                        <p className="text-md text-violet-500 font-[600]">Coin Details</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <button className='cursor-pointer hover:text-blue-500'>
                            <Icon icon="ic:round-bookmark" width="24" height="24" />
                        </button>
                        <button onClick={close} className='cursor-pointer hover:bg-red-300 rounded-full'>
                            <Icon icon="zondicons:close-outline" width="20" height="20" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details