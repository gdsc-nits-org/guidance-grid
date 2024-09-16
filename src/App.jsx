import { Routes, Route } from "react-router-dom";
import app from "./utils/auth.js"
import { getAuth } from "firebase/auth"
import { useAuthState } from 'react-firebase-hooks/auth';
import { Footer, Navbar } from "./Components";
import {
  Home,
  Error,
  Bookmark,
  ArticlePage,
  SignIn,
  SignUp,
  CreateArticle,
  Landing,
  ProfilePage,
  ProfileEdit,
} from "./Pages";

const App = () => {
  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bookmarks" element={<Bookmark />} />
        <Route path="/posts" element={<ArticlePage />} />
        <Route path="/create-article" element={<CreateArticle />} />
        <Route path="/user/profile" element={<ProfilePage user="1" />} />
        <Route path="/user/profileedit" element={<ProfileEdit />} />
        <Route path="*" element={<Error error="Error" />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
