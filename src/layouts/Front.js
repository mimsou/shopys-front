import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import FrontHeader from "components/Headers/FrontHeader.js";
import FrontFooter from "components/Footers/FrontFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";  

const Front = (props) => {
  const mainContent = React.useRef(null);
 
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/front") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props.location.pathname.indexOf(routes[i].layout + routes[i].path) !==
        -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  return (
    <>   
    <FrontHeader /> 
      <Container fluid>
   
        <div className="main-content" ref={mainContent}>
     
          <Switch>
            {getRoutes(routes)}
            <Redirect from="*" to="/front/index" />
          </Switch>

          <FrontFooter />
          
        </div>
      </Container>
    </>
  );
};

export default Front;
