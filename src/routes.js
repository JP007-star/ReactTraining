import { BootStrapComponent } from "./components/BootStrapComponent";
import NewComponent from "./components/NewComponent";
import { Timer } from "./components/Timer";
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
    {
        path:"/bootstrap",
        element:<BootStrapComponent/>
    },
    {
        path:"/timer",
        element:<Timer/>
    },
   
]

export default routes;