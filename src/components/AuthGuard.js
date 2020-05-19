import React, { useState } from "react";

import { Route, Redirect } from "react-router-dom";

export const AuthGuard = ({ children, ...rest }) => {
  const [state, setState] = useState(true);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        state ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};
