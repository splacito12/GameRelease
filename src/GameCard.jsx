function GameCard({ title, genre, releaseDate, site, link, image }){
    return (
        <div className="card">

            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p> Genre: {genre}</p>
            <p> Release Date: {releaseDate}</p>
            <a href={link} target="_blank" rel="noreferrer">
                Visit the game on {site}  ➤ 
            </a>
        </div>
    );
}

export default GameCard;