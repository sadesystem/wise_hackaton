export const GoalsView = ({
    setCurrentView,
    selectedGoal,

}) => {
    if (!selectedGoal) return null;
    const progress = (selectedGoal.saved / selectedGoal.target) * 100;
    const remaining = selectedGoal.target - selectedGoal.saved;
return(
    <div className="p-4">
        <button
            onClick={() => setCurrentView('goals')}
            className="mb-4 flex items-center gap-2 text-blue-600 font-medium"
        >
            <ArrowLeft className="w-5 h-5" />
            Back to Goals
        </button>

        <div className={`${selectedGoal.color} rounded-3xl p-6 mb-6 shadow-lg`}>
            <div className="text-6xl mb-3 text-center">{selectedGoal.emoji}</div>
            <h1 className="text-2xl font-bold text-white text-center mb-2">{selectedGoal.name}</h1>
            <div className="text-white text-center text-lg">Target: £{selectedGoal.target}</div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md mb-4">
            <div className="text-center mb-4">
                <div className="text-5xl font-bold text-gray-800 mb-1">£{selectedGoal.saved.toFixed(2)}</div>
                <div className="text-gray-500">Saved so far</div>
            </div>

            <div className="bg-gray-200 rounded-full h-6 mb-3">
                <div
                    className={`${selectedGoal.color} rounded-full h-6 transition-all duration-500 flex items-center justify-center`}
                    style={{ width: `${progress}%` }}
                >
                    {progress > 20 && (
                        <span className="text-white text-sm font-bold">{Math.round(progress)}%</span>
                    )}
                </div>
            </div>

            <div className="flex justify-between items-center">
                <div>
                    <div className="text-2xl font-bold text-red-600">£{remaining.toFixed(2)}</div>
                    <div className="text-sm text-gray-500">Still to save</div>
                </div>
                <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{Math.round(progress)}%</div>
                    <div className="text-sm text-gray-500">Complete</div>
                </div>
            </div>
        </div>

        <div className="bg-purple-50 rounded-2xl p-5 border-2 border-purple-200">
            <div className="text-3xl mb-2">💭</div>
            <div className="font-bold text-gray-800 mb-2">Did you know?</div>
            <div className="text-sm text-gray-600 mb-3">
                If you save £{(remaining / 4).toFixed(2)} each week, you'll reach your goal in about 4 weeks!
            </div>
            <div className="text-xs text-gray-500">
                Ask your parents about ways you can earn or save more money! 🌟
            </div>
        </div>
    </div>
);
}