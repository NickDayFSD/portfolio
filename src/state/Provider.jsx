import React, { createContext, useState, useEffect, useContext } from 'react';
import { fetchNick } from '../services/githubApi';

const UserContext = createContext();

export const Provider = ({ children }) => {
  // state here
  const [gitMe, setGitMe] = useState({});

  // useEffect for fetches here
  useEffect(() => {
    // fetch then set me
    //fetchNick().then(setGitMe);
  }, []);

  return (
    <UserContext.Provider value={{ gitMe }}>{children}</UserContext.Provider>
  );
};

// custom hooks here
export const useNick = () => {
  const { gitMe } = useContext(UserContext);

  return gitMe;
};
