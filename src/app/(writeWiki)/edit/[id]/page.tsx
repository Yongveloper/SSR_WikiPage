'use client';

import { useParams } from 'next/navigation';
import WikiForm from '@/app/(writeWiki)/_components/WikiForm';
import { useGetPostDetailQuery } from '@/hooks/useGetPostDetailQuery';

function Edit() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetPostDetailQuery(id as string);
  return (
    <WikiForm
      isEditMode={true}
      id={id as string}
      defaultTitle={data?.title}
      defaultContent={data?.content}
    />
  );
}

export default Edit;
