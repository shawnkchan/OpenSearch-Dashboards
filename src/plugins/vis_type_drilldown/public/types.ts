/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NavigationPublicPluginStart } from '../../navigation/public';
import { VisualizationsSetup } from '../../visualizations/public';

// export interface VisDrilldownPluginSetup {
//   getGreeting: () => string;
// }
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface VisDrilldownPluginStart {}

export interface AppPluginStartDependencies {
  navigation: NavigationPublicPluginStart;
  visualizations: VisualizationsSetup;
}

export interface Card {
  cardName: string;
  cardDescription: string;
  cardUrl: string;
}

export interface DrilldownArguments {
  cards: Card[];
}

export interface DrilldownVisParams {
  cards: Card[];
}
