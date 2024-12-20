/// <reference path="../../../../../../../../../../src/types/java/index.d.ts" />
/// <reference path="../../../../../../../../../../src/types/runelite/index.d.ts" />
/*
 * Copyright (c) 2018, Eadgars Ruse <https://github.com/Eadgars-Ruse>
 * Copyright (c) 2019, Jordan Atwood <nightfirecat@protonmail.com>
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
declare namespace net.runelite.client.plugins.cluescrolls.clues.hotcold {
/**
 * Solution finder for hot-cold style puzzles.
 * <p>
 * These puzzles are established by having some way to test the distance from the solution via "warmth", where being
 * colder means one is farther away from the target, and being warmer means one is closer to it, with the goal being to
 * reach the most warm value to discover the solution point. Hot-cold puzzles in Old School RuneScape are implemented
 * with specific set of solution points, so this solver will filter from a provided set of possible solutions as new
 * signals of temperatures and temperature changes are provided.
 */
export class HotColdSolver
{
	/**
	 * Process a hot-cold update given a {@link WorldPoint} where a check occurred and the resulting temperature and
	 * temperature change discovered at that point. This will filter the set of possible locations which can be the
	 * solution.
	 *
	 * @param worldPoint        The point where a hot-cold check occurred
	 * @param temperature       The temperature of the checked point
	 * @param temperatureChange The change of temperature of the checked point compared to the previously-checked point
	 * @return A set of {@link HotColdLocation}s which are still possible after the filtering occurs. This return value
	 *         is the same as would be returned by {@code getPossibleLocations()}.
	 */
	signal(worldPoint: net.runelite.api.coords.WorldPoint, temperature: HotColdTemperature, temperatureChange: HotColdTemperatureChange): Set<HotColdLocation>;
		// when the strange device reads a temperature, that means that the center of the final dig location
		// is a range of squares away from the player's current location (Chebyshev AKA Chess-board distance)
		// maxDistanceArea encompasses all of the points that are within the max possible distance from the player
		// minDistanceArea encompasses all of the points that are within the min possible distance from the player
		// eliminate from consideration dig spots that lie entirely within the min range or entirely outside of the max range
		// if a previous world point has been recorded, we can consider the warmer/colder result from the strange device
					// eliminate spots that are warmer or same temperature
					// eliminate spots that are colder or same temperature
					// eliminate spots which are colder or warmer (as they would not yield a SAME temperature change)
}
}