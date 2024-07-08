/// <reference path="../../../../../../src/types/java/index.d.ts" />
/// <reference path="../../../../../../src/types/runelite/index.d.ts" />
/*
 * Copyright (c) 2020 Abex
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
	 * @see ParamHolder
	 */
	export class ParamID {
		static readonly OC_ITEM_OP1 = 451;
		static readonly OC_ITEM_OP2 = 452;
		static readonly OC_ITEM_OP3 = 453;
		static readonly OC_ITEM_OP4 = 454;
		static readonly OC_ITEM_OP5 = 455;
		static readonly OC_ITEM_OP6 = 456;
		static readonly OC_ITEM_OP7 = 457;
		static readonly OC_ITEM_OP8 = 458;

		/**
		 * Long name for NPCs used in the HP hud
		 */
		static readonly NPC_HP_NAME = 510;
		/**
		 * @see SettingID
		 */
		static readonly SETTING_ID = 1077;
		// defaults to 5
		// 1 is continuous
		static readonly SETTING_SLIDER_STEPS = 1101;
		static readonly SETTING_CUSTOM_TRANSMIT = 1085;
		// defaults to true
		// track is foreground
		static readonly SETTING_FOREGROUND_CLICKZONE = 1105;
		static readonly SETTING_SLIDER_CUSTOM_ONOP = 1106;
		static readonly SETTING_SLIDER_CUSTOM_SETPOS = 1107;
		static readonly SETTING_SLIDER_IS_DRAGGABLE = 1108;
		static readonly SETTING_SLIDER_DEADZONE = 1109;
		static readonly SETTING_SLIDER_DEADTIME = 1110;

		static readonly OC_PRAYER_COMPONENT = 1751;
		static readonly OC_PRAYER_LEVEL = 1753;

		static readonly NPC_DEATH_HIDER_EXCLUDE = 1799;

		static readonly SLAYER_TASK_NAME = 1801;

		static readonly ATTACK_STYLE_NAME = 1407;

		static readonly SPELL_BUTTON = 596;
		static readonly SPELL_NAME = 601;
		static readonly SPELL_LEVELREQ = 604;
	}
}
