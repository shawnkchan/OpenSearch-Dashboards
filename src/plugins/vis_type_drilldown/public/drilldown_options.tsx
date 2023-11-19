/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useState } from 'react';
import {
  EuiPanel,
  EuiTitle,
  EuiTextArea,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFieldText,
  EuiAccordion,
} from '@elastic/eui';
import { FormattedMessage } from '@osd/i18n/react';

import { VisOptionsProps } from 'src/plugins/vis_default_editor/public';
import { DrilldownVisParams } from './types';

function DrilldownOptions({ stateParams, setValue }: VisOptionsProps<DrilldownVisParams>) {
  const onMarkdownUpdate = useCallback(
    (value: DrilldownVisParams['cardName']) => setValue('cardName', value),
    [setValue]
  );

  const onDescriptionUpdate = useCallback(
    (value: DrilldownVisParams['cardDescription']) => setValue('cardDescription', value),
    [setValue]
  );

  return (
    <EuiAccordion buttonContent="Drilldown 1">
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
              placeholder="Placeholder text"
              className="eui-fullHeight"
              value={stateParams.cardName}
              onChange={({ target: { value } }) => onMarkdownUpdate(value)}
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
              value={stateParams.cardDescription}
              onChange={({ target: { value } }) => onDescriptionUpdate(value)}
              fullWidth={true}
              data-test-subj="markdownTextarea"
            />
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPanel>
    </EuiAccordion>
  );
}

export { DrilldownOptions };
