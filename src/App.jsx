import './App.css';
import './fa/styles_FA_fontawesome_min.css';
import './fa/styles_FA_solid_min.css';
import './fa/styles_FA_brands_min.css';
import './Table_Browser.css';

import JS_File_Hook from './extras/JS_File_Hook.jsx';

/*
 * Credits:
 * 
 * Tutorial on how to create a table in React: https://www.geeksforgeeks.org/how-to-create-a-table-in-reactjs/
 */

// Special case prepared to exclude row with base weapon, since it's part of her base kit, but effect and stat refines count.
const demonic_breath = [
  {
    skill_type: "WPN",
    skill_name: "Demonic Breath",
    notes: "Awaiting refine when 6.5.0 software update drops, effect will be prioritized and stats will follow later on when [Divine Dew] can be spared safely.",
    eff_refine: false,
    att_refine: false,
    spd_refine: false,
    def_refine: false,
    res_refine: false,
  }
];

// Inheritable weapons that were given to her along with taught refine statuses for each stat.
const weapon_skills = [
  {
    skill_type: "WPN",
    skill_name: "Dark Breath+",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "«+» not obtained yet.",
    att_refine: false,
    spd_refine: false,
    def_refine: false,
    res_refine: false,
  },
  {
    skill_type: "WPN",
    skill_name: "Flametongue+",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "Strangely, Young Tiki is the only unit with the «+» version, I got one long ago and foddered her.",
    att_refine: false,
    spd_refine: false,
    def_refine: false,
    res_refine: false,
  },
  {
    skill_type: "WPN",
    skill_name: "Glittering Breath+",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--",
    att_refine: false,
    spd_refine: true,
    def_refine: false,
    res_refine: true,
  },
  {
    skill_type: "WPN",
    skill_name: "Lightning Breath+",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "«+» not obtained yet.",
    att_refine: false,
    spd_refine: false,
    def_refine: false,
    res_refine: false,
  },
  {
    skill_type: "WPN",
    skill_name: "Pale Breath+",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--",
    att_refine: false,
    spd_refine: false,
    def_refine: true,
    res_refine: true,
  },
  {
    skill_type: "WPN",
    skill_name: "Water Breath+",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--",
    att_refine: false,
    spd_refine: false,
    def_refine: false,
    res_refine: false,
  },
];

// Assists, specials and passives.
const other_skills = [
  // ASSIST

  {
    skill_type: "AST",
    skill_name: "Rally Atk/Def",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "AST",
    skill_name: "Rally Spd/Def",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "AST",
    skill_name: "Rally Def/Res+",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "AST",
    skill_name: "Rally Up Atk+",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "Obtained from a -HP/+ATT Ophelia I got long ago, I'm not too attached to her and as you may know, I only invest on the favorites, not meta units, so I gave it up to Idoun so that she could score better."
  },
  {
    skill_type: "AST",
    skill_name: "Rally Up Spd+",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "--"
  },
  {
    skill_type: "AST",
    skill_name: "Rally Up Def+",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "--"
  },
  {
    skill_type: "AST",
    skill_name: "Rally Up Res+",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "--"
  },
  {
    skill_type: "AST",
    skill_name: "Draw Back",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "AST",
    skill_name: "Pivot",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "AST",
    skill_name: "Reposition",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "AST",
    skill_name: "Swap",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "AST",
    skill_name: "Shove",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "AST",
    skill_name: "Smite",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "AST",
    skill_name: "Ardent Sacrifice",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "AST",
    skill_name: "Harsh Command",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "AST",
    skill_name: "Reciprocal Aid",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },

  // SPECIALS

  {
    skill_type: "SPL",
    skill_name: "Noontime",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "SPL",
    skill_name: "Sol",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "SPL",
    skill_name: "Moonbow",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "SPL",
    skill_name: "Luna",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "SPL",
    skill_name: "Aether",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "SPL",
    skill_name: "Blue Flame",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "SPL",
    skill_name: "Glimmer",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "SPL",
    skill_name: "Astra",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "SPL",
    skill_name: "Reprisal",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "SPL",
    skill_name: "Vengeance",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "SPL",
    skill_name: "Draconic Aura",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "SPL",
    skill_name: "Dragon Fang",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "SPL",
    skill_name: "Bonfire",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "SPL",
    skill_name: "Ignis",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "SPL",
    skill_name: "Iceberg",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "SPL",
    skill_name: "Glacies",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "SPL",
    skill_name: "Growing Flame",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "SPL",
    skill_name: "Blazing Flame",
    reserved: true,
    obtained: false,
    taught: false,
    notes: "--"
  },
  {
    skill_type: "SPL",
    skill_name: "Growing Wind",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "SPL",
    skill_name: "Blazing Wind",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "SPL",
    skill_name: "Growing Thunder",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "SPL",
    skill_name: "Blazing Thunder",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "SPL",
    skill_name: "Growing Light",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "SPL",
    skill_name: "Blazing Liht",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "SPL",
    skill_name: "Escutcheon",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "SPL",
    skill_name: "Pavise",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "SPL",
    skill_name: "Sacred Cowl",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "SPL",
    skill_name: "Aegis",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "SPL",
    skill_name: "Miracle",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },

  // A-SKILLS

  {
    skill_type: "A_P",
    skill_name: "HP +5",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "Attack +3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "Speed +3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "Defense +3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "Resistance +3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "HP/Atk 2",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "HP/Spd 2",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "HP/Def 2",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "HP/Res 2",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "Attack/Def 2",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "Who has it again? /s"
  },
  {
    skill_type: "A_P",
    skill_name: "Attack/Res 2",
    reserved: true,
    obtained: false,
    taught: false,
    notes: "Obtained and taught up to level 1."
  },
  {
    skill_type: "A_P",
    skill_name: "Atk/Spd 2",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "I didn't get a Colm yet, but why TF is the first part named \"Atk\" while in the other analogous skills is \"Attack\"??? Questions we'll probably never get an answer for but that's I. S. for you, inconsistency at its finest."
  },
  {
    skill_type: "A_P",
    skill_name: "Spd/Def 2",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "Spd/Res 2",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "Obtained and taught up to level 1."
  },
  {
    skill_type: "A_P",
    skill_name: "Def/Res 2",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "Fortress Def 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "Fortress Res 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "Fury 4",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "Life and Death 4",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "Obtained and taught up to level 3."
  },
  {
    skill_type: "A_P",
    skill_name: "Death Blow 4",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "Obtained and taught up to level 3."
  },
  {
    skill_type: "A_P",
    skill_name: "Darting Blow 4",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "Obtained and taught up to level 3."
  },
  {
    skill_type: "A_P",
    skill_name: "Armored Blow 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "Warding Blow 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "Swift Sparrow 3",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "Obtained and taught up to level 2."
  },
  {
    skill_type: "A_P",
    skill_name: "Sturdy Blow 2",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "Mirror Strike 2",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "Fierce Stance 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "I don't think I.S. will do this but anyway: WHEN WILL YOU ADD THE LEVEL 4 VERSION?"
  },
  {
    skill_type: "A_P",
    skill_name: "Darting Stance 3",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "Same as above but I have it up to level 1. Also, for some reason the easiest source is still promoting a Shigure to 5★..."
  },
  {
    skill_type: "A_P",
    skill_name: "Sturdy Stance 4",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "I didn't get a Surtr yet."
  },
  {
    skill_type: "A_P",
    skill_name: "Warding Stance 4",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "Any Fallen Berkut I got was foddered to other units. Also, when are we getting an easy source of [Warding Stance 3] in the regular pool? Same for [Darting Stance 3]..."
  },
  {
    skill_type: "A_P",
    skill_name: "Kestrel Stance 3",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "Obtained and taught up to level 2."
  },
  {
    skill_type: "A_P",
    skill_name: "Sturdy Stance 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "Steady Posture 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "Bracing Stance 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "Currently, only Mila and Winter Mirabilis have it... damn, why? I actually want to merge them..."
  },
  {
    skill_type: "A_P",
    skill_name: "Fierce Breath",
    reserved: true,
    obtained: false,
    taught: false,
    notes: "I have its only source but I'm keeping Tiki until I max her [HM]."
  },
  {
    skill_type: "A_P",
    skill_name: "Darting Breath",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "If the only source continues to be Fallen Ike, I'll get it when I don't need [Repel 3] on someone else."
  },
  {
    skill_type: "A_P",
    skill_name: "Steady Breath",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "Warding Breath",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "Defiant Atk 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "Defiant Spd 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "Defiant Def 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "Defiant Res 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "Brazen Atk/Spd 4",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "Obtained and taught up to level 3. Also, I. S. forgot to give level 4 versions to the rest and even add more sources... I. S. really forgets about a lot of stuff, don't they?"
  },
  {
    skill_type: "A_P",
    skill_name: "Brazen Atk/Def 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "Brazen Atk/Res 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "Brazen Spd/Def 3",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "Obtained and taught up to level 2."
  },
  {
    skill_type: "A_P",
    skill_name: "Brazen Spd/Res 3",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "Obtained and taught up to level 2."
  },
  {
    skill_type: "A_P",
    skill_name: "Brazen Def/Res 3",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "Obtained and taught up to level 2."
  },
  {
    skill_type: "A_P",
    skill_name: "Triangle Adept 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "Distant Counter",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "IDR when did I get it and from who..."
  },
  {
    skill_type: "A_P",
    skill_name: "Distant Dart",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "Distant Stance",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "Actually, I pulled for Legendary Fae since I wanted other units in her debut banners as well as her, and I got her under a few [Orbs] fortunately."
  },
  {
    skill_type: "A_P",
    skill_name: "Close Def 4",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "Obtained and taught up to level 3, not sure yet if I fodder my only Dieck to Idoun yet."
  },
  {
    skill_type: "A_P",
    skill_name: "Distant Def 4",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "Svalinn Shield",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "Heavy Blade 4",
    reserved: true,
    obtained: false,
    taught: false,
    notes: "My remaining Duo Ephraim will be foddered to Idoun after I max the former's [HM], will take some time though..."
  },
  {
    skill_type: "A_P",
    skill_name: "Flashing Blade 4",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "Obtained and taught up to level 3."
  },
  {
    skill_type: "A_P",
    skill_name: "Fire Boost 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "Wind Boost 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "Earth Boost 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "Water Boost 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "Atk/Spd Bond 4",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "Obtained and taught up to level 1."
  },
  {
    skill_type: "A_P",
    skill_name: "Atk/Def Bond 4",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "Obtained and taught up to level 3."
  },
  {
    skill_type: "A_P",
    skill_name: "Atk/Res Bond 4",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "Sadly, I did have to fodder a Brave Micaiah, but at the same time, I'm thankful I don't need her fodder anywhere else."
  },
  {
    skill_type: "A_P",
    skill_name: "Spd/Def Bond 4",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "Obtained and taught up to level 3."
  },
  {
    skill_type: "A_P",
    skill_name: "Spd/Res Bond 4",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "Obtained and taught up to level 3."
  },
  {
    skill_type: "A_P",
    skill_name: "Spd/Res Bond 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "Atk/Def Unity",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "Atk/Res Unity",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "I only have Eir for sources but she's too precious to fodder."
  },
  {
    skill_type: "A_P",
    skill_name: "Atk/Def Push 4",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "Obtained and taught up to level 3. I have a few sources but they'll be foddered to other projects that need the skills more."
  },
  {
    skill_type: "A_P",
    skill_name: "Atk/Res Push 4",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "Obtained and taught up to level 3."
  },
  {
    skill_type: "A_P",
    skill_name: "Atk/Spd Push 4",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "Atk/Def Solo 4",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "Atk/Res Solo 4",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "Obtained and taught up to level 3."
  },
  {
    skill_type: "A_P",
    skill_name: "Atk/Spd Solo 4",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "Spd/Def Solo 4",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "Obtained and taught up to level 3. I'd like to see if I. S. will actually remember this skill and give it to a unit I'm much more likely to fodder, I actually would love to work on Larcei but her Scion alt is a seasonal that exclusively has said skill for now..."
  },
  {
    skill_type: "A_P",
    skill_name: "Spd/Res Solo 4",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "Obtained and taught up to level 1. Similarly as above, Nyx is the only soure for this variant, but she's a confirmed project, so for now this skill will be absent on the collection."
  },
  {
    skill_type: "A_P",
    skill_name: "AR-D Atk/Res 3",
    reserved: false,
    obtained: true,
    taught: false,
    notes: "Obtained from random free summoned Picnic Flora."
  },
  {
    skill_type: "A_P",
    skill_name: "AR-D Spd/Res 3",
    reserved: true,
    obtained: false,
    taught: false,
    notes: "Obtained and taught up to level 2, going to promote a Mercedes later to get the last level."
  },
  {
    skill_type: "A_P",
    skill_name: "Spd/Def Form 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "Spd/Res Form 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "A_P",
    skill_name: "Shield Session 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },

  // B-SKILLS
  
  {
    skill_type: "B_P",
    skill_name: "Knock Back",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Lunge",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Drag Back",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Hit and Run",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Pass 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Obstruct 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Wings of Mercy 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Escape Route 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Vantage 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Desperation 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Brash Assault 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Quick Riposte 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Bold Fighter 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Crafty Fighter 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "Obtained from permanent [Combat Manual] of Gatrie."
  },
  {
    skill_type: "B_P",
    skill_name: "Daring Fighter 3",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "It's seasonal... so no, but when I get Duo Marth, you know who's going to have a feast!"
  },
  {
    skill_type: "B_P",
    skill_name: "Hardy Fighter 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Savvy Fighter 3",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "Lucina is too precious to fodder, I'll wait and see if more sources of this skill appear"
  },
  {
    skill_type: "B_P",
    skill_name: "Slick Fighter 3",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "Obtained and taught up to level 1, it's been planned that the rest of the skill will be obtained alongside [Blackfire Breath+] should I ever get a Dheginshea... and I swear, I can't be bothered to remember how his name is written lol."
  },
  {
    skill_type: "B_P",
    skill_name: "Special Fighter 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "Obtained long ago from Brave Ephram, was the staple for one of my builds during months."
  },
  {
    skill_type: "B_P",
    skill_name: "Wary Fighter 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Wily Fighter 3",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "...More like Willy? Jokes aside, since Ascended Idoun is the only source for the moment, it's assumed it isn't an attainable skill."
  },
  {
    skill_type: "B_P",
    skill_name: "Poison Strike 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Renewal 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Seal Atk 3",
    reserved: true,
    obtained: false,
    taught: false,
    notes: "Obtained and taught up to level 2, I ought to remind myself this skill is only attainable from Jeorge, because I keep sending him home."
  },
  {
    skill_type: "B_P",
    skill_name: "Seal Spd 3",
    reserved: true,
    obtained: false,
    taught: false,
    notes: "Obtained and taught up to level 2, same case as Jeorge but Virion has this one instead."
  },
  {
    skill_type: "B_P",
    skill_name: "Seal Def 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Seal Res 3",
    reserved: true,
    obtained: false,
    taught: false,
    notes: "Obtained and taught up to level 2, same case as Jeorge and Virion but Raigh (of all people) has it."
  },
  {
    skill_type: "B_P",
    skill_name: "Seal Atk/Def 2",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Seal Spd/Def 2",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Seal Def/Res 2",
    reserved: true,
    obtained: false,
    taught: false,
    notes: "Obtained and taught up to level 2, only Ares has it, perhaps one of the most forgettable skills ever released..."
  },
  {
    skill_type: "B_P",
    skill_name: "Chill Atk 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Chill Spd 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Chill Def 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Chill Res 3",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "Obtained and taught up to level 1."
  },
  {
    skill_type: "B_P",
    skill_name: "Chill Atk/Res 2",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Sabotage Atk 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Sabotage Spd 3",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Sabotage Def 3",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Sabotage Res 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Swordbreaker 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Axebreaker 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Bowbreaker 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Daggerbreaker 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "R Tomebreaker 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "G Tomebreaker 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Cancel Affinity 3",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "Obtained and taught up to level 2, Jamke has the final level easily attainable, but I'm not foddering him since he's a planned slow project."
  },
  {
    skill_type: "B_P",
    skill_name: "Live for Bounty",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Windsweep 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Watersweep 3",
    reserved: true,
    obtained: false,
    taught: false,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Guard 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Shield Pulse 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Wrath 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Torrent Dance 3",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "Obtained and taught up to level 1, I missed Young Azura, doubtfully I'll get her anytime soon with all the projects I have already, but she's the only source of it at level 3, so... yeah."
  },
  {
    skill_type: "B_P",
    skill_name: "Deluge Dance 2",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Geyser Dance 2",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Dull Close 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Atk/Spd Link 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "Obtained from free Halloween Niles [Combat Manual], though his bow has a cool sprite, I decided to let go of it, since it's been powercrept."
  },
  {
    skill_type: "B_P",
    skill_name: "Atk/Def Link 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Atk/Res Link 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "Obtained from random Adrift Camilla, it was way before Orochi was added as a much easier to get source of the skill."
  },
  {
    skill_type: "B_P",
    skill_name: "Spd/Def Link 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Spd/Res Link 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Def/Res Link 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Def Feint 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "B_P",
    skill_name: "Dragon's Ire 3",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "Obtained and taught up to level 2, from Legendary Fae since I also got [Distant Stance] and [Def/Res Menace] from her, I'll get the rest from another source."
  },

  // C-SKILLS

  {
    skill_type: "C_P",
    skill_name: "Savage Blow 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Spur Atk 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Spur Spd 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Spur Def 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Spur Res 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Spur Atk/Spd 2",
    reserved: true,
    obtained: false,
    taught: false,
    notes: "Obtained and taught up to level 1, will later fodder a Sothe I have lying around."
  },
  {
    skill_type: "C_P",
    skill_name: "Spur Spd/Def 2",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Spur Spd/Res 2",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Spur Def/Res 2",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Drive Atk 2",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Drive Spd 2",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Drive Def 2",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Drive Res 2",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Joint Drive Atk",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Joint Drive Res",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Close Guard 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Distant Guard 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Joint Dist. Guard",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "I'd actually love to merge Legendary Micaiah due to attachment to the character, so I don't see myself getting this skill anytime soon."
  },
  {
    skill_type: "C_P",
    skill_name: "Goad Armor",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Ward Armor",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Goad Dragons",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Ward Dragons",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Hone Atk 4",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "Obtained and taught up to level 3."
  },
  {
    skill_type: "C_P",
    skill_name: "Hone Spd 4",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Fortify Def 4",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "Obtained and taught up to level 3."
  },
  {
    skill_type: "C_P",
    skill_name: "Fortify Res 4",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "Obtained and taught up to level 3."
  },
  {
    skill_type: "C_P",
    skill_name: "Joint Hone Atk",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Joint Hone Spd",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Joint Hone Def",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Joint Hone Res",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Hone Armor",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Fortify Armor",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Hone Dragons",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Fortify Dragons",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Atk Tactic 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Spd Tactic 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Def Tactic 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Res Tactic 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "Obtained and taught up to level 2, escapes my mind why is this still a 5★ exclusive skill, being easily attainable only from L'Arachel if you promote her."
  },
  {
    skill_type: "C_P",
    skill_name: "Threaten Atk 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Threaten Spd 3",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Threaten Def 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Threaten Res 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Threaten Atk/Spd 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Threaten Atk/Def 3",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "Reserved at level 2."
  },
  {
    skill_type: "C_P",
    skill_name: "Threaten Atk/Res 3",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "Reserved at level 2."
  },
  {
    skill_type: "C_P",
    skill_name: "Threaten Def/Res 2",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "Obtained and taught up to level 2, it's funny to think that I.S. left some families of skills incomplete... though sadly it's because of powercreep going a tad too fast, and seeing we have {Menace} skills which are WAY better."
  },
  {
    skill_type: "C_P",
    skill_name: "Def/Res Menace",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "Obtained from Legendary Fae, to prevent wasting another passive from Zeke when I get him, since the other two aren't available for Idoun."
  },
  {
    skill_type: "C_P",
    skill_name: "Atk Ploy 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Spd Ploy 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Def Ploy 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Res Ploy 3",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Panic Ploy 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Atk Smoke 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Spd Smoke 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Def Smoke 3",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "Obtained and taught up to level 1."
  },
  {
    skill_type: "C_P",
    skill_name: "Res Smoke 3",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "Still very elusive to get, and no... I'm not foddering a Brunnya copy to Idoun unless we somehow can get a free one in the future."
  },
  {
    skill_type: "C_P",
    skill_name: "Armor March 3",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "A/D Near Save 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "Obtained from Dedue alongside [Sturdy Stance 3]."
  },
  {
    skill_type: "C_P",
    skill_name: "A/R Far Save 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "Obtained from Valentine's Henriette alongside [Slick Fighter 1], so that I can efficiently fodder Halloween Dheginshea when I get him. Used as part of her current tanking set."
  },
  {
    skill_type: "C_P",
    skill_name: "Odd Atk Wave 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Odd Spd Wave 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Odd Def Wave 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Odd Res Wave 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Even Atk Wave 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Even Spd Wave 3",
    reserved: false,
    obtained: false,
    taught: false,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Even Def Wave 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Even Res Wave 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Atk Opening 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Spd Opening 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Def Opening 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Res Opening 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
  {
    skill_type: "C_P",
    skill_name: "Atk/Spd Gap 3",
    reserved: false,
    obtained: true,
    taught: true,
    notes: "--"
  },
];

function App() {
  JS_File_Hook('./extras/jquery.js');
  JS_File_Hook('./extras/Table_Browser.js');
  
    return (
        <>
            <div id="header_top">
                <div>
                    <a href="./"><i className="fa-solid fa-house"></i> af1899's site</a>
                </div>
                <div id="ext_links">
                    <a href="https://feheroes.fandom.com/wiki/Idunn:_Dark_Priestess#Skills" target="_blank"><i className="fa-solid fa-check"></i> Idoun's base kit</a>
                </div>
                <div id="sns">
                    <a href="https://www.youtube.com/channel/UCBiDqgdtyfKKCAuI5XG8aFg" target="_blank"><i className="fa-brands fa-youtube"></i> YouTube</a>
                </div>
            </div>

            <p>Hello everyone, af1899 here.<br/><br/>Currently, I'm acomodating stuff around but for now, I've settled with a small <a href="https://reactjs.org/" target="_blank">React</a> app that lists all of the skill my Idoun possesses in <i>Fire Emblem Heroes</i> which I add manually in a JSON array, I'm currently focusing on this particular feature and implementing some tweaks and fixes while practising more with React, I hope you like it!<br/>Also, please note that base kit skills <b>aren't</b> listed here, since the base kit skills are collected by default, and <span className='skill_name'>Fire Breath+</span> can't be refined.<br/>Finally, do note not all the skills are listed, since her current collection was used as base, but they'll all be added later. :)</p>

		      	<p><b>Last updated:</b> May 2<sup>nd</sup>, 2022.</p>

            <div id="toolbar">
              <input type="text" id="fs" onKeyUp="skill_browser()" placeholder="Look for a skill here..." />
              <div style={{width: '100%', height: '5px'}}></div>
              <div className="dropdown">
                <button className="droplist" id="filter_list" onClick="show_dropdown_content('filter_list_container')">Filter</button>
                <div id="filter_list_container" className="dropdown-content" style={{left: '15px'}}>
                  <a href="#skill_filter" onclick="no_filter()">Reset</a>
                  <br /><hr />
                  <span className="sbt">SKILL TYPE</span>
                  <br />
                  <span id="fi1"><a href="#skill_list" onclick="apply_filter(0)">Weapons</a></span><br />
                  <span id="fi2"><a href="#skill_list" onclick="apply_filter(1)">Assists</a></span><br />
                  <span id="fi3"><a href="#skill_list" onclick="apply_filter(2)">Specials</a></span><br />
                  <span id="fi4"><a href="#skill_list" onclick="apply_filter(3)">A-slot</a></span><br />
                  <span id="fi5"><a href="#skill_list" onclick="apply_filter(4)">B-slot</a></span><br />
                  <span id="fi6"><a href="#skill_list" onclick="apply_filter(5)">C-slot</a></span>
                  <br />
                </div>
              </div>
              <div className="dropdown">
                <button className="droplist" id="jump_list" onclick="show_dropdown_content('jump_list_container')">Jump to...</button>
                <div id="jump_list_container" className="dropdown-content" style={{left: '85px'}}>
                  <span className="sbt">SKILL TYPE</span>
                  <br />
                  <a href="#weapon_section">Weapons</a><br />
                  <a href="#assist_list">Assists</a><br />
                  <a href="#special_list">Specials</a><br />
                  <a href="#a_pasv_list">A-slot</a><br />
                  <a href="#b_pasv_list">B-slot</a><br />
                  <a href="#c_pasv_list">C-slot</a>
                  <br />
                </div>
              </div>
              <a href="javascript:no_filter();"><div>Reset</div></a>
              <span style={{clear: 'left'}}>&nbsp;</span>

              {
                // TODO: Remove this + 3 line breaks when done fully implementing.
              }
              <br />
              <br />
              <span style={{backgroundColor: '#fc9000', padding: '5px', color: 'black'}}>THIS FEATURE DOESN'T WORK YET!</span>
            </div>
            {
              // TODO: fix buttons doing noting and add list jump actions, may be doable by ternary operation using IDs.
            } 

            <br/><br/><br/><br/><br/><br/><br/>

            <table id="skill_list">
                <tr>
                    <th>Type</th>
                    <th style={{ width: "250px" }}>Name</th>
                    <th>Reserved?</th>
                    <th>Collected?</th>
                    <th>Taught?</th>
                    <th>Source / Notes</th>
                </tr>

                {
                  // WONTFIX: I know I can also just paste the refines info here but I think it's best to keep things organized, so I created the constant above like I did with the rest
                }
                {demonic_breath.map((v, k) => {
                    return (
                        <tbody key={k}>
                            <tr>
                                <td>WPN</td>
                                <td>{v.skill_name} <span className="eff">+Eff</span></td>
                                <td rowSpan="5">--</td>
                                <td rowSpan="5">--</td>
                                <td>{v.eff_refine ? "Yes" : "No"}</td>
                                <td rowSpan="5">{v.notes}</td>
                            </tr>
                            <tr>
                                <td>WPN</td>
                                <td>{v.skill_name} <span className="ar">+Att</span></td>
                                <td>{v.att_refine ? "Yes" : "No"}</td>
                            </tr>
                            <tr>
                                <td>WPN</td>
                                <td>{v.skill_name} <span className="sr">+Spd</span></td>
                                <td>{v.spd_refine ? "Yes" : "No"}</td>
                            </tr>
                            <tr>
                                <td>WPN</td>
                                <td>{v.skill_name} <span className="dr">+Def</span></td>
                                <td>{v.def_refine ? "Yes" : "No"}</td>
                            </tr>
                            <tr>
                                <td>WPN</td>
                                <td>{v.skill_name} <span className="rr">+Res</span></td>
                                <td>{v.res_refine ? "Yes" : "No"}</td>
                            </tr>
                        </tbody>
                    );
                })}
                {weapon_skills.map((v, k) => {
                    return (
                        <tbody key={k}>
                            <tr>
                                <td>{v.skill_type}</td>
                                <td>{v.skill_name}</td>
                                <td rowSpan="5">{v.reserved ? "Yes" : "No"}</td>
                                <td rowSpan="5">{v.obtained ? "Yes" : "No"}</td>
                                <td>{v.taught ? "Yes" : "No"}</td>
                                <td rowSpan="5">{v.notes}</td>
                            </tr>
                            <tr>
                                <td>WPN</td>
                                <td>{v.skill_name} <span className="ar">+Att</span></td>
                                <td>{v.att_refine ? "Yes" : "No"}</td>
                            </tr>
                            <tr>
                                <td>WPN</td>
                                <td>{v.skill_name} <span className="sr">+Spd</span></td>
                                <td>{v.spd_refine ? "Yes" : "No"}</td>
                            </tr>
                            <tr>
                                <td>WPN</td>
                                <td>{v.skill_name} <span className="dr">+Def</span></td>
                                <td>{v.def_refine ? "Yes" : "No"}</td>
                            </tr>
                            <tr>
                                <td>WPN</td>
                                <td>{v.skill_name} <span className="rr">+Res</span></td>
                                <td>{v.res_refine ? "Yes" : "No"}</td>
                            </tr>
                        </tbody>
                    );
                })}
                {other_skills.map((v, k) => {
                    return (
                        <tbody key={k}>
                            <tr>
                                <td>{v.skill_type}</td>
                                <td>{v.skill_name}</td>
                                <td>{v.reserved ? "Yes" : "No"}</td>
                                <td>{v.obtained ? "Yes" : "No"}</td>
                                <td>{v.taught ? "Yes" : "No"}</td>
                                <td>{v.notes}</td>
                            </tr>
                        </tbody>
                    );
                })}
            </table>

            <div id="footer_contents">
              <div id="footer_credits">Hosting kindly provided by <a href="https://spaces.w3schools.com" target="_blank">W3Schools Spaces</a>. Code is available at <a href="https://github.com/af1899/w3spaces-site-v2" target="_blank"><i className="fa-brands fa-github"></i>GitHub</a>.</div>
            </div>
        </>
    );
}

export default App;