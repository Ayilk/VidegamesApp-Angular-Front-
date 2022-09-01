export interface Game {
    _id?:         string;
    name:        string;
    description: string;
    developers:  string[];
    year:        number;
    consoles:    string[];
    image:       string;
    active:      boolean;
    __v?:         number;
}
