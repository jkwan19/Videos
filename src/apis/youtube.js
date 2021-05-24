import axios from 'axios';



const KEY = 'AIzaSyB0zMiQNff1o5vWmkweQVj6-Z9KxRYRTlM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  }
});