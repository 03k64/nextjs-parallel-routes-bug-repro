'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  loading?: boolean;
  parent?: string;
}

const Parent = ({ loading, parent }: Props) => {
  const pathname = usePathname();

  return loading
    ? <p>Loading...</p>
    : (
      <div>
        <h1>Hello {parent}</h1>
        <Link href={`${pathname}/resources`}>Resources</Link>
      </div>
    );
}

export default Parent;
