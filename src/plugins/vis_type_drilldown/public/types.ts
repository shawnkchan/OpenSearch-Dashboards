/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NavigationPublicPluginStart } from '../../navigation/public';
import { VisualizationsSetup } from '../../visualizations/public';
import { Arguments } from '../../vis_type_markdown/public/types';

export interface VisDrilldownPluginSetup {
  getGreeting: () => string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface VisDrilldownPluginStart {}

export interface AppPluginStartDependencies {
  navigation: NavigationPublicPluginStart;
  visualizations: VisualizationsSetup;
}

// export interface Arguments {
//   markdown: string;
//   font: Style;
//   openLinksInNewTab: boolean;
// }

// export interface DrilldownVisParams {
//   markdown: Arguments['markdown'];
//   openLinksInNewTab: Arguments['openLinksInNewTab'];
//   fontSize: number;
// }

export interface DrilldownArguments {
  cardName: string;
  cardDescription: string;
}

export interface DrilldownVisParams {
  cardName: DrilldownArguments['cardName'];
  cardDescription: DrilldownArguments['cardDescription'];
}
