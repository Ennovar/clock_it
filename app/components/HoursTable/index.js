/**
*
* HoursTable
*
*/

import React from 'react';
import Table, {
  Thead,
  Tbody,
  Tr,
  Td,
} from '../Table';

class HoursTable extends React.Component { // eslint-disable-line react/prefer-stateless-function
  getTableRows(timeEntries) {
    const rows = [];
    if (timeEntries) {
      for (let i = 0; i < timeEntries.length; i += 1) {
        const t = timeEntries[i];
        rows.push(
          <Tr>
            <Td></Td>
            <Td>Here</Td>
            <Td>{t.start_time}</Td>
            <Td>{t.end_time}</Td>
            <Td>Here</Td>
          </Tr>
        );
      }
    }
    return rows;
  }
  render() {
    return (
      <div>
        <Table>
          <Thead>
            <Tr>
              <Td>
                Project Name
              </Td>
              <Td>
                Task Name
              </Td>
              <Td>
                Clock In
              </Td>
              <Td>
                Clock Out
              </Td>
              <Td>
                Total Hours
              </Td>
            </Tr>
          </Thead>
          <Tbody>
            {this.getTableRows(this.props.timeEntries)}
          </Tbody>
        </Table>
      </div>
    );
  }
}

HoursTable.propTypes = {
  timeEntries: React.PropTypes.array,
};

export default HoursTable;
