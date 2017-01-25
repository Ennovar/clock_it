/*
 *
 * AdminDashboardPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import makeSelectAdminDashboardPage from './selectors';
import messages from './messages';
import H1 from '../../components/H1';
import H2 from '../../components/H2';
import Button from '../../components/Button';
import HoursTable from '../../components/HoursTable';
import DateRangeInput from '../../components/DateRangeInput';
import LoadingIndicator from '../../components/LoadingIndicator';
import {
  projectHoursViewAction,
  peopleHoursViewAction,
} from './actions';
const Options = styled.div`
  display: inline-block;
  * {
    display: inline-block;
    margin-left: 8px;
  }
`;
export class AdminDashboardPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="AdminDashboardPage"
          meta={[
            { name: 'description', content: 'Description of AdminDashboardPage' },
          ]}
        />
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <Options>
          <Button onClick={this.props.onPeopleHoursView} >Peoples Hours</Button>
          <Button onClick={this.props.onProjectHoursView} >Project Hours</Button>
        </Options>
        <DateRangeInput onFromChanged={this.props.onFromChanged} onEndChanged={this.props.onEndChanged} />
        {this.props.AdminDashboardPage.loading ?
          <LoadingIndicator />
        :
          <div>
            {this.props.AdminDashboardPage.peopleHoursViewActive &&
              <div>
                <Button>Export</Button>
                <H2>Peoples Hours</H2>
                <HoursTable size={10} />
              </div>
            }
            {this.props.AdminDashboardPage.projectHoursViewActive &&
              <div>
                <Button>Export</Button>
                <H2>Project Hours</H2>
                <HoursTable size={4} />
              </div>
            }
          </div>
        }
      </div>
    );
  }
}

AdminDashboardPage.propTypes = {
  onPeopleHoursView: React.PropTypes.func,
  onProjectHoursView: React.PropTypes.func,
  onEndChanged: React.PropTypes.func,
  onFromChanged: React.PropTypes.func,
  loading: React.PropTypes.bool,
  peopleHoursViewActive: React.PropTypes.bool,
  projectHoursViewActive: React.PropTypes.bool,
  AdminDashboardPage: React.PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  AdminDashboardPage: makeSelectAdminDashboardPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onPeopleHoursView: () => {
      dispatch(peopleHoursViewAction());
    },
    onProjectHoursView: () => {
      dispatch(projectHoursViewAction());
    },
    onEndChanged: () => {
    },
    onFromChanged: () => {
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboardPage);
