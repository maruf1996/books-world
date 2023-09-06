import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { auth } from "./Firebase/firebase";
import Layout from "./Layout/Layout";
import { setLoading, setUser } from "./Redux/features/user/userSlice";
import { useAppDispatch } from "./Redux/hook";

export default function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email!));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);
  return (
    <div>
      <Layout></Layout>
      <Toaster />
    </div>
  );
}
