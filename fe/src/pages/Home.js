import React from "react";

import { Layout, Page, Card } from "@shopify/polaris";

export const Home = () => {
  return (
    <Page title="Home">
      <Layout>
        <Card title="Home" sectioned>
          <p>Home page goes here</p>
        </Card>
      </Layout>
    </Page>
  );
};
