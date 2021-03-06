import React, {Component} from 'react'
import { 
    View, Image, Text
 } from "react-native";
import {Rating} from 'react-native-elements'



 export default class ItemList extends Component {
    constructor(props){
        super(props)
    //    this.item = this.props.item
    }
    ratingCompleted(){

    }


     render() {
         return (
             <View style = {{marginLeft:5}}>
                 <Image
                    source={{uri: this.props.image}}
                    style={{height:150, width:200, borderRadius:10}}>
                 </Image>
                 <View style={{flexDirection:'column', marginVertical:10, alignItems:'flex-start', justifyContent:'space-between'}}>
                    <Text style={{fontSize:16}}>{this.props.title}</Text>
                    <View style={{flexDirection:'row'}}>
                        <Rating
                            //showRating
                            type="star" 
                            fractions={1}
                            startingValue={this.props.rating}
                            ratingColor = "red"
                            imageSize={13}
                            onFinishRating={this.ratingCompleted}
                            style={{marginTop:5 }}
                            />
                        <Text style={{color: 'grey', marginLeft:5}}>(190 đánh giá)</Text>
                    </View>
                    
                 </View>
                 
             </View>
         );
     }
 }