/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  EuiPanel,
  EuiTitle,
  EuiTextArea,
  EuiFlexItem,
  EuiFieldText,
  EuiAccordion,
  EuiFlexGroup,
  EuiSuperSelect,
  EuiForm,
  EuiFormRow,
  EuiRadioGroup,
  EuiSelect,
} from '@elastic/eui';
import { i18n } from '@osd/i18n';
import { Card } from '../types';
interface CardFormProps {
  index: number;
  card: Card;
  updateCard: (index: number, card: Card) => void;
  options: any;
  valueOfSelected: string;
  onChange: () => void;
  showErrors: boolean;
  setEmptyField: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const CardForm = ({
  index,
  card,
  updateCard,
  options,
  valueOfSelected,
  onChange,
  showErrors,
  setEmptyField,
}: CardFormProps) => {
  // Variables for radio buttons
  const [radioIdSelected, setRadioIdSelected] = useState('test2');

  const radioChange = (optionId: string) => {
    setRadioIdSelected(optionId);
  };

  const radios = [
    {
      id: 'test1',
      label: 'Go to URL',
    },
    {
      id: 'test2',
      label: 'Go to dashboard',
    },
  ];

  // Variables for errors
  const errors = ['cardNameError', 'descriptionError'];

  return (
    <EuiAccordion
      id={String(index)}
      buttonContent={`Drilldown ${index + 1}`}
      paddingSize="s"
      initialIsOpen={true}
    >
      <EuiPanel paddingSize="s">
        {/* TODO: @ShawnkChan Logic for invalid form */}
        <EuiForm isInvalid={showErrors} error={errors}>
          {/* Name of Drilldown configuration */}
          <EuiFormRow
            label={i18n.translate('Card Name', { defaultMessage: 'Card Name' })}
            isInvalid={showErrors}
            error={errors[0]}
          >
            <EuiFieldText
              id="drilldownVisInput"
              value={card.cardName}
              onChange={({ target: { value } }) => {
                updateCard(index, { ...card, cardName: value });
                if (value.trim() === '') {
                  setEmptyField(true);
                }
              }}
              fullWidth={true}
            />
          </EuiFormRow>
          {/* Description of this Drilldown */}
          <EuiFormRow label={i18n.translate('Description', { defaultMessage: 'Description' })}>
            <EuiTextArea
              id="markdownVisInput"
              value={card.cardDescription}
              onChange={({ target: { value } }) => {
                updateCard(index, { ...card, cardDescription: value });
              }}
              data-test-subj="markdownTextarea"
            />
          </EuiFormRow>
          {/* Action radio buttons */}
          {/* TODO: @ShawnKchan figure out what this is meant to do */}
          <EuiFormRow>
            <EuiRadioGroup
              options={radios}
              idSelected={radioIdSelected}
              onChange={(id) => radioChange(id)}
              name="radio group"
              legend={{
                children: <span>Action</span>,
              }}
            />
          </EuiFormRow>
          {/* Select the destination */}
          {/* TODO: @Shawnkchan Make this dynamic */}
          <EuiFormRow
            label={i18n.translate('Select a destination', {
              defaultMessage: 'Select a destination',
            })}
          >
            <EuiSelect
              hasNoInitialSelection
              options={options}
              onChange={onChange}
              data-test-subj="chartPicker"
            />
          </EuiFormRow>
        </EuiForm>
      </EuiPanel>
    </EuiAccordion>
  );
};

export { CardForm };
