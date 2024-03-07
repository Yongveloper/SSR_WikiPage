import { createPost } from '@/app/(writeWiki)/_lib/createPost';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useCreatePostMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: createPost,
    onSuccess: async (response) => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      const res = await response.json();
      router.push(`/wiki/${res.id}`);
    },
  });
};
