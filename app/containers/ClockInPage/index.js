/*
 *
 * ClockInPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectClockInPage from './selectors';
import messages from './messages';
import H1 from '../../components/H1';
import Button from '../../components/Button';
import DropDownInput from '../../components/DropDownInput';
import {
  projectChangeAction,
  taskChangeAction,
  clockInAction,
  getProjectsAction,
  getTasksAction,
} from './actions';

export class ClockInPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getProjects();
    this.props.getTasks();
  }
  render() {
    return (
      <div>
        <Helmet
          title="ClockInPage"
          meta={[
            { name: 'description', content: 'Description of ClockInPage' },
          ]}
        />
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <strong>Project</strong>
        <DropDownInput
          onChange={this.props.onProjectChange}
          options={this.props.ClockInPage.projects}
        />
        <strong>Task</strong>
        <DropDownInput
          onChange={this.props.onTaskChange}
          options={this.props.ClockInPage.tasks}
        />
        <Button onClick={this.props.onClockIn} type="secondary">Clock In</Button>
      </div>
    );
  }
}

ClockInPage.propTypes = {
  onProjectChange: PropTypes.func.isRequired,
  onTaskChange: PropTypes.func.isRequired,
  onClockIn: PropTypes.func.isRequired,
  getProjects: PropTypes.func,
  getTasks: PropTypes.func,
  ClockInPage: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  ClockInPage: makeSelectClockInPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onClockIn: () => {
      dispatch(clockInAction());
    },
    onTaskChange: (event) => {
      dispatch(taskChangeAction(event.target.value));
    },
    onProjectChange: (event) => {
      dispatch(projectChangeAction(event.target.value));
    },
    getProjects: () => {
      dispatch(getProjectsAction());
    },
    getTasks: () => {
      dispatch(getTasksAction());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClockInPage);
