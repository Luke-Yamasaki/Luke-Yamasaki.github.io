import '../styles/global.css';
import VisitedProvider from '../context';

export default function App({ Component, pageProps }) {
    return (
        <VisitedProvider>
            <Component {...pageProps} />
        </VisitedProvider>
    )
}
