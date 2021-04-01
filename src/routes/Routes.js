import Home from "../pages/home";
import Students from "../pages/student";
import Grades from "../pages/grades";
import Instructors from "../pages/instructors";
import Subjects from "../pages/subjects";
import Sections from "../pages/sections";
import Schedules from "../pages/schedules";
import Accounts from "../pages/accounts";
import Users from "../pages/users";

export default [
  {
    key: 1,
    path: "/",
    component: Home,
  },
  {
    key: 2,
    path: "/student",
    component: Students,
  },
  {
    key: 3,
    path: "/grades",
    component: Grades,
  },
  {
    key: 4,
    path: "/instructors",
    component: Instructors,
  },
  {
    key: 5,
    path: "/subjects",
    component: Subjects,
  },
  {
    key: 6,
    path: "/sections",
    component: Sections,
  },
  {
    key: 7,
    path: "/schedules",
    component: Schedules,
  },
  {
    key: 8,
    path: "/accounts",
    component: Accounts,
  },
  {
    key: 9,
    path: "/users",
    component: Users,
  },
];
