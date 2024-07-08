/// <reference path="../../../../../../../../src/types/java/index.d.ts" />
/// <reference path="../../../../../../../../src/types/runelite/index.d.ts" />
/*
 * Copyright (c) 2018, Kruithne <kruithne@gmail.com>
 * Copyright (c) 2018, Psikoi <https://github.com/psikoi>
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
declare namespace net.runelite.client.plugins.skillcalculator {
export class SkillCalculator extends JPanel
{
		// Register listeners on the input fields and then move on to the next related text field
		// Register focus listeners to calculate xp when exiting a text field
	openCalculator(calculatorType: CalculatorType, forceReload: boolean): void;
		// Update internal skill/XP values.
			// Remove all components (action slots) from this panel.
			// Clear the search bar
			// Clear the combined action slots
			// Add in checkboxes for available skill bonuses if we're not on a F2P world.
			// Add the combined action slot.
			// Add the search bar
			// Create action slots for the skill actions.
		// Update the input fields.
	private updateCombinedAction(): void;
	private clearCombinedSlots(): void;
	private renderBonusOptions(): void;
	private buildCheckboxPanel(bonus: SkillBonus): JPanel;
		// Adjust XP bonus depending on check-state of the boxes.
	private static generateDisplayNameForBonus(bonus: SkillBonus): string;
	static formatBonusPercentage(bonus: number): string;
	private adjustCheckboxes(target: JCheckBox, bonus: SkillBonus): void;
		// Check if target is stackable with any other bonuses
	private renderActionSlots(): void;
		// Wipe the list of references to the slot components.
		// Create new components for the action slots.
			// All actions should be visible, so no need to filter; just refresh the rendering of this panel.
			// Filter out members actions due to being on F2P, then refresh the rendering
	private calculate(): void;
	private static formatXPActionString(xp: number, actionCount: number, expExpression: string): string;
	private updateInputFields(): void;
	private onFieldCurrentLevelUpdated(): void;
	private onFieldCurrentXPUpdated(): void;
	private onFieldTargetLevelUpdated(): void;
	private onFieldTargetXPUpdated(): void;
	private static enforceSkillBounds(input: number): number;
	private static enforceXPBounds(input: number): number;
	private onSearch(): void;
		//only show slots that match our search text
	private static slotContainsText(slot: UIActionSlot, text: string): boolean;
	private static buildFocusAdapter(focusLostConsumer: Consumer<FocusEvent>): FocusAdapter;
	private static endGoalVarpForSkill(skill: Skill): number;
}
}