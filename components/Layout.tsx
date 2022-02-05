import React from "react";
import { LayoutProps } from "~/lib/types";

function Layout({ children }: LayoutProps) {
  return <main className='mx-auto'>{children}</main>;
}

export default Layout;
