'use client';

import { useParams } from 'next/navigation';
import DOMPurify from 'isomorphic-dompurify';
import { useGetPostDetailQuery } from '@/hooks/useGetPostDetailQuery';

// Todo: loading, error 처리
function Contents() {
  const params = useParams();
  const { id } = params;
  const { data, isLoading, isError } = useGetPostDetailQuery(id as string);

  return (
    <article>
      <h1 className="text-3xl font-bold border-b border-gray-300 my-6">
        {data?.title}
      </h1>
      <div className="ql-snow">
        <div
          className="ql-editor"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data?.content || ''),
          }}
        />
      </div>
    </article>
  );
}

export default Contents;
