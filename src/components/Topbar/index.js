import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import moment from 'moment';
import {AutoComplete,Input,DatePicker,Select,Row,Col } from 'antd';
import {TopbarHolder} from './style.js';

const Search = Input.Search;
const Option = Select.Option;

class Topbar extends Component{
    state = {advertisers:[],searchList:[],searchText:"",date:moment().subtract(7,'d').format('DD-MM-YYYY'),disabled:false};
    componentWillReceiveProps(nextProps){
        this.setState({
            advertisers:[...new Set(nextProps.data.map(item => item.advertiserName))]
        })
    }

    customDate = (date, dateString) => {
        this.setState({disabled:true,date:moment(dateString,"YYYY-MM-DD").format('DD-MM-YYYY')});
    }

    handleChange = (value) => {
        switch(value){
            case 'a':
                this.setState({date:moment().subtract(7,'d').format('DD-MM-YYYY')});return;
            case 'b':
                this.setState({date:moment().subtract(1,'months').format('DD-MM-YYYY')});return;
            case 'c':
                this.setState({date:moment().subtract(4,'months').format('DD-MM-YYYY')});return;
            case 'd':
                this.setState({date:moment().subtract(1,'years').format('DD-MM-YYYY')});return;
            default:
                return;
        }
        
      }

    handleSearch = (value) =>{
        this.setState({searchList: this.state.advertisers.filter(item => item.toUpperCase().indexOf(value.toUpperCase()) !== -1), searchText:value });
    }
    
    handleSelect = (value) => {
        this.setState({searchText:value});
    }


    render(){
        return(
            <TopbarHolder>
                <Row type="flex" justify="center" align="top">
                    <Col span={4}><div className="logo" /></Col>
                    <Col span={8}>
                    <AutoComplete
                        dataSource={this.state.searchList}
                        style={{width:'70%', opacity:.9, margin:'16px 28px 16px 30px'}}
                        onSearch={this.handleSearch}
                        onSelect={this.handleSelect}
                    >
                        <Search
                            placeholder="input search text"
                            onSearch={()=>{this.props.searchAds(this.state.searchText,this.state.date)}}
                            enterButton
                            />
                    </AutoComplete>
                    </Col>
                    <Col span={5}>
                    <Select
                        style={{ width: '70%',opacity:.9, margin:'16px 28px 16px 30px' }}
                        defaultActiveFirstOption={true}
                        onChange={this.handleChange}
                        disabled={this.state.disabled}
                        defaultValue="a"
                    >
                        <Option value="a">Last 7 days</Option>
                        <Option value="b">Last Month</Option>
                        <Option value="c">Last Quater</Option>
                        <Option value="d">Last Year</Option>
                    </Select>
                       OR
                    </Col>
                    <Col span={7}>
                        <DatePicker style={{ width: '50%',opacity:.9, margin:'16px 28px 16px 30px' }} onChange={this.customDate}/>
                    </Col>
                </Row>
			</TopbarHolder>
        );
    }
}

const mapStateToProps = ({data,search}) => {
    return {data,search};
}

export default connect(mapStateToProps, actions)(Topbar);