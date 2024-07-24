import React, { useState } from 'react';
import routePaths from '../../assets/routePaths';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const Menus = [
    { title: 'Home', src: 'Chart_fill', href: routePaths.dashboard },
    { title: 'Survey', src: 'Chat', href: routePaths.survey_list },
    // { title: 'Survey List', src: 'Chat', href: routePaths.survey_list },
    { title: 'Campaign', href: routePaths.admin_details}
  ];

  return (
    <nav
      className={` ${
        open ? 'w-44' : 'w-20 '
      } p-5 h-full pt-8 duration-300 shadow-xl`}>
      <button
        type='button'
        onClick={() => setOpen(!open)}
        className='text-gray-700 hover:text-gray-800'
        data-hs-overlay='#docs-sidebar'
        aria-controls='docs-sidebar'
        aria-label='Toggle navigation'>
        <span className='sr-only'>Toggle Navigation</span>
        <svg
          className='flex-shrink-0 size-4'
          width='20'
          height='20'
          fill='currentColor'
          viewBox='0 0 16 16'>
          <path
            fill-rule='evenodd'
            d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
          />
        </svg>
      </button>

      <ul className='pt-6 '>
        {Menus.map((menu, index) => (
          <li
            key={index}
            onClick={() => navigate(menu.href)}
            className={`flex rounded-md p-2  cursor-pointer hover:bg-gray-200 text-md items-center gap-x-8`}>
            {/* <img src={`./src/assets/${Menu.src}.png`} /> */}
            <span
              className={`${
                !open && 'hidden'
              } origin-left duration-200 subpixel-antialiased font-sans font-medium text-gray-500`}>
              {menu.title}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
