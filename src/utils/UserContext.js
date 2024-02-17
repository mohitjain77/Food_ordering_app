import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Mohit Jain",
    email: "mohitjain199629@gmail.com",
  },
});

UserContext.displayName = 'UserContext';

export default UserContext;
