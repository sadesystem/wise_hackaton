export const LimitsView = ({
    weeklyLimit,
    weeklySpent,
    monthlyLimit,
    monthlySpent,

}) => { return (
    <div className="flex flex-col h-full">
        <div className="p-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">My Spending Limits 💳</h1>

            <div className="bg-white rounded-2xl p-5 shadow-md mb-4">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                        <div className="text-2xl">📅</div>
                        <div className="font-bold text-gray-800">This Week</div>
                    </div>
                    <div className="text-right">
                        <div className="text-sm text-gray-500">Limit</div>
                        <div className="font-bold text-gray-800">£{weeklyLimit.toFixed(2)}</div>
                    </div>
                </div>
                <div className="bg-gray-200 rounded-full h-4 mb-2">
                    <div
                        className="bg-[#320707] rounded-full h-4 transition-all duration-500"
                        style={{width: `${(weeklySpent / weeklyLimit) * 100}%`}}
                    />
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Spent: £{weeklySpent.toFixed(2)}</span>
                    <span className="font-bold text-green-600">Left: £{(weeklyLimit - weeklySpent).toFixed(2)}</span>
                </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-md mb-4">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                        <div className="text-2xl">📆</div>
                        <div className="font-bold text-gray-800">This Month</div>
                    </div>
                    <div className="text-right">
                        <div className="text-sm text-gray-500">Limit</div>
                        <div className="font-bold text-gray-800">£{monthlyLimit.toFixed(2)}</div>
                    </div>
                </div>
                <div className="bg-gray-200 rounded-full h-4 mb-2">
                    <div
                        className="bg-[#3A341C] rounded-full h-4 transition-all duration-500"
                        style={{width: `${(monthlySpent / monthlyLimit) * 100}%`}}
                    />
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Spent: £{monthlySpent.toFixed(2)}</span>
                    <span className="font-bold text-green-600">Left: £{(monthlyLimit - monthlySpent).toFixed(2)}</span>
                </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-4 border-2 border-blue-200">
                <div className="text-3xl mb-2">💡</div>
                <div className="font-bold text-gray-800 mb-1">Good to know!</div>
                <div className="text-sm text-gray-600">
                    Your parents set these limits to help you learn about money. If you need more, ask them nicely! 😊
                </div>
            </div>
        </div>
    </div>
)
        }