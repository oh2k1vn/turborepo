interface StarRatingProps {
    rating: number;
}
  
export const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
    const stars = [...Array(5)];
  
    return (
        <div className="flex items-center gap-1">
            {stars.map((_, index) => {
            const starFill = 
                rating >= index + 1
                ? "full"
                : rating >= index + 0.5
                ? "half"
                : "empty";
    
            return (
                <svg
                    key={index}
                    className="w-5 h-5 md:w-6 md:h-6"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id={`half-fill-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="50%" stopColor="#FFB547" />
                        <stop offset="50%" stopColor="#E0E0E0" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M8.43625 1.35577C9.0554 0.0270975 10.9446 0.0270965 11.5637 1.35577L13.0026 4.4436C13.254 4.98311 13.7658 5.35492 14.3566 5.4273L17.7379 5.84158C19.1929 6.01983 19.7767 7.81657 18.7044 8.816L16.2123 11.1387C15.7769 11.5445 15.5814 12.1461 15.6952 12.7303L16.346 16.0742C16.6261 17.513 15.0977 18.6235 13.8159 17.9125L10.8368 16.2601C10.3163 15.9714 9.68372 15.9714 9.16321 16.2601L6.18415 17.9125C4.90227 18.6235 3.37388 17.513 3.65395 16.0742L4.30485 12.7303C4.41857 12.1461 4.2231 11.5445 3.78768 11.1387L1.29562 8.816C0.223307 7.81657 0.807103 6.01983 2.26207 5.84158L5.64342 5.4273C6.23421 5.35492 6.74596 4.98311 6.99736 4.4436L8.43625 1.35577Z"
                        fill={
                        starFill === "full"
                            ? "#FFB547"
                            : starFill === "half"
                            ? `url(#half-fill-${index})`
                            : "#E0E0E0"
                        }
                    />
                </svg>
            );
            })}
        </div>
    );
};
  