/// <reference path="../../../../../../../../src/types/java/index.d.ts" />
/// <reference path="../../../../../../../../src/types/runelite/index.d.ts" />
/*
 * Copyright (c) 2018, Raqes <j.raqes@gmail.com>
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
declare namespace net.runelite.client.plugins.specialcounter {
	export class SpecialWeapon {
		static DORGESHUUN_CROSSBOW = {
			/** CAUTION - NOT PERFECTLY TYPED YET */
			getId(): number { return 0; },
			toString(): string { return ""; }
		};
		static Dorgeshuun = {
			/** CAUTION - NOT PERFECTLY TYPED YET */
			getId(): number { return 0; },
			toString(): string { return ""; }
		};
		static true = {
			/** CAUTION - NOT PERFECTLY TYPED YET */
			getId(): number { return 0; },
			toString(): string { return ""; }
		};
		static distance = {
			/** CAUTION - NOT PERFECTLY TYPED YET */
			getId(): number { return 0; },
			toString(): string { return ""; }
		};
		static c = {
			/** CAUTION - NOT PERFECTLY TYPED YET */
			getId(): number { return 0; },
			toString(): string { return ""; }
		};
		static ACCURSED_SCEPTRE = {
			/** CAUTION - NOT PERFECTLY TYPED YET */
			getId(): number { return 0; },
			toString(): string { return ""; }
		};
		static Accursed = {
			/** CAUTION - NOT PERFECTLY TYPED YET */
			getId(): number { return 0; },
			toString(): string { return ""; }
		};
		static false = {
			/** CAUTION - NOT PERFECTLY TYPED YET */
			getId(): number { return 0; },
			toString(): string { return ""; }
		};
		static distance = {
			/** CAUTION - NOT PERFECTLY TYPED YET */
			getId(): number { return 0; },
			toString(): string { return ""; }
		};
		static c = {
			/** CAUTION - NOT PERFECTLY TYPED YET */
			getId(): number { return 0; },
			toString(): string { return ""; }
		};
		static TONALZTICS_OF_RALOS = {
			/** CAUTION - NOT PERFECTLY TYPED YET */
			getId(): number { return 0; },
			toString(): string { return ""; }
		};
		static Tonalztics = {
			/** CAUTION - NOT PERFECTLY TYPED YET */
			getId(): number { return 0; },
			toString(): string { return ""; }
		};
		static false = {
			/** CAUTION - NOT PERFECTLY TYPED YET */
			getId(): number { return 0; },
			toString(): string { return ""; }
		};
		static distance = {
			/** CAUTION - NOT PERFECTLY TYPED YET */
			getId(): number { return 0; },
			toString(): string { return ""; }
		};
		static c = {
			/** CAUTION - NOT PERFECTLY TYPED YET */
			getId(): number { return 0; },
			toString(): string { return ""; }
		};
		static ELDER_MAUL = {
			/** CAUTION - NOT PERFECTLY TYPED YET */
			getId(): number { return 0; },
			toString(): string { return ""; }
		};
		static false = {
			/** CAUTION - NOT PERFECTLY TYPED YET */
			getId(): number { return 0; },
			toString(): string { return ""; }
		};
		static distance = {
			/** CAUTION - NOT PERFECTLY TYPED YET */
			getId(): number { return 0; },
			toString(): string { return ""; }
		};
		static SpecialCounterConfig = {
			/** CAUTION - NOT PERFECTLY TYPED YET */
			getId(): number { return 0; },
			toString(): string { return ""; }
		};
		static String = {
			/** CAUTION - NOT PERFECTLY TYPED YET */
			getId(): number { return 0; },
			toString(): string { return ""; }
		};
		/**
		 * Accepts an int representing distance in tiles to the target, and returns an int representing client cycles of
		 * delay until the hitsplat is applied.
		 * <p>
		 * For melee weapons, the returned value is always {@code 0}, as they have no delay. Calculating this delay can be
		 * done by extrapolating the difference between the cycle the projectile is created and the cycle it ends for
		 * various distances. In practice, projectiles are created at the same time special attack energy is drained for
		 * special attacks, so the difference can be taken between the cycle a player's special attack drains and the end
		 * cycle of the created projectile.
		 * <p>
		 * For example, a dorgeshuun crossbow will have its projectile end 63 cycles after a spec at distance 1, 66 at
		 * distance 2, etc. Hence, we can extrapolate its formula to be {@code int cycles = 60 + distance * 3}.
		 */
		/**
		 * Gets the server cycle delay between special attack energy dropping and a hitsplat being applied to the target.
		 * This will be {@code 1} for all melee weapons.
		 *
		 * @param distance Distance from the target in tiles
		 * @return Number of server cycles (game ticks) delay for the special attack hitsplat to be applied
		 */
		getHitDelay(distance: number): number;
		// Convert the client cycles of delay to server cycles delay. The server performs no rounding, so this is
		// simply (cycles / 30).
		// All attacks have one server cycle of additional delay beyond any projectile travel time for the weapon.
	}
}