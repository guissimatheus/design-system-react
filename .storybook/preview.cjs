import { themes } from '@storybook/theming';
import { initialize, mswDecorator } from 'msw-storybook-addon';

import '../src/styles/global.css'

let options = {};
if (location.hostname === "guissimatheus.github.io") {
  options = {
    serviceWorker: {
      url: "/design-system-react/mockServiceWorker.js"
    }
  }
}

// Initialize MSW
initialize({
  // Remove log das requisições não tratadas
  onUnhandledRequest: 'bypass',
  ...options
});

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator];

export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
}