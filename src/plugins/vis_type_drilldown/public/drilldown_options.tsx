/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { EuiFlexGroup, EuiButtonEmpty } from '@elastic/eui';
import { FormattedMessage } from '@osd/i18n/react';

import { VisOptionsProps } from 'src/plugins/vis_default_editor/public';
import { Card, DrilldownVisParams } from './types';
import { CardForm } from './card_form';

function DrilldownOptions({ stateParams, setValue }: VisOptionsProps<DrilldownVisParams>) {
  const [formCount, setFormCount] = useState(stateParams.cards.length ?? 1);

  const addCardForm = () => {
    setFormCount(formCount + 1);
    addCard(); // Also add a new card to the array
  };

  const addCard = () => {
    const newCard: Card = {
      cardName: '',
      cardDescription: '',
      url: '',
    };
    setValue('cards', [...stateParams.cards, newCard]);
  };

  const updateCard = (index: number, card: any) => {
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
        {Array.from({ length: formCount }).map((_, index) => (
          <CardForm
            key={index}
            index={index}
            cards={stateParams.cards}
            card={stateParams.cards[index] || { cardName: '', cardDescription: '', url: '' }}
            onUpdateCard={updateCard}
          />
        ))}
        <EuiButtonEmpty size="xs" iconType="plusInCircleFilled" onClick={addCardForm}>
          <FormattedMessage id="visDefaultEditor.aggAdd.addButtonLabel" defaultMessage="Add" />
        </EuiButtonEmpty>
      </EuiFlexGroup>
    </>
  );
}

export { DrilldownOptions };
