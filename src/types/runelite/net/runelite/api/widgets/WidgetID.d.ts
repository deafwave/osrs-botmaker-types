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
	/** @deprecated */
	export class WidgetID {
		static readonly FAIRY_RING_PANEL_GROUP_ID: number;
		static readonly FAIRY_RING_GROUP_ID: number;
		static readonly LOGOUT_PANEL_ID: number;
		static readonly BANK_GROUP_ID: number;
		static readonly BANK_INVENTORY_GROUP_ID: number;
		static readonly GRAND_EXCHANGE_INVENTORY_GROUP_ID: number;
		static readonly GRAND_EXCHANGE_GROUP_ID: number;
		static readonly DEPOSIT_BOX_GROUP_ID: number;
		static readonly INVENTORY_GROUP_ID: number;
		static readonly PLAYER_TRADE_SCREEN_GROUP_ID: number;
		static readonly PLAYER_TRADE_INVENTORY_GROUP_ID: number;
		static readonly FRIENDS_LIST_GROUP_ID: number;
		static readonly IGNORE_LIST_GROUP_ID: number;
		static readonly RAIDING_PARTY_GROUP_ID: number;
		static readonly EQUIPMENT_GROUP_ID: number;
		static readonly EQUIPMENT_INVENTORY_GROUP_ID: number;
		static readonly EMOTES_GROUP_ID: number;
		static readonly RUNE_POUCH_GROUP_ID: number;
		static readonly ACHIEVEMENT_DIARY_GROUP_ID: number;
		static readonly PEST_CONTROL_BOAT_GROUP_ID: number;
		static readonly PEST_CONTROL_GROUP_ID: number;
		static readonly FRIENDS_CHAT_GROUP_ID: number;
		static readonly MINIMAP_GROUP_ID: number;
		static readonly LOGIN_CLICK_TO_PLAY_GROUP_ID: number;
		static readonly CLUE_SCROLL_GROUP_ID: number;
		static readonly FIXED_VIEWPORT_GROUP_ID: number;
		static readonly RESIZABLE_VIEWPORT_OLD_SCHOOL_BOX_GROUP_ID: number;
		static readonly RESIZABLE_VIEWPORT_BOTTOM_LINE_GROUP_ID: number;
		static readonly SHOP_GROUP_ID: number;
		static readonly SHOP_INVENTORY_GROUP_ID: number;
		static readonly SMITHING_GROUP_ID: number;
		static readonly GUIDE_PRICES_GROUP_ID: number;
		static readonly GUIDE_PRICES_INVENTORY_GROUP_ID: number;
		static readonly COMBAT_GROUP_ID: number;
		static readonly DIALOG_NPC_GROUP_ID: number;
		static readonly SLAYER_REWARDS_GROUP_ID: number;
		static readonly PRIVATE_CHAT: number;
		static readonly CHATBOX_GROUP_ID: number;
		static readonly VOLCANIC_MINE_GROUP_ID: number;
		static readonly BA_ATTACKER_GROUP_ID: number;
		static readonly BA_COLLECTOR_GROUP_ID: number;
		static readonly BA_DEFENDER_GROUP_ID: number;
		static readonly BA_HEALER_GROUP_ID: number;
		static readonly BA_REWARD_GROUP_ID: number;
		static readonly BA_TEAM_GROUP_ID: number;
		static readonly LEVEL_UP_GROUP_ID: number;
		static readonly DIALOG_SPRITE_GROUP_ID: number;
		static readonly DIALOG_DOUBLE_SPRITE_GROUP_ID: number;
		static readonly QUEST_COMPLETED_GROUP_ID: number;
		static readonly CLUE_SCROLL_REWARD_GROUP_ID: number;
		static readonly BARROWS_REWARD_GROUP_ID: number;
		static readonly RAIDS_GROUP_ID: number;
		static readonly TOB_GROUP_ID: number;
		static readonly MOTHERLODE_MINE_GROUP_ID: number;
		static readonly EXPERIENCE_DROP_GROUP_ID: number;
		static readonly PUZZLE_BOX_GROUP_ID: number;
		static readonly LIGHT_BOX_GROUP_ID: number;
		static readonly NIGHTMARE_ZONE_GROUP_ID: number;
		static readonly NIGHTMARE_PILLAR_HEALTH_GROUP_ID: number;
		static readonly BLAST_FURNACE_GROUP_ID: number;
		static readonly WORLD_MAP_GROUP_ID: number;
		static readonly PYRAMID_PLUNDER_GROUP_ID: number;
		static readonly CHAMBERS_OF_XERIC_REWARD_GROUP_ID: number;
		static readonly THEATRE_OF_BLOOD_REWARD_GROUP_ID: number;
		static readonly EXPERIENCE_TRACKER_GROUP_ID: number;
		static readonly TITHE_FARM_GROUP_ID: number;
		static readonly KINGDOM_GROUP_ID: number;
		static readonly BARROWS_GROUP_ID: number;
		static readonly BLAST_MINE_GROUP_ID: number;
		static readonly MTA_ALCHEMY_GROUP_ID: number;
		static readonly MTA_ENCHANT_GROUP_ID: number;
		static readonly MTA_GRAVEYARD_GROUP_ID: number;
		static readonly MTA_TELEKINETIC_GROUP_ID: number;
		static readonly CORP_DAMAGE: number;
		static readonly DESTROY_ITEM_GROUP_ID: number;
		static readonly VARROCK_MUSEUM_QUIZ_GROUP_ID: number;
		static readonly KILL_LOGS_GROUP_ID: number;
		static readonly DIARY_QUEST_GROUP_ID: number;
		static readonly THEATRE_OF_BLOOD_GROUP_ID: number;
		static readonly WORLD_SWITCHER_GROUP_ID: number;
		static readonly DIALOG_OPTION_GROUP_ID: number;
		static readonly DIALOG_PLAYER_GROUP_ID: number;
		static readonly DRIFT_NET_FISHING_REWARD_GROUP_ID: number;
		static readonly FOSSIL_ISLAND_OXYGENBAR_ID: number;
		static readonly MINIGAME_TAB_ID: number;
		static readonly SPELLBOOK_GROUP_ID: number;
		static readonly PVP_GROUP_ID: number;
		static readonly FISHING_TRAWLER_GROUP_ID: number;
		static readonly FISHING_TRAWLER_REWARD_GROUP_ID: number;
		static readonly ZEAH_MESS_HALL_GROUP_ID: number;
		static readonly LOOTING_BAG_GROUP_ID: number;
		static readonly SKOTIZO_GROUP_ID: number;
		static readonly FULLSCREEN_CONTAINER_TLI: number;
		static readonly CHARACTER_SUMMARY_GROUP_ID: number;
		static readonly QUESTLIST_GROUP_ID: number;
		static readonly SKILLS_GROUP_ID: number;
		static readonly MUSIC_GROUP_ID: number;
		static readonly BARROWS_PUZZLE_GROUP_ID: number;
		static readonly KEPT_ON_DEATH_GROUP_ID: number;
		static readonly GUIDE_PRICE_GROUP_ID: number;
		static readonly SEED_VAULT_INVENTORY_GROUP_ID: number;
		static readonly BEGINNER_CLUE_MAP_CHAMPIONS_GUILD: number;
		static readonly BEGINNER_CLUE_MAP_VARROCK_EAST_MINE: number;
		static readonly BEGINNER_CLUE_MAP_DRAYNOR: number;
		static readonly BEGINNER_CLUE_MAP_NORTH_OF_FALADOR: number;
		static readonly BEGINNER_CLUE_MAP_WIZARDS_TOWER: number;
		static readonly SEED_BOX_GROUP_ID: number;
		static readonly SEED_VAULT_GROUP_ID: number;
		static readonly EXPLORERS_RING_ALCH_GROUP_ID: number;
		static readonly SETTINGS_SIDE_GROUP_ID: number;
		static readonly SETTINGS_GROUP_ID: number;
		static readonly GWD_KC_GROUP_ID: number;
		static readonly LMS_GROUP_ID: number;
		static readonly LMS_INGAME_GROUP_ID: number;
		static readonly ADVENTURE_LOG_ID: number;
		static readonly COLLECTION_LOG_ID: number;
		static readonly GENERIC_SCROLL_GROUP_ID: number;
		static readonly GAUNTLET_TIMER_GROUP_ID: number;
		static readonly HALLOWED_SEPULCHRE_TIMER_GROUP_ID: number;
		static readonly BANK_PIN_GROUP_ID: number;
		static readonly HEALTH_OVERLAY_BAR_GROUP_ID: number;
		static readonly CHAMBERS_OF_XERIC_STORAGE_UNIT_PRIVATE_GROUP_ID: number;
		static readonly CHAMBERS_OF_XERIC_STORAGE_UNIT_SHARED_GROUP_ID: number;
		static readonly CHAMBERS_OF_XERIC_STORAGE_UNIT_INVENTORY_GROUP_ID: number;
		static readonly DUEL_INVENTORY_GROUP_ID: number;
		static readonly DUEL_INVENTORY_OTHER_GROUP_ID: number;
		static readonly TRAILBLAZER_AREAS_GROUP_ID: number;
		static readonly TEMPOROSS_GROUP_ID: number;
		static readonly TEMPOROSS_LOBBY_GROUP_ID: number;
		static readonly CLAN_GROUP_ID: number;
		static readonly CLAN_GUEST_GROUP_ID: number;
		static readonly GRAVESTONE_GROUP_ID: number;
		static readonly POH_TREASURE_CHEST_INVENTORY_GROUP_ID: number;
		static readonly GROUP_IRON_GROUP_ID: number;
		static readonly GROUP_STORAGE_INVENTORY_GROUP_ID: number;
		static readonly GROUP_STORAGE_GROUP_ID: number;
		static readonly WILDERNESS_LOOT_CHEST: number;
		static readonly TRADE_WINDOW_GROUP_ID: number;
		static readonly TOA_REWARD_GROUP_ID: number;
		/**
		 * toa party interface in the raid lobby
		 */
		static readonly TOA_PARTY_GROUP_ID: number;
		/**
		 * toa raid interface in the raid
		 */
		static readonly TOA_RAID_GROUP_ID: number;
		static readonly ACHIEVEMENT_DIARY_SCROLL_GROUP_ID: number;
		static readonly PRAYER_GROUP_ID: number;
		static readonly QUICK_PRAYERS_GROUP_ID: number;
		static readonly GOTR_GROUP_ID: number;
		static readonly TROUBLE_BREWING_GROUP_ID: number;
		static readonly TROUBLE_BREWING_LOBBY_GROUP_ID: number;
		static readonly MORTTON_TEMPLE_GROUP_ID: number;
		static readonly BGR_RANK_DRAUGHTS_GROUP_ID: number;
		static readonly BGR_RANK_RUNELINK_GROUP_ID: number;
		static readonly BGR_RANK_RUNESQUARES_GROUP_ID: number;
		static readonly BGR_RANK_RUNEVERSI_GROUP_ID: number;
		static readonly AGILITY_ARENA_HUD_GROUP_ID: number;
		static readonly GNOMEBALL_SCORE_GROUP_ID: number;
		static readonly CLANRANK_POPUP: number;
		static readonly SANITY_GROUP_ID: number;
		static readonly THE_STRANGLER_INFECTION_GROUP_ID: number;
	}
}
