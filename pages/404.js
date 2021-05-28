import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import SiteHead from '../components/SiteHead'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 4000)
  }, [])

  return (
    <>
      <SiteHead title="Page Not Found" description="Charlie Rogers take on the 404 page not found." />
      <div className="not-found">
        <h1>404</h1>
        <h2>Oops! That page cannot be found :(</h2>
        <p>Redirecting to <Link href="/"><a>Homepage</a></Link> for more blog content...</p>
      </div>
        <style jsx>{`
          .not-found {
            background: #fff;
            padding: 30px;
            box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
            transform: rotateZ(-1deg);
          }
          h1 {
            font-size: 3em;
          }
        `}</style>
    </>
  );
}

export default NotFound
