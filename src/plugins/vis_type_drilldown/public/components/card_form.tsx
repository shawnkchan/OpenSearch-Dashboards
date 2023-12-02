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
}

const CardForm = ({
  index,
  card,
  updateCard,
  options,
  valueOfSelected,
  onChange,
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

  return (
    <EuiAccordion
      id={String(index)}
      buttonContent={`Drilldown ${index + 1}`}
      paddingSize="s"
      initialIsOpen={true}
    >
      <EuiPanel paddingSize="s">
        {/* TODO: @ShawnkChan Logic for invalid form */}
        <EuiForm>
          {/* Name of Drilldown configuration */}
          <EuiFormRow label="Card Name" className="">
            <EuiFieldText
              id="drilldownVisInput"
              className="eui-fullHeight"
              value={card.cardName}
              onChange={({ target: { value } }) => {
                updateCard(index, { ...card, cardName: value });
              }}
              fullWidth={true}
            />
          </EuiFormRow>
          {/* Description of this Drilldown */}
          <EuiFormRow label="Description">
            <EuiTextArea name="first" />
          </EuiFormRow>
          {/* Action radio buttons */}
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
          <EuiFormRow label="Select a destination">
            <EuiFieldText name="first" />
          </EuiFormRow>
          <EuiFlexGroup direction="column" gutterSize="m" className="eui-fullHeight">
            <EuiFlexItem>
              <EuiTitle size="xs">
                <h2>
                  <label
                    htmlFor={i18n.translate('drilldownVisInput', {
                      defaultMessage: 'Drilldown Visualisation CardName',
                    })}
                  >
                    Card Name
                  </label>
                </h2>
              </EuiTitle>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiFieldText
                id="drilldownVisInput"
                className="eui-fullHeight"
                value={card.cardName}
                onChange={({ target: { value } }) => {
                  updateCard(index, { ...card, cardName: value });
                }}
                fullWidth={true}
              />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiTitle size="xs">
                <h2>
                  <label
                    htmlFor={i18n.translate('drilldownVisInput', {
                      defaultMessage: 'Drilldown Visualisation Description',
                    })}
                  >
                    Description
                  </label>
                </h2>
              </EuiTitle>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiTextArea
                id="markdownVisInput"
                className="eui-fullHeight"
                value={card.cardDescription}
                onChange={({ target: { value } }) => {
                  updateCard(index, { ...card, cardDescription: value });
                }}
                fullWidth={true}
                data-test-subj="markdownTextarea"
              />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiTitle size="xs">
                <h2>
                  <label
                    htmlFor={i18n.translate('drilldownVisInput', {
                      defaultMessage: 'Drilldown Visualisation Url',
                    })}
                  >
                    Url
                  </label>
                </h2>
              </EuiTitle>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiFieldText
                id="drilldownVisInput"
                placeholder=""
                className="eui-fullHeight"
                value={card.cardUrl}
                onChange={({ target: { value } }) => {
                  updateCard(index, { ...card, cardUrl: value });
                }}
                fullWidth={true}
              />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiTitle size="xs">
                <h2>
                  <label
                    htmlFor={i18n.translate('drilldownVisInput', {
                      defaultMessage: 'Drilldown Visualisation Destination',
                    })}
                  >
                    Select a Destination
                  </label>
                </h2>
              </EuiTitle>
            </EuiFlexItem>
            <EuiSuperSelect
              options={options}
              valueOfSelected={valueOfSelected}
              onChange={onChange}
              fullWidth={true}
              data-test-subj="chartPicker"
            />
          </EuiFlexGroup>
        </EuiForm>
      </EuiPanel>
    </EuiAccordion>
  );
};

export { CardForm };
