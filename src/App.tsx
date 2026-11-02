import { Frame, Layout, Page } from "@shopify/polaris";
import { ZapioBanner } from "./components/ZapioBanner/ZapioBanner";

export default function App() {
  return (
    <Frame>
      <Page title="FormCRM">
        <Layout>
          <Layout.Section>
            <ZapioBanner />
          </Layout.Section>
        </Layout>
      </Page>
    </Frame>
  );
}
