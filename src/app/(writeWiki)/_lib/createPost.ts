export const createPost = (post: { title: string; content: string }) => {
  return fetch('http://localhost:9090/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
};
