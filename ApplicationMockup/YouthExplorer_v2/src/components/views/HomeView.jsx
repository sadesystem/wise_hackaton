export const HomeView = ({
                             balance,
                             weeklyLimit,
                             weeklySpent,
                             savingsGoals,
                             recentTransactions,  // ← Add this to destructure it from props
                             setCurrentView,
                             setSelectedGoal
                         }) => {
    return (
        <div className="flex flex-col h-full">
            {/* Balance Card */}
            <div className="bg-[#9FE870] rounded-3xl p-6 m-4 shadow-lg">
                <div className="text-white text-sm font-medium mb-2">Your Balance</div>
                <div className="text-white text-5xl font-bold mb-4">£{balance.toFixed(2)}</div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-3">
                    <div className="text-white text-xs mb-1">This Week</div>
                    <div className="flex items-center justify-between mb-2">
                        <span
                            className="text-white text-sm font-medium">£{weeklySpent.toFixed(2)} of £{weeklyLimit.toFixed(2)}</span>
                        <span className="text-white text-xs">£{(weeklyLimit - weeklySpent).toFixed(2)} left</span>
                    </div>
                    <div className="bg-white/30 rounded-full h-2">
                        <div
                            className="bg-white rounded-full h-2 transition-all duration-500"
                            style={{width: `${(weeklySpent / weeklyLimit) * 100}%`}}
                        />
                    </div>
                </div>
            </div>

            {/* Goals Section */}
            <div className="px-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                    <h2 className="text-xl font-bold text-gray-800">My Goals 🎯</h2>
                </div>
                <div className="space-y-3">
                    {savingsGoals.slice(0, 2).map(goal => {
                        const progress = (goal.saved / goal.target) * 100;
                        return (
                            <button
                                key={goal.id}
                                onClick={() => {
                                    setSelectedGoal(goal);
                                    setCurrentView('goalDetail');
                                }}
                                className="w-full bg-white rounded-2xl p-4 shadow-md active:scale-95 transition-transform"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="text-3xl">{goal.emoji}</div>
                                        <div className="text-left">
                                            <div className="font-bold text-gray-800">{goal.name}</div>
                                            <div className="text-sm text-gray-500">£{goal.saved} of £{goal.target}</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-gray-800">{Math.round(progress)}%</div>
                                    </div>
                                </div>
                                <div className="bg-gray-200 rounded-full h-3">
                                    <div
                                        className={`${goal.color} rounded-full h-3 transition-all duration-500`}
                                        style={{width: `${progress}%`}}
                                    />
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Quick Look Section - Uses recentTransactions */}
            <div className="px-4 mb-4">
                <h2 className="text-xl font-bold text-gray-800 mb-3">Quick Look 👀</h2>
                <div className="grid grid-cols-2 gap-3">
                    <button
                        onClick={() => setCurrentView('history')}
                        className="bg-white rounded-2xl p-4 shadow-md active:scale-95 transition-transform"
                    >
                        <div className="w-8 h-8 text-purple-500 mb-2">📜</div>
                        <div className="font-bold text-gray-800 text-sm">Recent Buys</div>
                        <div className="text-xs text-gray-500">{recentTransactions.length} purchases</div>
                    </button>
                    <button
                        onClick={() => setCurrentView('achievements')}
                        className="bg-white rounded-2xl p-4 shadow-md active:scale-95 transition-transform"
                    >
                        <div className="w-8 h-8 text-yellow-500 mb-2">🏆</div>
                        <div className="font-bold text-gray-800 text-sm">Achievements</div>
                        <div className="text-xs text-gray-500">2 unlocked</div>
                    </button>
                </div>
            </div>
        </div>
    );
};