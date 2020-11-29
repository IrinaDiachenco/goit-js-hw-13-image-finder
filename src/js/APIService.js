import { myPnotify } from '../index';
export default class PixabayApiService {
    constructor() {
      this.searchQuery = '';
      this.page = 1;
    }
  
    async fetchImages() {
      try {
          const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=19295709-d5276be665a4131ac0929716c`;
          const resultFetch = await fetch(url).then(res => res.json());

      this.incrementPage();

      if (resultFetch.total === 0) {
        myPnotify('Not Found. Please try again');
        return [];
      }

      return resultFetch;
    } catch (error) {
      myPnotify('Imges is ended');
      console.log(error);
      return error;
    }
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}


