const sleep = n => new Promise(resolve => setTimeout(resolve, n));

// { id, title, body }
const posts = [
  {
    id: 1,
    title: '리덕스 미들웨어 배워보기',
    body: '리덕스 미들'
  },
  {
    id: 2,
    title: '리덕스 미들웨어 배워보기2',
    body: '리덕스 미들2'
  },
  {
    id: 3,
    title: '리덕스 미들웨어 배워보기3',
    body: '리덕스 미들3'
  },
];

export const getPosts = async () => {
  await sleep(500);
  return posts;
}

export const getPostById = async (id) => {
  await sleep(500);
  return posts.find(post => post.id === id);
}