import { useState } from 'react';

export const AddMoneyModal = ({ goal, onClose, onSave }) => {
    const [amount, setAmount] = useState('');

    const quickAmounts = [1, 5, 10, 20];

    const handleSave = () => {
        const value = parseFloat(amount);
        if (value > 0) {
            onSave(value);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-3xl p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Add Money</h2>
                    <button onClick={onClose} className="text-gray-500 text-3xl leading-none">&times;</button>
                </div>

                <div className={`${goal.color} rounded-2xl p-4 mb-6 text-center`}>
                    <div className="text-4xl mb-2">{goal.emoji}</div>
                    <div className="text-white font-bold text-lg">{goal.name}</div>
                    <div className="text-white text-sm">Currently saved: £{goal.saved.toFixed(2)}</div>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Amount to Add (£)</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="0.00"
                        step="0.01"
                        className="w-full p-4 text-2xl text-center border-2 border-gray-300 rounded-xl focus:border-emerald-500 outline-none"
                    />
                </div>

                <div className="mb-6">
                    <div className="text-sm font-medium text-gray-700 mb-2">Quick Add</div>
                    <div className="grid grid-cols-4 gap-2">
                        {quickAmounts.map(amt => (
                            <button
                                key={amt}
                                onClick={() => setAmount(amt.toString())}
                                className="bg-emerald-100 text-emerald-700 rounded-xl p-3 font-bold hover:bg-emerald-200 transition-colors"
                            >
                                £{amt}
                            </button>
                        ))}
                    </div>
                </div>

                <button
                    onClick={handleSave}
                    disabled={!amount || parseFloat(amount) <= 0}
                    className="w-full bg-emerald-600 text-white rounded-xl p-4 font-bold disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                    Add £{amount || '0.00'} 💰
                </button>
            </div>
        </div>
    );
};