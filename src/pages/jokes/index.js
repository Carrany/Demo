import Loadable from "react-loadable";
import Loading from '../../common/spinner'

const jokeDetails = Loadable({
    loader: () => import("./components/Jokes"),
    loading: Loading
});


export const jokesRoutes = [
    {
        path: "/",
        exact: true,
        component: jokeDetails,
        name: "jokes"
    }

];


