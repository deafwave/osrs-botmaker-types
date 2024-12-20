/// <reference path="../../../../../../../../src/types/java/index.d.ts" />
/// <reference path="../../../../../../../../src/types/runelite/index.d.ts" />
/*
 * Copyright (c) 2016-2017, Abel Briggs
 * Copyright (c) 2017, Kronos <https://github.com/KronosDesign>
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
declare namespace net.runelite.client.plugins.idlenotifier {
export class IdleNotifierPlugin extends Plugin
{
	provideConfig(configManager: ConfigManager): IdleNotifierConfig;
	private startUp(): void;
		// can't tell when 6hr will be if enabled while already logged in
	onAnimationChanged(event: net.runelite.api.events.AnimationChanged): void;
			/* Woodcutting */
			/* Woodcutting: Ents & Canoes */
			/* Firemaking */
			/* Cooking(Fire, Range) */
			/* Crafting(Gem Cutting, Glassblowing, Spinning, Weaving, Battlestaves, Pottery) */
			/* Fletching(Cutting, Stringing, Adding feathers and heads) */
			/* Smithing(Anvil, Furnace, Cannonballs */
			/* Fishing */
			/* Mining(Normal) */
			/* Mining(Motherlode) */
			/* Mining(Crashed Star) */
			/* Herblore */
			/* Magic */
			/* Prayer */
			/* Farming */
			/* Misc */
				// On unknown animation simply assume the animation is invalid and dont throw notification
	onInteractingChanged(event: net.runelite.api.events.InteractingChanged): void;
		// Reset last interact
		// If this is not NPC, do not process as we are not interested in other entities
	// this event is needed to handle some rare npcs where "Attack" is not used to initiate combat
	// for example, kraken starts the fight with "Disturb" then changes into another form with "Attack"
	onNpcChanged(event: net.runelite.api.events.NpcChanged): void;
	onGameStateChanged(gameStateChanged: net.runelite.api.events.GameStateChanged): void;
	onHitsplatApplied(event: net.runelite.api.events.HitsplatApplied): void;
	onGraphicChanged(event: net.runelite.api.events.GraphicChanged): void;
	onGameTick(event: net.runelite.api.events.GameTick): void;
			// If user has clicked in the last second then they're not idle so don't send idle notification
	onVarbitChanged(event: net.runelite.api.events.VarbitChanged): void;
	private checkNpcInteraction(target: NPC): void;
			// Player is most likely in combat with attack-able NPC
			// Player is fishing
	private checkFullSpecEnergy(): boolean;
		// Check if we have regenerated over the threshold, and that the
		// regen was small enough.
	private checkLowOxygen(): boolean;
	private checkLowHitpoints(): boolean;
	private checkLowPrayer(): boolean;
	private checkLowEnergy(): boolean;
	private checkHighEnergy(): boolean;
	private checkInteractionIdle(waitDuration: Duration, local: Player): boolean;
				// prevent animation notifications from firing too
	private checkIdleLogout(): boolean;
		// Check clientside AFK first, because this is required for the server to disconnect you for being first
		// If we are not receiving hitsplats then we can be afk kicked
		// We are in combat, so now we have to check for the timer that knocks you out of combat
		// I think there are other conditions that I don't know about, because during testing I just didn't
		// get removed from combat sometimes.
	private check6hrLogout(): boolean;
	private checkAnimationIdle(waitDuration: Duration, local: Player): boolean;
				// prevent interaction notifications from firing too
	private checkMovementIdle(waitDuration: Duration, local: Player): boolean;
				// Return true only if we weren't just breaking out of an animation
	private resetTimers(): void;
		// Reset animation idle timer
		// Reset interaction idle timer
}
}