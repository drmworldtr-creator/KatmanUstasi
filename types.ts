export enum GameState {
  START = 'START',
  PLAYING = 'PLAYING',
  GAME_OVER = 'GAME_OVER',
  SETTINGS = 'SETTINGS',
  MARKET = 'MARKET',
  PAUSED = 'PAUSED'
}

export interface Settings {
  language: 'tr' | 'en';
  soundEnabled: boolean;
  musicEnabled: boolean;
  vibrationEnabled: boolean;
}

export interface Skin {
  id: string;
  name: string;
  price: number;
  hue: number;
  unlocked: boolean;
}

export interface Block {
  x: number;
  y: number;
  width: number;
  depth: number; // Z-axis simulation
  hue: number;
  direction?: number; // 1 for right, -1 for left
  speed?: number;
}

export interface Debris {
  x: number;
  y: number;
  width: number;
  depth: number;
  hue: number;
  velocityX: number;
  velocityY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
}

export interface GameConfig {
  BLOCK_HEIGHT: number;
  INITIAL_WIDTH: number;
  INITIAL_DEPTH: number;
  MOVE_SPEED: number;
  PERFECT_TOLERANCE: number;
}