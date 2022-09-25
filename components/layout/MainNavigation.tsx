import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import ROUTES from 'const/routes';

const MainNavigation = () => {
  const { asPath } = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const onMobileMenuClick = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <nav className="bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="font-bold text-black">Logo</h1>
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            {ROUTES.map((route) => (
              <Link key={route.title} href={route.url}>
                <span className={`py-5 px-2 text-black cursor-pointer ${asPath === route.url ? 'text-orange-600' : 'hover:-translate-y-2'}`}>
                  {route.title}
                </span>
              </Link>
            ))}
          </div>

          {/* mobile menu */}
          <div className="md:hidden flex items-center py-5 px-2 text-orange-600">
            <button onClick={onMobileMenuClick}>
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={classNames('md:hidden pb-2', { hidden: !isMobileMenuOpen })}>
        {ROUTES.map((route) => (
          <Link key={route.title} href={route.url}>
            <p className={`py-2 px-4 text-sm cursor-pointer ${asPath === route.url ? 'text-orange-600' : 'text-black'}`}>{route.title}</p>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MainNavigation;
