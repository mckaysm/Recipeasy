import React, { useState } from "react";
import {
  Frame,
  Layout,
  Page,
  TopBar,
  Navigation,
  Card,
  Link,
  Button,
  FormLayout,
  TextField,
} from "@shopify/polaris";

const topBarMarkup = <TopBar />;

const navigationMarkup = (
  <Navigation location="/">
    <Navigation.Section
      items={[
        {
          url: "/",
          label: "Home",
          //   icon: HomeMajor,
        },
        {
          url: "/recipes",
          label: "Recipes",
        },
        {
          url: "/planner",
          label: "Planner",
        },
      ]}
    />
  </Navigation>
);

const pageMarkup = (
  <Page title="Recipeasy">
    <Layout>
      <Layout.Section>Stuff goes here</Layout.Section>
    </Layout>
  </Page>
);

export default function App() {
  return (
    <Frame topBar={topBarMarkup} navigation={navigationMarkup}>
      {pageMarkup}
    </Frame>
  );
}
