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

interface CardFormProps {
  index: number;
  cards: any[];
  card: any;
  onUpdateCard: (index: number, card: any) => void;
}

const CardForm = ({ index, cards, card, onUpdateCard }: CardFormProps) => (
  <EuiAccordion id={card.cardName} buttonContent={`Drilldown ${index + 1}`} paddingSize="s">
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
            onChange={({ target: { value } }) =>
              onUpdateCard(index, { ...cards[index], cardName: value })
            }
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
            onChange={({ target: { value } }) =>
              onUpdateCard(index, { ...cards[index], cardDescription: value })
            }
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
            value={card.url}
            onChange={({ target: { value } }) =>
              onUpdateCard(index, { ...cards[index], url: value })
            }
            fullWidth={true}
          />
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPanel>
  </EuiAccordion>
);

export { CardForm };
