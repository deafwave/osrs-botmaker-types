/// <reference path="../../../../../../../../../src/types/java/index.d.ts" />
/// <reference path="../../../../../../../../../src/types/runelite/index.d.ts" />
/*
 * Copyright (c) 2017, Adam <Adam@sigterm.info>
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
declare namespace net.runelite.client.ui.overlay.infobox {
export class InfoBoxManager
{
	onConfigChanged(event: ConfigChanged): void;
	onProfileChanged(profileChanged: ProfileChanged): void;
		// infobox layers may have changed due to the profile change, just rebuild the infoboxes
	onInfoBoxMenuClicked(event: InfoBoxMenuClicked): void;
			// The layer name doesn't matter as long as it is unique
			// This is just a merge into the default layer
	addInfoBox(infoBox: InfoBox): void;
			// Non default-group infoboxes have a delete option to delete the group
	removeInfoBox(infoBox: InfoBox): void;
	removeIf(filter: any): void;
	getInfoBoxes(): Array<InfoBox>;
	cull(): void;
	updateInfoBoxImage(infoBox: InfoBox): void;
		// Set scaled InfoBox image
	private makeOverlay(name: string): InfoBoxOverlay;
				// Fall back to old orientation config option
				// Default infobox orientation
	private removeOverlay(overlay: InfoBoxOverlay): void;
	private splitInfobox(newLayer: string, infoBox: InfoBox): void;
		// Find all infoboxes with the same name, as they are all within the same group and so move at once.
		// Adjust config for new infoboxes
	mergeInfoBoxes(source: InfoBoxOverlay, dest: InfoBoxOverlay): void;
		// remove source
	private getLayer(infoBox: InfoBox): string;
	private setLayer(infoBox: InfoBox, layer: string): void;
	getOrientation(name: string): ComponentOrientation;
	setOrientation(name: string, orientation: ComponentOrientation): void;
	unsetOrientation(name: string): void;
	/**
	 * Find insertion point for the given key into the given sorted list. If key already exists in the list,
	 * return the index after the last occurrence.
	 * @param list
	 * @param key
	 * @param c
	 * @param <T>
	 * @return
	 */
	private static findInsertionIndex(list: any, key: T, c: any): int;
			// key isn't found in the list
		// list(idx) is equal to key, so it is not necessary to recheck it
				// this is the first element which is greater
}
}