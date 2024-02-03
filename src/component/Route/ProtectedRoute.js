import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ Component: Component, ...rest }) => {
//   const { loading, isAuthenticated, user } = useSelector((state) => state.user);
//   const navigate = useNavigate();

//   return (
//     <Fragment>
//       {!loading && (
//         <Route
//           {...rest}
//           render={(props) => {
//             if (!isAuthenticated) {
//               return <> {navigate("/login")}</>
//             }
//              <><Component {...props} /></>
//           }}
//         />
//       )}
//     </Fragment>
//   );
// };

// export default ProtectedRoute;
const Protected = ({ isAdmin, component: Component, ...routeProps }) => {
    const { loading, isAuthenticated, user } = useSelector((state) => state.user);

    if (!loading && isAuthenticated === false) {
      return <Navigate to="/login" />;
    }

    if (!loading && isAdmin === true && user?.role !== "admin") {
      return <Navigate to="/login\" />;
    }

    return (
      <Fragment>
        {!loading ? (
         <Component {...routeProps} />
        ) : null}
      </Fragment>
    );
  };
  export default Protected;
