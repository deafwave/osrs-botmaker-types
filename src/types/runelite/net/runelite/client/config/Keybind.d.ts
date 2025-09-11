/// <reference path="../../../../../../../src/types/java/index.d.ts" />
/// <reference path="../../../../../../../src/types/runelite/index.d.ts" />
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
declare namespace net.runelite.client.config {
/**
 * A combination of zero or more modifier keys (Ctrl, alt, shift, meta)
 * and an optional non-modifier key
 */
export class Keybind
{
	// Bitmask of all supported modifiers
		// If the keybind is just modifiers we don't want the keyCode to contain the modifier too,
		// because this breaks if you do the keycode backwards
	/**
	 * Constructs a keybind with that matches the passed KeyEvent
	 */
	/**
	 * If the KeyEvent is from a KeyPressed event this returns if the
	 * Event is this hotkey being pressed. If the KeyEvent is a
	 * KeyReleased event this returns if the event is this hotkey being
	 * released
	 */
	constructor(keyCode: number, modifiers: number);
	matches(e: KeyEvent): boolean;
	private matches(e: KeyEvent, ignoreModifiers: boolean): boolean;
	toString(): string;
	static getModifierForKeyCode(keyCode: number): number | null;
	getKeyCode(): number;
	getModifiers(): number;
}
}