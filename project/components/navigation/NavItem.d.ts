import * as React from "react";

export interface NavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Lucide icon node, e.g. <LayoutDashboard size={16} />. */
  icon?: React.ReactNode;
  active?: boolean;
  href?: string;
}

/** Sidebar navigation row. */
export function NavItem(props: NavItemProps): React.ReactElement;
