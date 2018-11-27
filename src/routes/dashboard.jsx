// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import Login from "views/Login/Login";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";
import Equipe2 from "../views/Equipe2/Equipe2";
import Equipe3 from "../views/Equipe3/Equipe3";
import Equipe4 from "../views/Equipe4/Equipe4";

const dashboardRoutes = [
  {
    path: "/login",
    sidebarName: "Login",
    navbarName: "Login",
    icon: Person,
    component: Login,
    loggedIn: false
  },
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Resumo",
    icon: Dashboard,
    component: DashboardPage,
    loggedIn: true
  },
  {
    path: "/equipe1",
    sidebarName: "Equipe1",
    navbarName: "Equipe1",
    icon: "content_paste",
    component: TableList,
    loggedIn: true
  },
  {
    path: "/equipe2",
    sidebarName: "Equipe2",
    navbarName: "Equipe2",
    icon: "content_paste",
    component: Equipe2,
    loggedIn: true
  },
  {
    path: "/equipe3",
    sidebarName: "Equipe3",
    navbarName: "Equipe3",
    icon: "content_paste",
    component: Equipe3,
    loggedIn: true
  },
  {
    path: "/equipe4",
    sidebarName: "Equipe4",
    navbarName: "Equipe4",
    icon: "content_paste",
    component: Equipe4,
    loggedIn: true
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
