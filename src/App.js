import React from "react";
import Layout from "./components/layout";
import NoSearch from "./components/no-search";
import Profile from "./components/profile";
import useUser from "./hooks/github-hooks";

const App = () => {
  const { userState } = useUser();
  return (
    <Layout>
      {userState.hasUser ? (
        <>
          {userState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />   </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
};

export default App;