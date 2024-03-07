'use client';
import {
  useState,
  FormEventHandler,
  useEffect,
  ChangeEventHandler,
} from 'react';
import TextEditor from './TextEditor';
import { useUpdatePostMutation } from '@/hooks/useUpdatePostMutation';
import { useCreatePostMutation } from '@/hooks/useCreatePostMutation';

interface IWikiFormProps {
  isEditMode?: boolean;
  id?: string;
  defaultTitle?: string;
  defaultContent?: string;
}

function WikiForm({
  isEditMode,
  id,
  defaultTitle = '',
  defaultContent = '',
}: IWikiFormProps) {
  const [title, setTitle] = useState(defaultTitle);
  const [content, setContent] = useState(defaultContent);
  const updatePostMutation = useUpdatePostMutation(id as string);
  const createPostMutation = useCreatePostMutation();

  const handleTitleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (isEditMode) {
      updatePostMutation.mutate({ title, content });
    } else {
      createPostMutation.mutate({ title, content });
    }
  };

  useEffect(() => {
    setTitle(defaultTitle);
    setContent(defaultContent);
  }, [defaultTitle, defaultContent]);

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
      <input
        id="title"
        type="text"
        value={title}
        placeholder="제목을 입력해주세요."
        onChange={handleTitleChange}
        className="text-2xl font-bold border-b border-gray-200 outline-0"
      />
      <TextEditor value={content} onChange={setContent} />
      <button
        type="submit"
        className="mt-12 text-lg font-bold w-26 flex items-center justify-center px-4 py-2 text-blue-500 transition-colors duration-200 bg-white border rounded-lg gap-x-2 hover:bg-gray-100"
      >
        저장
      </button>
    </form>
  );
}

export default WikiForm;
