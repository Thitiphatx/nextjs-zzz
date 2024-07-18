import React, { useEffect, useState } from 'react';

interface TabProps {
    children: React.ReactNode;
    setCurrentTab: (tab: number) => void;
    currentTab: number;
}

export const HorizontalTab = ({ children, setCurrentTab, currentTab }: TabProps) => {
    const [activeTab, setActiveTab] = useState(currentTab || 0); // Set initial active tab
    
    const handleClick = (index: number) => {
        setActiveTab(index);
        if (setCurrentTab) {
            setCurrentTab(index); // Pass the selected tab index to the parent component if provided
        }
    };
    
    const activeClass = (index: number) => {
        if (index === 0) {
            return `activeTab-l`;
        } else if (index === React.Children.toArray.length + 1) {
            return `activeTab-r`;
        } else {
            return `activeTab`;
        }
    };
    
    return (
        <div className="ring-[5px] ring-zinc-700 rounded-full">
        <ul className="flex gap-10">
        {React.Children.map(children, (child, index) => (
            <li
                key={index}
                className={`py-2 px-5 cursor-pointer ${activeTab === index ? activeClass(index) : ""}`}
                onClick={() => handleClick(index)}
            >
            {child}
            </li>
        ))}
        </ul>
        </div>
    );
};
