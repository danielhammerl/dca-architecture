export type Bit = '1' | '0';
export type Byte = `${Bit}${Bit}${Bit}${Bit}${Bit}${Bit}${Bit}${Bit}`;
export type HalfWord = [Byte, Byte];

export const Instructions = [
  'LOAD',
  'STORE',
  'SET',
  'LOADH',
  'STOREH',
  'ADD',
  'SUB',
  'CJUMP',
  'MOV',
  'CJUMPI',
] as const;
export const Registers = ['RPC', 'RSP', 'R00', 'R01', 'R02', 'R03', 'R04', 'R05', 'R06', 'R07', 'R08', 'R09'] as const;
export const GpuInstructions = ['NOOP', 'CLEAR', 'BUFFER', 'DRAW'] as const;

export type Instruction = { opcode: Byte; operand1: HalfWord; operand2: HalfWord };
export type Operation = (operand1: Instruction['operand1'], operand2: Instruction['operand2']) => void;

export type GpuInstruction = Byte;
export type GpuPosition = HalfWord;
export type GpuColorCode = HalfWord;
