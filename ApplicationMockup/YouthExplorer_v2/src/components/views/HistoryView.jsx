
export const HistoryView = ({
    recentTransactions,
    }) => {
    return (
        <div className="flex flex-col h-full">
            <div className="p-4">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">My Purchases 🛍️</h1>

                <div className="space-y-3">
                    {recentTransactions.map(transaction => (
                        <div key={transaction.id} className="bg-white rounded-2xl p-4 shadow-md">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="text-3xl">{transaction.emoji}</div>
                                    <div>
                                        <div className="font-bold text-gray-800">{transaction.name}</div>
                                        <div className="text-sm text-gray-500">{transaction.date}</div>
                                    </div>
                                </div>
                                <div
                                    className={`text-xl font-bold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-800'}`}>
                                    {transaction.amount > 0 ? '+' : ''}£{Math.abs(transaction.amount).toFixed(2)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

            };