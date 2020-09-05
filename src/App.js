import React, { Component } from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import './styles/custom.css';

import { Row, Col } from 'antd';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Row>
					<Col span={24}>col</Col>
				</Row>
				{ this.props.children }
			</div>
		);
	}
}

export default App;
