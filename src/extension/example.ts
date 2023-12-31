import type { ExampleType } from '@nodecg-mystery-show/types';
import type { Configschema } from '@nodecg-mystery-show/types/schemas/configschema';
import { get as nodecg } from './util/nodecg';
import { exampleReplicant } from './util/replicants';

nodecg().log.info('Extension code working!');

// Access/set a replicant (also see ./util/replicants).
exampleReplicant.value = { exampleProperty: `exampleString_Changed_${Date.now()}` };

// Access the bundle configuration with types.
const config = nodecg().bundleConfig as Configschema;

// Accessing normal types.
const exampleType: ExampleType = { exampleProperty: 'exampleString' };
