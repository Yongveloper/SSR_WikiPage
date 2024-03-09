'use client';

import { useParams } from 'next/navigation';
import DOMPurify from 'isomorphic-dompurify';
import { useGetPostDetailQuery } from '@/hooks/useGetPostDetailQuery';
import { useGetTitlesQuery } from '@/hooks/useGetTitlesQuery';
import parse, { DOMNode, Element, domToReact } from 'html-react-parser';
import Link from 'next/link';
import Spinner from '@/components/Spinner';
import Error from '@/components/Error';

function Contents() {
  const params = useParams();
  const { id } = params;
  const {
    data: post,
    isLoading: isPostLoading,
    isError: isPostError,
  } = useGetPostDetailQuery(id as string);
  const {
    data: titles,
    isLoading: isTitlesLoading,
    isError: isTitlesError,
  } = useGetTitlesQuery();
  let content = post?.content;

  if (isPostLoading || isTitlesLoading) return <Spinner />;
  if (isPostError || isTitlesError) return <Error />;

  const replaceAnchorToLink = (domNode: DOMNode) => {
    const typedDomNode = domNode as Element;
    const children = typedDomNode.children as DOMNode[];
    if (typedDomNode.tagName === 'a') {
      return (
        <Link href={typedDomNode.attribs.href}>{domToReact(children)}</Link>
      );
    }
  };

  if (titles) {
    for (const title of titles) {
      // 현재 페이지 제목은 링크를 걸지 않도록 함.
      if (title.id === Number(id)) continue;

      if (content?.includes(title.title)) {
        content = content
          ?.split(title.title)
          .join(`<a href="${title.id}">${title.title}</a>`);
      }
    }
  }

  return (
    <article>
      <h1 className="text-3xl font-bold border-b border-gray-300 my-6">
        {post?.title}
      </h1>
      <div className="ql-snow">
        <div className="ql-editor">
          {/* XSS 보안을 위한 DOMPurify 적용 및 리액트 요소로 변환  */}
          {parse(DOMPurify.sanitize(content || ''), {
            replace: replaceAnchorToLink,
          })}
        </div>
      </div>
    </article>
  );
}

export default Contents;
