// Auto generated content
// DO NOT MODIFY THIS FILE MANUALLY
export const PackageList = [
  {
    location: 'blockmind/docs',
    name: '@blockmind/bs-docs',
    workspaceDependencies: ['blockmind/polymind/all'],
  },
  {
    location: 'blockmind/framework/global',
    name: '@blockmind/global',
    workspaceDependencies: [],
  },
  {
    location: 'blockmind/framework/std',
    name: '@blockmind/std',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/framework/store',
    name: '@blockmind/store',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/framework/sync',
    ],
  },
  {
    location: 'blockmind/framework/sync',
    name: '@blockmind/sync',
    workspaceDependencies: ['blockmind/framework/global'],
  },
  {
    location: 'blockmind/integration-test',
    name: '@blockmind/integration-test',
    workspaceDependencies: ['blockmind/polymind/all'],
  },
  {
    location: 'blockmind/playground',
    name: '@blockmind/playground',
    workspaceDependencies: [
      'blockmind/polymind/data-view',
      'blockmind/integration-test',
      'blockmind/polymind/all',
      'blockmind/polymind/components',
      'blockmind/polymind/model',
      'blockmind/polymind/shared',
    ],
  },
  {
    location: 'blockmind/polymind/all',
    name: '@blockmind/polymind',
    workspaceDependencies: [
      'blockmind/polymind/data-view',
      'blockmind/framework/global',
      'blockmind/polymind/blocks/attachment',
      'blockmind/polymind/blocks/bookmark',
      'blockmind/polymind/blocks/callout',
      'blockmind/polymind/blocks/code',
      'blockmind/polymind/blocks/data-view',
      'blockmind/polymind/blocks/database',
      'blockmind/polymind/blocks/divider',
      'blockmind/polymind/blocks/edgeless-text',
      'blockmind/polymind/blocks/embed',
      'blockmind/polymind/blocks/embed-doc',
      'blockmind/polymind/blocks/frame',
      'blockmind/polymind/blocks/image',
      'blockmind/polymind/blocks/latex',
      'blockmind/polymind/blocks/list',
      'blockmind/polymind/blocks/note',
      'blockmind/polymind/blocks/paragraph',
      'blockmind/polymind/blocks/root',
      'blockmind/polymind/blocks/surface',
      'blockmind/polymind/blocks/surface-ref',
      'blockmind/polymind/blocks/table',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/foundation',
      'blockmind/polymind/fragments/adapter-panel',
      'blockmind/polymind/fragments/doc-title',
      'blockmind/polymind/fragments/frame-panel',
      'blockmind/polymind/fragments/outline',
      'blockmind/polymind/gfx/brush',
      'blockmind/polymind/gfx/connector',
      'blockmind/polymind/gfx/group',
      'blockmind/polymind/gfx/link',
      'blockmind/polymind/gfx/mindmap',
      'blockmind/polymind/gfx/note',
      'blockmind/polymind/gfx/pointer',
      'blockmind/polymind/gfx/shape',
      'blockmind/polymind/gfx/template',
      'blockmind/polymind/gfx/text',
      'blockmind/polymind/gfx/turbo-renderer',
      'blockmind/polymind/inlines/comment',
      'blockmind/polymind/inlines/footnote',
      'blockmind/polymind/inlines/latex',
      'blockmind/polymind/inlines/link',
      'blockmind/polymind/inlines/mention',
      'blockmind/polymind/inlines/preset',
      'blockmind/polymind/inlines/reference',
      'blockmind/polymind/model',
      'blockmind/polymind/rich-text',
      'blockmind/polymind/shared',
      'blockmind/polymind/widgets/drag-handle',
      'blockmind/polymind/widgets/edgeless-auto-connect',
      'blockmind/polymind/widgets/edgeless-dragging-area',
      'blockmind/polymind/widgets/edgeless-selected-rect',
      'blockmind/polymind/widgets/edgeless-toolbar',
      'blockmind/polymind/widgets/edgeless-zoom-toolbar',
      'blockmind/polymind/widgets/frame-title',
      'blockmind/polymind/widgets/keyboard-toolbar',
      'blockmind/polymind/widgets/linked-doc',
      'blockmind/polymind/widgets/note-slicer',
      'blockmind/polymind/widgets/page-dragging-area',
      'blockmind/polymind/widgets/remote-selection',
      'blockmind/polymind/widgets/scroll-anchoring',
      'blockmind/polymind/widgets/slash-menu',
      'blockmind/polymind/widgets/toolbar',
      'blockmind/polymind/widgets/viewport-overlay',
      'blockmind/framework/std',
      'blockmind/framework/store',
      'blockmind/framework/sync',
    ],
  },
  {
    location: 'blockmind/polymind/blocks/attachment',
    name: '@blockmind/polymind-block-attachment',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/blocks/surface',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/model',
      'blockmind/polymind/shared',
      'blockmind/polymind/widgets/slash-menu',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/blocks/bookmark',
    name: '@blockmind/polymind-block-bookmark',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/blocks/embed',
      'blockmind/polymind/blocks/embed-doc',
      'blockmind/polymind/blocks/surface',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/model',
      'blockmind/polymind/shared',
      'blockmind/polymind/widgets/slash-menu',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/blocks/callout',
    name: '@blockmind/polymind-block-callout',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/inlines/preset',
      'blockmind/polymind/model',
      'blockmind/polymind/rich-text',
      'blockmind/polymind/shared',
      'blockmind/polymind/widgets/slash-menu',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/blocks/code',
    name: '@blockmind/polymind-block-code',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/gfx/turbo-renderer',
      'blockmind/polymind/inlines/comment',
      'blockmind/polymind/inlines/latex',
      'blockmind/polymind/inlines/link',
      'blockmind/polymind/inlines/preset',
      'blockmind/polymind/model',
      'blockmind/polymind/rich-text',
      'blockmind/polymind/shared',
      'blockmind/polymind/widgets/slash-menu',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/blocks/data-view',
    name: '@blockmind/polymind-block-data-view',
    workspaceDependencies: [
      'blockmind/polymind/data-view',
      'blockmind/framework/global',
      'blockmind/polymind/blocks/database',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/model',
      'blockmind/polymind/shared',
      'blockmind/polymind/widgets/slash-menu',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/blocks/database',
    name: '@blockmind/polymind-block-database',
    workspaceDependencies: [
      'blockmind/polymind/data-view',
      'blockmind/framework/global',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/inlines/preset',
      'blockmind/polymind/inlines/reference',
      'blockmind/polymind/model',
      'blockmind/polymind/rich-text',
      'blockmind/polymind/shared',
      'blockmind/polymind/widgets/drag-handle',
      'blockmind/polymind/widgets/slash-menu',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/blocks/divider',
    name: '@blockmind/polymind-block-divider',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/model',
      'blockmind/polymind/rich-text',
      'blockmind/polymind/shared',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/blocks/edgeless-text',
    name: '@blockmind/polymind-block-edgeless-text',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/blocks/surface',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/gfx/text',
      'blockmind/polymind/inlines/preset',
      'blockmind/polymind/model',
      'blockmind/polymind/rich-text',
      'blockmind/polymind/shared',
      'blockmind/polymind/widgets/edgeless-toolbar',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/blocks/embed',
    name: '@blockmind/polymind-block-embed',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/blocks/surface',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/gfx/pointer',
      'blockmind/polymind/inlines/reference',
      'blockmind/polymind/model',
      'blockmind/polymind/rich-text',
      'blockmind/polymind/shared',
      'blockmind/polymind/widgets/slash-menu',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/blocks/embed-doc',
    name: '@blockmind/polymind-block-embed-doc',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/blocks/embed',
      'blockmind/polymind/blocks/surface',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/inlines/reference',
      'blockmind/polymind/model',
      'blockmind/polymind/rich-text',
      'blockmind/polymind/shared',
      'blockmind/polymind/widgets/slash-menu',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/blocks/frame',
    name: '@blockmind/polymind-block-frame',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/blocks/surface',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/gfx/pointer',
      'blockmind/polymind/model',
      'blockmind/polymind/shared',
      'blockmind/polymind/widgets/edgeless-toolbar',
      'blockmind/polymind/widgets/frame-title',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/blocks/image',
    name: '@blockmind/polymind-block-image',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/blocks/note',
      'blockmind/polymind/blocks/surface',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/gfx/turbo-renderer',
      'blockmind/polymind/model',
      'blockmind/polymind/shared',
      'blockmind/polymind/widgets/slash-menu',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/blocks/latex',
    name: '@blockmind/polymind-block-latex',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/blocks/note',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/inlines/latex',
      'blockmind/polymind/model',
      'blockmind/polymind/rich-text',
      'blockmind/polymind/shared',
      'blockmind/polymind/widgets/slash-menu',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/blocks/list',
    name: '@blockmind/polymind-block-list',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/gfx/turbo-renderer',
      'blockmind/polymind/inlines/preset',
      'blockmind/polymind/model',
      'blockmind/polymind/rich-text',
      'blockmind/polymind/shared',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/blocks/note',
    name: '@blockmind/polymind-block-note',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/blocks/embed',
      'blockmind/polymind/blocks/surface',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/fragments/doc-title',
      'blockmind/polymind/gfx/turbo-renderer',
      'blockmind/polymind/inlines/preset',
      'blockmind/polymind/model',
      'blockmind/polymind/rich-text',
      'blockmind/polymind/shared',
      'blockmind/polymind/widgets/slash-menu',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/blocks/paragraph',
    name: '@blockmind/polymind-block-paragraph',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/gfx/turbo-renderer',
      'blockmind/polymind/inlines/preset',
      'blockmind/polymind/model',
      'blockmind/polymind/rich-text',
      'blockmind/polymind/shared',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/blocks/root',
    name: '@blockmind/polymind-block-root',
    workspaceDependencies: [
      'blockmind/polymind/data-view',
      'blockmind/framework/global',
      'blockmind/polymind/blocks/attachment',
      'blockmind/polymind/blocks/bookmark',
      'blockmind/polymind/blocks/database',
      'blockmind/polymind/blocks/edgeless-text',
      'blockmind/polymind/blocks/embed',
      'blockmind/polymind/blocks/frame',
      'blockmind/polymind/blocks/image',
      'blockmind/polymind/blocks/note',
      'blockmind/polymind/blocks/paragraph',
      'blockmind/polymind/blocks/surface',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/gfx/brush',
      'blockmind/polymind/gfx/connector',
      'blockmind/polymind/gfx/group',
      'blockmind/polymind/gfx/mindmap',
      'blockmind/polymind/gfx/note',
      'blockmind/polymind/gfx/pointer',
      'blockmind/polymind/gfx/shape',
      'blockmind/polymind/gfx/text',
      'blockmind/polymind/inlines/preset',
      'blockmind/polymind/model',
      'blockmind/polymind/rich-text',
      'blockmind/polymind/shared',
      'blockmind/polymind/widgets/edgeless-selected-rect',
      'blockmind/polymind/widgets/edgeless-toolbar',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/blocks/surface',
    name: '@blockmind/polymind-block-surface',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/model',
      'blockmind/polymind/rich-text',
      'blockmind/polymind/shared',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/blocks/surface-ref',
    name: '@blockmind/polymind-block-surface-ref',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/blocks/frame',
      'blockmind/polymind/blocks/surface',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/inlines/reference',
      'blockmind/polymind/model',
      'blockmind/polymind/shared',
      'blockmind/polymind/widgets/slash-menu',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/blocks/table',
    name: '@blockmind/polymind-block-table',
    workspaceDependencies: [
      'blockmind/polymind/data-view',
      'blockmind/framework/global',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/inlines/preset',
      'blockmind/polymind/model',
      'blockmind/polymind/rich-text',
      'blockmind/polymind/shared',
      'blockmind/polymind/widgets/slash-menu',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/components',
    name: '@blockmind/polymind-components',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/model',
      'blockmind/polymind/shared',
      'blockmind/framework/std',
      'blockmind/framework/store',
      'blockmind/framework/sync',
    ],
  },
  {
    location: 'blockmind/polymind/data-view',
    name: '@blockmind/data-view',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/components',
      'blockmind/polymind/shared',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/ext-loader',
    name: '@blockmind/polymind-ext-loader',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/foundation',
    name: '@blockmind/polymind-foundation',
    workspaceDependencies: [
      'blockmind/polymind/data-view',
      'blockmind/framework/global',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/rich-text',
      'blockmind/polymind/shared',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/fragments/adapter-panel',
    name: '@blockmind/polymind-fragment-adapter-panel',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/model',
      'blockmind/polymind/shared',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/fragments/doc-title',
    name: '@blockmind/polymind-fragment-doc-title',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/blocks/frame',
      'blockmind/polymind/blocks/surface',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/model',
      'blockmind/polymind/rich-text',
      'blockmind/polymind/shared',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/fragments/frame-panel',
    name: '@blockmind/polymind-fragment-frame-panel',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/blocks/frame',
      'blockmind/polymind/blocks/surface',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/model',
      'blockmind/polymind/rich-text',
      'blockmind/polymind/shared',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/fragments/outline',
    name: '@blockmind/polymind-fragment-outline',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/blocks/note',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/fragments/doc-title',
      'blockmind/polymind/model',
      'blockmind/polymind/rich-text',
      'blockmind/polymind/shared',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/gfx/brush',
    name: '@blockmind/polymind-gfx-brush',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/blocks/surface',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/model',
      'blockmind/polymind/rich-text',
      'blockmind/polymind/shared',
      'blockmind/polymind/widgets/edgeless-toolbar',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/gfx/connector',
    name: '@blockmind/polymind-gfx-connector',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/blocks/surface',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/gfx/text',
      'blockmind/polymind/model',
      'blockmind/polymind/rich-text',
      'blockmind/polymind/shared',
      'blockmind/polymind/widgets/edgeless-toolbar',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/gfx/group',
    name: '@blockmind/polymind-gfx-group',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/blocks/surface',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/gfx/text',
      'blockmind/polymind/model',
      'blockmind/polymind/rich-text',
      'blockmind/polymind/shared',
      'blockmind/polymind/widgets/edgeless-toolbar',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/gfx/link',
    name: '@blockmind/polymind-gfx-link',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/blocks/bookmark',
      'blockmind/polymind/blocks/embed',
      'blockmind/polymind/blocks/surface',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/gfx/pointer',
      'blockmind/polymind/model',
      'blockmind/polymind/rich-text',
      'blockmind/polymind/shared',
      'blockmind/polymind/widgets/edgeless-toolbar',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/gfx/mindmap',
    name: '@blockmind/polymind-gfx-mindmap',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/blocks/attachment',
      'blockmind/polymind/blocks/edgeless-text',
      'blockmind/polymind/blocks/image',
      'blockmind/polymind/blocks/surface',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/gfx/connector',
      'blockmind/polymind/gfx/pointer',
      'blockmind/polymind/gfx/shape',
      'blockmind/polymind/gfx/text',
      'blockmind/polymind/model',
      'blockmind/polymind/rich-text',
      'blockmind/polymind/shared',
      'blockmind/polymind/widgets/edgeless-toolbar',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/gfx/note',
    name: '@blockmind/polymind-gfx-note',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/blocks/attachment',
      'blockmind/polymind/blocks/bookmark',
      'blockmind/polymind/blocks/image',
      'blockmind/polymind/blocks/surface',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/model',
      'blockmind/polymind/rich-text',
      'blockmind/polymind/shared',
      'blockmind/polymind/widgets/edgeless-toolbar',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/gfx/pointer',
    name: '@blockmind/polymind-gfx-pointer',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/blocks/surface',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/model',
      'blockmind/polymind/rich-text',
      'blockmind/polymind/shared',
      'blockmind/polymind/widgets/edgeless-toolbar',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/gfx/shape',
    name: '@blockmind/polymind-gfx-shape',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/blocks/surface',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/gfx/text',
      'blockmind/polymind/model',
      'blockmind/polymind/rich-text',
      'blockmind/polymind/shared',
      'blockmind/polymind/widgets/edgeless-toolbar',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/gfx/template',
    name: '@blockmind/polymind-gfx-template',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/blocks/surface',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/gfx/text',
      'blockmind/polymind/model',
      'blockmind/polymind/rich-text',
      'blockmind/polymind/shared',
      'blockmind/polymind/widgets/edgeless-toolbar',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/gfx/text',
    name: '@blockmind/polymind-gfx-text',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/blocks/surface',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/model',
      'blockmind/polymind/rich-text',
      'blockmind/polymind/shared',
      'blockmind/polymind/widgets/edgeless-toolbar',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/gfx/turbo-renderer',
    name: '@blockmind/polymind-gfx-turbo-renderer',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/inlines/comment',
    name: '@blockmind/polymind-inline-comment',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/model',
      'blockmind/polymind/rich-text',
      'blockmind/polymind/shared',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/inlines/footnote',
    name: '@blockmind/polymind-inline-footnote',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/inlines/reference',
      'blockmind/polymind/model',
      'blockmind/polymind/shared',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/inlines/latex',
    name: '@blockmind/polymind-inline-latex',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/inlines/reference',
      'blockmind/polymind/model',
      'blockmind/polymind/rich-text',
      'blockmind/polymind/shared',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/inlines/link',
    name: '@blockmind/polymind-inline-link',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/inlines/reference',
      'blockmind/polymind/model',
      'blockmind/polymind/shared',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/inlines/mention',
    name: '@blockmind/polymind-inline-mention',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/model',
      'blockmind/polymind/shared',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/inlines/preset',
    name: '@blockmind/polymind-inline-preset',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/inlines/comment',
      'blockmind/polymind/inlines/footnote',
      'blockmind/polymind/inlines/latex',
      'blockmind/polymind/inlines/link',
      'blockmind/polymind/inlines/mention',
      'blockmind/polymind/inlines/reference',
      'blockmind/polymind/model',
      'blockmind/polymind/rich-text',
      'blockmind/polymind/shared',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/inlines/reference',
    name: '@blockmind/polymind-inline-reference',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/model',
      'blockmind/polymind/shared',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/model',
    name: '@blockmind/polymind-model',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/rich-text',
    name: '@blockmind/polymind-rich-text',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/components',
      'blockmind/polymind/model',
      'blockmind/polymind/shared',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/shared',
    name: '@blockmind/polymind-shared',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/model',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/widgets/drag-handle',
    name: '@blockmind/polymind-widget-drag-handle',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/blocks/callout',
      'blockmind/polymind/blocks/embed',
      'blockmind/polymind/blocks/list',
      'blockmind/polymind/blocks/note',
      'blockmind/polymind/blocks/paragraph',
      'blockmind/polymind/blocks/surface',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/model',
      'blockmind/polymind/shared',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/widgets/edgeless-auto-connect',
    name: '@blockmind/polymind-widget-edgeless-auto-connect',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/blocks/note',
      'blockmind/polymind/blocks/surface',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/model',
      'blockmind/polymind/shared',
      'blockmind/framework/std',
    ],
  },
  {
    location: 'blockmind/polymind/widgets/edgeless-dragging-area',
    name: '@blockmind/polymind-widget-edgeless-dragging-area',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/blocks/note',
      'blockmind/polymind/blocks/surface',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/model',
      'blockmind/polymind/shared',
      'blockmind/framework/std',
    ],
  },
  {
    location: 'blockmind/polymind/widgets/edgeless-selected-rect',
    name: '@blockmind/polymind-widget-edgeless-selected-rect',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/blocks/frame',
      'blockmind/polymind/blocks/note',
      'blockmind/polymind/blocks/surface',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/gfx/connector',
      'blockmind/polymind/gfx/shape',
      'blockmind/polymind/gfx/text',
      'blockmind/polymind/model',
      'blockmind/polymind/shared',
      'blockmind/framework/std',
    ],
  },
  {
    location: 'blockmind/polymind/widgets/edgeless-toolbar',
    name: '@blockmind/polymind-widget-edgeless-toolbar',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/blocks/surface',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/model',
      'blockmind/polymind/rich-text',
      'blockmind/polymind/shared',
      'blockmind/framework/std',
    ],
  },
  {
    location: 'blockmind/polymind/widgets/edgeless-zoom-toolbar',
    name: '@blockmind/polymind-widget-edgeless-zoom-toolbar',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/blocks/surface',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/model',
      'blockmind/polymind/shared',
      'blockmind/framework/std',
    ],
  },
  {
    location: 'blockmind/polymind/widgets/frame-title',
    name: '@blockmind/polymind-widget-frame-title',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/blocks/surface',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/model',
      'blockmind/polymind/rich-text',
      'blockmind/polymind/shared',
      'blockmind/framework/std',
    ],
  },
  {
    location: 'blockmind/polymind/widgets/keyboard-toolbar',
    name: '@blockmind/polymind-widget-keyboard-toolbar',
    workspaceDependencies: [
      'blockmind/polymind/data-view',
      'blockmind/framework/global',
      'blockmind/polymind/blocks/attachment',
      'blockmind/polymind/blocks/database',
      'blockmind/polymind/blocks/embed',
      'blockmind/polymind/blocks/image',
      'blockmind/polymind/blocks/latex',
      'blockmind/polymind/blocks/list',
      'blockmind/polymind/blocks/note',
      'blockmind/polymind/blocks/paragraph',
      'blockmind/polymind/blocks/surface',
      'blockmind/polymind/blocks/surface-ref',
      'blockmind/polymind/blocks/table',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/fragments/doc-title',
      'blockmind/polymind/inlines/latex',
      'blockmind/polymind/inlines/link',
      'blockmind/polymind/inlines/preset',
      'blockmind/polymind/inlines/reference',
      'blockmind/polymind/model',
      'blockmind/polymind/rich-text',
      'blockmind/polymind/shared',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/widgets/linked-doc',
    name: '@blockmind/polymind-widget-linked-doc',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/blocks/image',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/inlines/reference',
      'blockmind/polymind/model',
      'blockmind/polymind/rich-text',
      'blockmind/polymind/shared',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/widgets/note-slicer',
    name: '@blockmind/polymind-widget-note-slicer',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/blocks/note',
      'blockmind/polymind/blocks/surface',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/model',
      'blockmind/polymind/shared',
      'blockmind/polymind/widgets/edgeless-selected-rect',
      'blockmind/framework/std',
    ],
  },
  {
    location: 'blockmind/polymind/widgets/page-dragging-area',
    name: '@blockmind/polymind-widget-page-dragging-area',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/model',
      'blockmind/polymind/shared',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/widgets/remote-selection',
    name: '@blockmind/polymind-widget-remote-selection',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/blocks/surface',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/model',
      'blockmind/polymind/shared',
      'blockmind/framework/std',
    ],
  },
  {
    location: 'blockmind/polymind/widgets/scroll-anchoring',
    name: '@blockmind/polymind-widget-scroll-anchoring',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/model',
      'blockmind/polymind/shared',
      'blockmind/framework/std',
    ],
  },
  {
    location: 'blockmind/polymind/widgets/slash-menu',
    name: '@blockmind/polymind-widget-slash-menu',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/rich-text',
      'blockmind/polymind/shared',
      'blockmind/framework/std',
      'blockmind/framework/store',
    ],
  },
  {
    location: 'blockmind/polymind/widgets/toolbar',
    name: '@blockmind/polymind-widget-toolbar',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/blocks/database',
      'blockmind/polymind/blocks/surface',
      'blockmind/polymind/blocks/table',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/model',
      'blockmind/polymind/shared',
      'blockmind/framework/std',
    ],
  },
  {
    location: 'blockmind/polymind/widgets/viewport-overlay',
    name: '@blockmind/polymind-widget-viewport-overlay',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/components',
      'blockmind/polymind/ext-loader',
      'blockmind/polymind/model',
      'blockmind/polymind/shared',
      'blockmind/framework/std',
    ],
  },
  {
    location: 'docs/reference',
    name: '@polymind/docs',
    workspaceDependencies: [],
  },
  {
    location: 'packages/backend/native',
    name: '@polymind/server-native',
    workspaceDependencies: [],
  },
  {
    location: 'packages/backend/server',
    name: '@polymind/server',
    workspaceDependencies: [
      'packages/common/s3-compat',
      'packages/backend/native',
      'tools/cli',
      'tools/utils',
      'packages/common/graphql',
    ],
  },
  {
    location: 'packages/common/debug',
    name: '@polymind/debug',
    workspaceDependencies: [],
  },
  {
    location: 'packages/common/env',
    name: '@polymind/env',
    workspaceDependencies: [],
  },
  {
    location: 'packages/common/error',
    name: '@polymind/error',
    workspaceDependencies: [],
  },
  {
    location: 'packages/common/graphql',
    name: '@polymind/graphql',
    workspaceDependencies: [
      'packages/common/debug',
      'packages/common/env',
      'packages/common/error',
    ],
  },
  {
    location: 'packages/common/infra',
    name: '@toeverything/infra',
    workspaceDependencies: [
      'packages/common/debug',
      'packages/common/env',
      'packages/common/error',
      'packages/frontend/templates',
    ],
  },
  {
    location: 'packages/common/nbstore',
    name: '@polymind/nbstore',
    workspaceDependencies: [
      'packages/common/reader',
      'packages/common/infra',
      'blockmind/polymind/all',
      'packages/common/error',
      'packages/common/graphql',
    ],
  },
  {
    location: 'packages/common/reader',
    name: '@polymind/reader',
    workspaceDependencies: ['blockmind/polymind/all'],
  },
  {
    location: 'packages/common/s3-compat',
    name: '@polymind/s3-compat',
    workspaceDependencies: [],
  },
  {
    location: 'packages/frontend/apps/electron',
    name: '@polymind/electron',
    workspaceDependencies: [
      'tools/utils',
      'packages/frontend/i18n',
      'packages/frontend/native',
      'packages/common/nbstore',
      'packages/common/infra',
    ],
  },
  {
    location: 'packages/frontend/apps/electron-renderer',
    name: '@polymind/electron-renderer',
    workspaceDependencies: [
      'blockmind/polymind/all',
      'packages/frontend/component',
      'packages/frontend/core',
      'packages/common/debug',
      'packages/frontend/electron-api',
      'packages/frontend/i18n',
      'packages/common/nbstore',
      'packages/common/infra',
      'tools/utils',
    ],
  },
  {
    location: 'packages/frontend/apps/mobile',
    name: '@polymind/mobile',
    workspaceDependencies: [
      'blockmind/polymind/all',
      'packages/frontend/component',
      'packages/frontend/core',
      'packages/common/env',
      'packages/frontend/i18n',
      'packages/common/nbstore',
      'packages/common/infra',
    ],
  },
  {
    location: 'packages/frontend/apps/web',
    name: '@polymind/web',
    workspaceDependencies: [
      'packages/frontend/component',
      'packages/frontend/core',
      'packages/common/env',
      'packages/frontend/i18n',
      'packages/common/nbstore',
      'packages/common/infra',
    ],
  },
  {
    location: 'packages/frontend/component',
    name: '@polymind/component',
    workspaceDependencies: [
      'packages/common/debug',
      'packages/frontend/electron-api',
      'packages/common/error',
      'packages/common/graphql',
      'packages/frontend/i18n',
      'blockmind/polymind/all',
      'tools/utils',
    ],
  },
  {
    location: 'packages/frontend/core',
    name: '@polymind/core',
    workspaceDependencies: [
      'blockmind/framework/global',
      'blockmind/polymind/all',
      'blockmind/polymind/blocks/root',
      'blockmind/polymind/components',
      'blockmind/polymind/shared',
      'blockmind/framework/std',
      'packages/frontend/component',
      'packages/common/debug',
      'packages/frontend/electron-api',
      'packages/common/env',
      'packages/common/error',
      'packages/common/graphql',
      'packages/frontend/i18n',
      'packages/common/nbstore',
      'packages/common/reader',
      'packages/frontend/templates',
      'packages/common/infra',
      'blockmind/polymind/ext-loader',
    ],
  },
  {
    location: 'packages/frontend/electron-api',
    name: '@polymind/electron-api',
    workspaceDependencies: ['packages/frontend/apps/electron'],
  },
  {
    location: 'packages/frontend/i18n',
    name: '@polymind/i18n',
    workspaceDependencies: [
      'packages/common/debug',
      'tools/cli',
      'tools/utils',
    ],
  },
  {
    location: 'packages/frontend/media-capture-playground',
    name: '@polymind/media-capture-playground',
    workspaceDependencies: ['packages/frontend/native'],
  },
  {
    location: 'packages/frontend/native',
    name: '@polymind/native',
    workspaceDependencies: [],
  },
  {
    location: 'packages/frontend/routes',
    name: '@polymind/routes',
    workspaceDependencies: ['tools/cli', 'tools/utils'],
  },
  {
    location: 'packages/frontend/templates',
    name: '@polymind/templates',
    workspaceDependencies: [],
  },
  {
    location: 'tests/blockmind',
    name: '@polymind-test/blockmind',
    workspaceDependencies: [
      'blockmind/integration-test',
      'blockmind/polymind/all',
      'tests/kit',
    ],
  },
  {
    location: 'tests/kit',
    name: '@polymind-test/kit',
    workspaceDependencies: [
      'blockmind/polymind/all',
      'tools/utils',
      'packages/common/infra',
    ],
  },
  {
    location: 'tests/polymind-cloud',
    name: '@polymind-test/polymind-cloud',
    workspaceDependencies: ['tests/kit'],
  },
  {
    location: 'tests/polymind-cloud-copilot',
    name: '@polymind-test/polymind-cloud-copilot',
    workspaceDependencies: ['tests/kit'],
  },
  {
    location: 'tests/polymind-desktop',
    name: '@polymind-test/polymind-desktop',
    workspaceDependencies: ['tests/kit', 'packages/frontend/electron-api'],
  },
  {
    location: 'tests/polymind-desktop-cloud',
    name: '@polymind-test/polymind-desktop-cloud',
    workspaceDependencies: ['tests/kit'],
  },
  {
    location: 'tests/polymind-local',
    name: '@polymind-test/polymind-local',
    workspaceDependencies: ['tests/kit', 'tools/cli', 'tools/utils'],
  },
  {
    location: 'tests/polymind-mobile',
    name: '@polymind-test/polymind-mobile',
    workspaceDependencies: ['tests/kit'],
  },
  {
    location: 'tools/@types/build-config',
    name: '@types/build-config',
    workspaceDependencies: [],
  },
  {
    location: 'tools/@types/env',
    name: '@types/polymind__env',
    workspaceDependencies: ['blockmind/polymind/all', 'packages/common/env'],
  },
  {
    location: 'tools/changelog',
    name: '@polymind/changelog',
    workspaceDependencies: [],
  },
  {
    location: 'tools/cli',
    name: '@polymind-tools/cli',
    workspaceDependencies: ['tools/utils', 'packages/common/s3-compat'],
  },
  {
    location: 'tools/commitlint',
    name: '@polymind/commitlint-config',
    workspaceDependencies: [],
  },
  {
    location: 'tools/copilot-result',
    name: '@polymind/copilot-result',
    workspaceDependencies: [],
  },
  {
    location: 'tools/doc-diff',
    name: '@polymind/doc-diff',
    workspaceDependencies: ['tools/cli'],
  },
  {
    location: 'tools/revert-update',
    name: '@polymind/revert-update',
    workspaceDependencies: ['tools/cli'],
  },
  {
    location: 'tools/utils',
    name: '@polymind-tools/utils',
    workspaceDependencies: [],
  },
];

export type PackageName =
  | '@blockmind/bs-docs'
  | '@blockmind/global'
  | '@blockmind/std'
  | '@blockmind/store'
  | '@blockmind/sync'
  | '@blockmind/integration-test'
  | '@blockmind/playground'
  | '@blockmind/polymind'
  | '@blockmind/polymind-block-attachment'
  | '@blockmind/polymind-block-bookmark'
  | '@blockmind/polymind-block-callout'
  | '@blockmind/polymind-block-code'
  | '@blockmind/polymind-block-data-view'
  | '@blockmind/polymind-block-database'
  | '@blockmind/polymind-block-divider'
  | '@blockmind/polymind-block-edgeless-text'
  | '@blockmind/polymind-block-embed'
  | '@blockmind/polymind-block-embed-doc'
  | '@blockmind/polymind-block-frame'
  | '@blockmind/polymind-block-image'
  | '@blockmind/polymind-block-latex'
  | '@blockmind/polymind-block-list'
  | '@blockmind/polymind-block-note'
  | '@blockmind/polymind-block-paragraph'
  | '@blockmind/polymind-block-root'
  | '@blockmind/polymind-block-surface'
  | '@blockmind/polymind-block-surface-ref'
  | '@blockmind/polymind-block-table'
  | '@blockmind/polymind-components'
  | '@blockmind/data-view'
  | '@blockmind/polymind-ext-loader'
  | '@blockmind/polymind-foundation'
  | '@blockmind/polymind-fragment-adapter-panel'
  | '@blockmind/polymind-fragment-doc-title'
  | '@blockmind/polymind-fragment-frame-panel'
  | '@blockmind/polymind-fragment-outline'
  | '@blockmind/polymind-gfx-brush'
  | '@blockmind/polymind-gfx-connector'
  | '@blockmind/polymind-gfx-group'
  | '@blockmind/polymind-gfx-link'
  | '@blockmind/polymind-gfx-mindmap'
  | '@blockmind/polymind-gfx-note'
  | '@blockmind/polymind-gfx-pointer'
  | '@blockmind/polymind-gfx-shape'
  | '@blockmind/polymind-gfx-template'
  | '@blockmind/polymind-gfx-text'
  | '@blockmind/polymind-gfx-turbo-renderer'
  | '@blockmind/polymind-inline-comment'
  | '@blockmind/polymind-inline-footnote'
  | '@blockmind/polymind-inline-latex'
  | '@blockmind/polymind-inline-link'
  | '@blockmind/polymind-inline-mention'
  | '@blockmind/polymind-inline-preset'
  | '@blockmind/polymind-inline-reference'
  | '@blockmind/polymind-model'
  | '@blockmind/polymind-rich-text'
  | '@blockmind/polymind-shared'
  | '@blockmind/polymind-widget-drag-handle'
  | '@blockmind/polymind-widget-edgeless-auto-connect'
  | '@blockmind/polymind-widget-edgeless-dragging-area'
  | '@blockmind/polymind-widget-edgeless-selected-rect'
  | '@blockmind/polymind-widget-edgeless-toolbar'
  | '@blockmind/polymind-widget-edgeless-zoom-toolbar'
  | '@blockmind/polymind-widget-frame-title'
  | '@blockmind/polymind-widget-keyboard-toolbar'
  | '@blockmind/polymind-widget-linked-doc'
  | '@blockmind/polymind-widget-note-slicer'
  | '@blockmind/polymind-widget-page-dragging-area'
  | '@blockmind/polymind-widget-remote-selection'
  | '@blockmind/polymind-widget-scroll-anchoring'
  | '@blockmind/polymind-widget-slash-menu'
  | '@blockmind/polymind-widget-toolbar'
  | '@blockmind/polymind-widget-viewport-overlay'
  | '@polymind/docs'
  | '@polymind/server-native'
  | '@polymind/server'
  | '@polymind/debug'
  | '@polymind/env'
  | '@polymind/error'
  | '@polymind/graphql'
  | '@toeverything/infra'
  | '@polymind/nbstore'
  | '@polymind/reader'
  | '@polymind/s3-compat'
  | '@polymind/electron'
  | '@polymind/electron-renderer'
  | '@polymind/mobile'
  | '@polymind/web'
  | '@polymind/component'
  | '@polymind/core'
  | '@polymind/electron-api'
  | '@polymind/i18n'
  | '@polymind/media-capture-playground'
  | '@polymind/native'
  | '@polymind/routes'
  | '@polymind/templates'
  | '@polymind-test/blockmind'
  | '@polymind-test/kit'
  | '@polymind-test/polymind-cloud'
  | '@polymind-test/polymind-cloud-copilot'
  | '@polymind-test/polymind-desktop'
  | '@polymind-test/polymind-desktop-cloud'
  | '@polymind-test/polymind-local'
  | '@polymind-test/polymind-mobile'
  | '@types/build-config'
  | '@types/polymind__env'
  | '@polymind/changelog'
  | '@polymind-tools/cli'
  | '@polymind/commitlint-config'
  | '@polymind/copilot-result'
  | '@polymind/doc-diff'
  | '@polymind/revert-update'
  | '@polymind-tools/utils';
