import { Byte, HalfWord } from './types';

// every instruction consists of 5 bytes, 1 for opcode, 2 for operand1, 2 for operand2
export const INSTRUCTION_BYTE_LENGTH = 5;
export const BYTE_LENGTH = 8;
export const MAX_BYTE_VALUE = Math.pow(2, BYTE_LENGTH) - 1;
export const HALF_WORD_LENGTH = BYTE_LENGTH * 2;
export const MAX_HALF_WORD_VALUE = Math.pow(2, HALF_WORD_LENGTH) - 1;
export const EMPTY_BYTE: Byte = '00000000';
export const EMPTY_HALF_WORD: HalfWord = [EMPTY_BYTE, EMPTY_BYTE];

// VIDEO
export const GPU_ADDRESS_BUS_POINTER: HalfWord = ["11111111","00000000"];
export const RETURN_VALUE_POINTER: HalfWord = ["11111111", "11111110"];
export const GPU_POSITION_BYTE_LENGTH = HALF_WORD_LENGTH;
export const GPU_COLOR_CODE_LENGTH = HALF_WORD_LENGTH;
