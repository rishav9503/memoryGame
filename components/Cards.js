import { View, Text, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import Card from './Card'



export default function Cards() {
	const cardData = [
		{ id: 1, text: 'A', stat: "" },
		{ id: 1, text: 'A', stat: "" },
		{ id: 2, text: 'B', stat: "" },
		{ id: 2, text: 'B', stat: "" },
		{ id: 3, text: 'C', stat: "" },
		{ id: 3, text: 'C', stat: "" },
		{ id: 4, text: 'D', stat: "" },
		{ id: 4, text: 'D', stat: "" },
		{ id: 5, text: 'E', stat: "" },
		{ id: 5, text: 'E', stat: "" },
		{ id: 6, text: 'F', stat: "" },
		{ id: 6, text: 'F', stat: "" },
		{ id: 7, text: 'G', stat: "" },
		{ id: 7, text: 'G', stat: "" },
		{ id: 8, text: 'H', stat: "" },
		{ id: 8, text: 'H', stat: "" }
	].sort(() => Math.random() - 0.5)


	const [items, setItems] = useState(cardData)
	const [prev, setPrev] = useState(-1)
	const [buttonDisabled, setButtonDisabled] = useState(false)
	const [match, setMatch] = useState(0);
	const [turns, setTurns] = useState(0);

	function check(current) {

		if (items[current].id == items[prev].id) {
			setMatch(match+1)
			setTurns(turns+1)
			items[current].stat = "correct"
			items[prev].stat = "correct"
			setItems([...items])
			setPrev(-1)
			setButtonDisabled(false)
			
			if(match ===7){
				console.log(match);
				Alert.alert(
					"Done",
					"Congratulations you have finished the game",
					[
					  {
						text: "RESTART",
						onPress: () => {
							setItems(cardData)
							setTurns(0)
							setMatch(0)
						},
						style: "cancel",
					  },
					],
				
				  );
			}
		} else {

			items[current].stat = "wrong"
			items[prev].stat = "wrong"
			setTurns(turns+1)
			setItems([...items])
			setTimeout(() => {
				items[current].stat = ""
				items[prev].stat = ""
				setItems([...items])
				setPrev(-1)
				setButtonDisabled(false)

			}, 1000)
		}
	}

	function handleClick(id) {

		if (prev === -1) {
			items[id].stat = "active"
			setItems([...items])
			setPrev(id)
		} else {
			setButtonDisabled(true)
			check(id)
		}
	}


  


	return (
		<View >
			<View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
				<View style={styles.counterStyle}>
					<Text style={{textAlign:'center'}}>Matches</Text>
					<Text style={styles.textValue}>{match}</Text>
				</View>
				<View  style={styles.counterStyle}>
					<Text>Attempts</Text>
					<Text style={styles.textValue}>{turns}</Text>
				</View>

			</View>
			<View style={styles.container}>

				{items.map((item, index) => {

					return (
						<Card
							key={index}
							item={item}
							id={index}
							buttonDisabled={buttonDisabled}
							handleClick={handleClick}
						/>
					)
				})}
			</View>
		</View>

	)
}
const styles = StyleSheet.create({
	container: {
		marginTop: 50,
		padding: 5,
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center'
	},
	textValue: {
		textAlign: 'center',
		color: '#E07B08',
		fontSize:18,
		fontWeight:'700'

	},
	counterStyle:{
		backgroundColor:'#67A2E7',
		justifyContent:'center',
		alignItems:'center',
		width:100,
		height:100,
		borderWidth:5,
		borderColor:'#98DB75',
		borderRadius:50,
	}

})