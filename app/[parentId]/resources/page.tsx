import { getResources } from '@/src/actions';
import { ResourcesPage } from '@/src/components';

interface Props {
  params: Record<string, string>;
}

const Resources = async ({ params }: Props) => {
  const resources = (await getResources()) as string[];

  return <ResourcesPage parent={params.parentId} resources={resources} />;
}

export default Resources;
