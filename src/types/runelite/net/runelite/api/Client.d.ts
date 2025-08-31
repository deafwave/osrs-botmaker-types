/// <reference path="../../../../../../src/types/java/index.d.ts" />
/// <reference path="../../../../../../src/types/runelite/index.d.ts" />
/*
 * Copyright (c) 2016-2017, Adam <Adam@sigterm.info>
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
	 * Represents the RuneScape client.
	 */
	export class Client extends com.jagex.oldscape.pub.OAuthApi, GameEngine {
		/**
		 * The injected client invokes these callbacks to send events to us
		 */
		getCallbacks(): net.runelite.api.hooks.Callbacks;

		/**
		 * The injected client invokes these callbacks for scene drawing, which is
		 * used by the gpu plugin to override the client's normal scene drawing code
		 */
		getDrawCallbacks(): net.runelite.api.hooks.DrawCallbacks;

		setDrawCallbacks(drawCallbacks: net.runelite.api.hooks.DrawCallbacks): void;

		getBuildID(): string;

		getEnvironment(): number;

		/**
		 * Gets the current modified level of a skill.
		 *
		 * @param skill the skill
		 * @return the modified skill level
		 */
		getBoostedSkillLevel(skill: Skill): number;

		/**
		 * Gets the real level of a skill.
		 *
		 * @param skill the skill
		 * @return the skill level
		 */
		getRealSkillLevel(skill: Skill): number;

		/**
		 * Calculates the total level from real skill levels.
		 *
		 * @return the total level
		 */
		getTotalLevel(): number;

		/**
		 * Adds a new chat message to the chatbox.
		 *
		 * @param type the type of message
		 * @param name the name of the player that sent the message
		 * @param message the message contents
		 * @param sender the sender/channel name
		 * @return the message node for the message
		 */
		addChatMessage(type: ChatMessageType, name: string, message: string, sender: string | null): MessageNode;

		/**
		 * Adds a new chat message to the chatbox.
		 *
		 * @param type the type of message
		 * @param name the name of the player that sent the message
		 * @param message the message contents
		 * @param sender the sender/channel name
		 * @param postEvent whether to post the chat message event
		 * @return the message node for the message
		 */
		addChatMessage(type: ChatMessageType, name: string, message: string, sender: string | null, postEvent: boolean): MessageNode;

		/**
		 * Gets the current game state.
		 *
		 * @return the game state
		 */
		getGameState(): GameState;

		/**
		 * Sets the current game state
		 *
		 * @param gameState
		 */
		setGameState(gameState: GameState): void;

		/**
		 * Causes the client to shutdown. It is faster than
		 * {@link java.applet.Applet#stop()} because it doesn't wait for 4000ms.
		 * This will call {@link System#exit} when it is done
		 */
		stopNow(): void;

		/**
		 * Gets the display name of the active account when launched from the Jagex launcher.
		 *
		 * @return The active account's display name, or {@code null} if not launched from the Jagex launcher
		 */
		getLauncherDisplayName(): string | null;

		/**
		 * DEPRECATED. See getAccountHash instead.
		 * Gets the current logged in username.
		 *
		 * @return the logged in username
		 * @see OAuthApi#getAccountHash()
		 * @deprecated
		 */
		getUsername(): string;

		/**
		 * Sets the current logged in username.
		 *
		 * @param name the logged in username
		 */
		setUsername(name: string): void;

		/**
		 * Sets the password on login screen.
		 *
		 * @param password the login screen password
		 */
		setPassword(password: string): void;

		/**
		 * Sets the 6 digit pin used for authenticator on login screen.
		 *
		 * @param otp one time password
		 */
		setOtp(otp: string): void;

		/**
		 * Gets currently selected login field. 0 is username, and 1 is password.
		 *
		 * @return currently selected login field
		 */
		getCurrentLoginField(): number;

		/**
		 * Gets index of current login state. 2 is username/password form, 4 is authenticator form
		 *
		 * @return current login state index
		 */
		getLoginIndex(): number;

		/**
		 * Gets the account type of the logged in player.
		 *
		 * @return the account type
		 * @deprecated see Varbits#ACCOUNT_TYPE
		 */
		getAccountType(): net.runelite.api.vars.AccountType;

		getCanvas(): java.awt.Canvas;

		/**
		 * Gets the current FPS (frames per second).
		 *
		 * @return the FPS
		 */
		getFPS(): number;

		/**
		 * Gets the x-axis coordinate of the camera.
		 * <p>
		 * This value is a local coordinate value similar to
		 * {@link #getLocalDestinationLocation()}.
		 *
		 * @return the camera x coordinate
		 */
		getCameraX(): number;

		/**
		 * Floating point camera position, x-axis
		 * @see #getCameraX()
		 * @return
		 */
		getCameraFpX(): number;

		/**
		 * Gets the y-axis coordinate of the camera.
		 * <p>
		 * This value is a local coordinate value similar to
		 * {@link #getLocalDestinationLocation()}.
		 *
		 * @return the camera y coordinate
		 */
		getCameraY(): number;

		/**
		 * Floating point camera position, y-axis
		 * @see #getCameraY()
		 * @return
		 */
		getCameraFpY(): number;

		/**
		 * Gets the z-axis coordinate of the camera.
		 * <p>
		 * This value is a local coordinate value similar to
		 * {@link #getLocalDestinationLocation()}.
		 *
		 * @return the camera z coordinate
		 */
		getCameraZ(): number;

		/**
		 * Floating point camera position, z-axis
		 * @see #getCameraZ()
		 * @return
		 */
		getCameraFpZ(): number;

		/**
		 * Gets the pitch of the camera.
		 * <p>
		 * The value returned by this method is measured in JAU, or Jagex
		 * Angle Unit, which is 1/1024 of a revolution.
		 *
		 * @return the camera pitch
		 */
		getCameraPitch(): number;

		/**
		 * Floating point camera pitch.
		 * @see #getCameraPitch()
		 * @return
		 */
		getCameraFpPitch(): number;

		/**
		 * Gets the yaw of the camera.
		 *
		 * @return the camera yaw
		 */
		getCameraYaw(): number;

		/**
		 * Floating point camera yaw
		 * @see #getCameraYaw()
		 * @return
		 */
		getCameraFpYaw(): number;

		/**
		 * Gets the current world number of the logged in player.
		 *
		 * @return the logged in world number
		 */
		getWorld(): number;

		/**
		 * Gets the canvas height
		 * @return
		 */
		getCanvasHeight(): number;

		/**
		 * Gets the canvas width
		 * @return
		 */
		getCanvasWidth(): number;

		/**
		 * Gets the height of the viewport.
		 *
		 * @return the viewport height
		 */
		getViewportHeight(): number;

		/**
		 * Gets the width of the viewport.
		 *
		 * @return the viewport width
		 */
		getViewportWidth(): number;

		/**
		 * Gets the x-axis offset of the viewport.
		 *
		 * @return the x-axis offset
		 */
		getViewportXOffset(): number;

		/**
		 * Gets the y-axis offset of the viewport.
		 *
		 * @return the y-axis offset
		 */
		getViewportYOffset(): number;

		/**
		 * Gets the scale of the world (zoom value).
		 *
		 * @return the world scale
		 */
		getScale(): number;

		/**
		 * Gets the current position of the mouse on the canvas.
		 *
		 * @return the mouse canvas position
		 */
		getMouseCanvasPosition(): Point;

		/**
		 * Gets the logged in player instance.
		 *
		 * @return the logged in player
		 */
		getLocalPlayer(): Player;

		/**
		 * Get the local player's follower, such as a pet
		 * @return
		 */
		getFollower(): NPC | null;

		/**
		 * Gets the item composition corresponding to an items ID.
		 *
		 * @param id the item ID
		 * @return the corresponding item composition
		 * @see net.runelite.api.gameval.ItemID
		 */
		getItemDefinition(id: number): ItemComposition;

		/**
		 * Creates an item icon sprite with passed variables.
		 *
		 * @param itemId the item ID
		 * @param quantity the item quantity
		 * @param border whether to draw a border
		 * @param shadowColor the shadow color
		 * @param stackable whether the item is stackable
		 * @param noted whether the item is noted
		 * @param scale the scale of the sprite
		 * @return the created sprite
		 */
		createItemSprite(
			itemId: number,
			quantity: number,
			border: number,
			shadowColor: number,
			stackable: number,
			noted: boolean,
			scale: number
		): SpritePixels | null;

		/**
		 * Get the item model cache. These models are used for drawing widgets of type {@link net.runelite.api.widgets.WidgetType#MODEL}
		 * and inventory item icons
		 * @return
		 */
		getItemModelCache(): NodeCache;

		/**
		 * Get the item sprite cache. These are 2d SpritePixels which are used to raster item images on the inventory and
		 * on widgets of type {@link net.runelite.api.widgets.WidgetType#GRAPHIC}
		 * @return
		 */
		getItemSpriteCache(): NodeCache;

		/**
		 * Loads and creates the sprite images of the passed archive and file IDs.
		 *
		 * @param source the sprite index
		 * @param archiveId the sprites archive ID
		 * @param fileId the sprites file ID
		 * @return the sprite image of the file
		 */
		getSprites(source: IndexDataBase, archiveId: number, fileId: number): SpritePixels[] | null;

		/**
		 * Gets the sprite index.
		 */
		getIndexSprites(): IndexDataBase;

		/**
		 * Gets the script index.
		 */
		getIndexScripts(): IndexDataBase;

		/**
		 * Gets the config index.
		 */
		getIndexConfig(): IndexDataBase;

		/**
		 * Gets an index by id
		 */
		getIndex(id: number): IndexDataBase;

		/**
		 * Gets the current mouse button that is pressed.
		 *
		 * @return the pressed mouse button
		 */
		getMouseCurrentButton(): number;

		/**
		 * Checks whether a widget is currently being dragged.
		 *
		 * @return true if dragging a widget, false otherwise
		 */
		isDraggingWidget(): boolean;

		/**
		 * Gets the widget currently being dragged.
		 *
		 * @return the dragged widget, null if not dragging any widget
		 */
		getDraggedWidget(): net.runelite.api.widgets.Widget | null;

		/**
		 * Gets the widget that is being dragged on.
		 * <p>
		 * The widget being dragged has the {@link net.runelite.api.widgets.WidgetConfig#DRAG}
		 * flag set, and is the widget currently under the dragged widget.
		 *
		 * @return the dragged on widget, null if not dragging any widget
		 */
		getDraggedOnWidget(): net.runelite.api.widgets.Widget | null;

		/**
		 * Sets the widget that is being dragged on.
		 *
		 * @param widget the new dragged on widget
		 */
		setDraggedOnWidget(widget: net.runelite.api.widgets.Widget): void;

		/**
		 * Get the number of client cycles the current dragged widget
		 * has been dragged for.
		 *
		 * @return
		 */
		getDragTime(): number;

		/**
		 * Gets Interface ID of the root widget
		 */
		getTopLevelInterfaceId(): number;

		/**
		 * Gets the root widgets.
		 *
		 * @return the root widgets
		 */
		getWidgetRoots(): net.runelite.api.widgets.Widget[];

		/**
		 * Gets a widget corresponding to the passed widget info.
		 *
		 * @param widget the widget info
		 * @return the widget
		 * @deprecated
		 */
		getWidget(widget: net.runelite.api.widgets.WidgetInfo): net.runelite.api.widgets.Widget | null;

		/**
		 * Gets a widget by its raw group ID and child ID.
		 *
		 * @param groupId the group ID
		 * @param childId the child widget ID
		 * @return the widget corresponding to the group and child pair
		 */
		getWidget(groupId: number, childId: number): net.runelite.api.widgets.Widget | null;

		/**
		 * Gets a widget by its component id.
		 *
		 * @param componentId the component id
		 */
		getWidget(componentId: number): net.runelite.api.widgets.Widget | null;

		/**
		 * Gets an array containing the x-axis canvas positions
		 * of all widgets.
		 *
		 * @return array of x-axis widget coordinates
		 */
		getWidgetPositionsX(): number[];

		/**
		 * Gets an array containing the y-axis canvas positions
		 * of all widgets.
		 *
		 * @return array of y-axis widget coordinates
		 */
		getWidgetPositionsY(): number[];

		/**
		 * Gets the current run energy of the logged in player.
		 *
		 * @return the run energy in units of 1/100th of an percentage
		 */
		getEnergy(): number;

		/**
		 * Gets the current weight of the logged in player.
		 *
		 * @return the weight
		 */
		getWeight(): number;

		/**
		 * Gets an array of options that can currently be used on other players.
		 * <p>
		 * For example, if the player is in a PVP area the "Attack" option
		 * will become available in the array. Otherwise, it won't be there.
		 *
		 * @return an array of options
		 */
		getPlayerOptions(): string[];

		/**
		 * Gets an array of whether an option is enabled or not.
		 *
		 * @return the option priorities
		 */
		getPlayerOptionsPriorities(): boolean[];

		/**
		 * Gets an array of player menu types.
		 *
		 * @return the player menu types
		 */
		getPlayerMenuTypes(): number[];

		/**
		 * Gets a list of all RuneScape worlds.
		 *
		 * @return world list
		 */
		getWorldList(): World[];

		/**
		 * Get the client menu.
		 */
		getMenu(): Menu;

		/**
		 * Create a new menu entry
		 * @param idx the index to create the menu entry at. Accepts negative indexes eg. -1 inserts at the end.
		 * @return the newly created menu entry
		 * @see #getMenu()
		 * @see Menu#createMenuEntry(int)
		 * @deprecated
		 */
		createMenuEntry(idx: number): MenuEntry;

		/**
		 * Gets an array of currently open right-click menu entries that can be
		 * clicked and activated.
		 *
		 * @return array of open menu entries
		 * @see #getMenu()
		 * @see Menu#getMenuEntries()
		 * @deprecated
		 */
		getMenuEntries(): MenuEntry[];

		/**
		 * Sets the array of open menu entries.
		 * <p>
		 * This method should typically be used in the context of the {@link net.runelite.api.events.MenuOpened}
		 * event, since setting the menu entries will be overwritten the next frame
		 *
		 * @param entries new array of open menu entries
		 * @see #getMenu()
		 * @see Menu#setMenuEntries(MenuEntry[])
		 * @deprecated
		 */
		setMenuEntries(entries: MenuEntry[]): void;

		/**
		 * Checks whether a right-click menu is currently open.
		 *
		 * @return true if a menu is open, false otherwise
		 */
		isMenuOpen(): boolean;

		/**
		 * Returns whether the currently open menu is scrollable.
		 * @return
		 */
		isMenuScrollable(): boolean;

		/**
		 * Get the number of entries the currently open menu has been scrolled down.
		 * @return
		 */
		getMenuScroll(): number;

		/**
		 * Set the number of entries the currently open menu has been scrolled down.
		 * @param scroll
		 */
		setMenuScroll(scroll: number): void;

		/**
		 * Get the menu x location. Only valid if the menu is open.
		 *
		 * @return the menu x location
		 * @see Menu#getMenuX()
		 * @deprecated
		 */
		getMenuX(): number;

		/**
		 * Get the menu y location. Only valid if the menu is open.
		 *
		 * @return the menu y location
		 * @see Menu#getMenuY()
		 * @deprecated
		 */
		getMenuY(): number;

		/**
		 * Get the menu height. Only valid if the menu is open.
		 *
		 * @return the menu height
		 * @see Menu#getMenuHeight()
		 * @deprecated
		 */
		getMenuHeight(): number;

		/**
		 * Get the menu width. Only valid if the menu is open.
		 *
		 * @return the menu width
		 * @see Menu#getMenuWidth()
		 * @deprecated
		 */
		getMenuWidth(): number;

		/**
		 * Gets the angle of the map, or target camera yaw.
		 *
		 * @return the map angle
		 * @see #getCameraYawTarget()
		 * @deprecated
		 */
		getMapAngle(): number;

		/**
		 * Checks whether the client window is currently resized.
		 *
		 * @return true if resized, false otherwise
		 */
		isResized(): boolean;

		/**
		 * Gets the client revision number.
		 *
		 * @return the revision
		 */
		getRevision(): number;

		/**
		 * Gets an array of all client varplayers.
		 *
		 * @return local player variables
		 */
		getVarps(): number[];

		/**
		 * Get an array of all server varplayers. These vars are only
		 * modified by the server, and so represent the server's idea of
		 * the varp values.
		 * @return the server varps
		 */
		getServerVarps(): number[];

		/**
		 * Gets an array of all client variables.
		 */
		getVarcMap(): Record<number, any>;

		/**
		 * Gets a value corresponding to the passed varbit.
		 *
		 * @param varbit the varbit id
		 * @return the value
		 * @see Client#getVarbitValue(int)
		 * @deprecated
		 */
		getVar(varbit: number): number;

		/**
		 * Gets the value of the given varbit.
		 *
		 * @param varbit the varbit id
		 * @return the value
		 */
		getVarbitValue(varbit: number): number;

		/**
		 * Gets the value of the given varbit.
		 * This returns the server's idea of the value, not the client's. This is
		 * specifically the last value set by the server regardless of changes to
		 * the var by the client.
		 * @param varbit the varbit id
		 * @return the value
		 */
		getServerVarbitValue(varbit: number): number;

		/**
		 * Gets the value of a given VarPlayer.
		 *
		 * @param varpId the VarPlayer id
		 * @return the value
		 */
		getVarpValue(varpId: number): number;

		/**
		 * Gets the value of a given VarPlayer.
		 * This returns the server's idea of the value, not the client's. This is
		 * specifically the last value set by the server regardless of changes to
		 * the var by the client.
		 *
		 * @param varpId the VarPlayer id
		 * @return the value
		 */
		getServerVarpValue(varpId: number): number;

		/**
		 * Gets the value of a given VarClientInt
		 *
		 * @param var the {@link net.runelite.api.gameval.VarClientID}
		 * @return the value
		 */
		getVarcIntValue(variable: number): number;

		/**
		 * Gets the value of a given VarClientStr
		 *
		 * @param var the {@link net.runelite.api.gameval.VarClientID}
		 * @return the value
		 */
		getVarcStrValue(variable: number): string;

		/**
		 * Sets a VarClientString to the passed value
		 *
		 * @param var the {@link net.runelite.api.gameval.VarClientID}
		 * @param value the new value
		 */
		setVarcStrValue(variable: number, value: string): void;

		/**
		 * Sets a VarClientInt to the passed value
		 *
		 * @param var the {@link net.runelite.api.gameval.VarClientID}
		 * @param value the new value
		 */
		setVarcIntValue(variable: number, value: number): void;

		/**
		 * Sets the value of a varbit
		 *
		 * @param varbit the varbit id
		 * @param value the new value
		 */
		setVarbit(varbit: number, value: number): void;

		/**
		 * Gets the varbit composition for a given varbit id
		 *
		 * @param id
		 * @return
		 */
		getVarbit(id: number): VarbitComposition | null;

		/**
		 * Gets the value of a given variable.
		 *
		 * @param varps passed varbits
		 * @param varbitId the variable ID
		 * @return the value
		 * @see net.runelite.api.gameval.VarbitID
		 */
		getVarbitValue(varps: number[], varbitId: number): number;

		/**
		 * Sets the value of a given variable.
		 *
		 * @param varps passed varbits
		 * @param varbit the variable
		 * @param value the value
		 * @see net.runelite.api.gameval.VarbitID
		 */
		setVarbitValue(varps: number[], varbit: number, value: number): void;

		/**
		 * Mark the given varp as changed, causing var listeners to be
		 * triggered next tick
		 * @param varp
		 */
		queueChangedVarp(varp: number): void;

		/**
		 * Open an interface.
		 * @param componentId component id to open the interface at
		 * @param interfaceId the interface to open
		 * @param modalMode see {@link WidgetModalMode}
		 * @throws IllegalStateException if the component does not exist or it not a layer, or the interface is already
		 * open on a different component
		 * @return the {@link WidgetNode} for the interface. This should be closed later by calling
		 * {{@link #closeInterface(WidgetNode, boolean)}.
		 */
		openInterface(componentId: number, interfaceId: number, modalMode: number): WidgetNode;

		/**
		 * Close an interface
		 * @param interfaceNode the {@link WidgetNode} linking the interface into the component tree
		 * @param unload whether to null the client's widget table
		 * @throws IllegalArgumentException if the interfaceNode is not linked into the component tree
		 */
		closeInterface(interfaceNode: WidgetNode, unload: boolean): void;

		/**
		 * Gets the widget flags table.
		 *
		 * @return the widget flags table
		 */
		getWidgetFlags(): HashTable<net.runelite.api.widgets.WidgetConfigNode>;

		/**
		 * Get the widget config for a given widget
		 * @param w
		 * @return
		 */
		getWidgetConfig(w: net.runelite.api.widgets.Widget): net.runelite.api.widgets.WidgetConfigNode | null;

		/**
		 * Gets the widget node component table.
		 *
		 * @return the widget node component table
		 * @see WidgetNode
		 */
		getComponentTable(): HashTable<WidgetNode>;

		/**
		 * Gets an array of current grand exchange offers.
		 *
		 * @return all grand exchange offers
		 */
		getGrandExchangeOffers(): GrandExchangeOffer[];

		/**
		 * Checks whether or not a prayer is currently active.
		 *
		 * @param prayer the prayer
		 * @return true if the prayer is active, false otherwise
		 * @deprecated this method does not properly handle deadeye/eagle eye or mystic vigour/might
		 */
		isPrayerActive(prayer: Prayer): boolean;

		/**
		 * Gets the current experience towards a skill.
		 *
		 * @param skill the skill
		 * @return the experience
		 */
		getSkillExperience(skill: Skill): number;

		/**
		 * Get the total experience of the player
		 *
		 * @return
		 */
		getOverallExperience(): number;

		/**
		 * Refreshes the chat.
		 */
		refreshChat(): void;

		/**
		 * Gets the map of chat buffers.
		 *
		 * @return the chat buffers
		 */
		getChatLineMap(): Record<number, ChatLineBuffer>;

		/**
		 * Map of message node id to message node
		 *
		 * @return the map
		 */
		getMessages(): IterableHashTable<MessageNode>;

		/**
		 * Gets the object composition corresponding to an objects ID.
		 *
		 * @param objectId the object ID
		 * @return the corresponding object composition
		 * @see net.runelite.api.gameval.ObjectID
		 */
		getObjectDefinition(objectId: number): ObjectComposition;

		/**
		 * Gets the NPC composition corresponding to an NPCs ID.
		 *
		 * @param npcId the npc ID
		 * @return the corresponding NPC composition
		 * @see net.runelite.api.gameval.NpcID
		 */
		getNpcDefinition(npcId: number): NPCComposition;

		/**
		 * Gets the {@link StructComposition} for a given struct ID
		 *
		 * @see StructID
		 */
		getStructComposition(structID: number): StructComposition;

		/**
		 * Gets the client's cache of in memory struct compositions
		 */
		getStructCompositionCache(): NodeCache;

		/**
		 * Gets a entry out of a DBTable Row
		 */
		getDBTableField(rowID: number, column: number, tupleIndex: number): any[];

		getDBRowConfig(rowID: number): net.runelite.api.dbtable.DBRowConfig;

		/**
		 * Uses an index to find rows containing a certain value in a column.
		 * An index must exist for this column.
		 */
		getDBRowsByValue(table: number, column: number, tupleIndex: number, value: any): number[];

		/**
		 * Gets all rows in a DBTable
		 */
		getDBTableRows(table: number): number[];

		/**
		 * Get a map element config by id
		 *
		 * @param id the id
		 */
		getMapElementConfig(id: number): net.runelite.api.worldmap.MapElementConfig;

		/**
		 * Gets a sprite of the map scene
		 *
		 * @return the sprite
		 */
		getMapScene(): IndexedSprite[];

		/**
		 * Gets an array of currently drawn mini-map dots.
		 *
		 * @return all mini-map dots
		 */
		getMapDots(): SpritePixels[];

		/**
		 * Gets the local clients game cycle.
		 * <p>
		 * Note: This value is incremented every 20ms.
		 *
		 * @return the game cycle
		 */
		getGameCycle(): number;

		/**
		 * Gets an array of current map icon sprites.
		 *
		 * @return the map icons
		 */
		getMapIcons(): SpritePixels[];

		/**
		 * Gets an array of mod icon sprites.
		 *
		 * @return the mod icons
		 */
		getModIcons(): IndexedSprite[];

		/**
		 * Replaces the current mod icons with a new array.
		 *
		 * @param modIcons the new mod icons
		 */
		setModIcons(modIcons: IndexedSprite[]): void;

		/**
		 * Creates an empty indexed sprite.
		 *
		 * @return the sprite
		 */
		createIndexedSprite(): IndexedSprite;

		/**
		 * Creates a sprite image with given width and height containing the
		 * pixels.
		 *
		 * @param pixels the pixels
		 * @param width the width
		 * @param height the height
		 * @return the sprite image
		 */
		createSpritePixels(pixels: number[], width: number, height: number): SpritePixels;

		/**
		 * Gets the location of the local player.
		 *
		 * @return the local player location
		 */
		getLocalDestinationLocation(): net.runelite.api.coords.LocalPoint | null;

		/**
		 * Creates a RuneLiteObject, which is a modified {@link GraphicsObject}
		 */
		createRuneLiteObject(): RuneLiteObject;

		/**
		 * Registers a new {@link RuneLiteObjectController} to its corresponding {@link WorldView}.
		 */
		registerRuneLiteObject(controller: RuneLiteObjectController): void;

		/**
		 * Removes a new {@link RuneLiteObjectController} from its corresponding {@link WorldView}.
		 */
		removeRuneLiteObject(controller: RuneLiteObjectController): void;

		/**
		 * Checks whether a {@link RuneLiteObjectController} is registered to any {@link WorldView}.
		 */
		isRuneLiteObjectRegistered(controller: RuneLiteObjectController): boolean;

		/**
		 * Loads an unlit model from the cache. The returned model shares
		 * data such as faces, face colors, face transparencies, and vertex points with
		 * other models. If you want to mutate these you MUST call the relevant {@code cloneX}
		 * method.
		 *
		 * @see ModelData#cloneColors()
		 *
		 * @param id the ID of the model
		 * @return the model or null if it is loading or nonexistent
		 */
		loadModelData(id: number): ModelData | null;

		mergeModels(models: ModelData[], length: number): ModelData;
		mergeModels(...models: ModelData[]): ModelData;

		mergeModels(models: Model[], length: number): Model;
		mergeModels(...models: Model[]): Model;

		/**
		 * Loads and lights a model from the cache
		 *
		 * This is equivalent to {@code loadModelData(id).light()}
		 *
		 * @param id the ID of the model
		 * @return the model or null if it is loading or nonexistent
		 */
		loadModel(id: number): Model | null;

		/**
		 * Loads a model from the cache and also recolors it
		 *
		 * @param id the ID of the model
		 * @param colorToFind array of hsl color values to find in the model to replace
		 * @param colorToReplace array of hsl color values to replace in the model
		 * @return the model or null if it is loading or nonexistent
		 */
		loadModel(id: number, colorToFind: number[], colorToReplace: number[]): Model | null;

		/**
		 * Loads an animation from the cache
		 *
		 * @param id the ID of the animation. Any int is allowed, but implementations in the client
		 * should be defined in {@link net.runelite.api.gameval.AnimationID}
		 */
		loadAnimation(id: number): Animation;

		/**
		 * Gets the music volume
		 * @return volume 0-255 inclusive
		 */
		getMusicVolume(): number;

		/**
		 * Sets the music volume
		 * @param volume 0-255 inclusive
		 */
		setMusicVolume(volume: number): void;

		/**
		 * Play a sound effect at the player's current location. This is how UI,
		 * and player-generated (e.g. mining, woodcutting) sound effects are
		 * normally played.
		 *
		 * @param id the ID of the sound to play. Any int is allowed, but see
		 * {@link SoundEffectID} for some common ones
		 */
		playSoundEffect(id: number): void;

		/**
		 * Play a sound effect from some point in the world.
		 *
		 * @param id the ID of the sound to play. Any int is allowed, but see
		 * {@link SoundEffectID} for some common ones
		 * @param x the ground coordinate on the x axis
		 * @param y the ground coordinate on the y axis
		 * @param range the number of tiles away that the sound can be heard
		 * from
		 */
		playSoundEffect(id: number, x: number, y: number, range: number): void;

		/**
		 * Play a sound effect from some point in the world.
		 *
		 * @param id the ID of the sound to play. Any int is allowed, but see
		 * {@link SoundEffectID} for some common ones
		 * @param x the ground coordinate on the x axis
		 * @param y the ground coordinate on the y axis
		 * @param range the number of tiles away that the sound can be heard
		 * from
		 * @param delay the amount of frames before the sound starts playing
		 */
		playSoundEffect(id: number, x: number, y: number, range: number, delay: number): void;

		/**
		 * Plays a sound effect, even if the player's sound effect volume is muted.
		 *
		 * @param id     the ID of the sound effect - {@link SoundEffectID}
		 * @param volume the volume to play the sound effect at, see {@link SoundEffectVolume} for values used
		 *               in the settings interface. if the sound effect volume is not muted, uses the set volume
		 */
		playSoundEffect(id: number, volume: number): void;

		/**
		 * Get the currently playing midi requests.
		 * @return
		 */
		getActiveMidiRequests(): MidiRequest[];

		/**
		 * Gets the clients graphic buffer provider.
		 *
		 * @return the buffer provider
		 */
		getBufferProvider(): BufferProvider;

		/**
		 * Gets the amount of client ticks since the last mouse movement occurred.
		 *
		 * @return amount of idle mouse ticks
		 * @see Constants#CLIENT_TICK_LENGTH
		 */
		getMouseIdleTicks(): number;

		/**
		 * Gets the time at which the last mouse press occurred in milliseconds since
		 * the UNIX epoch.
		 */
		getMouseLastPressedMillis(): number;

		/**
		 * Gets the amount of client ticks since the last keyboard press occurred.
		 *
		 * @return amount of idle keyboard ticks
		 * @see Constants#CLIENT_TICK_LENGTH
		 */
		getKeyboardIdleTicks(): number;

		/**
		 * Changes how game behaves based on memory mode. Low memory mode skips
		 * drawing of all floors and renders ground textures in low quality.
		 *
		 * @param lowMemory if we are running in low memory mode or not
		 */
		changeMemoryMode(lowMemory: boolean): void;

		/**
		 * Get the item container for an inventory.
		 *
		 * @param inventory the inventory type
		 * @return the item container
		 * @see net.runelite.api.gameval.InventoryID
		 */
		getItemContainer(inventory: InventoryID): ItemContainer | null;

		/**
		 * Get an item container by id
		 *
		 * @param id the inventory id
		 * @return the item container
		 * @see net.runelite.api.gameval.InventoryID
		 */
		getItemContainer(id: number): ItemContainer | null;

		/**
		 * Get all item containers
		 * @return
		 */
		getItemContainers(): HashTable<ItemContainer>;

		/**
		 * Gets the length of the cs2 vm's int stack
		 */
		getIntStackSize(): number;

		/**
		 * Sets the length of the cs2 vm's int stack
		 */
		setIntStackSize(stackSize: number): void;

		/**
		 * Gets the cs2 vm's int stack
		 */
		getIntStack(): number[];

		/**
		 * Gets the length of the cs2 vm's object stack
		 */
		getObjectStackSize(): number;

		/**
		 * Sets the length of the cs2 vm's object stack
		 */
		setObjectStackSize(stackSize: number): void;

		/**
		 * Gets the cs2 vm's object stack
		 */
		getObjectStack(): any[];

		/**
		 * Get the size of one of the cs2 vm's arrays.
		 * @param arrayId the array id
		 * @return
		 */
		getArraySizes(arrayId: number): number;

		/**
		 * Get one of the cs2 vm's arrays. Use {@link #getArraySizes(int)} to get
		 * the array length.
		 * @param arrayId the array id
		 * @return
		 */
		getArray(arrayId: number): number[];

		/**
		 * Gets the cs2 vm's active widget
		 *
		 * This is used for all {@code cc_*} operations with a {@code 0} operand
		 */
		getScriptActiveWidget(): net.runelite.api.widgets.Widget;

		/**
		 * Gets the cs2 vm's "dot" widget
		 *
		 * This is used for all {@code .cc_*} operations with a {@code 1} operand
		 */
		getScriptDotWidget(): net.runelite.api.widgets.Widget;

		/**
		 * Checks whether a player is on the friends list.
		 *
		 * @param name the name of the player
		 * @param mustBeLoggedIn if they player is online
		 * @return true if the player is friends
		 */
		isFriended(name: string, mustBeLoggedIn: boolean): boolean;

		/**
		 * Retrieve the friends chat manager
		 *
		 * @return
		 */
		getFriendsChatManager(): FriendsChatManager | null;

		/**
		 * Retrieve the nameable container containing friends
		 *
		 * @return
		 */
		getFriendContainer(): FriendContainer;

		/**
		 * Retrieve the nameable container containing ignores
		 *
		 * @return
		 */
		getIgnoreContainer(): NameableContainer<Ignore>;

		/**
		 * Gets the clients saved preferences.
		 *
		 * @return the client preferences
		 */
		getPreferences(): Preferences;

		/**
		 * Get the target camera yaw.
		 * The target yaw is the yaw the camera should use based on player input.
		 * The actual camera yaw, from {@link #getCameraYaw()}, is what the camera
		 * is actually using, which can be overridden by eg. cutscenes.
		 *
		 * @return the target camera yaw
		 */
		getCameraYawTarget(): number;

		/**
		 * Get the target camera pitch
		 * The target pitch is the pitch the camera should use based on player input.
		 * The actual camera pitch, from {@link #getCameraPitch()} ()}, is what the camera
		 * is actually using, which can be overridden by eg. cutscenes.
		 *
		 * @return the target camera pitch
		 */
		getCameraPitchTarget(): number;

		/**
		 * Set the target camera yaw
		 *
		 * @param cameraYawTarget target camera yaw
		 */
		setCameraYawTarget(cameraYawTarget: number): void;

		/**
		 * Set the target camera pitch
		 *
		 * @param cameraPitchTarget target camera pitch
		 */
		setCameraPitchTarget(cameraPitchTarget: number): void;

		/**
		 * Sets the camera speed
		 * @param speed
		 */
		setCameraSpeed(speed: number): void;

		/**
		 * Sets the mask for which mouse buttons control the camera.
		 * Use 0 for the default behavior of mouse button 4 if "middle mouse moves camera" is on.
		 * @param mask
		 */
		setCameraMouseButtonMask(mask: number): void;

		/**
		 * Sets whether the camera pitch can exceed the normal limits set
		 * by the RuneScape client.
		 *
		 * @param enabled new camera pitch relaxer value
		 */
		setCameraPitchRelaxerEnabled(enabled: boolean): void;

		/**
		 * Sets if the moving the camera horizontally should be backwards
		 */
		setInvertYaw(invertYaw: boolean): void;

		/**
		 * Sets if the moving the camera vertically should be backwards
		 */
		setInvertPitch(invertPitch: boolean): void;

		/**
		 * Gets the world map overview.
		 *
		 * @return the world map overview
		 * @see #getWorldMap()
		 * @deprecated
		 */
		getRenderOverview(): RenderOverview;

		/**
		 * Get the world map
		 */
		getWorldMap(): net.runelite.api.worldmap.WorldMap;

		/**
		 * Checks whether the client is in stretched mode.
		 *
		 * @return true if the client is in stretched mode, false otherwise
		 */
		isStretchedEnabled(): boolean;

		/**
		 * Sets the client stretched mode state.
		 *
		 * @param state new stretched mode state
		 */
		setStretchedEnabled(state: boolean): void;

		/**
		 * Checks whether the client is using fast
		 * rendering techniques when stretching the canvas.
		 *
		 * @return true if stretching is fast rendering, false otherwise
		 */
		isStretchedFast(): boolean;

		/**
		 * Sets whether to use fast rendering techniques
		 * when stretching the canvas.
		 *
		 * @param state new fast rendering state
		 */
		setStretchedFast(state: boolean): void;

		/**
		 * Sets whether to force integer scale factor by rounding scale
		 * factors towards {@code zero} when stretching.
		 *
		 * @param state new integer scaling state
		 */
		setStretchedIntegerScaling(state: boolean): void;

		/**
		 * Sets whether to keep aspect ratio when stretching.
		 *
		 * @param state new keep aspect ratio state
		 */
		setStretchedKeepAspectRatio(state: boolean): void;

		/**
		 * Sets the scaling factor when scaling resizable mode.
		 *
		 * @param factor new scaling factor
		 */
		setScalingFactor(factor: number): void;

		/**
		 * Invalidates cached dimensions that are
		 * used for stretching and scaling.
		 *
		 * @param resize true to tell the game to
		 *               resize the canvas on the next frame,
		 *               false otherwise.
		 */
		invalidateStretching(resize: boolean): void;

		/**
		 * Gets the current stretched dimensions of the client.
		 *
		 * @return the stretched dimensions
		 */
		getStretchedDimensions(): java.awt.Dimension;

		/**
		 * Gets the real dimensions of the client before being stretched.
		 *
		 * @return the real dimensions
		 */
		getRealDimensions(): java.awt.Dimension;

		/**
		 * Changes the selected world to log in to.
		 * <p>
		 * Note: this method will have no effect unless {@link GameState}
		 * is {@link GameState#LOGIN_SCREEN}.
		 *
		 * @param world the world to switch to
		 */
		changeWorld(world: World): void;

		/**
		 * Creates a new instance of a world.
		 */
		createWorld(): World;

		/**
		 * Draws an instance map for the current viewed plane.
		 *
		 * @param z the plane
		 * @return the map sprite
		 */
		drawInstanceMap(z: number): SpritePixels;

		/**
		 * Executes a client script from the cache
		 *
		 * This method must be ran on the client thread and is not reentrant
		 *
		 * This method is shorthand for {@code client.createScriptEvent(args).run()}
		 *
		 * @param args the script id, then any additional arguments to execute the script with
		 * @see ScriptID
		 */
		runScript(...args: any[]): void;

		/**
		 * Creates a blank ScriptEvent for executing a ClientScript2 script
		 *
		 * @param args the script id, then any additional arguments to execute the script with
		 * @see ScriptID
		 */
		createScriptEvent(...args: any[]): ScriptEvent;

		/**
		 * Checks whether or not there is any active hint arrow.
		 *
		 * @return true if there is a hint arrow, false otherwise
		 */
		hasHintArrow(): boolean;

		/**
		 * Gets the type of hint arrow currently displayed.
		 *
		 * @return the hint arrow type
		 */
		getHintArrowType(): number;

		/**
		 * Clears the current hint arrow.
		 */
		clearHintArrow(): void;

		/**
		 * Sets a hint arrow to point to the passed location.
		 *
		 * @param point the location
		 */
		setHintArrow(point: net.runelite.api.coords.WorldPoint): void;

		/**
		 * Sets the hint arrow to the passsed point
		 *
		 * @param point
		 */
		setHintArrow(point: net.runelite.api.coords.LocalPoint): void;

		/**
		 * Sets a hint arrow to point to the passed player.
		 *
		 * @param player the player
		 */
		setHintArrow(player: Player): void;

		/**
		 * Sets a hint arrow to point to the passed NPC.
		 *
		 * @param npc the NPC
		 */
		setHintArrow(npc: NPC): void;

		/**
		 * Gets the world point that the hint arrow is directed at.
		 *
		 * @return hint arrow target
		 */
		getHintArrowPoint(): net.runelite.api.coords.WorldPoint;

		/**
		 * Gets the player that the hint arrow is directed at.
		 *
		 * @return hint arrow target
		 */
		getHintArrowPlayer(): Player;

		/**
		 * Gets the NPC that the hint arrow is directed at.
		 *
		 * @return hint arrow target
		 */
		getHintArrowNpc(): NPC;

		getAnimationInterpolationFilter(): (id: number) => boolean;
		setAnimationInterpolationFilter(filter: (id: number) => boolean): void;

		getBoostedSkillLevels(): number[];

		getRealSkillLevels(): number[];

		getSkillExperiences(): number[];

		queueChangedSkill(skill: Skill): void;

		/**
		 * Gets a mapping of sprites to override.
		 * <p>
		 * The key value in the map corresponds to the ID of the sprite,
		 * and the value the sprite to replace it with.
		 */
		getSpriteOverrides(): Record<number, SpritePixels>;

		/**
		 * Gets a mapping of widget sprites to override.
		 * <p>
		 * The key value in the map corresponds to the packed widget ID,
		 * and the value the sprite to replace the widgets sprite with.
		 */
		getWidgetSpriteOverrides(): Record<number, SpritePixels>;

		/**
		 * Sets the compass sprite.
		 *
		 * @param spritePixels the new sprite
		 */
		setCompass(spritePixels: SpritePixels): void;

		/**
		 * Returns widget sprite cache, to be used with {@link Client#getSpriteOverrides()}
		 *
		 * @return the cache
		 */
		getWidgetSpriteCache(): NodeCache;

		/**
		 * Gets the current server tick count.
		 *
		 * @return the tick count
		 */
		getTickCount(): number;

		/**
		 * Sets the current server tick count.
		 *
		 * @param tickCount the new tick count
		 */
		setTickCount(tickCount: number): void;

		/**
		 * Sets the inventory drag delay in client game cycles (20ms).
		 *
		 * @param delay the number of game cycles to delay dragging
		 * @deprecated
		 */
		setInventoryDragDelay(delay: number): void;

		/**
		 * Get the hostname of the current world
		 * @return
		 */
		getWorldHost(): string;

		/**
		 * Gets a set of current world types that apply to the logged in world.
		 *
		 * @return the types for current world
		 */
		getWorldType(): Set<WorldType>;

		/**
		 * Get the camera mode
		 * @return 0 for normal, 1 for free camera
		 */
		getCameraMode(): number;

		/**
		 * Set the camera mode
		 * @param mode 0 for normal, 1 for free camera
		 */
		setCameraMode(mode: number): void;

		/**
		 * Get the camera focus point x
		 * Typically this is the player position, but can be other points in cutscenes or in free camera mode.
		 * @return
		 */
		getCameraFocalPointX(): number;

		/**
		 * Sets the camera focus point x. Requires the {@link #getCameraMode()} to be free camera.
		 * @param x
		 */
		setCameraFocalPointX(x: number): void;

		/**
		 * Get the camera focus point y
		 * Typically this is the player position, but can be other points in cutscenes or in free camera mode.
		 * @return
		 */
		getCameraFocalPointY(): number;

		/**
		 * Sets the camera focus point y. Requires the {@link #getCameraMode()} to be free camera.
		 * @param y
		 */
		setCameraFocalPointY(y: number): void;

		/**
		 * Get the camera focus point z
		 * Typically this is the player position, but can be other points in cutscenes or in free camera mode.
		 * @return
		 */
		getCameraFocalPointZ(): number;

		/**
		 * Sets the camera focus point z. Requires the {@link #getCameraMode()} to be free camera.
		 * @param z
		 */
		setCameraFocalPointZ(z: number): void;

		/**
		 * Sets the normal moving speed when using oculus orb (default value is 12)
		 */
		setFreeCameraSpeed(speed: number): void;

		/**
		 * Gets the enabled state for the Oculus orb mode
		 * @deprecated
		 */
		getOculusOrbState(): number;

		/**
		 * Sets the enabled state for the Oculus orb state
		 *
		 * @param state boolean enabled value
		 * @deprecated
		 */
		setOculusOrbState(state: number): void;

		/**
		 * Sets the normal moving speed when using oculus orb (default value is 12)
		 * @deprecated
		 */
		setOculusOrbNormalSpeed(speed: number): void;

		/**
		 * Gets local X coord where the camera is pointing when the Oculus orb is active
		 * @deprecated
		 */
		getOculusOrbFocalPointX(): number;

		/**
		 * Gets local Y coord where the camera is pointing when the Oculus orb is active
		 * @deprecated
		 */
		getOculusOrbFocalPointY(): number;

		/**
		 * Opens in-game world hopper interface
		 */
		openWorldHopper(): void;

		/**
		 * Hops using in-game world hopper widget to another world
		 * @param world target world to hop to
		 */
		hopToWorld(world: World): void;

		/**
		 * Sets the RGB color of the skybox
		 */
		setSkyboxColor(skyboxColor: number): void;

		/**
		 * Gets the RGB color of the skybox
		 */
		getSkyboxColor(): number;

		isGpu(): boolean;
		setGpuFlags(gpuflags: number): void;

		setExpandedMapLoading(chunks: number): void;
		getExpandedMapLoading(): number;

		get3dZoom(): number;
		getCenterX(): number;
		getCenterY(): number;

		getTextureProvider(): TextureProvider;

		getRasterizer3D_clipMidX2(): number;
		getRasterizer3D_clipNegativeMidX(): number;
		getRasterizer3D_clipNegativeMidY(): number;
		getRasterizer3D_clipMidY2(): number;

		checkClickbox(
			projection: Projection,
			model: Model,
			orientation: number,
			x: number,
			y: number,
			z: number,
			hash: number
		): void;

		/**
		 * Is a widget is in target mode?
		 */
		isWidgetSelected(): boolean;

		/**
		 * Sets if a widget is in target mode
		 */
		setWidgetSelected(selected: boolean): void;

		/**
		 * Get the selected widget, such as a selected spell or selected item (eg. "Use")
		 * @return the selected widget
		 */
		getSelectedWidget(): net.runelite.api.widgets.Widget | null;

		/**
		 * Returns client item composition cache
		 */
		getItemCompositionCache(): NodeCache;

		/**
		 * Returns client object composition cache
		 * @return
		 */
		getObjectCompositionCache(): NodeCache;

		/**
		 * Returns the client {@link Animation} cache
		 */
		getAnimationCache(): NodeCache;

		/**
		 * Returns the array of cross sprites that appear and animate when left-clicking
		 */
		getCrossSprites(): SpritePixels[];

		getEnum(id: number): EnumComposition;

		/**
		 * Draws a menu in the 2010 interface style.
		 *
		 * @param alpha background transparency of the menu
		 */
		draw2010Menu(alpha: number): void;

		/**
		 * Draws a menu in the OSRS interface style.
		 *
		 * @param alpha background transparency of the menu
		 */
		drawOriginalMenu(alpha: number): void;

		resetHealthBarCaches(): void;

		/**
		 * Returns the max item index + 1 from cache
		 */
		getItemCount(): number;

		/**
		 * Makes all widgets behave as if they are {@link WidgetConfig#WIDGET_USE_TARGET}
		 */
		setAllWidgetsAreOpTargetable(value: boolean): void;

		/**
		 * Sets the result count for GE search
		 */
		setGeSearchResultCount(count: number): void;

		/**
		 * Sets the array of item ids for GE search
		 */
		setGeSearchResultIds(ids: number[]): void;

		/**
		 * Sets the starting index in the item id array for GE search
		 */
		setGeSearchResultIndex(index: number): void;

		/**
		 * Sets the image to be used for the login screen, provided as SpritePixels
		 * If the image is larger than half the width of fixed mode,
		 * it won't get mirrored to the other side of the screen
		 */
		setLoginScreen(pixels: SpritePixels): void;

		/**
		 * Sets whether the flames on the login screen should be rendered
		 */
		setShouldRenderLoginScreenFire(val: boolean): void;

		/**
		 * Test if a key is pressed
		 * @param keycode the keycode
		 * @return
		 * @see KeyCode
		 */
		isKeyPressed(keycode: number): boolean;

		/**
		 * Get the list of message ids for the recently received cross-world messages. The upper 32 bits of the
		 * id is the world id, the lower is a sequence number per-world.
		 *
		 * @return
		 */
		getCrossWorldMessageIds(): number[];

		/**
		 * Get the index of the next message to be inserted in the cross world message id list
		 *
		 * @return
		 */
		getCrossWorldMessageIdsIndex(): number;

		/**
		 * Get the primary clan channel the player is in.
		 * @return
		 */
		getClanChannel(): net.runelite.api.clan.ClanChannel | null;

		/**
		 * Get the guest clan channel the player is in.
		 * @return
		 */
		getGuestClanChannel(): net.runelite.api.clan.ClanChannel | null;

		/**
		 * Get clan settings for the clan the user is in.
		 * @return
		 */
		getClanSettings(): net.runelite.api.clan.ClanSettings | null;

		/**
		 * Get the guest clan's settings.
		 * @return
		 */
		getGuestClanSettings(): net.runelite.api.clan.ClanSettings | null;

		/**
		 * Get clan channel by id.
		 * @param clanId the clan id
		 * @return
		 * @see net.runelite.api.clan.ClanID
		 */
		getClanChannel(clanId: number): net.runelite.api.clan.ClanChannel | null;

		/**
		 * Get clan settings by id
		 * @param clanId the clan id
		 * @return
		 * @see net.runelite.api.clan.ClanID
		 */
		getClanSettings(clanId: number): net.runelite.api.clan.ClanSettings | null;

		setUnlockedFps(unlock: boolean): void;
		setUnlockedFpsTarget(fps: number): void;

		/**
		 * Gets the ambient sound effects
		 * @return
		 * @deprecated
		 */
		getAmbientSoundEffects(): java.util.Deque<AmbientSoundEffect>;

		/**
		 * Set the amount of time until the client automatically logs out due to idle input.
		 * @param ticks client ticks
		 */
		setIdleTimeout(ticks: number): void;

		/**
		 * Get the amount of time until the client automatically logs out due to idle input.
		 * @return client ticks
		 */
		getIdleTimeout(): number;

		/**
		 * Get whether minimap zoom is enabled
		 * @return
		 */
		isMinimapZoom(): boolean;

		/**
		 * Set whether minimap zoom is enabled
		 * @param minimapZoom
		 */
		setMinimapZoom(minimapZoom: boolean): void;

		/**
		 * Gets the number of pixels per tile on the minimap. The default is 4.
		 * @return
		 */
		getMinimapZoom(): number;

		/**
		 * Set the number of pixels per tile on the minimap. The default is 4.
		 * @param zoom
		 */
		setMinimapZoom(zoom: number): void;

		/**
		 * Sets a callback to override the drawing of tiles on the minimap.
		 * Will be called per tile per frame.
		 */
		setMinimapTileDrawer(drawTile: TileFunction): void;

		getRasterizer(): Rasterizer;

		menuAction(
			p0: number,
			p1: number,
			action: MenuAction,
			id: number,
			itemId: number,
			option: string,
			target: string
		): void;

		/**
		 * Get worldview by id
		 * @param id id, or -1 for top level worldview
		 * @return
		 */
		getWorldView(id: number): WorldView;

		/**
		 * Get the top level world view
		 * @return
		 */
		getTopLevelWorldView(): WorldView;

		/**
		 * Whether camera shaking effects are disabled at e.g. Barrows, ToA
		 * @return
		 */
		isCameraShakeDisabled(): boolean;

		/**
		 * Set whether to disable camera shaking effects at e.g. Barrows, ToA
		 * @param disabled
		 */
		setCameraShakeDisabled(disabled: boolean): void;

		/**
		 * Gets the current draw2D mask. 
		 * @return the current mask
		 * @see Client#setDraw2DMask(int)
		 */
		getDraw2DMask(): number;

		/**
		 * Sets the current draw2D mask.
		 * Use bit operations on the value returned by {@link Client#getDraw2DMask()} to modify specific features.
		 * @param mask The new mask.
		 */
		setDraw2DMask(mask: number): void;

		/**
		 * Contains a 3D array of template chunks for instanced areas.
		 * <p>
		 * The array returned is of format [z][x][y], where z is the
		 * plane, x and y the x-axis and y-axis coordinates of a tile
		 * divided by the size of a chunk.
		 * <p>
		 * The bits of the int value held by the coordinates are -1 if there is no data,
		 * structured in the following format:
		 * <pre>{@code
		 *  0                   1                   2                   3
		 *  0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
		 * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
		 * | |rot|     y chunk coord     |    x chunk coord    |pln|       |
		 * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
		 * }</pre>
		 * @return the array of instance template chunks
		 * @see Constants#CHUNK_SIZE
		 * @see InstanceTemplates
		 * @see WorldView#getInstanceTemplateChunks()
		 * @deprecated
		 */
		getInstanceTemplateChunks(): number[][][];

		/**
		 * Returns a 2D array containing XTEA encryption keys used to decrypt
		 * map region files.
		 * <p>
		 * The array maps the region keys at index {@code n} to the region
		 * ID held in {@link #getMapRegions()} at {@code n}.
		 * <p>
		 * The array of keys for the region make up a 128-bit encryption key
		 * spread across 4 integers.
		 *
		 * @return the XTEA encryption keys
		 * @deprecated
		 */
		getXteaKeys(): number[][];

		/**
		 * Checks whether the scene is in an instanced region.
		 * @see WorldView#isInstance()
		 * @deprecated
		 */
		isInInstancedRegion(): boolean;

		/**
		 * Gets an array of map region IDs that are currently loaded.
		 *
		 * @return the map regions
		 * @deprecated
		 */
		getMapRegions(): number[];

		/**
		 * Gets the current scene
		 * @see WorldView#getScene()
		 * @deprecated
		 */
		getScene(): Scene | null;

		/**
		 * Gets a list of all valid players from the player cache.
		 *
		 * @return a list of all players
		 * @see WorldView#players()
		 * @deprecated
		 */
		getPlayers(): Player[];

		/**
		 * Gets a list of all valid NPCs from the NPC cache.
		 *
		 * @return a list of all NPCs
		 * @see WorldView#npcs()
		 * @deprecated
		 */
		getNpcs(): NPC[];

		/**
		 * Gets an array of tile collision data.
		 * <p>
		 * The index into the array is the plane/z-axis coordinate.
		 *
		 * @return the collision data
		 * @see WorldView#getCollisionMaps()
		 * @deprecated
		 */
		getCollisionMaps(): CollisionData[] | null;

		/**
		 * Gets the current plane the player is on.
		 * <p>
		 * This value indicates the current map level above ground level, where
		 * ground level is 0. For example, going up a ladder in Lumbridge castle
		 * will put the player on plane 1.
		 * <p>
		 * Note: This value will never be below 0. Basements and caves below ground
		 * level use a tile offset and are still considered plane 0 by the game.
		 *
		 * @return the plane
		 * @see WorldView#getPlane()
		 * @deprecated
		 */
		getPlane(): number;

		/**
		 * Gets a 3D array containing the heights of tiles in the
		 * current scene.
		 *
		 * @return the tile heights
		 * @see WorldView#getTileHeights()
		 * @deprecated
		 */
		getTileHeights(): number[][][];

		/**
		 * Gets a 3D array containing the settings of tiles in the
		 * current scene.
		 *
		 * @return the tile settings
		 * @see WorldView#getTileSettings()
		 * @deprecated
		 */
		getTileSettings(): number[][][];

		/**
		 * Returns the x-axis base coordinate.
		 * <p>
		 * This value is the x-axis world coordinate of tile (0, 0) in
		 * the current scene (ie. the bottom-left most coordinates in the scene).
		 *
		 * @return the base x-axis coordinate
		 * @see WorldView#getBaseX()
		 * @deprecated
		 */
		getBaseX(): number;

		/**
		 * Returns the y-axis base coordinate.
		 * <p>
		 * This value is the y-axis world coordinate of tile (0, 0) in
		 * the current scene (ie. the bottom-left most coordinates in the scene).
		 *
		 * @return the base y-axis coordinate
		 * @see WorldView#getBaseY()
		 * @deprecated
		 */
		getBaseY(): number;

		/**
		 * Create a projectile.
		 * @param id projectile/spotanim id
		 * @param plane plane the projectile is on
		 * @param startX local x coordinate the projectile starts at
		 * @param startY local y coordinate the projectile starts at
		 * @param startZ local z coordinate the projectile starts at - includes tile height
		 * @param startCycle cycle the project starts
		 * @param endCycle cycle the projectile ends
		 * @param slope
		 * @param startHeight start height of projectile - excludes tile height
		 * @param endHeight end height of projectile - excludes tile height
		 * @param target optional actor target
		 * @param targetX target x - if an actor target is supplied should be the target x
		 * @param targetY target y - if an actor target is supplied should be the target y
		 * @return the new projectile
		 * @deprecated
		 */
		createProjectile(
			id: number,
			plane: number,
			startX: number,
			startY: number,
			startZ: number,
			startCycle: number,
			endCycle: number,
			slope: number,
			startHeight: number,
			endHeight: number,
			target: Actor | null,
			targetX: number,
			targetY: number
		): Projectile;

		/**
		 * Create a projectile.
		 * @param spotanimId spotanim id
		 * @param source source position
		 * @param sourceHeightOffset source height offset
		 * @param sourceActor source actor
		 * @param target target position
		 * @param targetHeightOffset target height offset
		 * @param targetActor target actor
		 * @param startCycle start time
		 * @param endCycle end time
		 * @param slope slope
		 * @param startPos offset from the start where the projectile starts
		 * @see net.runelite.api.gameval.SpotanimID
		 * @return the new projectile
		 */
		createProjectile(
			spotanimId: number,
			source: net.runelite.api.coords.WorldPoint,
			sourceHeightOffset: number,
			sourceActor: Actor | null,
			target: net.runelite.api.coords.WorldPoint,
			targetHeightOffset: number,
			targetActor: Actor | null,
			startCycle: number,
			endCycle: number,
			slope: number,
			startPos: number
		): Projectile;

		/**
		 * Gets a list of all projectiles currently spawned.
		 *
		 * @return all projectiles
		 */
		getProjectiles(): java.util.Deque<Projectile>;

		/**
		 * Gets a list of all graphics objects currently drawn.
		 *
		 * @return all graphics objects
		 * @see WorldView#getGraphicsObjects()
		 * @deprecated
		 */
		getGraphicsObjects(): java.util.Deque<GraphicsObject>;

		/**
		 * Gets the currently selected tile. (ie. last right clicked tile)
		 *
		 * @return the selected tile
		 * @see WorldView#getSelectedSceneTile()
		 * @deprecated
		 */
		getSelectedSceneTile(): Tile | null;

		/**
		 * Applies an animation to a Model. The returned model is shared and shouldn't be used
		 * after any other call to applyTransformations, including calls made by the client internally.
		 * Vertices are cloned from the source model. Face transparencies are copied if either animation
		 * animates transparency, otherwise it will share a reference. All other fields share a reference.
		 */
		applyTransformations(
			model: Model,
			animA: Animation | null,
			frameA: number,
			animB: Animation | null,
			frameB: number
		): Model;
	}
}