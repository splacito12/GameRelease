function GameCard({ title, genre, releaseDate, site, description, link, image, color }){
    return (
        <div className="card" style={{borderTop: `4px solid ${color}` }}>
            <div className="card-color-bar" style={{ backgroundColor: color}} />
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p> Genre: {genre}</p>
            <p> Release Date: {releaseDate}</p>
            <p>Description: {description}</p>
            <a href={link} target="_blank" rel="noreferrer">
                Visit the game on {site}! 
            </a>
        </div>
    );
}

export default GameCard;