
export default function Button({ onClick, children, className = "" }) {
    return (
        <button
            onClick={onClick}
            className={`border border-primary text-primary bg-rose-100 hover:bg-rose-200 rounded-sm px-4 py-2 font-medium mt-6 transition-colors duration-300 ${className}`}>
            {children}
        </button>
    )
}