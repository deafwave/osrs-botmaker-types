/// <reference path="../../../../../../../../src/types/java/index.d.ts" />
/// <reference path="../../../../../../../../src/types/runelite/index.d.ts" />
/*
 * Copyright (c) 2018, Adam <Adam@sigterm.info>
 * Copyright (c) 2018, Ron Young <https://github.com/raiyni>
 * Copyright (c) 2018, Tomas Slusny <slusnucky@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
declare namespace net.runelite.client.plugins.banktags {
export class BankTagsPlugin extends Plugin
{
	getConfig(configManager: ConfigManager): BankTagsConfig;
	resetConfiguration(): void;
	startUp(): void;
	shutDown(): void;
			// since the tab interface is unregistered from the eventbus, manually deinit it
			// and then reinit the bank.
	private reinitBank(): void;
		// call [clientscript,bankmain_init]
/** @deprecated */
	private cleanConfig(): void;
/** @deprecated */
	private removeInvalidTags(key: string): void;
	onGrandExchangeSearched(event: net.runelite.api.events.GrandExchangeSearched): void;
	onScriptCallbackEvent(event: net.runelite.api.events.ScriptCallbackEvent): void;
				// This event only fires when the bank is in search mode. It will fire even if there is no search
				// input. We prevent having a tag tab open while also performing a normal search, so if a tag tab
				// is active here it must mean we have placed the bank into search mode. See onScriptPostFired().
				// Shared storage uses the bankmain filter scripts too. Allow using tag searches in it but don't
				// apply the tag search from the active tab.
					// return true
					// if the item isn't tagged we return false to prevent the item matching if the item name happens
					// to contain the tag name.
	onMenuEntryAdded(event: net.runelite.api.events.MenuEntryAdded): void;
	private editTags(entry: MenuEntry): void;
		// Get both tags and vartags and append * to end of vartags name
					// Split inputted tags to vartags (ending with *) and regular tags
					// And save them
					// If a tab if active, rebuild the bank to apply the changes
	onConfigChanged(configChanged: ConfigChanged): void;
}
}