import Dashboard from "views/Dashboard/Dashboard.jsx";
import Notifications from "views/Notifications/Notifications.jsx";
import Icons from "views/Icons/Icons.jsx";
// import Typography from "views/Typography/Typography.jsx";
// import TableList from "views/TableList/TableList.jsx";
import Maps from "views/Maps/Maps.jsx";
// import Upgrade from "views/Upgrade/Upgrade.jsx";
// import UserPage from "views/UserPage/UserPage.jsx";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "HomePage",
    icon: "design_app",
    component: Dashboard
  },
  {
    path: "/OSPCB-login",
    name: "OSPCB Login",
    icon: "media-1_button-power",
    component: Icons
  },
  {
    path: "/mine-login",
    name: "Mine Login",
    icon: "media-1_button-power",
    component: Maps
  },
  {
    path: "/regional-login",
    name: "Regional Login",
    icon: "media-1_button-power",
    component: Notifications
  },
  // {
  //   path: "/user-page",
  //   name: "User Profile",
  //   icon: "users_single-02",
  //   component: UserPage
  // },
  // {
  //   path: "/extended-tables",
  //   name: "Table List",
  //   icon: "files_paper",
  //   component: TableList
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "design-2_ruler-pencil",
  //   component: Typography
  // },
  // {
  //   pro: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "objects_spaceship",
  //   component: Upgrade
  // },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
