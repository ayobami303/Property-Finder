'use strict';

import React, { Component} from 'react';
import {
	StyleSheet,
	Image,
	View,
	TouchableHighlight,
	FlatList,
	Text,
}from 'react-native';


export default class SearchResult extends Component {
	
	static navigationOptions = {
		title: 'Details',
	};

	render(){
		const {params} = this.props.navigation.state;

		var stats = params.details.bedroom_number + ' bed ' + params.details.property_type;
	    if (params.details.bathroom_number) {
	      stats += ', ' + params.details.bathroom_number + ' ' + (params.details.bathroom_number > 1
	        ? 'bathrooms' : 'bathroom');
	    }
		return(
			<View style={styles.container}>
				<View style={styles.detailContainer}>
					<Image style={styles.thumb} source={{ uri:params.details.img_url }}/>
					<Text style={styles.title}> {params.details.title} </Text>
					<Text style={styles.price}>Price: {params.details.price_formatted} </Text>
					<Text style={styles.detail} >Listed By: {params.details.lister_name} </Text>
					<Text style={styles.detail} >Property Type By: {stats } </Text>
					<Text style={styles.detail} >Available For: {params.details.listing_type} </Text>
	        		<Text style={styles.detail}>{params.details.summary}</Text>
        		</View>
			</View>
			);
	}
}

const styles = StyleSheet.create({
  thumb: {    
    height: 200,
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  price: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 30,
    color: '#656565'
  },
  container: {
    flexDirection: 'column',
    padding: 10,
    flex:1,
  },
  detail:{
  	fontSize: 20,
    color: '#656565'
  },
  detailContainer:{
  	flex:1,
  	backgroundColor: '#fff',
  	padding:8,
  }
});