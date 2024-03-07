import Link from 'next/link';

interface IEditButtonProps {
  id: string;
}

function EditButton({ id }: IEditButtonProps) {
  return (
    <Link href={`/edit/${id}`}>
      <button
        type="button"
        className="w-26 flex items-center justify-center px-4 py-2 text-sm text-blue-500 transition-colors duration-200 bg-white border rounded-lg gap-x-2 hover:bg-gray-100"
      >
        <span>수정</span>
      </button>
    </Link>
  );
}

export default EditButton;
