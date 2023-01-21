import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { routing, routesPath } from '@/routing';

const Body: React.FC = () => (
    <main>
        <BrowserRouter>
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
        </BrowserRouter>
    </main>
);

export default Body;
