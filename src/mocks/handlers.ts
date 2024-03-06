import { HttpResponse, http } from 'msw';

let posts: any = [];
for (let i = 1; i <= 10; i++) {
  posts.push({
    id: i,
    title: `제목${i}`,
    content: `내용${i}`,
    createdAt: new Date(),
  });
}

export const handlers = [
  http.get('/api/posts', ({ request }) => {
    return HttpResponse.json(posts);
  }),
];
