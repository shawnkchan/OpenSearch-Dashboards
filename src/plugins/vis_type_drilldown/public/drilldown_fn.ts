/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { i18n } from '@osd/i18n';
import { ExpressionFunctionDefinition, Render } from '../../expressions/public';
import { DrilldownArguments, DrilldownVisParams } from './types';

export interface DrilldownVisRenderValue {
  visType: 'drilldown';
  visParams: DrilldownVisParams;
}

export type DrilldownVisExpressionFunctionDefinition = ExpressionFunctionDefinition<
  'drilldownVis',
  unknown,
  DrilldownArguments,
  Render<DrilldownVisRenderValue>
>;

export const createDrilldownVisFn = (): DrilldownVisExpressionFunctionDefinition => ({
  name: 'drilldownVis',
  type: 'render',
  inputTypes: [],
  help: i18n.translate('visDrilldown.function.help', {
    defaultMessage: 'Drilldown visualization',
  }),
  args: {
    cardName: {
      types: ['string'],
      aliases: ['_'],
      required: true,
      help: i18n.translate('visTypeDrilldown.function.cardName.help', {
        defaultMessage: 'Card name',
      }),
    },
    cardDescription: {
      types: ['string'],
      aliases: ['_'],
      required: true,
      help: i18n.translate('visTypeDrilldown.function.cardDescription.help', {
        defaultMessage: 'Card description',
      }),
    },
    url: {
      types: ['string'],
      aliases: ['_'],
      required: true,
      help: i18n.translate('visTypeDrilldown.function.url.help', {
        defaultMessage: 'URL',
      }),
    },
    cards: {
      types: [],
      help: i18n.translate('visTypeDrilldown.function.cards.help', {
        defaultMessage: 'Cards',
      }),
    },
  },
  fn(input, args) {
    return {
      type: 'render',
      as: 'drilldown_vis',
      value: {
        visType: 'drilldown',
        visParams: {
          cardName: args.cardName,
          cardDescription: args.cardDescription,
          url: args.url,
          cards: args.cards,
        },
      },
    };
  },
});
