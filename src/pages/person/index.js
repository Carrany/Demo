import Loadable from "react-loadable";
import Loading from '../../common/spinner'

const personDetails = Loadable({
    loader: () => import("./components/Person"),
    loading: Loading
});

const DisplayPerson = Loadable({
    loader: () => import("./components/DisplayPerson"),
    loading: Loading
});



export const personRoutes = [
    {
        path: "/person",
        exact: true,
        component: personDetails,
        name: "person"
    },
    {
        path: "/display-person",
        exact: true,
        component: DisplayPerson,
        name: "person"
    }


];


