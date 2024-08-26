import React, { createContext, useState, useEffect, useContext } from 'react';
import { fetchNick } from '../services/githubApi';
const UserContext = /*#__PURE__*/createContext();
export const Provider = ({
  children
}) => {
  // state here
  const [gitMe, setGitMe] = useState({});

  // useEffect for fetches here
  useEffect(() => {
    // fetch then set me
    //fetchNick().then(setGitMe);
  }, []);
  return /*#__PURE__*/React.createElement(UserContext.Provider, {
    value: {
      gitMe
    }
  }, children);
};

// custom hooks here
export const useNick = () => {
  const {
    gitMe
  } = useContext(UserContext);
  return gitMe;
};