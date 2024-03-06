'use client';
import { useState, FormEventHandler, ChangeEventHandler } from 'react';

interface IWikiFormProps {
  isEditMode?: boolean;
  id?: string;
}

function WikiForm({ isEditMode, id }: IWikiFormProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(title, content);
  };

  const handleContentChange: ChangeEventHandler<HTMLTextAreaElement> = (
    event,
  ) => {
    setContent(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
      <input
        id="title"
        type="text"
        value={title}
        placeholder="제목을 입력해주세요."
        onChange={(event) => setTitle(event.target.value)}
        className="text-2xl font-bold border-b border-gray-200 outline-0"
      />
      <textarea
        id="content"
        value={content}
        onChange={handleContentChange}
        placeholder="내용을 입력해주세요."
        className="border border-gray-200 p-4 resize-none h-96 outline-0"
      />
      <button
        type="submit"
        className=" text-lg font-bold w-26 flex items-center justify-center px-4 py-2 text-blue-500 transition-colors duration-200 bg-white border rounded-lg gap-x-2 hover:bg-gray-100"
      >
        저장
      </button>
    </form>
  );
}

export default WikiForm;
