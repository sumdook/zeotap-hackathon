import React, {Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import { Layout  } from 'antd';
import Topbar from './Topbar';
import Main from './Main';
const { Content, Footer } = Layout;


class App extends Component{
	
	componentWillMount(){
		this.props.dataHydrate();
	}

	render(){
		return(
				<Layout>
					<Topbar />
					<Content style={{ padding: '50px 50px 0 50px' }}>
					<Main />
					</Content>
					<Footer style={{ textAlign: 'center', verticalAlign:'center' }}>
						Made with <span role="img" aria-label="love">❤️</span> by <a href="http://www.soumiksur.com/">Soumik Sur</a>
					</Footer>
				</Layout>
			);
	}
}

export default connect(null,actions)(App);