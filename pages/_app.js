import '../styles/globals.css';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';

function isAdminRoute(pathname) {
  return pathname.startsWith('/admin');
}

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const admin = isAdminRoute(router.pathname);

  return (
    <>
      {!admin && <Navbar />}
      <PageTransition>
        <Component {...pageProps} />
      </PageTransition>
      {!admin && <Footer />}
    </>
  );
}
