/// <reference path="../../../../../../src/types/java/index.d.ts" />
/// <reference path="../../../../../../src/types/runelite/index.d.ts" />
/*
 * Copyright (c) 2017. l2-
 *
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
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
declare namespace net.runelite.api {
	/**
	 * Represents the buffer containing all messages in the chatbox.
	 */
	export class ChatLineBuffer {
		/**
		 * Gets an array of message nodes currently in the chatbox.
		 *
		 * @return messages in the chatbox
		 */
		getLines(): MessageNode[];
		/**
		 * Gets the length of the {@link #getLines()} array.
		 *
		 * @return the length
		 */
		getLength(): number;
		/**
		 * Removes a message node.
		 *
		 * This method modifies the underlying MessageNode array. If removing multiple MessageNodes at a time,
		 * clone the original {@link #getLines()} array; as items in the array will get modified and be left in an
		 * inconsistent state.
		 *
		 * @param node the {@link MessageNode} to remove
		 */
		removeMessageNode(node: MessageNode): void;
	}
}
