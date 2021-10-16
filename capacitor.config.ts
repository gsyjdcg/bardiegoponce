import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
 appId: 'www.bardiegoponce.com',
  appName: 'bardiegoponce',
  bundledWebRuntime: false,
  webDir: 'www',
  plugins: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    SplashScreen: {
      launchShowDuration: 0,
    }
  },
};

export default config;
