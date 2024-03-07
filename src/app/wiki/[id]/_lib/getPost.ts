export async function getPost(id: string) {
  const res = await fetch(`http://localhost:9090/api/posts/${id}`, {
    next: {
      tags: ['post', 'detail', id],
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Post request failed');
  }

  return res.json();
}
