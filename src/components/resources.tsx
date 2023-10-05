'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  loading?: boolean;
  parent: string;
  resources?: string[];
}

const Resources = ({ loading, parent, resources }: Props) => {
  const pathname = usePathname();

  return (
    <div>
      <h1>{parent} Resources</h1>
      {loading && <p>Loading resources for {parent}</p>}
      {resources && (
        <ul>
          {resources.map((r) => (
            <li key={r}>
              <Link href={`${pathname}/${r}`}>{r}</Link>
            </li>
          ))}
        </ul>
      )}
    </div >
  );
}

export default Resources;
