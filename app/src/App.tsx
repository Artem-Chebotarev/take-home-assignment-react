import { Suspense } from 'react';
import { AppRouter } from './components/AppRouter/AppRouter';

function App() {
    return (
        <Suspense fallback="">
            <div className="content-page">
                <AppRouter />
            </div>
        </Suspense>
    );
}

export default App;
