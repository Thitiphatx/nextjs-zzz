import { IconArrowDownSFill, IconArrowUpSFill } from '@/icons';
import React, { useEffect, useState } from 'react';

interface TabProps {
    children: React.ReactNode;
    setCurrentTab: (tab: number) => void;
    currentTab: number;
}

export const VerticalTab = ({ children, setCurrentTab, currentTab }: TabProps) => {
    const [activeTab, setActiveTab] = useState(currentTab || 0); // Set initial active tab
    
    const handleClick = (index: number) => {
        setActiveTab(index);
        if (setCurrentTab) {
            setCurrentTab(index); // Pass the selected tab index to the parent component if provided
        }
    };
    
    return (
        <div className="relative ring-[5px] ring-zinc-700 rounded-3xl bg-black bg-opacity-50 min-h-[calc(100vh-11rem)]">
        <ul className="flex flex-col p-1">
            <div className="rounded-full bg-zinc-800 flex flex-col items-center text-black mb-3">
                <IconArrowUpSFill size="3rem"/>
            </div>
                {React.Children.map(children, (child, index) => (
                    <li
                        key={index}
                        className={`p-5 rounded-lg cursor-pointer font-extrabold ${activeTab === index ? `animate-bg-color-loop text-black text-xl font-extrabold italic` : ""}`}
                        onClick={() => handleClick(index)}
                    >
                    {child}
                    </li>
                ))}
            <div className="absolute w-[calc(100%-0.5rem)] bottom-1 rounded-full bg-zinc-800 flex flex-col items-center text-black mt-3">
                <IconArrowDownSFill size="3rem"/>
            </div>
        </ul>
        </div>
    );
};
