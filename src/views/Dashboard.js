/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col,
    Table,
} from "reactstrap";
// core components
import {
    dashboard24HoursPerformanceChart,
    dashboardEmailStatisticsChart,
    dashboardNASDAQChart,
} from "variables/charts.js";

class Dashboard extends React.Component {
    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Col md="12">
                            <Card>
                                <CardHeader>
                                    <CardTitle tag="h5">Last month spending</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Line
                                        data={dashboard24HoursPerformanceChart.data}
                                        options={dashboard24HoursPerformanceChart.options}
                                        width={400}
                                        height={100}
                                    />
                                </CardBody>
                                <CardFooter>
                                    <hr />
                                    <div className="stats">
                                        <i className="fa fa-history" /> Updated 3 minutes ago
                                    </div>
                                </CardFooter>
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
}

export default Dashboard;
