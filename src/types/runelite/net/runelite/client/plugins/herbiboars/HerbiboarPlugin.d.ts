/// <reference path="../../../../../../../../src/types/java/index.d.ts" />
/// <reference path="../../../../../../../../src/types/runelite/index.d.ts" />
/*
 * Copyright (c) 2017, Tyler <https://github.com/tylerthardy>
 * Copyright (c) 2020, dekvall <https://github.com/dekvall>
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
declare namespace net.runelite.client.plugins.herbiboars {
	export class HerbiboarPlugin extends Plugin {
		/**
		 * Objects which appear at the beginning of Herbiboar hunting trails
		 */
		/**
		 * Herbiboar hunting "footstep" trail objects
		 */
		/**
		 * Objects which trigger next trail (mushrooms, mud, seaweed, etc)
		 */
		/**
		 * Tunnel where the Herbiboar is hiding at the end of a trail
		 */
		/**
		 * Trail object IDs which should be highlighted
		 */
		/**
		 * Sequence of herbiboar spots searched along the current trail
		 */
		provideConfig(configManager: ConfigManager): HerbiboarConfig;
		private startUp(): void;
		private shutDown(): void;
		private updateTrailData(): void;
		// Get trail data
		// The trail after you have searched the spot
		// You never visit the same spot twice
		// The current trail
		// The started varbit doesn't get set until the first spot of the rotation has been searched
		// so we need to use the current group as an indicator of the rotation being started
		onMenuOptionClicked(
			menuOpt: net.runelite.api.events.MenuOptionClicked,
		): void;
		private resetTrailData(): void;
		private clearCache(): void;
		onGameStateChanged(
			event: net.runelite.api.events.GameStateChanged,
		): void;
		onVarbitChanged(event: net.runelite.api.events.VarbitChanged): void;
		onGameObjectSpawned(
			event: net.runelite.api.events.GameObjectSpawned,
		): void;
		onGameObjectDespawned(
			event: net.runelite.api.events.GameObjectDespawned,
		): void;
		onGroundObjectSpawned(
			event: net.runelite.api.events.GroundObjectSpawned,
		): void;
		onGroundObjectDespawned(
			event: net.runelite.api.events.GroundObjectDespawned,
		): void;
		// Store relevant GameObjects (starts, tracks on trails, objects used to trigger next trails, and tunnels)
		private onTileObject(
			oldObject: TileObject,
			newObject: TileObject,
		): void;
		// Starts
		// Trails
		// GameObject to trigger next trail (mushrooms, mud, seaweed, etc)
		// Herbiboar tunnel
		private checkArea(): boolean;
		getEndLocations(): Array<net.runelite.api.coords.WorldPoint>;
	}
}
