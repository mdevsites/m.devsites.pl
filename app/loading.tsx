export default function Loading() {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <div className="relative">
                <div className="w-16 h-16 rounded-full border-4 border-white/10 border-t-purple-500 animate-spin"></div>
                <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-transparent border-b-pink-500 animate-spin-slow opacity-50"></div>
            </div>
        </div>
    );
}
