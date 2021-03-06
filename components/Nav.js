import Link from 'next/link'
import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { social } from '../data/socialLinks';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height + 45;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link href='/'><a><img src='https://scontent.fphx1-2.fna.fbcdn.net/v/t1.6435-9/186515353_4354629537880720_1246667676013037597_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=730e14&_nc_ohc=a7OfojG7lPsAX8k0w8P&_nc_ht=scontent.fphx1-2.fna&oh=1fcd8274c6b64fd10016d56beea27577&oe=60D3DC13' className='logo' alt='logo' height= '100px;' width='auto'/></a></Link>
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>  
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            <Link href='/'><a>Home</a></Link>
            <Link href='/blog'><a>Blog</a></Link>
            <Link href='/recipes'><a>Recipes</a></Link>
            <Link href='/about'><a>About</a></Link>
            <Link href='/contact'><a>Contact</a></Link>
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon, linkName } = socialIcon;
            return (
              <li key={id}>
                <a href={url} target='_blank' rel="noreferrer" aria-label={linkName}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
          
          <style jsx>{`
          nav {
            background: #fff;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            position: fixed;
            z-index:2;
            width: 100vw;
          }
          .nav-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .nav-toggle {
            font-size: 1.5rem;
            color: hsl(205, 78%, 60%);
            background: transparent;
            border-color: transparent;
            transition: all 0.3s linear;
            cursor: pointer;
          }
          .nav-toggle:hover {
            color: hsl(205, 86%, 17%);
            transform: rotate(90deg);
          }
          .logo {
            height: 100px;
          }
          .links a {
            color: hsl(209, 34%, 30%);
            font-size: 1rem;
            text-transform: capitalize;
            letter-spacing: 0.1rem;
            display: block;
            padding: 0.5rem 1rem;
            transition: all 0.3s linear;
          }
          .links a:hover {
            background: hsl(205, 86%, 81%);
            color: hsl(205, 78%, 60%);
            padding-left: 1.5rem;
          }
          .social-icons {
            display: none;
            text-decoration: none;
            
          }
          .links-container {
            height: 0;
            overflow: hidden;
            transition: all 0.3s linear;
          }
          .show-container {
            height: 10rem;
          }
          ul {
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
            .nav-toggle {
              display: none;
            }
            .links-container {
              height: auto !important;
            }
            .links {
              display: flex;
              justify-content: space-between;
            }
            .links a {
              padding: 0;
              margin: 0 0.5rem;
            }
            .links a:hover {
              padding: 0;
              background: transparent;
            }
            .social-icons {
              display: flex;
            }
            .social-icons a {
              margin: 0 0.5rem;
              color: hsl(205, 78%, 60%);
              transition: all 0.3s linear;
            }
            .social-icons a:hover {
              color: hsl(205, 90%, 76%);
            }
          }
          `}</style>
    </nav>
  );
};

export default Navbar;