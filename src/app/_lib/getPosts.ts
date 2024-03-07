export async function getPosts(page: string, size: string = '5') {
  const res = await fetch(
    `http://localhost:9090/api/posts?page=${page}?size=${size}`,
    {
      next: {
        tags: ['posts', page],
      },
      cache: 'no-store',
    },
  );

  if (!res.ok) {
    throw new Error('Post request failed');
  }

  return res.json();
}
