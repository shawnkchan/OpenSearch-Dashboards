/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { EuiCard, EuiFlexItem, EuiIcon } from '@elastic/eui';
import { DrilldownVisParams } from './types';

interface DrilldownVisComponentProps extends DrilldownVisParams {
  renderComplete: () => void;
}

const DrilldownVisComponent = ({ cards, renderComplete }: DrilldownVisComponentProps) => {
  useEffect(renderComplete); // renderComplete will be called after each render to signal, that we are done with rendering.

  return (
    <>
      {cards &&
        cards.map((card, index) => (
          <EuiFlexItem key={index}>
            <EuiCard
              icon={<EuiIcon size="xl" type="dashboardApp" />}
              title={card.cardName}
              layout="horizontal"
              description={card.cardDescription}
              onClick={() => window.open(card.cardUrl, '_blank')}
              paddingSize="m"
            />
          </EuiFlexItem>
        ))}
    </>
  );
};

// default export required for React.Lazy
// eslint-disable-next-line import/no-default-export
export { DrilldownVisComponent as default };
