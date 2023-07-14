import UserFinder from "./components/UserFinder";
import { UsersProvider } from "./context/users-context";

const PLACEHOLDER_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

function App() {
  return (
    <div>
      <UsersProvider value={{ users: PLACEHOLDER_USERS }}>
        <UserFinder />
      </UsersProvider>
    </div>
  );
}

export default App;
