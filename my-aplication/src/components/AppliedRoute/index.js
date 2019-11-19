import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";
const styles={
    container:{
      minHeight: "85vh",
      paddingBottom: "5px"
    },
  }
const AppliedRoute = ({ component: ComponentToRender, ...rest }) => {
  return (
    <Route {...rest} render={props => {
        return (
          <Fragment>
            <Header />
            <div className="container-fluid " style={styles.container}>
              <ComponentToRender {...props} />
            </div>
            <Footer />
          </Fragment>
        );
      }}>
    </Route>
  );
};
export default AppliedRoute;
