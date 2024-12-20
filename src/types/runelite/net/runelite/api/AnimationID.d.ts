/// <reference path="../../../../../../src/types/java/index.d.ts" />
/// <reference path="../../../../../../src/types/runelite/index.d.ts" />
/*
 * Copyright (c) 2016-2017, Abel Briggs
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
	 * Utility class used for mapping animation IDs.
	 * <p>
	 * Note: This class is not complete and may not contain a specific animation
	 * required.
	 */
	export class AnimationID {
		static readonly IDLE = -1;
		static readonly HERBLORE_PESTLE_AND_MORTAR = 364;
		static readonly WOODCUTTING_BRONZE = 879;
		static readonly WOODCUTTING_IRON = 877;
		static readonly WOODCUTTING_STEEL = 875;
		static readonly WOODCUTTING_BLACK = 873;
		static readonly WOODCUTTING_MITHRIL = 871;
		static readonly WOODCUTTING_ADAMANT = 869;
		static readonly WOODCUTTING_RUNE = 867;
		static readonly WOODCUTTING_GILDED = 8303;
		static readonly WOODCUTTING_DRAGON = 2846;
		static readonly WOODCUTTING_DRAGON_OR = 24;
		static readonly WOODCUTTING_INFERNAL = 2117;
		static readonly WOODCUTTING_3A_AXE = 7264;
		static readonly WOODCUTTING_CRYSTAL = 8324;
		static readonly WOODCUTTING_TRAILBLAZER = 8778; // Same animation as Infernal axe (or)
		static readonly WOODCUTTING_2H_BRONZE = 10064;
		static readonly WOODCUTTING_2H_IRON = 10065;
		static readonly WOODCUTTING_2H_STEEL = 10066;
		static readonly WOODCUTTING_2H_BLACK = 10067;
		static readonly WOODCUTTING_2H_MITHRIL = 10068;
		static readonly WOODCUTTING_2H_ADAMANT = 10069;
		static readonly WOODCUTTING_2H_RUNE = 10070;
		static readonly WOODCUTTING_2H_DRAGON = 10071;
		static readonly WOODCUTTING_2H_CRYSTAL = 10072;
		static readonly WOODCUTTING_2H_CRYSTAL_INACTIVE = 10073;
		static readonly WOODCUTTING_2H_3A = 10074;
		static readonly CONSUMING = 829; // consuming consumables
		static readonly FIREMAKING = 733;
		static readonly FIREMAKING_FORESTERS_CAMPFIRE_ARCTIC_PINE = 10563;
		static readonly FIREMAKING_FORESTERS_CAMPFIRE_BLISTERWOOD = 10564;
		static readonly FIREMAKING_FORESTERS_CAMPFIRE_LOGS = 10565;
		static readonly FIREMAKING_FORESTERS_CAMPFIRE_MAGIC = 10566;
		static readonly FIREMAKING_FORESTERS_CAMPFIRE_MAHOGANY = 10567;
		static readonly FIREMAKING_FORESTERS_CAMPFIRE_MAPLE = 10568;
		static readonly FIREMAKING_FORESTERS_CAMPFIRE_OAK = 10569;
		static readonly FIREMAKING_FORESTERS_CAMPFIRE_REDWOOD = 10570;
		static readonly FIREMAKING_FORESTERS_CAMPFIRE_TEAK = 10571;
		static readonly FIREMAKING_FORESTERS_CAMPFIRE_WILLOW = 10572;
		static readonly FIREMAKING_FORESTERS_CAMPFIRE_YEW = 10573;
		static readonly DEATH = 836;
		static readonly COOKING_FIRE = 897;
		static readonly COOKING_RANGE = 896;
		static readonly COOKING_WINE = 7529;
		static readonly FLETCHING_BOW_CUTTING = 1248;
		static readonly HUNTER_LAY_BOXTRAP_BIRDSNARE = 5208; //same for laying bird snares and box traps
		static readonly HUNTER_LAY_DEADFALLTRAP = 5212; //setting up deadfall trap
		static readonly HUNTER_LAY_NETTRAP = 5215; //setting up net trap
		static readonly HUNTER_LAY_MANIACAL_MONKEY_BOULDER_TRAP = 7259; // setting up maniacal monkey boulder trap
		static readonly HUNTER_CHECK_BIRD_SNARE = 5207;
		static readonly HUNTER_CHECK_BOX_TRAP = 5212;
		static readonly HERBLORE_MAKE_TAR = 5249;
		static readonly FLETCHING_STRING_NORMAL_SHORTBOW = 6678;
		static readonly FLETCHING_STRING_NORMAL_LONGBOW = 6684;
		static readonly FLETCHING_STRING_OAK_SHORTBOW = 6679;
		static readonly FLETCHING_STRING_OAK_LONGBOW = 6685;
		static readonly FLETCHING_STRING_WILLOW_SHORTBOW = 6680;
		static readonly FLETCHING_STRING_WILLOW_LONGBOW = 6686;
		static readonly FLETCHING_STRING_MAPLE_SHORTBOW = 6681;
		static readonly FLETCHING_STRING_MAPLE_LONGBOW = 6687;
		static readonly FLETCHING_STRING_YEW_SHORTBOW = 6682;
		static readonly FLETCHING_STRING_YEW_LONGBOW = 6688;
		static readonly FLETCHING_STRING_MAGIC_SHORTBOW = 6683;
		static readonly FLETCHING_STRING_MAGIC_LONGBOW = 6689;
		static readonly FLETCHING_ATTACH_BOLT_TIPS_TO_BRONZE_BOLT = 8472;
		static readonly FLETCHING_ATTACH_BOLT_TIPS_TO_IRON_BROAD_BOLT = 8473;
		static readonly FLETCHING_ATTACH_BOLT_TIPS_TO_BLURITE_BOLT = 8474;
		static readonly FLETCHING_ATTACH_BOLT_TIPS_TO_STEEL_BOLT = 8475;
		static readonly FLETCHING_ATTACH_BOLT_TIPS_TO_MITHRIL_BOLT = 8476;
		static readonly FLETCHING_ATTACH_BOLT_TIPS_TO_ADAMANT_BOLT = 8477;
		static readonly FLETCHING_ATTACH_BOLT_TIPS_TO_RUNE_BOLT = 8478;
		static readonly FLETCHING_ATTACH_BOLT_TIPS_TO_DRAGON_BOLT = 8479;
		static readonly FLETCHING_ATTACH_HEADS = 8480;
		static readonly FLETCHING_ATTACH_FEATHERS_TO_ARROWSHAFT = 8481;
		static readonly GEM_CUTTING_OPAL = 890;
		static readonly GEM_CUTTING_JADE = 891;
		static readonly GEM_CUTTING_REDTOPAZ = 892;
		static readonly GEM_CUTTING_SAPPHIRE = 888;
		static readonly GEM_CUTTING_EMERALD = 889;
		static readonly GEM_CUTTING_RUBY = 887;
		static readonly GEM_CUTTING_DIAMOND = 886;
		static readonly GEM_CUTTING_AMETHYST = 6295;
		static readonly CRAFTING_LEATHER = 1249;
		static readonly CRAFTING_GLASSBLOWING = 884;
		static readonly CRAFTING_SPINNING = 894;
		static readonly CRAFTING_POTTERS_WHEEL = 883;
		static readonly CRAFTING_POTTERY_OVEN = 24975;
		static readonly CRAFTING_LOOM = 2270;
		static readonly SMITHING_SMELTING = 899;
		static readonly SMITHING_CANNONBALL = 827; //cball smithing uses this and SMITHING_SMELTING
		static readonly SMITHING_ANVIL = 898;
		static readonly SMITHING_IMCANDO_HAMMER = 8911;
		static readonly FISHING_BIG_NET = 620;
		static readonly FISHING_NET = 621;
		static readonly FISHING_POLE_CAST = 623; // pole is in the water
		static readonly FISHING_CAGE = 619;
		static readonly FISHING_HARPOON = 618;
		static readonly FISHING_BARBTAIL_HARPOON = 5108;
		static readonly FISHING_DRAGON_HARPOON = 7401;
		static readonly FISHING_DRAGON_HARPOON_OR = 88;
		static readonly FISHING_INFERNAL_HARPOON = 7402;
		static readonly FISHING_CRYSTAL_HARPOON = 8336;
		static readonly FISHING_TRAILBLAZER_HARPOON = 8784; // Same animation as Infernal harpoon (or)
		static readonly FISHING_OILY_ROD = 622;
		static readonly FISHING_KARAMBWAN = 1193;
		static readonly FISHING_CRUSHING_INFERNAL_EELS = 7553;
		static readonly FISHING_CRUSHING_INFERNAL_EELS_IMCANDO_HAMMER = 8969;
		static readonly FISHING_CUTTING_SACRED_EELS = 7151;
		static readonly FISHING_BAREHAND = 6709;
		static readonly FISHING_BAREHAND_WINDUP_1 = 6703;
		static readonly FISHING_BAREHAND_WINDUP_2 = 6704;
		static readonly FISHING_BAREHAND_CAUGHT_SHARK_1 = 6705;
		static readonly FISHING_BAREHAND_CAUGHT_SHARK_2 = 6706;
		static readonly FISHING_BAREHAND_CAUGHT_SWORDFISH_1 = 6707;
		static readonly FISHING_BAREHAND_CAUGHT_SWORDFISH_2 = 6708;
		static readonly FISHING_BAREHAND_CAUGHT_TUNA_1 = 6710;
		static readonly FISHING_BAREHAND_CAUGHT_TUNA_2 = 6711;
		static readonly FISHING_PEARL_ROD = 8188;
		static readonly FISHING_PEARL_FLY_ROD = 8189;
		static readonly FISHING_PEARL_BARBARIAN_ROD = 8190;
		static readonly FISHING_PEARL_ROD_2 = 8191;
		static readonly FISHING_PEARL_FLY_ROD_2 = 8192;
		static readonly FISHING_PEARL_BARBARIAN_ROD_2 = 8193;
		static readonly FISHING_PEARL_OILY_ROD = 6932;
		static readonly FISHING_BARBARIAN_ROD = 9350;
		static readonly MINING_BRONZE_PICKAXE = 625;
		static readonly MINING_IRON_PICKAXE = 626;
		static readonly MINING_STEEL_PICKAXE = 627;
		static readonly MINING_BLACK_PICKAXE = 3873;
		static readonly MINING_MITHRIL_PICKAXE = 629;
		static readonly MINING_ADAMANT_PICKAXE = 628;
		static readonly MINING_RUNE_PICKAXE = 624;
		static readonly MINING_GILDED_PICKAXE = 8313;
		static readonly MINING_DRAGON_PICKAXE = 7139;
		static readonly MINING_DRAGON_PICKAXE_UPGRADED = 642;
		static readonly MINING_DRAGON_PICKAXE_OR = 8346;
		static readonly MINING_DRAGON_PICKAXE_OR_TRAILBLAZER = 8887;
		static readonly MINING_INFERNAL_PICKAXE = 4482;
		static readonly MINING_3A_PICKAXE = 7283;
		static readonly MINING_CRYSTAL_PICKAXE = 8347;
		static readonly MINING_TRAILBLAZER_PICKAXE = 8787; // Same animation as Infernal pickaxe (or)
		static readonly MINING_TRAILBLAZER_PICKAXE_2 = 8788;
		static readonly MINING_TRAILBLAZER_PICKAXE_3 = 8789;
		static readonly MINING_MOTHERLODE_BRONZE = 6753;
		static readonly MINING_MOTHERLODE_IRON = 6754;
		static readonly MINING_MOTHERLODE_STEEL = 6755;
		static readonly MINING_MOTHERLODE_BLACK = 3866;
		static readonly MINING_MOTHERLODE_MITHRIL = 6757;
		static readonly MINING_MOTHERLODE_ADAMANT = 6756;
		static readonly MINING_MOTHERLODE_RUNE = 6752;
		static readonly MINING_MOTHERLODE_GILDED = 8312;
		static readonly MINING_MOTHERLODE_DRAGON = 6758;
		static readonly MINING_MOTHERLODE_DRAGON_UPGRADED = 335;
		static readonly MINING_MOTHERLODE_DRAGON_OR = 8344;
		static readonly MINING_MOTHERLODE_DRAGON_OR_TRAILBLAZER = 8886;
		static readonly MINING_MOTHERLODE_INFERNAL = 4481;
		static readonly MINING_MOTHERLODE_3A = 7282;
		static readonly MINING_MOTHERLODE_CRYSTAL = 8345;
		static readonly MINING_MOTHERLODE_TRAILBLAZER = 8786; // Same animation as Infernal pickaxe (or)
		readonly MINING_CRASHEDSTAR_BRONZE = 6747;
		readonly MINING_CRASHEDSTAR_IRON = 6748;
		readonly MINING_CRASHEDSTAR_STEEL = 6749;
		readonly MINING_CRASHEDSTAR_BLACK = 6108;
		readonly MINING_CRASHEDSTAR_MITHRIL = 6751;
		readonly MINING_CRASHEDSTAR_ADAMANT = 6750;
		readonly MINING_CRASHEDSTAR_RUNE = 6746;
		readonly MINING_CRASHEDSTAR_GILDED = 8314;
		readonly MINING_CRASHEDSTAR_DRAGON = 7140;
		readonly MINING_CRASHEDSTAR_DRAGON_UPGRADED = 643;
		readonly MINING_CRASHEDSTAR_DRAGON_OR = 8349;
		readonly MINING_CRASHEDSTAR_DRAGON_OR_TRAILBLAZER = 8888;
		readonly MINING_CRASHEDSTAR_INFERNAL = 4483;
		readonly MINING_CRASHEDSTAR_3A = 7284;
		readonly MINING_CRASHEDSTAR_CRYSTAL = 8350;
		static readonly DENSE_ESSENCE_CHIPPING = 7201;
		static readonly DENSE_ESSENCE_CHISELING = 7202;
		static readonly HERBLORE_POTIONMAKING = 363; //used for both herb and secondary
		static readonly MAGIC_CHARGING_ORBS = 726;
		static readonly MAGIC_MAKE_TABLET = 4068;
		static readonly MAGIC_ENCHANTING_JEWELRY = 931;
		static readonly MAGIC_ENCHANTING_AMULET_1 = 719; // sapphire, opal, diamond
		static readonly MAGIC_ENCHANTING_AMULET_2 = 720; // emerald, jade, dragonstone
		static readonly MAGIC_ENCHANTING_AMULET_3 = 721; // ruby, topaz, onyx, zenyte
		static readonly MAGIC_ENCHANTING_BOLTS = 4462;
		static readonly BURYING_BONES = 827;
		static readonly USING_GILDED_ALTAR = 3705;
		static readonly LOOKING_INTO = 832; // Generic animation used for filling water vessels, Shades of Mort'ton, etc.
		static readonly DIG = 830;
		static readonly DEMONIC_GORILLA_MAGIC_ATTACK = 7225;
		static readonly DEMONIC_GORILLA_MELEE_ATTACK = 7226;
		static readonly DEMONIC_GORILLA_RANGED_ATTACK = 7227;
		static readonly DEMONIC_GORILLA_AOE_ATTACK = 7228;
		static readonly DEMONIC_GORILLA_PRAYER_SWITCH = 7228;
		static readonly DEMONIC_GORILLA_DEFEND = 7224;
		static readonly BOOK_HOME_TELEPORT_1 = 4847;
		static readonly BOOK_HOME_TELEPORT_2 = 4850;
		static readonly BOOK_HOME_TELEPORT_3 = 4853;
		static readonly BOOK_HOME_TELEPORT_4 = 4855;
		static readonly BOOK_HOME_TELEPORT_5 = 4857;
		static readonly COW_HOME_TELEPORT_1 = 1696;
		static readonly COW_HOME_TELEPORT_2 = 1697;
		static readonly COW_HOME_TELEPORT_3 = 1698;
		static readonly COW_HOME_TELEPORT_4 = 1699;
		static readonly COW_HOME_TELEPORT_5 = 1700;
		static readonly COW_HOME_TELEPORT_6 = 1701;
		static readonly LEAGUE_HOME_TELEPORT_1 = 8798;
		static readonly LEAGUE_HOME_TELEPORT_2 = 8799;
		static readonly LEAGUE_HOME_TELEPORT_3 = 8801;
		static readonly LEAGUE_HOME_TELEPORT_4 = 8803;
		static readonly LEAGUE_HOME_TELEPORT_5 = 8805;
		static readonly LEAGUE_HOME_TELEPORT_6 = 8807;
		static readonly SHATTERED_LEAGUE_HOME_TELEPORT_1 = 9209;
		static readonly SHATTERED_LEAGUE_HOME_TELEPORT_2 = 9210;
		static readonly SHATTERED_LEAGUE_HOME_TELEPORT_3 = 9211;
		static readonly SHATTERED_LEAGUE_HOME_TELEPORT_4 = 9212;
		static readonly SHATTERED_LEAGUE_HOME_TELEPORT_5 = 9213;
		static readonly SHATTERED_LEAGUE_HOME_TELEPORT_6 = 9214;
		static readonly RAID_LIGHT_ANIMATION = 3101;
		static readonly LOOTBEAM_ANIMATION = 9260;
		static readonly BLISTERWOOD_JUMP_SCARE = 2390;
		static readonly CONSTRUCTION = 3676;
		static readonly CONSTRUCTION_IMCANDO = 8912;
		static readonly SAND_COLLECTION = 895;
		static readonly PISCARILIUS_CRANE_REPAIR = 7199;
		static readonly HOME_MAKE_TABLET = 4067;
		static readonly DRAGONFIRE_SHIELD_SPECIAL = 6696;
		static readonly MILKING_COW = 2305;
		static readonly CHURN_MILK_SHORT = 2793;
		static readonly CHURN_MILK_MEDIUM = 2794;
		static readonly CHURN_MILK_LONG = 2795;
		static readonly CLEANING_SPECIMENS_1 = 6217;
		static readonly CLEANING_SPECIMENS_2 = 6459;

		// Ectofuntus animations
		static readonly ECTOFUNTUS_FILL_SLIME_BUCKET = 4471;
		static readonly ECTOFUNTUS_GRIND_BONES = 1648;
		static readonly ECTOFUNTUS_INSERT_BONES = 1649;
		static readonly ECTOFUNTUS_EMPTY_BIN = 1650;

		// NPC animations
		static readonly TZTOK_JAD_MAGIC_ATTACK = 2656;
		static readonly TZTOK_JAD_RANGE_ATTACK = 2652;
		static readonly HELLHOUND_DEFENCE = 6566;

		// Farming
		static readonly FARMING_HARVEST_FRUIT_TREE = 2280;
		static readonly FARMING_HARVEST_BUSH = 2281;
		static readonly FARMING_HARVEST_HERB = 2282;
		static readonly FARMING_USE_COMPOST = 2283;
		static readonly FARMING_CURE_WITH_POTION = 2288;
		static readonly FARMING_PLANT_SEED = 2291;
		static readonly FARMING_HARVEST_FLOWER = 2292;
		static readonly FARMING_MIX_ULTRACOMPOST = 7699;
		static readonly FARMING_HARVEST_ALLOTMENT = 830;

		// Lunar spellbook
		static readonly ENERGY_TRANSFER_VENGEANCE_OTHER = 4411;
		static readonly MAGIC_LUNAR_SHARED = 4413; // Utilized by Fertile Soil, Boost/Stat Potion Share, NPC Contact, Bake Pie
		static readonly MAGIC_LUNAR_CURE_PLANT = 4432;
		static readonly MAGIC_LUNAR_GEOMANCY = 7118;
		static readonly MAGIC_LUNAR_PLANK_MAKE = 6298;
		static readonly MAGIC_LUNAR_STRING_JEWELRY = 4412;

		// Arceuus spellbook
		static readonly MAGIC_ARCEUUS_RESURRECT_CROPS = 7118;

		// Battlestaff Crafting
		static readonly CRAFTING_BATTLESTAVES = 7531;

		// Death Animations
		static readonly CAVE_KRAKEN_DEATH = 3993;
		static readonly WIZARD_DEATH = 2553;
		static readonly GARGOYLE_DEATH = 1520;
		static readonly MARBLE_GARGOYLE_DEATH = 7813;
		static readonly LIZARD_DEATH = 2778;
		static readonly ROCKSLUG_DEATH = 1568;
		static readonly ZYGOMITE_DEATH = 3327;
		static readonly IMP_DEATH = 172;
		static readonly CORP_DEATH = 1676;
		static readonly VERZIK_P2_BLUE_NYLO_EXPLOSION = 7992;
		static readonly VERZIK_P2_GREEN_NYLO_EXPLOSION = 8000;
		static readonly VERZIK_P2_WHITE_NYLO_EXPLOSION = 8006;
		static readonly VERZIK_P2_PURPLE_NYLO_EXPLOSION = 8078;
		static readonly VERZIK_P2_RED_NYLO_EXPLOSION = 8097;

		// POH Animations
		static readonly INCENSE_BURNER = 3687;
	}
}
