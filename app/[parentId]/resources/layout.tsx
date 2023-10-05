import { PropsWithChildren, ReactNode } from 'react';

interface Props {
  resource: ReactNode;
}

const ResourcesLayout = ({ children, resource }: PropsWithChildren<Props>) => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    {children}
    {resource}
  </div>
);

export default ResourcesLayout;
