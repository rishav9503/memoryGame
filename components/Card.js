import { View, Text, StyleShee, Dimensions,StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'
const rows = 4;
const cols = 4;
const marginHorizontal = 2;
const marginVertical = 2;
const containerHeight =  Dimensions.get('window').width -10
const containerWidth =  Dimensions.get('window').width -10
const width = (containerWidth / cols) - (marginHorizontal * (cols ));
const height = (containerHeight / rows);
export default function Card({ item, id, handleClick, buttonDisabled, }) {



        function borderColor (item){

            if(item.stat === ""){
                return 'gold'
            }
            else if(item.stat === 'active'){
                return 'blue'
            }
            else if(item.stat === 'correct'){
                return 'green'
            }
            else{
                return 'red'
            }
        }
     function renderText(item){

        if(item.stat === ""){
            return ''
        }
        else if(item.stat === 'active'){
            return item.text
        }
        else if(item.stat === 'correct'){
            return item.text
        }
      else{
         return  item.text
      }
     }

    return (
        <TouchableHighlight
            disabled={(item.stat === 'active' || item.stat === 'correct' ||buttonDisabled) ? true : false}
            style={[styles.boxContainer, { borderColor: borderColor(item) }]}
            onPress={() => handleClick(id)}>
            <Text style={styles.cardText}>{renderText(item)}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    boxContainer: {
        marginTop: marginVertical,
        marginBottom: marginVertical,
        marginLeft: marginHorizontal,
        marginRight: marginHorizontal,
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D2C939',
        borderRadius:4,
        elevation:5,
        borderWidth:5, 
      },
      cardText:{
          fontSize:32,
          color:'#111111',

      },
})