import { Metadata } from 'next';
import Header from './_components/Header';

export const metadata: Metadata = {
  title: '코딩허브 | 게시물 수정',
  description: '게시물 수정 페이지',
};

interface IEditLayoutProps {
  children: React.ReactNode;
  params: { id: string };
}

function EditLayout({ children, params }: IEditLayoutProps) {
  return (
    <div className="w-full">
      <Header id={params.id} />
      {children}
    </div>
  );
}

export default EditLayout;
