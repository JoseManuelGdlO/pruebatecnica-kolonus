import { Preferences } from '@capacitor/preferences';

export class StorageService {

    async save(key: string, object: any[]) {
        await Preferences.set({
            key: key,
            value: JSON.stringify(object)
        });
    }

    async load(key: string) {
        const { value } = await Preferences.get({ key: key });
        if (value) {
            return JSON.parse(value);
        }
    }
}