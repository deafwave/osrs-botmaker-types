/// <reference path="./api/api.d.ts" />
/// <reference path="./api/bot.d.ts" />
/// <reference path="./api/client.d.ts" />

declare const configManager: {
	getConfiguration: (groupName: string, key: string) => string | null;
	setConfiguration: (groupName: string, key: string, value: string) => void;
};
