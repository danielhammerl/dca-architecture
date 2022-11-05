import { GpuInstruction, GpuInstructions } from './types';
import { EMPTY_BYTE } from './constants';

export const gpuInstructionMap: Record<typeof GpuInstructions[number], GpuInstruction> = {
  NOOP: EMPTY_BYTE,
  CLEAR: '00000001',
  DRAW: '00000010',
};
