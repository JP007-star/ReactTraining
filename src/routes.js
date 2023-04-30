import NewComponent from "./components/NewComponent";
import { Details } from "./container/Details";
import { Home } from "./container/Home";

const routes=[
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/details",
        element:<Details/>
    },
   
]

export default routes;