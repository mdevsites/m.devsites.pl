interface HamburgerIconProps {
    isOpen: boolean;
}

export const HamburgerIcon = ({ isOpen }: HamburgerIconProps) => {
    return (
        <div className="relative w-8 h-8 flex flex-col justify-center items-center">
            {/* Top Line */}
            <span
                className={`absolute h-0.5 w-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2.5'
                    }`}
                style={{
                    boxShadow: isOpen ? '0 0 10px rgba(236, 72, 153, 0.6)' : 'none'
                }}
            />

            {/* Middle Line */}
            <span
                className={`absolute h-0.5 w-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transition-all duration-200 ease-in-out ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                    }`}
            />

            {/* Bottom Line */}
            <span
                className={`absolute h-0.5 w-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2.5'
                    }`}
                style={{
                    boxShadow: isOpen ? '0 0 10px rgba(236, 72, 153, 0.6)' : 'none'
                }}
            />
        </div>
    );
};
