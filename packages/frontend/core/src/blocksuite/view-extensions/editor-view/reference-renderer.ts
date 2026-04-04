import type { ReactToLit } from '@polymind/component';
import type { AffineReference } from '@blockmind/polymind/inlines/reference';
import { ReferenceNodeConfigExtension } from '@blockmind/polymind/inlines/reference';
import type { ExtensionType } from '@blockmind/polymind/store';

export type ReferenceReactRenderer = (
  reference: AffineReference
) => React.ReactElement;

export function patchReferenceRenderer(
  reactToLit: ReactToLit,
  reactRenderer: ReferenceReactRenderer
): ExtensionType {
  const customContent = (reference: AffineReference) => {
    const node = reactRenderer(reference);
    return reactToLit(node, true);
  };

  return ReferenceNodeConfigExtension({
    customContent,
    hidePopup: BUILD_CONFIG.isMobileEdition,
  });
}
