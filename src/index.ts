import { Byte, HalfWord, Instructions, Register } from './types';
import { EMPTY_BYTE } from './constants';

export * from './types';
export * from './constants';

export const InstructionBinaryMap: Record<Instructions, Byte> = {
  LOAD: '00000001',
  STORE: '00000010',
  SET: '00000011',
  LOADH: '00000100',
  STOREH: '00000101',
  ADD: '00000110',
  SUB: '00000111',
  CJUMP: '00001000',
};

export const registerBinaryCode: Record<Register, HalfWord> = {
  RPC: [EMPTY_BYTE, '00000001'],
  R00: [EMPTY_BYTE, '00000010'],
  R01: [EMPTY_BYTE, '00000011'],
  R02: [EMPTY_BYTE, '00000100'],
  R03: [EMPTY_BYTE, '00000101'],
  R04: [EMPTY_BYTE, '00000110'],
  R05: [EMPTY_BYTE, '00000111'],
  R06: [EMPTY_BYTE, '00001000'],
  R07: [EMPTY_BYTE, '00001001'],
  R08: [EMPTY_BYTE, '00001010'],
  R09: [EMPTY_BYTE, '00001011'],
  RSP: [EMPTY_BYTE, '00100000'],
};
