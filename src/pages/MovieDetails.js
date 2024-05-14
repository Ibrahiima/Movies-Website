import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import axiosInstance from "../apis/config";

export default function GameDetails() {
  const [gameDetails, setGameDetails] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(params);

  useEffect(() => {
    axiosInstance
      .get(`/gamehub/${params.id}`)
      .then((res) => setGameDetails(res.data))
      .catch((err) => navigate('/'));
  }, []);

  return (
    <>
      <h1>{gameDetails.title}</h1>
      <p>{gameDetails.description}</p>
    </>
  )
}
