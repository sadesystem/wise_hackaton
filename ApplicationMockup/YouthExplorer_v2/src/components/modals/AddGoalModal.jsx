import { useState } from 'react';

export const AddGoalModal = ({ onClose, onSave }) => {
    const [name, setName] = useState('');
    const [target, setTarget] = useState('');
    const [emoji, setEmoji] = useState('🎯');
    const [color, setColor] = useState('bg-emerald-500');

    const emojis = ['🚲', '🎮', '📱', '🎸', '⚽', '📚', '🎨', '🏀', '🎧', '⌚'];
    const colors = [
        { name: 'Orange', value: 'bg-[#FFC091]' },
        { name: 'Yellow', value: 'bg-[#FFEB69]' },
        { name: 'Blue', value: 'bg-[#A0E1E1]' },
        { name: 'Green', value: 'bg-[#9FE870]' },
        { name: 'Pink', value: 'bg-[#FFD7EF]' },
        { name: 'Forest', value: 'bg-[#163300]' }
    ];

    const handleSave = () => {
        if (name && target && parseFloat(target) > 0) {
            onSave({
                name,
                target: parseFloat(target),
                saved: 0,
                emoji,
                color
            });
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-3xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">New Goal</h2>
                    <button onClick={onClose} className="text-gray-500 text-3xl leading-none">&times;</button>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Goal Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g., New Bike"
                            className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Target Amount (£)</label>
                        <input
                            type="number"
                            value={target}
                            onChange={(e) => setTarget(e.target.value)}
                            placeholder="0.00"
                            step="0.01"
                            className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Choose an Emoji</label>
                        <div className="grid grid-cols-5 gap-2">
                            {emojis.map(em => (
                                <button
                                    key={em}
                                    onClick={() => setEmoji(em)}
                                    className={`text-3xl p-3 rounded-xl transition-all ${
                                        emoji === em ? 'bg-emerald-100 scale-110' : 'bg-gray-100'
                                    }`}
                                >
                                    {em}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Choose a Color</label>
                        <div className="grid grid-cols-3 gap-2">
                            {colors.map(c => (
                                <button
                                    key={c.value}
                                    onClick={() => setColor(c.value)}
                                    className={`p-3 rounded-xl font-medium transition-all ${
                                        color === c.value ? 'ring-4 ring-gray-400 scale-105' : ''
                                    } ${c.value} text-white`}
                                >
                                    {c.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <button
                    onClick={handleSave}
                    disabled={!name || !target || parseFloat(target) <= 0}
                    className="w-full bg-emerald-600 text-white rounded-xl p-4 font-bold mt-6 disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                    Create Goal 🎯
                </button>
            </div>
        </div>
    );
};