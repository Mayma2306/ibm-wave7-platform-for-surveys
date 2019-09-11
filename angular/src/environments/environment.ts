// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseURI : "http://172.23.238.186:8090/api/v1",
  loginBaseURI : "http://172.23.238.186:8085", 
  signUpBaseURI : "http://172.23.238.186:8095",

  // baseURI : "http://13.235.226.107:8090/api/v1",
  // loginBaseURI : "http://13.235.226.107:8085",
  // signUpBaseURI : "http://13.235.226.107:8095",
   dialogflow: {
    chatbot: 'f047460b32b4461ebca432ae15e54b79'
  }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
