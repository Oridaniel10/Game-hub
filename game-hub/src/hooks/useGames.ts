
import useData from "./useData";

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
    metacritic:number;
  }
  

const useGames = ()=> useData<Game>('/games')

export default useGames;