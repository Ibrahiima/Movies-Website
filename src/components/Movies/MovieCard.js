import { useLocation, useNavigate } from "react-router-dom";

function GameCard(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const { gameItem , handleDelete } = props;
  console.log(location)
  return (
    <div className="card h-100">
      <img src={gameItem.image} className="card-img-top" alt="..." />
      <div className="card-body">
        {/* {game.onSale && <span class="badge text-bg-success">On sale</span>} */}
        {gameItem.onSale ? (
          <span class="badge text-bg-success">On sale</span>
        ) : (
          <span class="badge text-bg-secondary">Original Price</span>
        )}
        <h5 className="card-title">{gameItem.title}</h5>
        <p className="card-text">{gameItem.description}</p>
        <button className="btn btn-primary" onClick={() => navigate(`/game-details/${gameItem.id}`)}>View</button>
        <button className="btn btn-danger mx-2" onClick={() => handleDelete(gameItem.id)}>Delete Game</button>
      </div>
    </div>
  );
}

export default GameCard;
