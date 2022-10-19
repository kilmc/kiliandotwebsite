import { modes } from '../consts';
import type { TMode } from '../types';

export function isModeName(value: string): value is TMode {
	return modes.includes(value as TMode);
}
