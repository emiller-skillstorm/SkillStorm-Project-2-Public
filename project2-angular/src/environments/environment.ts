// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  userAPIurl : 'https://azuretraining-em-10202021.azurewebsites.net/api/Users',
  deviceAPIurl: 'https://azuretraining-em-10202021.azurewebsites.net/api/Devices',
  //TODO: after successful login, we might want to save the user's id to use during the session
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
