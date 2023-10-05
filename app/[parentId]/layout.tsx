import { PropsWithChildren } from "react";

const ParentLayout = ({ children }: PropsWithChildren) => (
  <div
    style={{
      height: '100%',
    }}
  >
    {children}
  </div>
);

export default ParentLayout;
