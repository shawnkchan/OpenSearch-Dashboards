/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { i18n } from '@osd/i18n';
import { DrilldownOptions } from './drilldown_options';
import { SettingsOptions } from './settings_options_lazy';
import { DefaultEditorSize } from '../../vis_default_editor/public';
import { toExpressionAst } from './to_ast';
import { AggGroupNames } from '../../data/public';
import { Schemas } from '../../vis_default_editor/public';
import { DrilldownList } from './drilldown_options_list';

export const drillDownVisDefinition = {
  name: 'drilldown',
  title: 'Drilldown',
  isAccessible: true,
  icon: 'dashboardApp',
  description: i18n.translate('visTypeMarkdown.markdownDescription', {
    defaultMessage: 'I LOVE drilldown!',
  }),
  toExpressionAst,
  visConfig: {
    defaults: {
      cardName: '',
      cardDescription: '',
    },
  },
  editorConfig: {
    optionTabs: [
      {
        name: 'advanced',
        title: i18n.translate('visTypeMarkdown.tabs.dataText', {
          defaultMessage: 'Data',
        }),
        editor: DrilldownOptions,
      },
      {
        name: 'options',
        title: i18n.translate('visTypeMarkdown.tabs.optionsText', {
          defaultMessage: 'Options',
        }),
        editor: SettingsOptions,
      },
    ],
    enableAutoApply: true,
    defaultSize: DefaultEditorSize.MEDIUM,
    // schemas: new Schemas([
    //   {
    //     group: AggGroupNames.Metrics,
    //     name: 'metric',
    //     title: i18n.translate('visTypeMetric.schemas.metricTitle', { defaultMessage: 'Metric' }),
    //     min: 1,
    //     aggFilter: [],
    //     aggSettings: {
    //       top_hits: {
    //         allowStrings: true,
    //       },
    //     },
    //     defaults: [
    //       {
    //         type: 'count',
    //         schema: 'metric',
    //       },
    //     ],
    //   },
    // ]),
  },
  options: {
    showTimePicker: false,
    showFilterBar: false,
  },
  requestHandler: 'none',
  responseHandler: 'none',
  inspectorAdapters: {},
};
