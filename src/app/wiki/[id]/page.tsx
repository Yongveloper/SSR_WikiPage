import BackButton from './_components/BackButton';
import EditButton from './_components/EditButton';

function Wiki() {
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <BackButton />
        <EditButton />
      </div>
      <h1 className="text-3xl font-bold border-b border-gray-300 my-6">제목</h1>
      <p>내용</p>
    </div>
  );
}

export default Wiki;
