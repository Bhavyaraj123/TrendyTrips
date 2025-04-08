import { createContext, useReducer,useEffect } from "react";

// const getUserFromStorage = () => {
//   try {
//     const storedUser = localStorage.getItem("user");
//     return storedUser ? JSON.parse(storedUser) : null;
//   } catch (error) {
//     console.error("Error parsing user data:", error);
//     localStorage.removeItem("user");
//     return null;
//   }
// };

const initialState = {
  user: localStorage.getItem('user')!==undefined?JSON.parse(localStorage.getItem('user')):null ,
  loader: false,
  error: null,
};

export const AuthContext = createContext(initialState);

const AuthReducer = (state, action) => {
  
  switch (action.type) {
    case "LOGIN_START":
      return { user: null, loader: true, error: null };

    case "LOGIN_SUCCESS":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { user: action.payload, loader: false, error: null };

    case "LOGIN_FAILURE":
      return { user: null, loader: false, error: action.payload || "An error occurred" };

    case "REGISTER_SUCCESS":
      return { user: null, loader: false, error: null };

    case "LOGOUT":
      localStorage.removeItem("user");
      return { user: null, loader: false, error: null };

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user))
  }, [state.user])
  return <AuthContext.Provider value={{
    user:state.user,
    loader:state.loader,
    error:state.loader,
    dispatch
  }}>
    {children}
  </AuthContext.Provider>
};