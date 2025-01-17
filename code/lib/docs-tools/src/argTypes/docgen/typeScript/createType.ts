import { PropType } from '../PropDef';
import { DocgenInfo } from '../types';
// eslint-disable-next-line import/no-cycle
import { createSummaryValue } from '../../utils';

export function createType({ tsType, required }: DocgenInfo): PropType {
  // A type could be null if a defaultProp has been provided without a type definition.
  if (tsType == null) {
    return null;
  }

  if (!required) {
    return createSummaryValue(tsType.name.replace(' | undefined', ''));
  }

  return createSummaryValue(tsType.name);
}
