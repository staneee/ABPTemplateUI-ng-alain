import { NgModule  , Injector} from '@angular/core';
import { HttpModule, JsonpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from '@abp/message/message.service';
import { NotifyService } from '@abp/notify/notify.service';
import { LogService } from '@abp/log/log.service';

import { TokenService } from '@abp/auth/token.service';
import { PermissionCheckerService } from '@abp/auth/permission-checker.service';
import { AbpSessionService } from '@abp/session/abp-session.service';
import { AbpMultiTenancyService } from '@abp/multi-tenancy/abp-multi-tenancy.service';
import { AbpHttpConfiguration, AbpHttp } from './abpHttp';

import { FeatureCheckerService } from '@abp/features/feature-checker.service';
import { LocalizationService } from '@abp/localization/localization.service';
import { SettingService } from '@abp/settings/setting.service';

import { UtilsService } from './utils/utils.service';

export function abpHttpFactory(
    xhrBackend: XHRBackend,
    requestOptions: RequestOptions,
    configuration: AbpHttpConfiguration,
    injector: Injector): Http {
    return new AbpHttp(xhrBackend, requestOptions, configuration);
}

export let ABP_HTTP_PROVIDER = {
    provide: Http,
    useFactory: abpHttpFactory,
    deps: [XHRBackend, RequestOptions, AbpHttpConfiguration]
};

@NgModule({
    imports: [
        HttpModule,
        JsonpModule
    ],

    declarations: [
    ],

    providers: [
        CookieService,
        AbpHttpConfiguration,
        ABP_HTTP_PROVIDER,
        MessageService,
        NotifyService,
        LogService,
        UtilsService,
        TokenService,
        AbpSessionService,
        AbpMultiTenancyService,
        PermissionCheckerService,
        FeatureCheckerService,
        LocalizationService,
        SettingService
    ]
})
export class AbpModule {

}
