import React, { useState } from 'react';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';

const Root = () => {
  const [auth, setAuth] = useState(true);

  return auth === true ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default Root;
