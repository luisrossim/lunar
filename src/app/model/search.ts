import { Movie } from "./movie";

export const types: any[] = [
    { id: '1', name: 'movie' },
    { id: '2', name: 'series' },
    { id: '3', name: 'episode' }
]

export class Search {
    constructor(
        public Search?: Movie[],
        public totalResults?: string
    ) { }
}