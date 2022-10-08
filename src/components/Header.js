import React from 'react';

const Header = () => {
    return (
        <div className="w-full px-3 py-3 flex items-center justify-center bg-slate-500 shadow-md">
            <h1 className="text-white text-xl font-bold md:text-4xl">
                <span className="text-orange-500 italic">O</span>pen
                <span className="text-orange-500 italic">W</span>eather{' '}
                <span className="text-orange-500 italic">A</span>pp
            </h1>
        </div>
    );
};

export default Header;
