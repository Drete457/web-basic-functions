import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { routing, routesPath } from '@/routing';

const Loading = lazy(() =>
    import('@/components/loading').then(module => ({
        default: module.Loading,
    })),
);

const Body: React.FC = () => (
    <main>
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Routes>
                    {routing.map(route => (
                        <Route
                            key={route.name}
                            path={route.path}
                            element={
                                <route.component
                                    key={route.name}
                                    type={null}
                                    props=""
                                />
                            }
                        />
                    ))}
                    <Route
                        key="*"
                        path="*"
                        element={<Navigate to={routesPath.mainPage.url} />}
                    />
                </Routes>
            </Suspense>
        </BrowserRouter>
    </main>
);

export default Body;
