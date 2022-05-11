import React, { useEffect, useState } from "react";
import { AuthProvider } from "./src/contexts/AuthContext";
import RootNavigator from "./src/navigation/RootNavigator";
import { Splash } from "./src/screens/Splash";

const App = () => {
  const [exibeSplash, setExibeSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setExibeSplash(false);
    }, 3 * 1000);
  }, []);

  return (
    <>
      <AuthProvider>
        {exibeSplash ? <Splash /> : <RootNavigator />}
      </AuthProvider>
    </>
  );
};

export default App;
