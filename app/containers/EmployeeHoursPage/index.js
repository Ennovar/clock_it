/*
 *
 * EmployeeHoursPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectEmployeeHoursPage from './selectors';
import messages from './messages';
import H1 from '../../components/H1';
import HoursTable from '../../components/HoursTable';
import DateRangeInput from '../../components/DateRangeInput';
import {
  getTimeEntriesAction,
} from './actions';

export class EmployeeHoursPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getTimeEntries();
  }
  render() {
    return (
      <div>
        <Helmet
          title="EmployeeHoursPage"
          meta={[
            { name: 'description', content: 'Description of EmployeeHoursPage' },
          ]}
        />
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <DateRangeInput />
        <HoursTable timeEntries={this.props.EmployeeHoursPage.timeEntries} />
      </div>
    );
  }
}

EmployeeHoursPage.propTypes = {
  getTimeEntries: PropTypes.func,
  timeEntries: PropTypes.func,
  EmployeeHoursPage: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  EmployeeHoursPage: makeSelectEmployeeHoursPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getTimeEntries: () => {
      dispatch(getTimeEntriesAction());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeHoursPage);
