import React from "react";
import ReactDOM from "react-dom";

const Info = props => {
  return (
    <div>
      <h1>info</h1>
      <p>the info is: {props.info}</p>
    </div>
  );
};

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin === true ? <p>Private info, don't share</p> : <p />}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuth === true ? <p>Authenticated</p> : <p>Not authenticated</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
  <div>
    <AdminInfo isAdmin={true} info="there are the details" />
    <AuthInfo isAuth={false} info="there are the details pt.2" />
  </div>,
  document.getElementById("app")
);
