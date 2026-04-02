import { WorkbenchService } from '@affine/core/modules/workbench';
import { useLiveData, useService } from '@toeverything/infra';
import { useEffect } from 'react';

export const DocumentTitle = () => {
  const workbenchService = useService(WorkbenchService);
  const workbenchView = useLiveData(workbenchService.workbench.activeView$);
  const viewTitle = useLiveData(workbenchView.title$);

  useEffect(() => {
    document.title = viewTitle ? `${viewTitle} · AFFiNE` : 'AFFiNE';

    return () => {
      document.title = 'AFFiNE';
    };
  }, [viewTitle]);

  return null;
};
