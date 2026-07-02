import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function MobileLayout({ children }: Props) {
  return (
    <div className="container">
      {children}
    </div>
  );
}