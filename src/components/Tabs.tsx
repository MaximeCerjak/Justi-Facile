import React, { useState } from 'react';
import type { Category } from '../types';

interface Tab {
  id: Category;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs = ({ tabs }: TabsProps): React.ReactElement => {
  const [activeTab, setActiveTab] = useState<Category>(tabs[0].id);

  const handleKeyDown = (e: React.KeyboardEvent, tabId: Category): void => {
    const tabIds = tabs.map(tab => tab.id);
    const currentIndex = tabIds.indexOf(tabId);

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown': 
        { e.preventDefault();
        const nextIndex = (currentIndex + 1) % tabs.length;
        setActiveTab(tabIds[nextIndex]);
        break; }
      case 'ArrowLeft':
      case 'ArrowUp':
        { e.preventDefault();
        const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        setActiveTab(tabIds[prevIndex]);
        break; }
      case 'Home':
        { e.preventDefault();
        setActiveTab(tabIds[0]);
        break; }
      case 'End':
        { e.preventDefault();
        setActiveTab(tabIds[tabs.length - 1]);
        break; }
    }
  };

  return (
    <div className="bg-white">
      <div
        role="tablist"
        aria-label="Catégories juridiques"
        className="flex gap-2 mb-6"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            id={`tab-${tab.id}`}
            tabIndex={activeTab === tab.id ? 0 : -1}
            onClick={() => setActiveTab(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          hidden={activeTab !== tab.id}
          className={`
            py-6
            rounded-lg
            ${
              activeTab === tab.id 
                ? 'block' 
                : 'hidden'
            }
          `}
          tabIndex={0}
        >
          <div className="prose max-w-none">
            {tab.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tabs; 