import React, {Component } from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import * as actions from '../../actions';

import {MainHolder} from './style';

import ContentTable from '../ContentTable';
import SearchPlaceholder from '../../containers/searchPlaceholder';
import NoResultHolder from '../../containers/noResultHolder';

class Main extends Component{
	state={results:[]}
	
	componentWillReceiveProps(nextProps){
		if(nextProps.search.searchText){
			this.setState({
				results: nextProps.data
				.filter(item=>{return item.advertiserName===nextProps.search.searchText;})
				.map(item =>{return {...item, campaigns:item.campaigns.filter(campaign=>{return moment(campaign.start_date, 'DD-MM-YYYY')>moment(nextProps.search.date,'DD-MM-YYYY')})}})
			});
		}
	}
	componentDidUpdate(){
		console.log(this.state.results);
	}
	renderMain = () => {
		if(!this.props.search.searchText){
			return <SearchPlaceholder />
		}
		else if(this.state.results.length===0){
			return <NoResultHolder />
		}
		else{
			return <ContentTable results={this.state.results}/>
		}
	}
	render(){
		return(
                <MainHolder>
					{this.renderMain()}
                </MainHolder>
			);
	}
}

const mapStateToProps = ({data,search}) => {
    return {data,search};
}

export default connect(mapStateToProps, actions)(Main);