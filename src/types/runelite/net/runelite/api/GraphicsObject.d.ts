/// <reference path="../../../../../../src/types/java/index.d.ts" />
/// <reference path="../../../../../../src/types/runelite/index.d.ts" />
/*
 * Copyright (c) 2018, Woox <https://github.com/wooxsolo>
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
	 * Represents a graphics object/spotanim.
	 */
	export class GraphicsObject extends Renderable {
		/**
		 * The graphics object ID.
		 *
		 * @return the ID
		 */
		getId(): number;
		/**
		 * The location of the object.
		 *
		 * @return the location
		 */
		getLocation(): net.runelite.api.coords.LocalPoint;
		/**
		 * Get the time this spotanim starts
		 *
		 * @return
		 */
		getStartCycle(): number;
		/**
		 * The plane the spotanim is on.
		 *
		 * @return
		 */
		getLevel(): number;
		/**
		 * Gets the z coordinate
		 */
		getZ(): number;
		/**
		 * Checks if this spotanim is done animating
		 *
		 * @return
		 */
		finished(): boolean;
		/**
		 * Set if this spotanim is done animating. If finished, the spotanim will despawn next frame.
		 * @param finished
		 */
		setFinished(finished: boolean): void;
		/**
		 * The animation of the spotanim
		 * @return
		 */
		getAnimation(): Animation | null;
		/**
		 * The frame of the current animation
		 * @return
		 */
		getAnimationFrame(): number;
	}
}
