import React, { useState } from 'react';
import { addDays } from 'date-fns';
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    Table,
} from 'reactstrap';
import { DateRangePicker } from 'react-date-range';

const Date = () => {
    const [state, setState] = useState([
        {
            startDate: window.Date(2020/10/10),
            endDate: addDays(new window.Date(), 1),
            key: 'selection'
        }
    ]);
    return (
        <>
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Date</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <DateRangePicker
                                    onChange={item => setState([item.selection])}
                                    showSelectionPreview={true}
                                    moveRangeOnFirstSelection={false}
                                    months={2}
                                    ranges={state}
                                    direction="horizontal"
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Transaction</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Table responsive>
                                    <thead className="text-primary">
                                        <tr>
                                            <th>Subscription</th>
                                            <th>Amount</th>
                                            <th className="text-right">Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Netflix</td>
                                            <td>$105,70</td>
                                            <td className="text-right"><a href="#">Details</a></td>
                                        </tr>
                                        <tr>
                                            <td>Spotify</td>
                                            <td>$56,78</td>
                                            <td className="text-right"><a href="#">Details</a></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Date;
