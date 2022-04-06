import { registerWebPlugin, WebPlugin } from '@capacitor/core';
import { AppInfoModal, AppUpdatePluginPlugin } from './definitions';

export class AppUpdatePluginWeb extends WebPlugin implements AppUpdatePluginPlugin {
    constructor() {
        super({
            name: 'AppUpdatePlugin',
            platforms: ['web']
        });
    }
    
    async setServerBasePathForIOS(options: { path: string }): Promise<{ valid: boolean }>{
        console.log(options);
        return undefined;
    }

    async checkUpdatePath(options: { path: string }): Promise<{ valid: boolean }> {
        console.log(options);
        return undefined;
    }

    async copyAndExtractFile(options: { fileName: string; updateVersion: string }): Promise<{ updateUrl: string; updateStatus: string }> {
        console.log(options);
        return undefined;
    }

    async downloadUpdate(options: { fileUrl: string; fileName: string }): Promise<void> {
        console.log(options);
        return undefined;
    }

    async getAppInfo(): Promise<AppInfoModal> {
        return undefined;
    }

    async updatePref(options: { updateVersion: string; updateStatus: string }): Promise<void> {
        console.log(options);
        return undefined;
    }
}

const AppUpdatePlugin = new AppUpdatePluginWeb();

export { AppUpdatePlugin };


registerWebPlugin(AppUpdatePlugin);
