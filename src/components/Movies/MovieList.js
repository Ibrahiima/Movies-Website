import { useEffect, useState } from "react";
import GameCard from "./GameCard";
import axiosInstance from './../../apis/config';

function GamesList() {
  const [gamesArr, setGamesArr] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`/gamehub` , {
        params: {
          category: 'action'
        },
        headers: {
          'Accept-Language' : 'fr',
        }
      })
      .then((res) => setGamesArr(res.data))
      .catch((err) => console.log(err));

      // axios
      // .post("https://api.noroff.dev/api/v1/gamehub" , data , {params, headers} )
      // .then((res) => setGamesArr(res.data))
      // .catch((err) => console.log(err));
  }, []);

  const handleDeleteGame = (id) => {
    setGamesArr(gamesArr.filter((game) => game.id !== id));
  };

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {gamesArr.map((game) => {
        return (
          <div className="col">
            <GameCard gameItem={game} handleDelete={handleDeleteGame} />
          </div>
        );
      })}
    </div>
  );
}

export default GamesList;

