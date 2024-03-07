import { updatePost } from '@/app/(writeWiki)/_lib/updatePost';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useUpdatePostMutation = (id: string) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: (newPost: { title: string; content: string }) =>
      updatePost(id, newPost),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['post', 'detail', id] });
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      router.push(`/wiki/${id}`);
    },
  });
};
