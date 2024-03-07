import { HttpResponse, http } from 'msw';

let posts: any = [];
for (let i = 1; i <= 60; i++) {
  posts.push({
    id: i,
    title: `제목${i}`,
    content: `내용${i}`,
    createdAt: new Date(),
  });
}

export const handlers = [
  http.get('/api/posts', ({ request }) => {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') as string) || 1;
    const perContent = parseInt(url.searchParams.get('size') as string) || 5;
    const start = (page - 1) * perContent;
    const end = start + perContent;
    const pagePosts = posts.slice(start, end);

    return HttpResponse.json({
      posts: pagePosts,
      page,
      totalPages: Math.ceil(posts.length / perContent),
    });
  }),
];
