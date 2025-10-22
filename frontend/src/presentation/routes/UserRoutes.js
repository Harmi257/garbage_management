import { Route } from 'react-router-dom';
import UserHome from '../pages/userpages/UserHome';
import NewComplaint from '../pages/userpages/NewComplaint';
import MyComplaints from '../pages/userpages/MyComplaints';
import MyProfile from '../pages/userpages/MyProfile';

const UserRoutes = () => (
  <>
    <Route path="/user/home" element={<UserHome />} />
    <Route path="/new-complaint" element={<NewComplaint />} />
    <Route path="/my-complaints" element={<MyComplaints />} />
    <Route path="/my-profile" element={<MyProfile />} />
  </>
);

export default UserRoutes;
