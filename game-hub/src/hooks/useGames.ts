import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

// platforms of every game , xbox , ps5 ... we got from the get request
export interface Platform{ 
  id: number;
  name : string;
  slug : string;
} 

export interface Game {
    id: number;
    name: string;
    background_image : string;
    parent_platforms : {platform : Platform}[];
  }
  
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }
  
const useGames = ()=>{ // in every change we will render the gameslist
    const [games, setGame] = useState<Game[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => { // initial the get 

        const controller = new AbortController();

      apiClient
        .get<FetchGamesResponse>("/games" , {signal : controller.signal})
        .then((res) => setGame(res.data.results))
        .catch((err) =>{ if (err instanceof CanceledError)return;
        setError(err.message)});


return () =>  controller.abort();
    } , []);

    return {games , error };
}

export default useGames;