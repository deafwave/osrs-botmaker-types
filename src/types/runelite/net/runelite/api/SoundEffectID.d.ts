/// <reference path="../../../../../../src/types/java/index.d.ts" />
/// <reference path="../../../../../../src/types/runelite/index.d.ts" />
/*
 * Copyright (c) 2018, SomeoneWithAnInternetConnection
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
declare namespace net.runelite.api {
	/**
	 * Utility class used for mapping sound effect IDs.
	 */
	export class SoundEffectID {
		readonly UI_BOOP = 2266;
		readonly GE_INCREMENT_PLOP = 3929;
		readonly GE_DECREMENT_PLOP = 3930;
		readonly GE_ADD_OFFER_DINGALING = 3925;
		readonly GE_COLLECT_BLOOP = 3928;
		readonly GE_COIN_TINKLE = 3924;

		readonly CLOSE_DOOR = 60;
		readonly OPEN_DOOR = 62;
		readonly ITEM_DROP = 2739;
		readonly ITEM_PICKUP = 2582;
		readonly PICK_PLANT_BLOOP = 2581;

		readonly BURY_BONES = 2738;
		readonly TINDER_STRIKE = 2597;
		readonly FIRE_WOOSH = 2596;
		readonly TREE_FALLING = 2734;
		readonly TREE_CHOP = 2735;
		readonly MINING_TINK = 3220;
		readonly COOK_WOOSH = 2577;
		readonly MAGIC_SPLASH_BOING = 227;
		readonly SMITH_ANVIL_TINK = 3790;
		readonly SMITH_ANVIL_TONK = 3791;

		/**
		 * Used for random event NPCs spawning, and the imp teleport.
		 */
		readonly NPC_TELEPORT_WOOSH = 1930;

		readonly TELEPORT_VWOOP = 200;
		readonly ZERO_DAMAGE_SPLAT = 511;
		readonly TAKE_DAMAGE_SPLAT = 510;
		readonly ATTACK_HIT = 2498;

		readonly PRAYER_ACTIVATE_THICK_SKIN = 2690;
		readonly PRAYER_ACTIVATE_BURST_OF_STRENGTH = 2688;
		readonly PRAYER_ACTIVATE_CLARITY_OF_THOUGHT = 2664;
		readonly PRAYER_ACTIVATE_SHARP_EYE_RIGOUR = 2685;
		readonly PRAYER_ACTIVATE_MYSTIC_WILL_AUGURY = 2670;
		readonly PRAYER_ACTIVATE_ROCK_SKIN = 2684;
		readonly PRAYER_ACTIVATE_SUPERHUMAN_STRENGTH = 2689;
		readonly PRAYER_ACTIVATE_IMPROVED_REFLEXES = 2662;
		readonly PRAYER_ACTIVATE_RAPID_RESTORE_PRESERVE = 2679;
		readonly PRAYER_ACTIVATE_RAPID_HEAL = 2678;
		readonly PRAYER_ACTIVATE_PROTECT_ITEM = 1982;
		readonly PRAYER_ACTIVATE_HAWK_EYE = 2666;
		readonly PRAYER_ACTIVATE_MYSTIC_LORE = 2668;
		readonly PRAYER_ACTIVATE_STEEL_SKIN = 2687;
		readonly PRAYER_ACTIVATE_ULTIMATE_STRENGTH = 2691;
		readonly PRAYER_ACTIVATE_INCREDIBLE_REFLEXES = 2667;
		readonly PRAYER_ACTIVATE_PROTECT_FROM_MAGIC = 2675;
		readonly PRAYER_ACTIVATE_PROTECT_FROM_MISSILES = 2677;
		readonly PRAYER_ACTIVATE_PROTECT_FROM_MELEE = 2676;
		readonly PRAYER_ACTIVATE_EAGLE_EYE = 2665;
		readonly PRAYER_ACTIVATE_MYSTIC_MIGHT = 2669;
		readonly PRAYER_ACTIVATE_RETRIBUTION = 2682;
		readonly PRAYER_ACTIVATE_REDEMPTION = 2680;
		readonly PRAYER_ACTIVATE_SMITE = 2686;
		readonly PRAYER_ACTIVATE_CHIVALRY = 3826;
		readonly PRAYER_ACTIVATE_PIETY = 3825;
		readonly PRAYER_DEACTIVE_VWOOP = 2663;
		readonly PRAYER_DEPLETE_TWINKLE = 2672;

		readonly TOWN_CRIER_BELL_DING = 3813;
		readonly TOWN_CRIER_BELL_DONG = 3817;
		readonly TOWN_CRIER_SHOUT_SQUEAK = 3816;
	}
}
