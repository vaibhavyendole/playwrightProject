declare module '@playwright/test' {
  export const test: any;
  export const expect: any;
  export function defineConfig(config: any): any;
  export const devices: any;

  export interface Fixtures {
    loginPage: any;
    inventoryPage: any;
    loggedInToApp: any;
  }

  export interface WorkerFixtures {
    loginPage: any;
    inventoryPage: any;
    loggedInToApp: any;
  }
}
