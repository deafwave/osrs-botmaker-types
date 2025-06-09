/// <reference path="./api/api.d.ts" />
/// <reference path="./api/bot.d.ts" />
/// <reference path="./api/client.d.ts" />

declare const configManager: {
	// getConfiguration overloads
	getConfiguration: {
		(groupName: string, key: string): string | null;
		(groupName: string, key: string, clazz: Type): object;
		(groupName: string, profile: string, key: string, type: Type): object;
	};

	// setConfiguration overloads
	setConfiguration: {
		(groupName: string, key: string, value: object | boolean | string): void;
		(groupName: string, profile: string, key: string, value: object | string | boolean): void;
	};

	// RS profile-specific get/set
	getRSProfileConfiguration: {
		(groupName: string, key: string): string | null;
		(groupName: string, key: string, clazz: Type): object;
	};
	setRSProfileConfiguration: (groupName: string, key: string, value: object) => void;

	// Other methods
	getConfig: (clazz: Class) => object;
	getConfigDescriptor: (configurationProxy: Config) => ConfigDescriptor;
	getConfigurationKeys: (prefix: string) => List;
	getProfile: () => ConfigProfile;
	getRSProfileKey: () => string;
	getRSProfileConfigurationKeys: (group: string, profile: string, keyPrefix: string) => List;
	getRSProfiles: () => List;
	getWholeKey: (groupName: string, profile: string, key: string) => string;
	importAndMigrate: (lock: ProfileManager.Lock, from: File, targetProfile: ConfigProfile) => void;
	isLoading: () => void;
	onSessionClose: (sessionClose: SessionClose) => void;
	onSessionOpen: (sessionOpen: SessionOpen) => void;
	renameProfile: (profile: ConfigProfile, name: string) => void;
	sendConfig: () => void;
	setDefaultConfiguration: (proxy: Config, override: boolean) => void;
	switchProfile: (profile: ConfigProfile) => void;
	toggleSync: (profile: ConfigProfile, sync: boolean) => void;

	// unsetConfiguration overloads
	unsetConfiguration: {
		(groupName: string, key: string): void;
		(groupName: string, profile: string, key: string): void;
	};
	unsetRSProfileConfiguration: (groupName: string, key: string) => void;
};
