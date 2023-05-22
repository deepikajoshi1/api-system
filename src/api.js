import axios from 'axios';
const searchImages = async (term) => {

  console.log('test');
  const response = await axios.get('https://api.unsplash.com/search/photos',{
    headers: {
      // Authorization: process.env.REACT_APP_API_KEY,
      Authorization: 'Client-ID GZPE1xjJA6_H4a_Sagy5VFcfwAwTqJf-IyktSZS-QJQ',


    },
    params: {
      query:'dogs',

    }
  });
 console.log(response);
return response;
};
export default searchImages;
