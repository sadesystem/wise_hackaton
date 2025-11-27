export const GoalsView = ({
                              achievements,
                          }) => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">My Achievements 🏆</h1>

            <div className="grid grid-cols-2 gap-4">
                {achievements.map(achievement => (
                    <div
                        key={achievement.id}
                        className={`rounded-2xl p-5 shadow-md text-center ${
                            achievement.unlocked
                                ? 'bg-gradient-to-br from-yellow-400 to-orange-500'
                                : 'bg-gray-100'
                        }`}
                    >
                        <div className={`text-5xl mb-2 ${!achievement.unlocked && 'opacity-30 grayscale'}`}>
                            {achievement.emoji}
                        </div>
                        <div className={`font-bold ${achievement.unlocked ? 'text-white' : 'text-gray-400'}`}>
                            {achievement.name}
                        </div>
                        {achievement.unlocked && (
                            <div className="text-white text-xs mt-1">✓ Unlocked!</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};