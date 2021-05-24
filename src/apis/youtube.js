import axios from 'axios';

const KEY = 'AIzaSyD4Kom-bDB8Iv8yrbxUQZtx-xuB86yJnR0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  }
});