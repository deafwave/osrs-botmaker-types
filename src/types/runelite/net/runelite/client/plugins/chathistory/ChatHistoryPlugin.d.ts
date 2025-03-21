/// <reference path="../../../../../../../../src/types/java/index.d.ts" />
/// <reference path="../../../../../../../../src/types/runelite/index.d.ts" />
/*
 * Copyright (c) 2018, Tomas Slusny <slusnucky@gmail.com>
 * Copyright (c) 2020, Anthony <https://github.com/while-loop>
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
declare namespace net.runelite.client.plugins.chathistory {
export class ChatHistoryPlugin extends Plugin implements KeyListener
{
	getConfig(configManager: ConfigManager): ChatHistoryConfig;
	private startUp(): void;
		// The client reuses MessageNodes after 100 chat messages of
		// the same type, so this must be 100 (or maybe a map of
		// size 100 evicting queues)
	private shutDown(): void;
	onChatMessage(chatMessage: net.runelite.api.events.ChatMessage): void;
		// Start sending old messages right after the welcome message, as that is most reliable source
		// of information that chat history was reset
				// Remove to ensure uniqueness & its place in history
					// If the friend didn't previously exist ensure deque capacity doesn't increase by adding them
				// intentional fall-through
	onMenuOptionClicked(event: net.runelite.api.events.MenuOptionClicked): void;
		// The menu option for clear history is "<col=ffff00>Public:</col> Clear history"
	onMenuEntryAdded(entry: net.runelite.api.events.MenuEntryAdded): void;
				// Pull tab name from menu since Trade/Group is variable
			// Get child id of first chat message static child so we can substract this offset to link to dynamic child
			// later
			// Convert current message static widget id to dynamic widget id of message node with message contents
			// When message is right clicked, we are actually right clicking static widget that contains only sender.
			// The actual message contents are stored in dynamic widgets that follow same order as static widgets.
			// Every first dynamic widget is message sender, every second one is message contents,
			// every third one is clan name and every fourth one is clan rank icon.
			// The last two are hidden when the message is not from a clan chat or guest clan chat.
			// Extract and store message contents when menu is opened because dynamic children can change while right click
			// menu is open and dynamicChildId will be outdated
	private clearMessageQueue(tab: ChatboxTab): void;
	private clearChatboxHistory(tab: ChatboxTab): void;
			// if the tab has a vanilla Clear option, it isn't necessary to delete the messages ourselves.
			// this rebuilds both the chatbox and the pmbox
	keyPressed(e: KeyEvent): void;
	keyTyped(e: KeyEvent): void;
	keyReleased(e: KeyEvent): void;
	private findPreviousFriend(): string;
}
}