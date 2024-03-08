export async function getTitles() {
  const res = await fetch('http://localhost:9090/api/posts/titles', {
    next: {
      tags: ['posts', 'titles'],
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Titles request failed');
  }

  return res.json();
}
