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

    const [savingsGoals, setSavingsGoals] = useState(mockData.savingsGoals);
    const [balance, setBalance] = useState(mockData.balance);


    const handleAddGoal = (newGoal) => {
        const goalWithId = {
            ...newGoal,
            id: Date.now()
        };
        setSavingsGoals([...savingsGoals, goalWithId]);
    };

    const handleAddMoney = (goalId, amount) => {
        // Check if user has enough balance
        if (amount > balance) {
            alert("Not enough balance!");
            return;
        }

        // Update goal
        setSavingsGoals(goals =>
            goals.map(goal =>
                goal.id === goalId
                    ? { ...goal, saved: goal.saved + amount }
                    : goal
            )
        );

        // Deduct from balance
        setBalance(prevBalance => prevBalance - amount);

        // Update selected goal if needed
        if (selectedGoal && selectedGoal.id === goalId) {
            setSelectedGoal(goal => ({
                ...goal,
                saved: goal.saved + amount
            }));
        }
    };

    const renderView = () => {
        switch(currentView) {
            case 'home':
                return <HomeView
                    {...mockData}
                    balance={balance}
                    savingsGoals={savingsGoals}
                    setCurrentView={setCurrentView}
                    setSelectedGoal={setSelectedGoal}
                />;
            case 'limits':
                return <LimitsView {...mockData} />;
            case 'history':
                return <HistoryView {...mockData} />;
            case 'goals':
                return <GoalsView
                    {...mockData}
                    savingsGoals={savingsGoals}
                    setCurrentView={setCurrentView}
                    setSelectedGoal={setSelectedGoal}
                    onAddGoal={handleAddGoal}
                />;
            case 'goalDetail':
                return <GoalDetailView
                    selectedGoal={selectedGoal}
                    setCurrentView={setCurrentView}
                    onAddMoney={handleAddMoney}
                    balance={balance}
                />;
            case 'achievements':
                return <AchievementsView {...mockData} />;
            default:
                return <HomeView
                    {...mockData}
                    balance={balance}
                    savingsGoals={savingsGoals}
                    setCurrentView={setCurrentView}
                    setSelectedGoal={setSelectedGoal}
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