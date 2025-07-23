import React from 'react'

const Header = () => {
    return (
        <header className='w-full p-4 bg-gray-100 flex items-center justify-between sticky top-0'>
            <div>Logo</div>
            <a href='/' target='_blank' className='px-2 py-1 border border-black rounded-xl hover:bg-gray-200'>Github</a>
        </header>
    )
}

export default Header