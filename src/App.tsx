import React, { useState } from 'react';
import MainTab from './components/MainTab';
import ExampleTab from './components/ExampleTab';
import PrivacyPolicyTab from './components/PrivacyPolicyTab';
import DeletionRequestTab from './components/DeletionRequestTab';
import DarkModeToggle from './components/DarkModeToggle';

const TABS = [
  { label: 'Main', component: <MainTab /> },
  { label: 'Example', component: <ExampleTab /> },
];
const EXTRA_TABS = [
  { label: 'Privacy Policy' },
  { label: 'Request Deletion' },
];

function App() {
  const [tab, setTab] = useState(0);
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 relative">
      <DarkModeToggle />
      <nav className="flex justify-center mb-8 gap-2 flex-wrap">
        {[...TABS, ...EXTRA_TABS].map((t, i) => (
          <button
            key={t.label}
            onClick={() => setTab(i)}
            data-tab={t.label}
            className={`px-5 py-2 rounded-t-lg font-semibold border-b-2 transition text-sm
              ${tab === i ? 'border-blue-600 text-blue-600 dark:text-blue-400 bg-white dark:bg-gray-800' : 'border-transparent text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800'}`}
          >
            {t.label}
          </button>
        ))}
      </nav>
      <main className="max-w-6xl mx-auto">
        {tab === 2 ? <PrivacyPolicyTab onRequestDeletion={() => setTab(3)} /> :
         tab === 3 ? <DeletionRequestTab /> :
         TABS[tab].component}
      </main>
    </div>
  );
}

export default App;
