import dynamic from 'next/dynamic';
import { useMemo } from 'react';

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link'],
    [{ align: [] }, { color: [] }, { background: [] }],
    ['clean'],
  ],
};
const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'align',
  'color',
  'background',
];

interface ITextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

function TextEditor({ value, onChange }: ITextEditorProps) {
  const ReactQuill = useMemo(
    () => dynamic(() => import('react-quill'), { ssr: false }),
    [],
  );
  return (
    <ReactQuill
      style={{ height: '480px' }}
      theme="snow"
      value={value}
      formats={formats}
      modules={modules}
      onChange={onChange}
      placeholder="내용을 입력해주세요."
    />
  );
}

export default TextEditor;
