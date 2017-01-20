/**
*
* DateRangeInput
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const DatePicker = styled.div`
  margin-bottom: 8px;
  margin-top: 8px;
`;
const Picker = styled.input`
  height: 29px;
  margin-left: 8px;
  margin-right: 8px;
  background: #eee;
`;
const Controls = styled.div`
  padding: 8px;
`;
class DateRangeInput extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <DatePicker>
        <div>
          <FormattedMessage {...messages.header} />
        </div>
        <Controls>
          <strong>From</strong>
          <Picker onChange={this.props.onFromChanged} type="date" />
          <strong>Two</strong>
          <Picker onChange={this.props.onEndChanged} type="date" />
        </Controls>
      </DatePicker>
    );
  }
}

DateRangeInput.propTypes = {
  onFromChanged: React.PropTypes.func,
  onEndChanged: React.PropTypes.func,
};

export default DateRangeInput;
