'use client';

import { useParams } from 'next/navigation';
import WikiForm from '@/app/(writeWiki)/_components/WikiForm';

function Edit() {
  const { id } = useParams();

  return <WikiForm isEditMode={true} id={id as string} />;
}

export default Edit;
