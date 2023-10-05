'use client';

import { useRouter } from "next/navigation";
import { useCallback } from "react";

interface Props {
  loading?: boolean;
  resource?: string;
}

const Resource = ({ loading, resource }: Props) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div
      style={{
        height: '100vh',
        left: '0',
        position: 'fixed',
        top: '0',
        width: '100vw',
      }}
    >
      <div
        onClick={handleClick}
        style={{
          backdropFilter: 'blur(0.125rem)',
          background: 'rgba(0, 0, 0, 0.1)',
          height: '100vh',
          left: '0',
          position: 'absolute',
          top: '0',
          width: '40vw',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: '0',
          top: '0',
          width: '60vw',
        }}
      >
        <div style={{ padding: '1rem' }}>
          {resource && <p>Resource with ID: {resource}</p>}
          {loading && <p>Loading...</p>}
          <button onClick={handleClick}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default Resource;
