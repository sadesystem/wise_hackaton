import React from 'react';
import Home from '../icons/Home';
import TrendingUp from '../icons/TrendingUp';
import History from '../icons/History';
import Target from '../icons/Target';

const BottomNav = ({ currentView, setCurrentView }) => {
    const navItems = [
        { id: 'home', label: 'Home', icon: Home, activeColor: 'green' },
        { id: 'limits', label: 'Limits', icon: TrendingUp, activeColor: 'blue' },
        { id: 'history', label: 'History', icon: History, activeColor: 'purple' },
        { id: 'goals', label: 'Goals', icon: Target, activeColor: 'pink' },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 px-2 py-3 flex justify-around shadow-lg">
            {navItems.map(({ id, label, icon: Icon, activeColor }) => (
                <button
                    key={id}
                    onClick={() => setCurrentView(id)}
                    className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
                        currentView === id ? `bg-${activeColor}-100` : ''
                    }`}
                >
                    <Icon
                        className={`w-6 h-6 ${
                            currentView === id ? `text-${activeColor}-600` : 'text-gray-400'
                        }`}
                    />
                    <span
                        className={`text-xs font-medium ${
                            currentView === id ? `text-${activeColor}-600` : 'text-gray-500'
                        }`}
                    >
            {label}
          </span>
                </button>
            ))}
        </div>
    );
};

export default BottomNav;
