/// <reference path="../../../../../../../src/types/java/index.d.ts" />
/// <reference path="../../../../../../../src/types/runelite/index.d.ts" />
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
declare namespace net.runelite.api.widgets {
	/**
	 * Represents an on-screen UI element that is drawn on the canvas.
	 * <p>
	 * It should be noted that most RuneLite-added elements are not Widgets, but are
	 * an Overlay. Notable exceptions include bank tag tabs and chatbox inputs
	 * <p>
	 * Examples of Widgets include:
	 * <ul>
	 * <li>The fairy ring configuration selector</li>
	 * <li>The mini-map</li>
	 * <li>The bank inventory</li>
	 * </ul>
	 * <p>
	 * For a more complete idea of what is classified as a widget, see {@link WidgetID}.
	 */
	export class Widget {
		/**
		 * Gets the widgets ID.
		 *
		 * @see WidgetID
		 */
		getId(): number;
		/**
		 * Gets the type of the widget.
		 *
		 * @see WidgetType
		 */
		getType(): number;
		/**
		 * Sets the type of the widget.
		 *
		 * @see WidgetType
		 */
		setType(type: number): void;
		/**
		 * Gets the type of content displayed by the widget.
		 */
		getContentType(): number;
		/**
		 * Sets the type of content displayed by the widget.
		 */
		setContentType(contentType: number): Widget;
		/**
		 * Gets the current click configuration of the widget.
		 * @see WidgetConfig
		 */
		getClickMask(): number;
		/**
		 * Sets the click configuration of the widget.
		 *
		 * @see WidgetConfig
		 */
		setClickMask(mask: number): Widget;
		/**
		 * Gets the parent widget, if this widget is a child.
		 *
		 * @return the parent widget, or null
		 */
		getParent(): Widget;
		/**
		 * Gets the ID of the parent widget.
		 *
		 * @return the parent ID, or -1 if this widget is not a child
		 */
		getParentId(): number;
		/**
		 * Gets a dynamic child by index
		 */
		getChild(index: number): Widget | null;
		/**
		 * Gets the dynamic children of this widget in a sparse array
		 */
		getChildren(): (Widget | null)[] | null;
		/**
		 * Sets the dynamic children sparse array
		 */
		setChildren(children: Widget[]): void;
		/**
		 * Gets all dynamic children.
		 *
		 * @return the dynamic children
		 */
		getDynamicChildren(): Widget[];
		/**
		 * Gets all static children.
		 *
		 * @return the static children
		 */
		getStaticChildren(): Widget[];
		/**
		 * Gets all nested children.
		 *
		 * @return the nested children
		 */
		getNestedChildren(): Widget[];
		/**
		 * Gets the relative x-axis coordinate to the widgets parent.
		 *
		 * @return the relative x-axis coordinate
		 */
		getRelativeX(): number;
		/**
		 * Sets the relative x-axis coordinate to the widgets parent.
		 *
		 * You do not want to use this. Use {@link #setOriginalX(int)}, {@link #setXPositionMode(int)}
		 * and {@link #revalidate()}. Almost any interaction with this widget from a clientscript will
		 * recalculate this value.
		 */
		/** @deprecated */
		setRelativeX(x: number): void;
		/**
		 * Gets the relative y-axis coordinate to the widgets parent.
		 *
		 * @return the relative coordinate
		 */
		getRelativeY(): number;
		/**
		 * Sets the relative y-axis coordinate to the widgets parent.
		 *
		 * You do not want to use this. Use {@link #setOriginalY(int)}, {@link #setYPositionMode(int)}
		 * and {@link #revalidate()}. Almost any interaction with this widget from a clientscript will
		 * recalculate this value.
		 */
		/** @deprecated */
		setRelativeY(y: number): void;
		/**
		 * Set a forced position for the widget. This position overrides the relative x/y for the
		 * widget, even if the widget is revalidated. To clear the forced position pass -1 for x/y.
		 * @param x x pos relative to the parent
		 * @param y y pos relative to the parent
		 */
		setForcedPosition(x: number, y: number): void;
		/**
		 * Gets the text displayed on this widget.
		 *
		 * @return the displayed text
		 */
		getText(): string;
		/**
		 * Sets the text displayed on this widget.
		 *
		 * @param text the text to display
		 */
		setText(text: string): Widget;
		/**
		 * Gets the color as an RGB value.
		 *
		 * @return RGB24 color
		 * @see java.awt.Color#getRGB()
		 */
		getTextColor(): number;
		/**
		 * Sets the RGB color of the displayed text or rectangle.
		 *
		 * @param textColor RGB24 color
		 * @see java.awt.Color#getRGB()
		 */
		setTextColor(textColor: number): Widget;
		/**
		 * Gets the transparency of the rectangle
		 *
		 * @return 0 = fully opaque, 255 = fully transparent
		 */
		getOpacity(): number;
		/**
		 * Sets the transparency of the rectangle
		 *
		 * @param transparency 0 = fully opaque, 255 = fully transparent
		 */
		setOpacity(transparency: number): Widget;
		/**
		 * Gets the name "op base" of the widget.
		 * <p>
		 * The name of the widget is used in the tooltip when an action is
		 * available. For example, the widget that activates quick prayers
		 * has the name "Quick-prayers" so when hovering there is a tooltip
		 * that says "Activate Quick-prayers".
		 *
		 * @return the name
		 */
		getName(): string;
		/**
		 * Sets the name of the widget.
		 *
		 * @param name the new name
		 */
		setName(name: string): Widget;
		/**
		 * Gets the Model/NPC/Item ID displayed in the widget.
		 *
		 * @see #getModelType()
		 */
		getModelId(): number;
		/**
		 * Sets the Model/NPC/Item ID displayed in the widget.
		 *
		 * @see WidgetModelType
		 */
		setModelId(id: number): Widget;
		/**
		 * Gets the model type of the widget.
		 *
		 * @see WidgetModelType
		 */
		getModelType(): number;
		/**
		 * Sets the model type of the widget.
		 *
		 * @param type the new model type
		 * @see WidgetModelType
		 */
		setModelType(type: number): Widget;
		/**
		 * Gets the sequence ID used to animate the model in the widget
		 *
		 * @see net.runelite.api.AnimationID
		 */
		getAnimationId(): number;
		/**
		 * Sets the sequence ID used to animate the model in the widget
		 *
		 * @see net.runelite.api.AnimationID
		 */
		setAnimationId(animationId: number): Widget;
		/**
		 * Gets the x rotation of the model displayed in the widget.
		 * 0 = no rotation, 2047 = full rotation
		 */
		getRotationX(): number;
		/**
		 * Sets the x rotation of the model displayed in the widget.
		 * <br>
		 * Note: Setting this value outside of the input range defined by {@link Widget#getRotationX()} will cause a client
		 *       crash.
		 *
		 * @param modelX the new model x rotation value
		 */
		setRotationX(modelX: number): Widget;
		/**
		 * Gets the y rotation of the model displayed in the widget.
		 * 0 = no rotation, 2047 = full rotation
		 */
		getRotationY(): number;
		/**
		 * Sets the y rotation of the model displayed in the widget.
		 * <br>
		 * Note: Setting this value outside of the input range defined by {@link Widget#getRotationY()} will cause a client
		 *       crash.
		 *
		 * @param modelY the new model y rotation value
		 */
		setRotationY(modelY: number): Widget;
		/**
		 * Gets the z rotation of the model displayed in the widget.
		 * 0 = no rotation, 2047 = full rotation
		 */
		getRotationZ(): number;
		/**
		 * Sets the z rotation of the model displayed in the widget.
		 * <br>
		 * Note: Setting this value outside of the input range defined by {@link Widget#getRotationZ()} will cause a client
		 *       crash.
		 *
		 * @param modelZ the new model z rotation value
		 */
		setRotationZ(modelZ: number): Widget;
		/**
		 * Gets the amount zoomed in on the model displayed in the widget.
		 */
		getModelZoom(): number;
		/**
		 * Sets the amount zoomed in on the model displayed in the widget.
		 *
		 * @param modelZoom the new model zoom value
		 */
		setModelZoom(modelZoom: number): Widget;
		/**
		 * Gets the sprite ID displayed in the widget.
		 *
		 * @return the sprite ID
		 * @see net.runelite.api.SpriteID
		 */
		getSpriteId(): number;
		/**
		 * Gets if sprites are repeated or stretched
		 */
		getSpriteTiling(): boolean;
		/**
		 * Sets if sprites are repeated or stretched
		 */
		setSpriteTiling(tiling: boolean): Widget;
		/**
		 * Sets the sprite ID displayed in the widget.
		 *
		 * @param spriteId the sprite ID
		 * @see net.runelite.api.SpriteID
		 */
		setSpriteId(spriteId: number): Widget;
		/**
		 * Checks whether this widget or any of its parents are hidden.
		 *
		 * This must be ran on the client thread
		 *
		 * @return true if this widget or any parent is hidden, false otherwise
		 */
		isHidden(): boolean;
		/**
		 * Checks whether this widget is hidden, not taking into account
		 * any parent hidden states.
		 *
		 * @return true if this widget is hidden, false otherwise
		 */
		isSelfHidden(): boolean;
		/**
		 * Sets the self-hidden state of this widget.
		 *
		 * @param hidden new hidden state
		 */
		setHidden(hidden: boolean): Widget;
		/**
		 * The index of this widget in it's parent's children array
		 */
		getIndex(): number;
		/**
		 * Gets the location the widget is being drawn on the canvas.
		 * <p>
		 * This method accounts for the relative coordinates and bounds
		 * of any parent widgets.
		 *
		 * @return the upper-left coordinate of where this widget is drawn
		 */
		getCanvasLocation(): Point;
		/**
		 * Gets the width of the widget.
		 * <p>
		 * If this widget is storing any {@link WidgetItem}s, this value is
		 * used to store the number of item slot columns.
		 *
		 * @return the width
		 */
		getWidth(): number;
		/**
		 * Sets the width of the widget.
		 *
		 * You do not want to use this. Use {@link #setOriginalWidth(int)}, {@link #setWidthMode(int)}
		 * and {@link #revalidate()}. Almost any interaction with this widget from a clientscript will
		 * recalculate this value.
		 */
		/** @deprecated */
		setWidth(width: number): void;
		/**
		 * Gets the height of the widget.
		 *
		 * @return the height
		 */
		getHeight(): number;
		/**
		 * Sets the height of the widget.
		 *
		 * You do not want to use this. Use {@link #setOriginalHeight(int)}, {@link #setHeightMode(int)}
		 * and {@link #revalidate()}. Almost any interaction with this widget from a clientscript will
		 * recalculate this value.
		 */
		/** @deprecated */
		setHeight(height: number): void;
		/**
		 * Gets the area where the widget is drawn on the canvas.
		 *
		 * @return the occupied area of the widget
		 */
		getBounds(): Rectangle;
		/**
		 * Gets the item ID displayed by the widget.
		 *
		 * @return the item ID
		 */
		getItemId(): number;
		/**
		 * Sets the item ID displayed by the widget.
		 *
		 * @param itemId the item ID
		 */
		setItemId(itemId: number): Widget;
		/**
		 * Gets the quantity of the item displayed by the widget.
		 *
		 * @return the item quantity
		 */
		getItemQuantity(): number;
		/**
		 * Sets the item quantity displayed by the widget.
		 *
		 * @param quantity the quantity of the item
		 */
		setItemQuantity(quantity: number): Widget;
		/**
		 * Checks if the passed canvas points is inside of this widget's
		 * {@link #getBounds() bounds}
		 *
		 * @param point the canvas point
		 * @return true if this widget contains the point, false otherwise
		 */
		contains(point: Point): boolean;
		/**
		 * Gets the amount of pixels the widget is scrolled in the X axis
		 */
		getScrollX(): number;
		/**
		 * Sets the amount of pixels the widget is scrolled in the X axis
		 */
		setScrollX(scrollX: number): Widget;
		/**
		 * Gets the amount of pixels the widget is scrolled in the Y axis
		 */
		getScrollY(): number;
		/**
		 * sets the amount of pixels the widget is scrolled in the Y axis
		 */
		setScrollY(scrollY: number): Widget;
		/**
		 * Gets the size of the widget's viewport in the X axis
		 */
		getScrollWidth(): number;
		/**
		 * Sets the size of the widget's viewport in the X axis
		 */
		setScrollWidth(width: number): Widget;
		/**
		 * Gets the size of the widget's viewport in the Y axis
		 */
		getScrollHeight(): number;
		/**
		 * Sets the size of the widget's viewport in the Y axis
		 */
		setScrollHeight(height: number): Widget;
		/**
		 * Gets the X coordinate of this widget before being adjusted by
		 * {@link #getXPositionMode()}}.
		 */
		getOriginalX(): number;
		/**
		 * Sets the X input to the {@link WidgetPositionMode}. {@link #revalidate()} must be
		 * called for the new values to take effect.
		 *
		 * @see #setXPositionMode(int)
		 */
		setOriginalX(originalX: number): Widget;
		/**
		 * Gets the Y coordinate of this widget before being adjusted by
		 * {@link #getYPositionMode()}}
		 */
		getOriginalY(): number;
		/**
		 * Sets the Y input to the {@link WidgetPositionMode}. {@link #revalidate()} must be
		 * called for the new values to take effect.
		 *
		 * @see #setYPositionMode(int)
		 */
		setOriginalY(originalY: number): Widget;
		/**
		 * Sets the X/Y coordinates
		 */
		setPos(x: number, y: number): Widget;
		setPos(x: number, y: number, xMode: number, yMode: number): Widget;
		/**
		 * Gets the height coordinate of this widget before being adjusted by
		 * {@link #getHeightMode()}
		 */
		getOriginalHeight(): number;
		/**
		 * Sets the height input to the {@link WidgetSizeMode}. {@link #revalidate()} must be
		 * called for the new values to take effect.
		 *
		 * @see #setHeightMode(int)
		 */
		setOriginalHeight(originalHeight: number): Widget;
		/**
		 * Gets the width coordinate of this widget before being adjusted by
		 * {@link #getWidthMode()}
		 */
		getOriginalWidth(): number;
		/**
		 * Sets the width input to the {@link WidgetSizeMode}. {@link #revalidate()} must be
		 * called for the new values to take effect.
		 *
		 * @see #setWidthMode(int)
		 */
		setOriginalWidth(originalWidth: number): Widget;
		setSize(width: number, height: number): Widget;
		setSize(
			width: number,
			height: number,
			widthMode: number,
			heightMode: number,
		): Widget;
		/**
		 * Gets the menu options available on the widget as a sparse array.
		 */
		getActions(): string[] | null;
		/**
		 * Creates a dynamic widget child
		 *
		 * @param index the index of the new widget in the children list or -1 to append to the back
		 * @param type  the {@link WidgetType} of the widget
		 */
		createChild(index: number, type: number): Widget;
		/**
		 * Creates a dynamic widget child at the end of the children list
		 *
		 * @param type  the {@link WidgetType} of the widget
		 */
		createChild(type: number): Widget;
		/**
		 * Removes all of this widget's dynamic children
		 */
		deleteAllChildren(): void;
		/**
		 * Creates a menu option on the widget
		 *
		 * @param index  The index of the menu
		 * @param action The verb to be displayed next to the widget's name in the context menu
		 */
		setAction(index: number, action: string): void;
		/**
		 * Sets a script to be ran when the a menu action is clicked.
		 * hasListener must be true for this to take effect
		 *
		 * @param args A ScriptID, then the args for the script
		 */
		setOnOpListener(...args: Record<string, any>): void;
		/**
		 * Sets a script to be ran when the dialog is canceled
		 *
		 * @param args A ScriptID, then the args for the script
		 */
		setOnDialogAbortListener(...args: Record<string, any>): void;
		/**
		 * Sets a script to be ran on key input
		 *
		 * @param args A ScriptID, then the args for the script
		 */
		setOnKeyListener(...args: Record<string, any>): void;
		/**
		 * Sets a script to be ran when the mouse enters the widget bounds
		 *
		 * @param args A ScriptID, then the args for the script
		 */
		setOnMouseOverListener(...args: Record<string, any>): void;
		/**
		 * Sets a script to be ran every client tick when the mouse is in the widget bounds
		 *
		 * @param args A ScriptID, then the args for the script
		 */
		setOnMouseRepeatListener(...args: Record<string, any>): void;
		/**
		 * Sets a script to be ran when the mouse leaves the widget bounds
		 *
		 * @param args A ScriptID, then the args for the script
		 */
		setOnMouseLeaveListener(...args: Record<string, any>): void;
		/**
		 * Sets a script to be ran every client tick
		 *
		 * @param args A ScriptID, then the args for the script
		 */
		setOnTimerListener(...args: Record<string, any>): void;
		/**
		 * Sets a script to be ran when the target mode has been activated for this widget
		 *
		 * @param args A ScriptID, then the args for the script
		 */
		setOnTargetEnterListener(...args: Record<string, any>): void;
		/**
		 * Sets a script to be ran when the target mode has been deactivated for this widget
		 *
		 * @param args A ScriptID, then the args for the script
		 */
		setOnTargetLeaveListener(...args: Record<string, any>): void;
		/**
		 * If this widget has any listeners on it
		 */
		hasListener(): boolean;
		/**
		 * Sets if the widget has any listeners. This should be called whenever a setXListener function is called
		 */
		setHasListener(hasListener: boolean): Widget;
		/**
		 * This is true if the widget is from an if3 interface, or is dynamically created
		 */
		isIf3(): boolean;
		/**
		 * Recomputes this widget's x/y/w/h, excluding scroll
		 */
		revalidate(): void;
		/**
		 * Recomputes this widget's group's x/y/w/h including scroll
		 */
		revalidateScroll(): void;
		/**
		 * Gets the script and arguments to be ran when a menu action is clicked.
		 *
		 * @return
		 */
		getOnOpListener(): Record<string, any>[];
		/**
		 * Gets the script and arguments to be ran when a key is pressed.
		 *
		 * @return
		 */
		getOnKeyListener(): Record<string, any>[];
		/**
		 * Gets the script and arguments to be ran when a interface is loaded.
		 *
		 * @return
		 */
		getOnLoadListener(): Record<string, any>[];
		/**
		 * Gets the script and arguments to be ran when one of the listened for inventories changes.
		 *
		 * @return
		 */
		getOnInvTransmitListener(): Record<string, any>[];
		/**
		 * Returns the archive id of the font used
		 *
		 * @see net.runelite.api.FontID
		 */
		getFontId(): number;
		/**
		 * Sets the archive id of the font
		 *
		 * @see net.runelite.api.FontID
		 */
		setFontId(id: number): Widget;
		/**
		 * Returns the border type of item/sprite on the widget
		 * 0 - No border
		 * 1 - 1px black border
		 * 2 - 1px black under 1px white border (selected item)
		 */
		getBorderType(): number;
		/**
		 * @see #getBorderType
		 */
		setBorderType(thickness: number): void;
		/**
		 * Returns if text is shadowed
		 */
		getTextShadowed(): boolean;
		/**
		 * Sets if text should be shadowed
		 */
		setTextShadowed(shadowed: boolean): Widget;
		/**
		 * Returns the widget drag dead zone
		 */
		getDragDeadZone(): number;
		/**
		 * Sets the widget drag dead zone
		 */
		setDragDeadZone(deadZone: number): void;
		/**
		 * Returns the widget drag dead time
		 */
		getDragDeadTime(): number;
		/**
		 * Sets the widget drag dead time
		 */
		setDragDeadTime(deadTime: number): void;
		/**
		 * Returns widget {@link net.runelite.api.widgets.ItemQuantityMode}.
		 */
		getItemQuantityMode(): number;
		/**
		 * Sets the widget {@link net.runelite.api.widgets.ItemQuantityMode}
		 */
		setItemQuantityMode(itemQuantityMode: number): Widget;
		/**
		 * Gets the mode that the X position is calculated from the original X position
		 *
		 * @see WidgetPositionMode
		 */
		getXPositionMode(): number;
		/**
		 * Sets the mode that the X position is calculated from the original X position.
		 * {@link #revalidate()} must be called for new values to take effect.
		 *
		 * @see WidgetPositionMode
		 */
		setXPositionMode(xpm: number): Widget;
		/**
		 * Gets the mode that the Y position is calculated from the original Y position
		 *
		 * @see WidgetPositionMode
		 */
		getYPositionMode(): number;
		/**
		 * Sets the mode that the Y position is calculated from the original Y position.
		 * {@link #revalidate()} must be called for new values to take effect.
		 *
		 * @see WidgetPositionMode
		 */
		setYPositionMode(ypm: number): Widget;
		/**
		 * Get the line height for this widget.
		 *
		 * @return
		 */
		getLineHeight(): number;
		/**
		 * Set the line height for this widget. If set to 0, the line height is taken from the font instead.
		 *
		 * @param lineHeight
		 */
		setLineHeight(lineHeight: number): Widget;
		/**
		 * Gets the X axis text position mode
		 *
		 * @see WidgetTextAlignment
		 */
		getXTextAlignment(): number;
		/**
		 * Sets the X axis text position mode
		 *
		 * @see WidgetTextAlignment
		 */
		setXTextAlignment(xta: number): Widget;
		/**
		 * Gets the Y axis text position mode
		 *
		 * @see WidgetTextAlignment
		 */
		getYTextAlignment(): number;
		/**
		 * Sets the Y axis text position mode
		 *
		 * @see WidgetTextAlignment
		 */
		setYTextAlignment(yta: number): Widget;
		/**
		 * Gets the mode controlling widget width
		 *
		 * @see WidgetSizeMode
		 */
		getWidthMode(): number;
		/**
		 * Sets the mode controlling widget width.
		 * {@link #revalidate()} must be called for new values to take effect.
		 *
		 * @see WidgetSizeMode
		 */
		setWidthMode(widthMode: number): Widget;
		/**
		 * Gets the mode controlling widget width
		 *
		 * @see WidgetSizeMode
		 */
		getHeightMode(): number;
		/**
		 * Sets the mode controlling widget width.
		 * {@link #revalidate()} must be called for new values to take effect.
		 *
		 * @see WidgetSizeMode
		 */
		setHeightMode(heightMode: number): Widget;
		/**
		 * Gets the font that this widget uses
		 */
		getFont(): FontTypeFace;
		/**
		 * Gets if the rectangle is filled or just stroked
		 */
		isFilled(): boolean;
		/**
		 * Sets if the rectangle is filled or just stroked
		 */
		setFilled(filled: boolean): Widget;
		/**
		 * Verb for spell targets
		 */
		getTargetVerb(): string;
		/**
		 * Verb for spell targets
		 */
		setTargetVerb(targetVerb: string): void;
		/**
		 * Can widgets under this widgets be clicked in this widgets bounding box
		 */
		getNoClickThrough(): boolean;
		/**
		 * Can widgets under this widgets be clicked in this widgets bounding box
		 */
		setNoClickThrough(noClickThrough: boolean): void;
		/**
		 * Can widgets under this widgets be scrolled in this widgets bounding box
		 */
		getNoScrollThrough(): boolean;
		/**
		 * Can widgets under this widgets be scrolled in this widgets bounding box
		 */
		setNoScrollThrough(noScrollThrough: boolean): void;
		/**
		 * {@link net.runelite.api.VarPlayer}s that triggers this widgets varTransmitListener
		 */
		setVarTransmitTrigger(...trigger: number[]): void;
		/**
		 * Sets a script to be ran the first client tick the mouse is held ontop of this widget
		 *
		 * @param args A ScriptID, then the args for the script
		 */
		setOnClickListener(...args: Record<string, any>[]): void;
		/**
		 * Sets a script to be ran the every client tick the mouse is held ontop of this widget,
		 * except the first client tick.
		 *
		 * @param args A ScriptID, then the args for the script
		 */
		setOnHoldListener(...args: Record<string, any>[]): void;
		/**
		 * Sets a script to be ran the first client tick the mouse is not held ontop of this widget
		 *
		 * @param args A ScriptID, then the args for the script
		 */
		setOnReleaseListener(...args: Record<string, any>[]): void;
		/**
		 * Sets a script to be ran when a drag operation is finished on this widget
		 *
		 * @param args A ScriptID, then the args for the script
		 */
		setOnDragCompleteListener(...args: Record<string, any>[]): void;
		/**
		 * Sets a script to be ran when this widget moves due to a drag
		 *
		 * @param args A ScriptID, then the args for the script
		 */
		setOnDragListener(...args: Record<string, any>[]): void;
		/**
		 * Sets a script to be ran when the mouse is scrolled when on the widget
		 *
		 * @param args A ScriptID, then the args for the script
		 */
		setOnScrollWheelListener(...args: Record<string, any>[]): void;
		/**
		 * Container this can be dragged in
		 */
		getDragParent(): Widget;
		/**
		 * Container this can be dragged in
		 */
		setDragParent(dragParent: Widget): Widget;
		/**
		 * Gets the script and arguments to be ran when one of the listened for vars changes.
		 *
		 * @return
		 */
		getOnVarTransmitListener(): Record<string, any>[];
		/**
		 * Sets a script to be ran when a varplayer changes
		 *
		 * @param args A ScriptID, then the args for the script
		 */
		setOnVarTransmitListener(...args: Record<string, any>[]): void;
	}
}
