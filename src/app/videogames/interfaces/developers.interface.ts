export interface Developer {
    id:         number;
    name:       string;
    videogames: Videogame[];
}

export interface Videogame {
    name: string;
    id:   string;
}
