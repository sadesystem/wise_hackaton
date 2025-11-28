import { useState } from 'react';
import { Plus } from '../icons/Plus';
import { AddGoalModal } from '../modals/AddGoalModal';


export const GoalsView = ({
    savingsGoals,
    setCurrentView,
    setSelectedGoal,
    onAddGoal

}) => {
    const [showAddModal, setShowAddModal] = useState(false);
    return (
        <div className="flex flex-col h-full">

            <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold text-gray-800">Saving Goals 🎯</h1>
                    <button
                        onClick={() => setShowAddModal(true)}
                        className="bg-emerald-600 text-white rounded-full p-3 shadow-lg active:scale-95 transition-transform"
                    >
                        <Plus className="w-6 h-6"/>
                    </button>
                </div>
                <div className="space-y-4">
                    {savingsGoals.map(goal => {
                        const progress = (goal.saved / goal.target) * 100;
                        return (
                            <button
                                key={goal.id}
                                onClick={() => {
                                    setSelectedGoal(goal);
                                    setCurrentView('goalDetail');
                                }}
                                className="w-full bg-white rounded-2xl p-5 shadow-md active:scale-95 transition-transform"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="text-4xl">{goal.emoji}</div>
                                        <div className="text-left">
                                            <div className="font-bold text-gray-800 text-lg">{goal.name}</div>
                                            <div className="text-sm text-gray-500">Target: £{goal.target}</div>
                                        </div>
                                    </div>
                                    <div className="text-3xl font-bold text-gray-800">{Math.round(progress)}%</div>
                                </div>
                                <div className="bg-gray-200 rounded-full h-4 mb-2">
                                    <div
                                        className={`${goal.color} rounded-full h-4 transition-all duration-500`}
                                        style={{width: `${progress}%`}}
                                    />
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Saved: £{goal.saved.toFixed(2)}</span>
                                    <span
                                        className="font-bold text-blue-600">Need: £{(goal.target - goal.saved).toFixed(2)}</span>
                                </div>
                            </button>
                        );
                    })}
                </div>

                <div className="bg-green-50 rounded-2xl p-4 border-2 border-green-200 mt-4">
                    <div className="text-3xl mb-2">🌟</div>
                    <div className="font-bold text-gray-800 mb-1">Keep saving!</div>
                    <div className="text-sm text-gray-600">
                        Every time you don't spend, you're closer to your goals. You've got this! 💪
                    </div>
                </div>
                {showAddModal && (
                    <AddGoalModal
                        onClose={() => setShowAddModal(false)}
                        onSave={(newGoal) => {
                            onAddGoal(newGoal);
                            setShowAddModal(false);
                        }}
                    />
                )}
            </div>
        </div>
    )
}