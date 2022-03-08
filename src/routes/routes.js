import Navbar from "../Homepage/navbar";
import Headers from "../Homepage/Header";
import Footer from "../Homepage/Footer";
import Indexcontent from "../Content/IndexContent";
import Profile from "../Profile/Profile";
import ProfileSetting from "../Profile/ProfileSetting";
import Patientlist from "../Patient List/Patientlist";
import Appointments from "../Appointments/Appointments";
import ScheduleTime from "../Schedule/ScheduleTime";
import Medicalrecord from "../Medical Record/Medicalrecord";
import AddMedical from "../Medical Record/AddMedical";
import ForgotPassword from "../Login/ForgotPassword";
import Login from "../Login/Login";
import Register from "../Login/Register";
import UpdateMedical from "../Medical Record/UpdateMedical";

const routes = [
  {
    path: "/login",
    exact: true,
    main: () => <Login />,
  },
  {
    path: "/register",
    exact: true,
    main: () => <Register />,
  },
  {
    path: "/login/forgotpassword",
    exact: true,
    main: () => <ForgotPassword />,
  },
  // {
  //   path: "/medical/updatemedical",
  //   exact: true,
  //   main: () => <UpdateMedical />,
  // },
  {
    path: "/dashboard",
    exact: true,
    main: () => (
      <div className="body-content">
        <Headers></Headers>
        <Navbar></Navbar>
        <Indexcontent></Indexcontent>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "/profile",
    exact: true,
    main: () => (
      <div className="body-content">
        <Headers></Headers>
        <Navbar></Navbar>
        <Profile></Profile>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "/profilesetting",
    exact: true,
    main: () => (
      <div className="body-content">
        <Headers></Headers>
        <Navbar></Navbar>
        <ProfileSetting></ProfileSetting>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "/patientlist",
    exact: true,
    main: ({ match }) => (
      <div className="body-content">
        <Headers></Headers>
        <Navbar></Navbar>
        <Patientlist></Patientlist>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "/appointments",
    exact: true,
    main: () => (
      <div className="body-content">
        <Headers></Headers>
        <Navbar></Navbar>
        <Appointments></Appointments>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "/scheduletime",
    exact: true,
    main: () => (
      <div className="body-content">
        <Headers></Headers>
        <Navbar></Navbar>
        <ScheduleTime></ScheduleTime>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "/medicalrecord",
    exact: true,
    main: () => (
      <div className="body-content">
        <Headers></Headers>
        <Navbar></Navbar>
        <Medicalrecord></Medicalrecord>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "/medical/addmedicalrecord",
    exact: true,
    main: () => (
      <div className="body-content">
        <Headers></Headers>
        <Navbar></Navbar>
        <AddMedical></AddMedical>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: "/medical/updatemedicalrecord/:id",
    exact: true,
    main: ({ match }) => (
      <div className="body-content">
        <Headers></Headers>
        <Navbar></Navbar>
        <UpdateMedical match={match} />
        <Footer></Footer>
      </div>
    ),
  },
];

export default routes;
