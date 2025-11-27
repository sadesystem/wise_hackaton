import { Home } from '../icons/Home';
import { TrendingUp } from '../icons/TrendingUp';
import { History } from '../icons/History';
import { Target } from '../icons/Target';

export const BottomNav = ({ currentView, setCurrentView }) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 px-2 py-3 flex justify-around shadow-lg">
            <button
                onClick={() => setCurrentView('home')}
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
                    currentView === 'home' ? 'bg-green-100' : ''
                }`}
            >
                <Home className={`w-6 h-6 ${currentView === 'home' ? 'text-green-600' : 'text-gray-400'}`} />
                <span className={`text-xs font-medium ${currentView === 'home' ? 'text-green-600' : 'text-gray-500'}`}>
                    Home
                </span>
            </button>

            <button
                onClick={() => setCurrentView('limits')}
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
                    currentView === 'limits' ? 'bg-blue-100' : ''
                }`}
            >
                <TrendingUp className={`w-6 h-6 ${currentView === 'limits' ? 'text-blue-600' : 'text-gray-400'}`} />
                <span className={`text-xs font-medium ${currentView === 'limits' ? 'text-blue-600' : 'text-gray-500'}`}>
                    Limits
                </span>
            </button>

            <button
                onClick={() => setCurrentView('history')}
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
                    currentView === 'history' ? 'bg-purple-100' : ''
                }`}
            >
                <History className={`w-6 h-6 ${currentView === 'history' ? 'text-purple-600' : 'text-gray-400'}`} />
                <span className={`text-xs font-medium ${currentView === 'history' ? 'text-purple-600' : 'text-gray-500'}`}>
                    History
                </span>
            </button>

            <button
                onClick={() => setCurrentView('goals')}
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
                    currentView === 'goals' ? 'bg-pink-100' : ''
                }`}
            >
                <Target className={`w-6 h-6 ${currentView === 'goals' ? 'text-pink-600' : 'text-gray-400'}`} />
                <span className={`text-xs font-medium ${currentView === 'goals' ? 'text-pink-600' : 'text-gray-500'}`}>
                    Goals
                </span>
            </button>
        </div>
    );
};