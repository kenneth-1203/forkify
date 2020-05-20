import axios from 'axios';
import { elements, elementStrings } from '../views/base';

elements.searchInput.focus();

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
        this.result = res.data.recipes;
    }
}