import { FlexWrapper } from '@affine/component';
import { ExplorerDisplayMenuButton } from '@affine/core/components/explorer/display-menu';
import { ViewToggle } from '@affine/core/components/explorer/display-menu/view-toggle';
import { ExplorerNavigation } from '@affine/core/components/explorer/header/navigation';
import type { ExplorerDisplayPreference } from '@affine/core/components/explorer/types';
import { Header } from '@affine/core/components/pure/header';

import * as styles from './index.css';

export type SpaceViewMode = 'list' | 'canvas' | 'chat' | 'memory';

const MODES: { key: SpaceViewMode; label: string }[] = [
  { key: 'list', label: 'List' },
  { key: 'canvas', label: 'Canvas' },
  { key: 'chat', label: 'Chat' },
  { key: 'memory', label: 'Memory' },
];

export const SpaceDetailHeader = ({
  displayPreference,
  onDisplayPreferenceChange,
  viewMode,
  onViewModeChange,
}: {
  displayPreference: ExplorerDisplayPreference;
  onDisplayPreferenceChange: (pref: ExplorerDisplayPreference) => void;
  viewMode: SpaceViewMode;
  onViewModeChange: (mode: SpaceViewMode) => void;
}) => {
  return (
    <Header
      left={<ExplorerNavigation active="spaces" />}
      right={
        <FlexWrapper gap={16} alignItems="center">
          {/* Mode toggle: List | Canvas | Chat | Memory */}
          <div className={styles.modeToggle}>
            {MODES.map(({ key, label }) => (
              <button
                key={key}
                className={styles.modeToggleButton}
                data-active={viewMode === key}
                onClick={() => onViewModeChange(key)}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Explorer display options — list mode only */}
          {viewMode === 'list' && (
            <>
              <ViewToggle
                view={displayPreference.view ?? 'list'}
                onViewChange={view => {
                  onDisplayPreferenceChange({ ...displayPreference, view });
                }}
              />
              <ExplorerDisplayMenuButton
                displayPreference={displayPreference}
                onDisplayPreferenceChange={onDisplayPreferenceChange}
              />
            </>
          )}
        </FlexWrapper>
      }
    />
  );
};
