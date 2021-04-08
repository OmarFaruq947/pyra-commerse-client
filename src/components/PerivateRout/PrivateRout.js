// import React, { useContext } from 'react';
// import { Redirect, Route } from 'react-router-dom';
// import { userContext } from '../../App';

// const PrivateRout = ({children, ...rest}) => {
//     const [loggedInUser, setLoggedInUser] = useContext(userContext);
//     return (
//         <Route
//       {...rest}
//       render={({ location }) =>
//       loggedInUser.user? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/AddProduct",
//               state: { from: location }
//             }}
//           />

            

//         )
//       }
//     />
//     );
// };

// export default PrivateRout;