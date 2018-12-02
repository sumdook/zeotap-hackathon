import React, {Component } from 'react';
import {connect} from 'react-redux';
import { Table,Row,Col } from 'antd';

const columns = [{
    title: 'Brand',
    dataIndex: 'brand',
    key: 'brand',
  }, {
    title: 'First Campaign Name',
    dataIndex: 'first',
    key: 'first',
  }, {
    title: 'Count of campaigns',
    dataIndex: 'count',
    key: 'count',
  }];


class ContentTable extends Component{
	
	render(){
        const dataSource = this.props.results.map(item=>{return {key:item.id,brand:item.name,first:item.campaigns[0]? item.campaigns[0].name: "No Campaign in the given time range",count:item.campaigns.length} });
		return(
            <div>
                <Row>
                    <Col span={12}><h1>Hello {this.props.search.searchText}</h1></Col>
                    <Col span={12}><h3 style={{float:'right',opacity:.5}}>Showing campaigns post {this.props.search.date}</h3></Col>
                </Row>
                <br/>
                <Table columns={columns}  dataSource={dataSource}/>
            </div>
			);
	}
}

const mapStateToProps = ({data,search}) => {
    return {data,search};
}

export default connect(mapStateToProps)(ContentTable);