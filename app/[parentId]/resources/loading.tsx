'use client';

import { ResourcesPage } from '@/src/components';
import { useParams } from 'next/navigation';

const Resources = async () => {
  const params = useParams();
  const parentId = params.parentId;

  return <ResourcesPage loading parent={parentId as string} />;
}

export default Resources;
