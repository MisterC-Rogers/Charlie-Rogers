import Link from 'next/link'

import { social } from '../data/social-links';

const Navbar = () => {
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
            <Link href='/'><a>Home</a></Link>     
        </div>
            <img src='/Charlie-Rogers.png' className='logo' alt='logo' />
        <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url} target='_blank' rel="noreferrer">{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
          
          <style jsx>{`
          nav {
            background: #fff;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          }
          .nav-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .logo {
            height: 100px;
          }
          .social-icons {
            display: none;
            text-decoration: none;
            list-style-type: none;
          }
          @media screen and (min-width: 800px) {
            .nav-center {
              max-width: 1170px;
              margin: 0 auto;
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
            .nav-header {
              padding: 0;
            }
            .social-icons {
              display: flex;
            }
            .social-icons a {
              margin: 0 0.5rem;
              color: var(--clr-primary-5);
              transition: var(--transition);
            }
            .social-icons a:hover {
              color: var(--clr-primary-7);
            }
          }
          `}</style>
    </nav>
  );
};

export default Navbar;