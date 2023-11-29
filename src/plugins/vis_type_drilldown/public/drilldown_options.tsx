/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useState } from 'react';
import { EuiFlexGroup, EuiButtonEmpty, EuiFieldText } from '@elastic/eui';
import { FormattedMessage } from '@osd/i18n/react';

import { VisOptionsProps } from 'src/plugins/vis_default_editor/public';
import { Card, DrilldownVisParams } from './types';
import { CardForm } from './card_form';

function DrilldownOptions({ stateParams, setValue }: VisOptionsProps<DrilldownVisParams>) {
  const addCardForm = () => {
    const newCard: Card = {
      cardName: 'newDrilldownCard',
      cardDescription: 'newDrilldownCard',
      cardUrl: 'newDrilldownCard',
    };
    setValue('cards', [...stateParams.cards, newCard]);
  };

  const updateCard = (index: number, card: Card) => {
    const updatedCards = [...stateParams.cards];
    updatedCards[index] = card;
    setValue('cards', updatedCards);
  };

  return (
    <>
      <EuiFlexGroup
        className="visEditorSidebar"
        justifyContent="spaceBetween"
        gutterSize="none"
        responsive={false}
        direction="column"
      >
        {stateParams.cards &&
          stateParams.cards.map((card, index) => (
            <>
              <CardForm index={index} card={card} updateCard={updateCard} />
            </>
          ))}
        <EuiButtonEmpty size="xs" iconType="plusInCircleFilled" onClick={addCardForm}>
          <FormattedMessage id="visDefaultEditor.aggAdd.addButtonLabel" defaultMessage="Add" />
        </EuiButtonEmpty>
      </EuiFlexGroup>
    </>
  );
}

export { DrilldownOptions };
