import { Movie } from "./movie";

export class Search {
    constructor(
        public Search?: Movie[],
        public totalResults?: string
    ) { }
}