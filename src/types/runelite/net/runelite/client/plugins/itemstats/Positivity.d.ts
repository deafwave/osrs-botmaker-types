/// <reference path="../../../../../../../../src/types/java/index.d.ts" />
/// <reference path="../../../../../../../../src/types/runelite/index.d.ts" />
/*
 * Copyright (c) 2018 Abex
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
declare namespace net.runelite.client.plugins.itemstats {
	/**
	 * Positivity represents how positive or negative a stat change is. This is
	 * turned into the color shown to the user in the toolip.
	 */
	export class Positivity {
		/**
		 * The stat is lower than it was before.
		 */
		static WORSE = {
			/** CAUTION - NOT PERFECTLY TYPED YET */
			getId(): number {
				return 0;
			},
			toString(): string {
				return '';
			},
		};
		/**
		 * There is no change, ie: The stat is already capped.
		 */
		static NO_CHANGE = {
			/** CAUTION - NOT PERFECTLY TYPED YET */
			getId(): number {
				return 0;
			},
			toString(): string {
				return '';
			},
		};
		/**
		 * The stat change goes over the cap, but does not net 0
		 */
		static BETTER_CAPPED = {
			/** CAUTION - NOT PERFECTLY TYPED YET */
			getId(): number {
				return 0;
			},
			toString(): string {
				return '';
			},
		};
		/**
		 * Some stat changes were fully consumed, some were not. This should NOT
		 * be returned by a single stat change. This should only be used by a
		 * <code>StatChangeCalculator</code>
		 */
		static BETTER_SOMECAPPED = {
			/** CAUTION - NOT PERFECTLY TYPED YET */
			getId(): number {
				return 0;
			},
			toString(): string {
				return '';
			},
		};
		/**
		 * The stat change is fully consumed. NB: a boost that hits the cap, but
		 * does not go over it is still considered <code>BETTER_UNCAPPED</code>
		 */
		static BETTER_UNCAPPED = {
			/** CAUTION - NOT PERFECTLY TYPED YET */
			getId(): number {
				return 0;
			},
			toString(): string {
				return '';
			},
		};
		static getColor(config: ItemStatConfig, positivity: Positivity): java.awt.Color;
	}
}
