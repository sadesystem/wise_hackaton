import { useState } from 'react';
import { Header } from './components/layout/Header';
import { BottomNav } from './components/layout/BottomNav';
import { HomeView } from './components/views/HomeView';
import { AchievementsView } from './components/views/AchievementsView';
import { GoalDetailView } from './components/views/GoalDetailView';
import { GoalsView } from './components/views/GoalsView';
import { HistoryView } from './components/views/HistoryView';
import { LimitsView } from './components/views/LimitsView';
import { mockData } from './data/mockData';

export default function App() {
    const [currentView, setCurrentView] = useState('home');
    const [selectedGoal, setSelectedGoal] = useState(null);

    const renderView = () => {
        switch(currentView) {
            case 'home':
                return <HomeView
                    {...mockData}
                    setCurrentView={setCurrentView}
                    setSelectedGoal={setSelectedGoal}  // ADD THIS
                />;
            case 'limits':
                return <LimitsView {...mockData} />;
            case 'history':
                return <HistoryView {...mockData} />;
            case 'goals':
                return <GoalsView
                    {...mockData}
                    setCurrentView={setCurrentView}
                    setSelectedGoal={setSelectedGoal}  // ADD THIS
                />;
            case 'goalDetail':
                return <GoalDetailView
                    selectedGoal={selectedGoal}  // Change from 'goal' to 'selectedGoal'
                    setCurrentView={setCurrentView}
                />;
            case 'achievements':
                return <AchievementsView {...mockData} />;
            default:
                return <HomeView
                    {...mockData}
                    setCurrentView={setCurrentView}
                    setSelectedGoal={setSelectedGoal}  // ADD THIS
                />;
        }
    };

    return (
        <div className="max-w-md mx-auto bg-gray-50 min-h-screen flex flex-col">
            <Header />
            <div className="flex-1 overflow-y-auto pb-20">
                {renderView()}
            </div>
            <BottomNav currentView={currentView} setCurrentView={setCurrentView} />
        </div>
    );
}