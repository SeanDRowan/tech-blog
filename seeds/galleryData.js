const { Post } = require('../models');

const postdata = [
  {
    post_name: 'post example',
    post_content: 'contents example',
    post_date: 'June 21, 2021 17:00:00',
  },
  {
    post_name: 'post example 2',
    post_content: 'contents example 2',
    post_date: 'June 21, 2021 17:00:00',
  },
   {
    post_name: 'post example 3',
    post_content: 'contents example 3',
    post_date: 'June 21, 2021 17:00:00',
  },

];

const seedGallery = () => Post.bulkCreate(postdata);

module.exports = seedGallery;
