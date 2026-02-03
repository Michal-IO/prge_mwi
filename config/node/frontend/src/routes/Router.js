import {createHashRouter} from "react-router-dom";
import {Home, About, Map, Services, NewUser, ListOfItems} from "./LazyImports";

const routes = createHashRouter(
    [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/about",
            element: <About/>
        },
        {
            path: "/map",
            element: <Map/>
        },
        {
            path: "/services",
            element: <Services/>
        },
                {
            path: "/airports",
            element: <ListOfItems/>
        },
                {
            path: "/new-airport",
            element: <NewUser/>
        },
        {
            path: '*',
            element: <div>404</div>
        }
    ]
)

export default routes;