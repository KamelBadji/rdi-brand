import * as migration_20260419_214040 from './20260419_214040';
import * as migration_20260419_214435 from './20260419_214435';
import * as migration_20260419_224052 from './20260419_224052';

export const migrations = [
  {
    up: migration_20260419_214040.up,
    down: migration_20260419_214040.down,
    name: '20260419_214040',
  },
  {
    up: migration_20260419_214435.up,
    down: migration_20260419_214435.down,
    name: '20260419_214435',
  },
  {
    up: migration_20260419_224052.up,
    down: migration_20260419_224052.down,
    name: '20260419_224052'
  },
];
