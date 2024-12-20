/// <reference path="../../../../../../src/types/java/index.d.ts" />
/// <reference path="../../../../../../src/types/runelite/index.d.ts" />
/*
 * Copyright (c) 2019, Shaun Dreclin <https://github.com/ShaunDreclin>
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
	 * Utility class used for mapping enum IDs.
	 * <p>
	 * Note: This class is not complete and may be missing mapped IDs.
	 */
	export class EnumID {
		/**
		 * key: int
		 * val: string creature name
		 */
		static readonly SLAYER_TASK_CREATURE = 693;

		/**
		 * key: int 1-n+1
		 * val: namedobj
		 */
		static readonly RUNEPOUCH_RUNE = 982;
		static readonly XPDROP_COLORS = 1169;

		static readonly FRIENDS_CHAT_RANK_ICONS = 1543;
		/**
		 * key: int 0-n
		 * val: namedobj
		 */
		static readonly PETS = 2158;
		static readonly POH_COSTUME_MEMBERS = 3077;
		static readonly POH_COSTUME_CLUE_BEGINNER = 3293;
		static readonly POH_COSTUME_CLUE_EASY = 3294;
		static readonly POH_COSTUME_CLUE_MEDIUM = 3295;
		static readonly POH_COSTUME_CLUE_HARD = 3296;
		static readonly POH_COSTUME_CLUE_ELITE = 3297;
		static readonly POH_COSTUME_CLUE_MASTER = 3298;
		static readonly POH_COSTUME_ALTERNATE = 3303;
		static readonly POH_COSTUME_ALTERNATES = 3304;
		static readonly CLAN_RANK_NAME = 3797;
		static readonly CLAN_RANK_GRAPHIC = 3798;

		/**
		 * key: int
		 * val: string location name
		 */
		static readonly SLAYER_TASK_LOCATION = 4064;

		static readonly PRAYERS_NORMAL = 4956;
		static readonly PRAYERS_RUINOUS = 4959;

		static readonly WORLD_LOCATIONS = 4992;

		/**
		 * key: int
		 * val: struct slayer task
		 */
		static readonly SLAYER_TASK = 5008;

		/**
		 * key: weapon type
		 * val: enum
		 */
		static readonly WEAPON_STYLES = 3908;

		static readonly SPELLBOOKS = 1981;
		static readonly SPELLBOOKS_SUB = 5280;
	}
}
