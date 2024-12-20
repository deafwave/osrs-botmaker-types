/// <reference path="../../../../../../../../src/types/java/index.d.ts" />
/// <reference path="../../../../../../../../src/types/runelite/index.d.ts" />
/*
 * Copyright (c) 2019, Ron Young <https://github.com/raiyni>
 * All rights reserved.
 *
 *  Redistribution and use in source and binary forms, with or without
 *  modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *     list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *     this list of conditions and the following disclaimer in the documentation
 *     and/or other materials provided with the distribution.
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
export class ChatboxItemSearch extends ChatboxTextInput
{
/** TBD-1 */
// export class ItemIcon
	private update(): void;
	keyPressed(ev: KeyEvent): void;
	private close(): void;
		// Clear search string when closed
/** @deprecated */
	onDone(onDone: Consumer<string>): ChatboxTextInput;
	private filterResults(): void;
			// The client assigns "null" to item names of items it doesn't know about
			// and the item might already be in the results from canonicalize
				// Check if the results already contain the same item image
	onItemSelected(onItemSelected: Consumer<number>): ChatboxItemSearch;
	tooltipText(text: string): ChatboxItemSearch;
}
}