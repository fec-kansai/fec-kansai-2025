import "@workspace/ui/globals.css";

import type { Preview } from "@storybook/react";
import { withScreenshot } from "storycap";

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    screenshot: {
      fullPage: false,
      captureBeyondViewport: false,
      delay: 0,
      viewports: {
        desktop: {
          width: 1920,
          height: 1080,
        },
        tablet: {
          width: 768,
          height: 1024,
        },
        mobile: {
          width: 360,
          height: 800,
          isMobile: true,
          hasTouch: true,
        },
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "#09090B",
        },
        {
          name: "light",
          value: "#ffffff",
        },
      ],
    },
  },
  decorators: [withScreenshot()],
};

export default preview;
