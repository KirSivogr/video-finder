import logo from '@/assets/logo.svg';

import './Logo.scss';

export const Logo = () => {
   return (
      <div className='logo'>
         <img alt='logo' src={logo} />
      </div>
   );
};
