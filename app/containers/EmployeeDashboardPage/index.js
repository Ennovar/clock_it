/*
 *
 * EmployeeDashboardPage
 *
 */
import styled from 'styled-components';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectEmployeeDashboardPage from './selectors';
import messages from './messages';
import H1 from '../../components/H1';
import Button from '../../components/Button';
import {
  clockInAction,
  clockOutAction,
  viewHoursAction,
} from './actions';
const Form = styled.div`
  display: inline-block;
  * {
    display: inline-block;
    margin-left: 8px;
  }
`;
export class EmployeeDashboardPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="EmployeeDashboardPage"
          meta={[
            { name: 'description', content: 'Dashboard' },
          ]}
        />
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <Form>
          <Button onClick={this.props.onClockIn} >Clock In</Button>
          <Button onClick={this.props.onClockOut} >Clock Out</Button>
          <Button onClick={this.props.onViewHours} >Hours</Button>
        </Form>
      </div>
    );
  }
}

EmployeeDashboardPage.propTypes = {
  onClockIn: PropTypes.func,
  onClockOut: PropTypes.func,
  onViewHours: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  EmployeeDashboardPage: makeSelectEmployeeDashboardPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onClockIn: () => {
      dispatch(clockInAction());
    },
    onClockOut: () => {
      dispatch(clockOutAction());
    },
    onViewHours: () => {
      dispatch(viewHoursAction());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDashboardPage);
