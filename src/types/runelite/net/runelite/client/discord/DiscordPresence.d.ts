/// <reference path="../../../../../../../src/types/java/index.d.ts" />
/// <reference path="../../../../../../../src/types/runelite/index.d.ts" />
/*
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
declare namespace net.runelite.client.discord {
/**
 * Represents Discord Rich Presence RPC data
 */
export class DiscordPresence
{
	/**
	 * The user's current party status.
	 * Example: "Looking to Play", "Playing Solo", "In a Group"
	 *
	 * <b>Maximum: 128 characters</b>
	 */
	/**
	 * What the player is currently doing.
	 * Example: "Competitive - Captain's Mode", "In Queue", "Unranked PvP"
	 *
	 * <b>Maximum: 128 characters</b>
	 */
	/**
	 * Unix timestamp (seconds) for the start of the game.
	 */
	/**
	 * Unix timestamp (seconds) for the end of the game.
	 */
	/**
	 * Name of the uploaded image for the large profile artwork.
	 * Example: "default"
	 *
	 * <b>Maximum: 32 characters</b>
	 */
	/**
	 * Tooltip for the largeImageKey.
	 * Example: "Blade's Edge Arena", "Numbani", "Danger Zone"
	 *
	 * <b>Maximum: 128 characters</b>
	 */
	/**
	 * Name of the uploaded image for the small profile artwork.
	 * Example: "rogue"
	 *
	 * <b>Maximum: 32 characters</b>
	 */
	/**
	 * Tooltip for the smallImageKey.
	 * Example: "Rogue - Level 100"
	 *
	 * <b>Maximum: 128 characters</b>
	 */
	/**
	 * ID of the player's party, lobby, or group.
	 * Example: "ae488379-351d-4a4f-ad32-2b9b01c91657"
	 *
	 * <b>Maximum: 128 characters</b>
	 */
	/**
	 * Current size of the player's party, lobby, or group.
	 * Example: 1
	 */
	/**
	 * Maximum size of the player's party, lobby, or group.
	 * Example: 5
	 */
	/**
	 * Unique hashed string for Spectate and Join.
	 * Required to enable match interactive buttons in the user's presence.
	 * Example: "MmhuZToxMjMxMjM6cWl3amR3MWlqZA=="
	 *
	 * <b>Maximum: 128 characters</b>
	 */
	/**
	 * Unique hashed string for Spectate button.
	 * This will enable the "Spectate" button on the user's presence if whitelisted.
	 * Example: "MTIzNDV8MTIzNDV8MTMyNDU0"
	 *
	 * <b>Maximum: 128 characters</b>
	 */
	/**
	 * Unique hashed string for chat invitations and Ask to Join.
	 * This will enable the "Ask to Join" button on the user's presence if whitelisted.
	 * Example: "MTI4NzM0OjFpMmhuZToxMjMxMjM="
	 *
	 * <b>Maximum: 128 characters</b>
	 */
	/**
	 * Marks the matchSecret as a game session with a specific beginning and end.
	 */
}
}