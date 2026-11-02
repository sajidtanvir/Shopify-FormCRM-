import { useState } from "react";
import { BlockStack, Box, Button, Icon, Text } from "@shopify/polaris";
import { AppExtensionIcon, XIcon } from "@shopify/polaris-icons";
import { BackdropCards } from "./BackdropCards";
import { PhoneDemo } from "./PhoneDemo";
import "./ZapioBanner.css";

export interface ZapioBannerProps {
  /** Where "Try zapio" sends the merchant. */
  url?: string;
  onTry?: () => void;
  onDismiss?: () => void;
}

export function ZapioBanner({
  url = "https://apps.shopify.com/",
  onTry,
  onDismiss,
}: ZapioBannerProps) {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <section className="ZapioBanner" aria-labelledby="zapio-banner-title">
      <div className="ZapioBanner__visual" aria-hidden="true">
        <BackdropCards />
        <div className="ZapioBanner__glow" />
        <PhoneDemo />
      </div>

      <div className="ZapioBanner__content">
        <Box paddingBlock="800" paddingInlineStart="500">
          <BlockStack gap="600" inlineAlign="start">
            <BlockStack gap="200">
              <Text as="h2" variant="headingMd" id="zapio-banner-title">
                Introducing Zapio
              </Text>
              <Text as="p" variant="bodyMd">
                Boost your store’s AOV with Upsell campaigns.
              </Text>
            </BlockStack>
            <Button icon={AppExtensionIcon} url={onTry ? undefined : url} external={!onTry} onClick={onTry}>
              Try zapio
            </Button>
          </BlockStack>
        </Box>
      </div>

      <button
        type="button"
        className="ZapioBanner__close"
        aria-label="Dismiss Zapio banner"
        onClick={() => {
          setDismissed(true);
          onDismiss?.();
        }}
      >
        <Icon source={XIcon} />
      </button>
    </section>
  );
}
