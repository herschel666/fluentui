import { isConformant as baseIsConformant } from '@fluentui/react-conformance';
import makeStylesTests from '@fluentui/react-conformance-make-styles';
import type { IsConformantOptions, TestObject } from '@fluentui/react-conformance';

export function isConformant<TProps = {}>(
  testInfo: Omit<IsConformantOptions<TProps>, 'componentPath'> & { componentPath?: string },
) {
  const defaultOptions: Partial<IsConformantOptions<TProps>> = {
    asPropHandlesRef: true,
    componentPath: module!.parent!.filename.replace('.test', ''),
    skipAsPropTests: true,
    extraTests: makeStylesTests as TestObject<TProps>,
  };

  baseIsConformant(defaultOptions, testInfo);
}
