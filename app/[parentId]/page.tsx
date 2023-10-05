import { getParent } from '@/src/actions';
import { ParentPage } from '@/src/components';

interface Props {
  params: Record<string, string>;
}

const Parent = async ({ params }: Props) => {
  const parent = await getParent(params.parentId);
  console.log(parent);

  return <ParentPage parent={parent} />;
}

export default Parent;
