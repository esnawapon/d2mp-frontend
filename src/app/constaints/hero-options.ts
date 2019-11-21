import { SelectOption } from '../types';

export interface HeroOption extends SelectOption<number> {
  primary: string;
}

export const HERO_OPTIONS: HeroOption[] = [
  {
    value: 1,
    name: 'Anti-Mage',
    primary: 'AGI'
  },
  {
    value: 2,
    name: 'Axe',
    primary: 'STR'
  },
  {
    value: 3,
    name: 'Bane',
    primary: 'INT'
  },
  {
    value: 4,
    name: 'Bloodseeker',
    primary: 'AGI'
  },
  {
    value: 5,
    name: 'Crystal Maiden',
    primary: 'INT'
  },
  {
    value: 6,
    name: 'Drow Ranger',
    primary: 'AGI'
  },
  {
    value: 7,
    name: 'Earthshaker',
    primary: 'STR'
  },
  {
    value: 8,
    name: 'Juggernaut',
    primary: 'AGI'
  },
  {
    value: 9,
    name: 'Mirana',
    primary: 'AGI'
  },
  {
    value: 10,
    name: 'Morphling',
    primary: 'AGI'
  },
  {
    value: 11,
    name: 'Shadow Fiend',
    primary: 'AGI'
  },
  {
    value: 12,
    name: 'Phantom Lancer',
    primary: 'AGI'
  },
  {
    value: 13,
    name: 'Puck',
    primary: 'INT'
  },
  {
    value: 14,
    name: 'Pudge',
    primary: 'STR'
  },
  {
    value: 15,
    name: 'Razor',
    primary: 'AGI'
  },
  {
    value: 16,
    name: 'Sand King',
    primary: 'STR'
  },
  {
    value: 17,
    name: 'Storm Spirit',
    primary: 'INT'
  },
  {
    value: 18,
    name: 'Sven',
    primary: 'STR'
  },
  {
    value: 19,
    name: 'Tiny',
    primary: 'STR'
  },
  {
    value: 20,
    name: 'Vengeful Spirit',
    primary: 'AGI'
  },
  {
    value: 21,
    name: 'Windranger',
    primary: 'INT'
  },
  {
    value: 22,
    name: 'Zeus',
    primary: 'INT'
  },
  {
    value: 23,
    name: 'Kunkka',
    primary: 'STR'
  },
  {
    value: 25,
    name: 'Lina',
    primary: 'INT'
  },
  {
    value: 26,
    name: 'Lion',
    primary: 'INT'
  },
  {
    value: 27,
    name: 'Shadow Shaman',
    primary: 'INT'
  },
  {
    value: 28,
    name: 'Slardar',
    primary: 'STR'
  },
  {
    value: 29,
    name: 'Tidehunter',
    primary: 'STR'
  },
  {
    value: 30,
    name: 'Witch Doctor',
    primary: 'INT'
  },
  {
    value: 31,
    name: 'Lich',
    primary: 'INT'
  },
  {
    value: 32,
    name: 'Riki',
    primary: 'AGI'
  },
  {
    value: 33,
    name: 'Enigma',
    primary: 'INT'
  },
  {
    value: 34,
    name: 'Tinker',
    primary: 'INT'
  },
  {
    value: 35,
    name: 'Sniper',
    primary: 'AGI'
  },
  {
    value: 36,
    name: 'Necrophos',
    primary: 'INT'
  },
  {
    value: 37,
    name: 'Warlock',
    primary: 'INT'
  },
  {
    value: 38,
    name: 'Beastmaster',
    primary: 'STR'
  },
  {
    value: 39,
    name: 'Queen of Pain',
    primary: 'INT'
  },
  {
    value: 40,
    name: 'Venomancer',
    primary: 'AGI'
  },
  {
    value: 41,
    name: 'Faceless Void',
    primary: 'AGI'
  },
  {
    value: 42,
    name: 'Wraith King',
    primary: 'STR'
  },
  {
    value: 43,
    name: 'Death Prophet',
    primary: 'INT'
  },
  {
    value: 44,
    name: 'Phantom Assassin',
    primary: 'AGI'
  },
  {
    value: 45,
    name: 'Pugna',
    primary: 'INT'
  },
  {
    value: 46,
    name: 'Templar Assassin',
    primary: 'AGI'
  },
  {
    value: 47,
    name: 'Viper',
    primary: 'AGI'
  },
  {
    value: 48,
    name: 'Luna',
    primary: 'INT'
  },
  {
    value: 49,
    name: 'Dragon Knight',
    primary: 'STR'
  },
  {
    value: 50,
    name: 'Dazzle',
    primary: 'INT'
  },
  {
    value: 51,
    name: 'Clockwerk',
    primary: 'STR'
  },
  {
    value: 52,
    name: 'Leshrac',
    primary: 'INT'
  },
  {
    value: 53,
    name: "Nature's Prophet",
    primary: 'INT'
  },
  {
    value: 54,
    name: 'Lifestealer',
    primary: 'STR'
  },
  {
    value: 55,
    name: 'Dark Seer',
    primary: 'INT'
  },
  {
    value: 56,
    name: 'Clinkz',
    primary: 'AGI'
  },
  {
    value: 57,
    name: 'Omniknight',
    primary: 'STR'
  },
  {
    value: 58,
    name: 'Enchantress',
    primary: 'INT'
  },
  {
    value: 59,
    name: 'Huskar',
    primary: 'STR'
  },
  {
    value: 60,
    name: 'Night Stalker',
    primary: 'STR'
  },
  {
    value: 61,
    name: 'Broodmother',
    primary: 'AGI'
  },
  {
    value: 62,
    name: 'Bounty Hunter',
    primary: 'AGI'
  },
  {
    value: 63,
    name: 'Weaver',
    primary: 'AGI'
  },
  {
    value: 64,
    name: 'Jakiro',
    primary: 'INT'
  },
  {
    value: 65,
    name: 'Batrider',
    primary: 'INT'
  },
  {
    value: 66,
    name: 'Chen',
    primary: 'INT'
  },
  {
    value: 67,
    name: 'Spectre',
    primary: 'AGI'
  },
  {
    value: 69,
    name: 'Doom',
    primary: 'STR'
  },
  {
    value: 68,
    name: 'Ancient Apparition',
    primary: 'INT'
  },
  {
    value: 70,
    name: 'Ursa',
    primary: 'AGI'
  },
  {
    value: 71,
    name: 'Spirit Breaker',
    primary: 'STR'
  },
  {
    value: 72,
    name: 'Gyrocopter',
    primary: 'AGI'
  },
  {
    value: 73,
    name: 'Alchemist',
    primary: 'STR'
  },
  {
    value: 74,
    name: 'Invoker',
    primary: 'INT'
  },
  {
    value: 75,
    name: 'Silencer',
    primary: 'INT'
  },
  {
    value: 76,
    name: 'Outworld Devourer',
    primary: 'INT'
  },
  {
    value: 77,
    name: 'Lycanthrope',
    primary: 'STR'
  },
  {
    value: 78,
    name: 'Brewmaster',
    primary: 'STR'
  },
  {
    value: 79,
    name: 'Shadow Demon',
    primary: 'INT'
  },
  {
    value: 80,
    name: 'Lone Druid',
    primary: 'AGI'
  },
  {
    value: 81,
    name: 'Chaos Knight',
    primary: 'STR'
  },
  {
    value: 82,
    name: 'Meepo',
    primary: 'AGI'
  },
  {
    value: 83,
    name: 'Treant Protector',
    primary: 'STR'
  },
  {
    value: 84,
    name: 'Ogre Magi',
    primary: 'INT'
  },
  {
    value: 85,
    name: 'Undying',
    primary: 'STR'
  },
  {
    value: 86,
    name: 'Rubick',
    primary: 'INT'
  },
  {
    value: 87,
    name: 'Disruptor',
    primary: 'INT'
  },
  {
    value: 88,
    name: 'Nyx Assassin',
    primary: 'AGI'
  },
  {
    value: 89,
    name: 'Naga Siren',
    primary: 'AGI'
  },
  {
    value: 90,
    name: 'Keeper of the Light',
    primary: 'INT'
  },
  {
    value: 91,
    name: 'Io',
    primary: 'STR'
  },
  {
    value: 92,
    name: 'Visage',
    primary: 'INT'
  },
  {
    value: 93,
    name: 'Slark',
    primary: 'AGI'
  },
  {
    value: 94,
    name: 'Medusa',
    primary: 'AGI'
  },
  {
    value: 95,
    name: 'Troll Warlord',
    primary: 'AGI'
  },
  {
    value: 96,
    name: 'Centaur Warrunner',
    primary: 'STR'
  },
  {
    value: 97,
    name: 'Magnus',
    primary: 'STR'
  },
  {
    value: 98,
    name: 'Timbersaw',
    primary: 'STR'
  },
  {
    value: 99,
    name: 'Bristleback',
    primary: 'STR'
  },
  {
    value: 100,
    name: 'Tusk',
    primary: 'STR'
  },
  {
    value: 101,
    name: 'Skywrath Mage',
    primary: 'INT'
  },
  {
    value: 102,
    name: 'Abaddon',
    primary: 'STR'
  },
  {
    value: 103,
    name: 'Elder Titan',
    primary: 'STR'
  },
  {
    value: 104,
    name: 'Legion Commander',
    primary: 'STR'
  },
  {
    value: 106,
    name: 'Ember Spirit',
    primary: 'AGI'
  },
  {
    value: 107,
    name: 'Earth Spirit',
    primary: 'STR'
  },
  {
    value: 108,
    name: 'Underlord',
    primary: 'STR'
  },
  {
    value: 109,
    name: 'Terrorblade',
    primary: 'AGI'
  },
  {
    value: 110,
    name: 'Phoenix',
    primary: 'STR'
  },
  {
    value: 105,
    name: 'Techies',
    primary: 'INT'
  },
  {
    value: 111,
    name: 'Oracle',
    primary: 'INT'
  },
  {
    value: 112,
    name: 'Winter Wyvern',
    primary: 'INT'
  },
  {
    value: 113,
    name: 'Arc Warden',
    primary: 'AGI'
  }
]
