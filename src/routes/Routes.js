import Home from "../pages/home";
import Students from "../pages/student";
import NewStudent from "../pages/student/addNewStudent";
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
    path: "/student/addNewStudent",
    component: NewStudent,
  },
  {
    key: 4,
    path: "/grades",
    component: Grades,
  },
  {
    key: 5,
    path: "/instructors",
    component: Instructors,
  },
  {
    key: 6,
    path: "/subjects",
    component: Subjects,
  },
  {
    key: 7,
    path: "/sections",
    component: Sections,
  },
  {
    key: 8,
    path: "/schedules",
    component: Schedules,
  },
  {
    key: 9,
    path: "/accounts",
    component: Accounts,
  },
  {
    key: 10,
    path: "/users",
    component: Users,
  },
];
