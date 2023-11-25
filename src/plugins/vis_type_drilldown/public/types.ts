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

export interface Card {
  cardName: string;
  cardDescription: string;
  url: string;
}

export interface DrilldownArguments {
  cardName: string;
  cardDescription: string;
  url: string;
  cards: Card[];
}

export interface DrilldownVisParams {
  cardName: string;
  cardDescription: string;
  url: string;
  cards: Card[];
}
