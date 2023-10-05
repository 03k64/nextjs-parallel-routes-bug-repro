'use client'

import { getResources } from '@/src/actions';
import { ResourcesPage } from '@/src/components';

interface Props {
  params: Record<string, string>;
}

const Resources = async ({ params }: Props) => {
  const resources = await getResources();

  return <ResourcesPage parent={params.parentId} resources={resources as string[]} />;
}

export default Resources;
