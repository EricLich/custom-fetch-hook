import { useMemo } from "react";
import "./App.css";
import Users from "./components/Users";
import { useFetch } from "./hooks/useFetch";
import { User } from "./utils/types";

const App = () => {
  const {
    data: users,
    error,
    loading,
  } = useFetch<User>(`${import.meta.env.VITE_PLACEHOLDER_URL}1`);

  const renderUser = useMemo(() => {
    return <Users users={users} />;
  }, [users]);

  return (
    <div className="App">
      {loading ? <p>loading...</p> : renderUser}
      {error && <p>{error}</p>}
    </div>
  );
};

export default App;
