import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AdvancedFiltersIcon from '../../assets/images/navbarIcons/AdvancedFilters';
import BatchScanningIcon from '../../assets/images/navbarIcons/BatchScanning';
import ExportShareIcon from '../../assets/images/navbarIcons/ExportShare';
import DocumentScannerIcon from '../../assets/images/navbarIcons/DocumentScanner';
import SignStampIcon from '../../assets/images/navbarIcons/SignStamp';
import styles from './styles/Navbar.module.css';

interface NavItem {
  path: string;
  label: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const navItems: NavItem[] = [
  { path: '/', label: 'Document Scanner', icon: DocumentScannerIcon },
  { path: '/signstamp', label: 'Sign & Stamp', icon: SignStampIcon },
  { path: '/batchscan', label: 'Batch Scanning', icon: BatchScanningIcon },
  {
    path: '/advancedfilters',
    label: 'Advanced Filters',
    icon: AdvancedFiltersIcon,
  },
  { path: '/exportshare', label: 'Export & Share', icon: ExportShareIcon },
];

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('/');
  const location = useLocation();

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  return (
    <ul className={styles.navbar_container}>
      {navItems.map((item) => (
        <li
          key={item.path}
          className={`${activeItem === item.path ? styles.active_nav : ''}`}
        >
          <Link to={item.path}>
            <item.icon />
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
