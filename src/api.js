import axios from 'axios';
const searchImages = () => {
axios.get('https://api.unsplash.com/search/photos',{
  headers: {
    Authorization: 'Client-ID GZPE1xjJA6_H4a_Sagy5VFcfwAwTqJf-IyktSZS-QJQ'

  },
  params: {
    query:'dogs'

  }
});

};
export default searchImages;
