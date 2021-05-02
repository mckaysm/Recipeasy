import React from "react";
import { useLocation } from "react-router-dom";
import { Frame, Navigation, TopBar } from "@shopify/polaris";
import Routes from "./Routes";

function AppFrame() {
  const location = useLocation();

  const topBarMarkup = <TopBar />;

  React.useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    <Frame
      topBar={topBarMarkup}
      navigation={
        <Navigation location={location.pathname}>
          <Navigation.Section
            items={[
              {
                url: "/",
                label: "Home",
                selected: location.pathname === "/" ? true : false,
              },
              {
                url: "/recipes",
                label: "Recipes",
                selected: location.pathname === "/recipes" ? true : false,
              },
              {
                url: "/planner",
                label: "Planner",
                selected: location.pathname === "/planner" ? true : false,
              },
            ]}
          />
        </Navigation>
      }
    >
      <Routes />
    </Frame>
  );
}

export default AppFrame;
