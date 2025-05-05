/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from '@/i18n/navigation';

interface HeaderProps {
  title?: string;
  userName?: string;
  onLogout?: () => void;
  navItems?: Array<{
    label: string;
    path: string;
  }>;
}

const Header: React.FC<HeaderProps> = ({
  title = 'Dashboard',
  userName,
  onLogout,
  navItems = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Reports', path: '/reports' },
    { label: 'Settings', path: '/settings' },
  ],
}) => {
  return <header className="header"></header>;
};

export default Header;
