import React from "react";

import { Layout, Page, Card } from "@shopify/polaris";

export const Recipes = () => {
  return (
    <Page title="Recipes">
      <Layout>
        <Card title="Recipes" sectioned>
          <p>List of all recipes goes here</p>
        </Card>
      </Layout>
    </Page>
  );
};
