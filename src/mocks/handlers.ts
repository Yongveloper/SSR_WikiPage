import { IPost } from '@/model/Post';
import { HttpResponse, StrictResponse, http } from 'msw';

let posts: IPost[] = [];
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

  http.get('/api/posts/:id', ({ request, params }): StrictResponse<any> => {
    const { id } = params;

    const post = posts.find((post) => post.id === Number(id));
    if (post) {
      return HttpResponse.json(post);
    }
    return HttpResponse.json(
      {
        message: 'Not Found',
      },
      { status: 404 },
    );
  }),
];
