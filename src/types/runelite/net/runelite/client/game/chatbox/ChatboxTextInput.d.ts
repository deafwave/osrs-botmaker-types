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
declare namespace net.runelite.client.game.chatbox {
export class ChatboxTextInput extends ChatboxInput implements KeyListener, MouseListener
{
	private static getDefaultCharValidator(): any;
/** TBD-1 */
// export class Line
	// These are lambdas for atomic updates
	addCharValidator(validator: any): ChatboxTextInput;
	lines(lines: number): ChatboxTextInput;
	prompt(prompt: string): ChatboxTextInput;
	value(value: string): ChatboxTextInput;
	cursorAt(index: number): ChatboxTextInput;
	cursorAt(indexA: number, indexB: number): ChatboxTextInput;
	getValue(): string;
	charValidator(val: any): ChatboxTextInput;
	onClose(onClose: Runnable): ChatboxTextInput;
	onDone(onDone: Consumer<string>): ChatboxTextInput;
	/**
	 * Called when the user attempts to close the input by pressing enter
	 * Return false to cancel the close
	 */
	onDone(onDone: any): ChatboxTextInput;
	onChanged(onChanged: Consumer<string>): ChatboxTextInput;
	fontID(fontID: number): ChatboxTextInput;
	private update(): void;
	private buildEdit(x: number, y: number, w: number, h: number): void;
			// `i` is used to track max execution time incase there is a font with ligature width data that causes this to fail
			// Place cursor on right line if whitespace keep it on the same line or skip a line
	private cursorOnLine(cursor: number, start: number, end: number): boolean;
	private getCharOffset(ev: MouseEvent): number;
	private open(): void;
	private close(): void;
	build(): ChatboxTextInput;
	keyTyped(e: KeyEvent): void;
	keyPressed(ev: KeyEvent): void;
	keyReleased(e: KeyEvent): void;
	mouseClicked(mouseEvent: MouseEvent): MouseEvent;
	mousePressed(mouseEvent: MouseEvent): MouseEvent;
	mouseReleased(mouseEvent: MouseEvent): MouseEvent;
	mouseEntered(mouseEvent: MouseEvent): MouseEvent;
	mouseExited(mouseEvent: MouseEvent): MouseEvent;
	mouseDragged(mouseEvent: MouseEvent): MouseEvent;
	mouseMoved(mouseEvent: MouseEvent): MouseEvent;
}
}