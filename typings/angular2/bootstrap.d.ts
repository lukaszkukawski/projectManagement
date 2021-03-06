// Type definitions for Angular v2.0.0-local_sha.cf3ce17
// Project: http://angular.io/
// Definitions by: angular team <https://github.com/angular/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// ***********************************************************
// This file is generated by the Angular build process.
// Please do not create manual edits or send pull requests
// modifying this file.
// ***********************************************************

// angular2/bootstrap depends transitively on these libraries.
// If you don't have them installed you can install them using TSD
// https://github.com/DefinitelyTyped/tsd

///<reference path="./core.d.ts"/>




/**
 * See {@link bootstrap} for more information.
 * @deprecated
 */
declare module bootstrap {  
  /**
   * Bootstrapping for Angular applications.
   * 
   * You instantiate an Angular application by explicitly specifying a component to use
   * as the root component for your application via the `bootstrap()` method.
   * 
   * ## Simple Example
   * 
   * Assuming this `index.html`:
   * 
   * ```html
   * <html>
   *   <!-- load Angular script tags here. -->
   *   <body>
   *     <my-app>loading...</my-app>
   *   </body>
   * </html>
   * ```
   * 
   * An application is bootstrapped inside an existing browser DOM, typically `index.html`.
   * Unlike Angular 1, Angular 2 does not compile/process providers in `index.html`. This is
   * mainly for security reasons, as well as architectural changes in Angular 2. This means
   * that `index.html` can safely be processed using server-side technologies such as
   * providers. Bindings can thus use double-curly `{{ syntax }}` without collision from
   * Angular 2 component double-curly `{{ syntax }}`.
   * 
   * We can use this script code:
   * 
   * ```
   * @Component({
   *    selector: 'my-app',
   *    template: 'Hello {{ name }}!'
   * })
   * class MyApp {
   *   name:string;
   * 
   *   constructor() {
   *     this.name = 'World';
   *   }
   * }
   * 
   * main() {
   *   return bootstrap(MyApp);
   * }
   * ```
   * 
   * When the app developer invokes `bootstrap()` with the root component `MyApp` as its
   * argument, Angular performs the following tasks:
   * 
   *  1. It uses the component's `selector` property to locate the DOM element which needs
   *     to be upgraded into the angular component.
   *  2. It creates a new child injector (from the platform injector). Optionally, you can
   *     also override the injector configuration for an app by invoking `bootstrap` with the
   *     `componentInjectableBindings` argument.
   *  3. It creates a new `Zone` and connects it to the angular application's change detection
   *     domain instance.
   *  4. It creates an emulated or shadow DOM on the selected component's host element and loads the
   *     template into it.
   *  5. It instantiates the specified component.
   *  6. Finally, Angular performs change detection to apply the initial data providers for the
   *     application.
   * 
   * 
   * ## Bootstrapping Multiple Applications
   * 
   * When working within a browser window, there are many singleton resources: cookies, title,
   * location, and others. Angular services that represent these resources must likewise be
   * shared across all Angular applications that occupy the same browser window. For this
   * reason, Angular creates exactly one global platform object which stores all shared
   * services, and each angular application injector has the platform injector as its parent.
   * 
   * Each application has its own private injector as well. When there are multiple
   * applications on a page, Angular treats each application injector's services as private
   * to that application.
   * 
   * ## API
   * 
   * - `appComponentType`: The root component which should act as the application. This is
   *   a reference to a `core.Type` which is annotated with `@Component(...)`.
   * - `customProviders`: An additional set of providers that can be added to the
   *   app injector to override default injection behavior.
   * 
   * Returns a `Promise` of {@link core.ComponentRef}.
   */
  function bootstrap(appComponentType: core.Type, customProviders?: Array<any /*core.Type | Provider | any[]*/>): Promise<core.ComponentRef>;
  

    
  /**
   * Marks a function or method as an Angular 2 entrypoint. Only necessary in Dart code.
   * 
   * The optional `name` parameter will be reflected in logs when the entry point is processed.
   * 
   * See [the wiki][] for detailed documentation.
   * [the wiki]: https://github.com/angular/angular/wiki/Angular-2-Dart-Transformer#entry_points
   * 
   * ## Example
   * 
   * ```
   * @AngularEntrypoint("name-for-debug")
   * void main() {
   *   bootstrap(MyComponent);
   * }
   * ```
   */
  class AngularEntrypoint {
    
    constructor(name?: String);
    
    name: String;
    
  }

  
}

declare module "angular2/bootstrap" {
  export = bootstrap;
}


