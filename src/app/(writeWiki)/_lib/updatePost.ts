export const updatePost = (
  id: string,
  post: { title: string; content: string },
) => {
  return fetch(`http://localhost:9090/api/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
};
