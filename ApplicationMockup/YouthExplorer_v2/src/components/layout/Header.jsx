import { Wise } from '../icons/WiseLogo';

export const Header = () => {
    return (
        <div className="bg-white shadow-sm p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <Wise className="w-6 h-6 text-green-500" />
                <h1 className="text-xl font-bold text-gray-800">Youth Explorer</h1>
            </div>
            <div className="text-2xl">👋</div>
        </div>
    );
};