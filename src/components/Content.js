import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Master from './Master';
import Detail from './Detail';

const Content = () => (
  <div className='container-fluid'>
    <Grid>
      <Row className="show-grid">
        <Col xs={12} md={4}>
          <Master/>
        </Col>
        <Col xs={12} md={8}>
          <Detail/>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default Content;