import React from 'react'

const Header = () => {
    return (
        <header className='w-full p-4 bg-gray-200 flex items-center justify-between'>
            <div>Logo</div>
            <a href='https://github.com/hassansajid8/cryptwatch' target='_blank' className='px-2 py-1 border border-black rounded-xl hover:bg-gray-300'>Github</a>
        </header>
    )
}

export default Header