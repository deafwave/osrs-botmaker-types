/// <reference path="../../../../../../../../src/types/java/index.d.ts" />
/// <reference path="../../../../../../../../src/types/runelite/index.d.ts" />
/*
 * Copyright (c) 2018, Tomas Slusny <slusnucky@gmail.com>
 * Copyright (c) 2018, PandahRS <https://github.com/PandahRS>
 * Copyright (c) 2021, Jonathan Rousseau <https://github.com/JoRouss>
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
declare namespace net.runelite.client.plugins.discord {
export class DiscordPlugin extends Plugin
{
	private provideConfig(configManager: ConfigManager): DiscordConfig;
	private startUp(): void;
	private shutDown(): void;
	onGameStateChanged(event: net.runelite.api.events.GameStateChanged): void;
	onConfigChanged(event: ConfigChanged): void;
	onStatChanged(statChanged: net.runelite.api.events.StatChanged): void;
	onDiscordUserInfo(event: DiscordUserInfo): void;
		// animated avatars contain a_ as prefix so we need to get rid of that first to check against matcher
			// userid is actually a snowflake, but the matcher is sufficient
	onUserSync(event: UserSync): void;
	checkForValidStatus(): void;
	private resetState(): void;
	private checkForGameStateUpdate(): void;
	private checkForAreaUpdate(): void;
		// NMZ uses the same region ID as KBD. KBD is always on plane 0 and NMZ is always above plane 0
		// Since KBD requires going through the wilderness there is no EventType for it
			// Unknown region, reset to default in-game
	private showArea(event: DiscordGameEventType): boolean;
}
}