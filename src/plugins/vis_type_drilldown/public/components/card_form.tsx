/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  EuiPanel,
  EuiTitle,
  EuiTextArea,
  EuiFlexItem,
  EuiFieldText,
  EuiAccordion,
  EuiFlexGroup,
} from '@elastic/eui';
import { Card } from '../types';

interface CardFormProps {
  index: number;
  card: Card;
  updateCard: (index: number, card: Card) => void;
}

const CardForm = ({ index, card, updateCard }: CardFormProps) => {
  return (
    <EuiAccordion
      id={index}
      buttonContent={`Drilldown ${index + 1}`}
      paddingSize="s"
      initialIsOpen={true}
    >
      <EuiPanel paddingSize="s">
        <EuiFlexGroup direction="column" gutterSize="m" className="eui-fullHeight">
          <EuiFlexItem>
            <EuiTitle size="xs">
              <h2>
                <label htmlFor="drilldownVisInput">Card Name</label>
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
                <label htmlFor="drilldownVisInput">Description</label>
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
                <label htmlFor="drilldownVisInput">Url</label>
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
        </EuiFlexGroup>
      </EuiPanel>
    </EuiAccordion>
  );
};

export { CardForm };
