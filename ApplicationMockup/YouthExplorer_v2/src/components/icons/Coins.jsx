export const Coins = ({ className }) => (
    <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
    >
        {/* Outer coin */}
        <circle cx="12" cy="12" r="8" strokeWidth={2} />
        {/* Inner coin detail */}
        <circle cx="12" cy="12" r="4" strokeWidth={2} />
        {/* Small offset coin to suggest stacking */}
        <circle cx="17" cy="7" r="3" strokeWidth={2} />
    </svg>
);
