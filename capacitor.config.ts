import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ru.terekhov.bereg',
  appName: 'БЕРЕГ',
  webDir: 'www',
  bundledWebRuntime: false,
  backgroundColor: '#102928',
  android: {
    allowMixedContent: false,
    captureInput: true
  }
};

export default config;
