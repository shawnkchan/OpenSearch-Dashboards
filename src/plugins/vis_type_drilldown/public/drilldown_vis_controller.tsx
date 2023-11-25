/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { DrilldownVisParams } from './types';

interface DrilldownVisComponentProps extends DrilldownVisParams {
  renderComplete: () => void;
}

const DrilldownVisComponent = ({
  cardName,
  cardDescription,
  url,
  cards,
  renderComplete,
}: DrilldownVisComponentProps) => {
  useEffect(renderComplete); // renderComplete will be called after each render to signal, that we are done with rendering.

  return (
    <>
      <p>COOL</p>
      {/* <EuiFlexItem>
        <EuiCard
          icon={<EuiIcon size="xl" type="dashboardApp" />}
          title={cardName}
          description={cardDescription}
          onClick={() => window.open(url, '_blank')}
        />
      </EuiFlexItem> */}
      {/* <p>{cardName}</p> */}
    </>
  );
};

// default export required for React.Lazy
// eslint-disable-next-line import/no-default-export
export { DrilldownVisComponent as default };
