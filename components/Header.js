import Link from 'next/link'
import headerStyles from '../styles/Header.module.css'

const Header = () => {
return (
    <div className={ headerStyles.header}>
        <div className={headerStyles.info}>
        <h1 className="line_1 anim_typewriter">Charlie Rogers</h1>
        <h2>Full Stack Web Developer</h2>
            <div className={headerStyles.meta}>
                <a  href="https://twitter.com/MisterCRogers" target="_b" className={headerStyles.author} aria-label="Twitter"></a>
                <span>By <a href="https://twitter.com/MisterCRogers" target="_b" aria-label="Twitter">Charlie Rogers</a></span>
            </div>
        </div>
        <style jsx>{`
        .line_1{
            position: relative;
            top: 50%;  
            width: 24em;
            margin: 0 auto;
            border-right: 2px solid rgba(255,255,255,.75);
            font-size: 180%;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            transform: translateY(-50%);    
        }
        
        /* Animation */
        .anim_typewriter{
            animation: typewriter 4s steps(28) 1s 1 normal both,
            blinkTextCursor 500ms steps(44) infinite normal;
        }
        @keyframes typewriter{
            from{width: 0;}
            to{width: 7em;}
        }
        @keyframes blinkTextCursor{
            from{border-right-color: rgba(255,255,255,.75);}
            to{border-right-color: transparent;}
        }
        `}</style>
    </div>
)}

export default Header
