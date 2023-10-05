import { getResource } from '@/src/actions';
import { ResourcePage } from '@/src/components';

interface Props {
  params: Record<string, string>;
}

const Resource = async ({ params }: Props) => {
  const resource = await getResource(params.resourceId);

  return <ResourcePage resource={resource as string} />;
}

export default Resource;
