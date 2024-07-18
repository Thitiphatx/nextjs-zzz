import React, { useEffect, useState } from 'react';

interface TabProps {
    children: React.ReactNode;
    setCurrentTab: (tab: number) => void;
    currentTab: number;
}

export const PriceNavigation = ({ children, setCurrentTab, currentTab }: TabProps) => {
    const [activeTab, setActiveTab] = useState(currentTab || 0); // Set initial active tab
    
    const handleClick = (index: number) => {
        setActiveTab(index);
        if (setCurrentTab) {
            setCurrentTab(index); // Pass the selected tab index to the parent component if provided
        }
    };
    
    return (
        <div className="bg-gradient-to-t from-zinc-900 to-zinc-700 p-2 price-card-bg ring-[5px] ring-black">
        <ul className="flex gap-2">
            {React.Children.map(children, (child, index) => (
                <li key={index} className={`${activeTab === index ? "ring-[5px]" : ""} h-44 w-20 rounded-full cursor-pointer bg-black active:ring-[5px] ring-yellow-300 transition`} onClick={() => handleClick(index)}>
                    {child}
                </li>
            ))}
        </ul>
        </div>
    );
};
