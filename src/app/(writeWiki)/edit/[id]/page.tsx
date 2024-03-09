'use client';

import WikiForm from '@/app/(writeWiki)/_components/WikiForm';
import { useGetPostDetailQuery } from '@/hooks/useGetPostDetailQuery';

interface IEditProps {
  params: { id: string };
}

function Edit({ params }: IEditProps) {
  const { data } = useGetPostDetailQuery(params.id as string);

  return (
    <WikiForm
      isEditMode={true}
      id={params.id as string}
      defaultTitle={data?.title}
      defaultContent={data?.content}
    />
  );
}

export default Edit;
