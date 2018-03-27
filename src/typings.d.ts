/* SystemJS module definition */
///<reference path="../node_modules/abp-web-resources/Abp/Framework/scripts/abp.d.ts"/>
///<reference path="../node_modules/abp-web-resources/Abp/Framework/scripts/libs/abp.signalr.d.ts"/>
///<reference path="../node_modules/moment/moment.d.ts"/>
///<reference path="../node_modules/@types/moment-timezone/index.d.ts"/>
///<reference path="../node_modules/@types/toastr/index.d.ts"/>

declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface WebpackRequire {
  <T>(path: string): T;
  (paths: string[], callback: (...modules: any[]) => void): void;
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
}
interface NodeRequire extends WebpackRequire {}
declare var require: NodeRequire;

// G2
declare var G2: any;
declare var Slider: any;
declare var Cloud: any;
