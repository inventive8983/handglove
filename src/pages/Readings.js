import React, { Component }from 'react';
import {View, Text,Image, StyleSheet} from 'react-native';
import { db } from '../Config';
import * as firebase from 'firebase'

export default class Left extends Component {
    state = {
        user: {},
        letter: "A"
 };
  constructor(props) {
      super(props);
  }
  componentDidMount() {
    
    try {
      var uid = firebase.auth().currentUser.uid
      db.ref(`patient/${uid}`).on('value' , snapshot => {
        var data = snapshot.val()
        this.setState({user: data, letter: data.name[0]})
      })
    }
    catch(err){
      this.props.navigation.replace("Login")
    }
    
} 
render(){ 
      return(  
      <View style={{flex: 1, backgroundColor:"#196AFA"}}>
        <View style={styles.container}>
          <Text style={styles.title}>Hand Glove App</Text>

        </View>
        {this.state.user.readings && <View style={styles.container2}>
          <View style={styles.container3}>
              <View style={styles.imagebg}><Text style={{color:"#fff",fontSize:32}}>Y</Text></View>
              <Text style={styles.name}>{this.state.user.name}</Text>
              <Text>{this.state.user.email}</Text>
          </View>
          <View style={styles.container4}>
              <Text style={{width: "50%", fontWeight:'bold'}}>Finger</Text>
              <Text style={{fontWeight:'bold'}}>MCP</Text>
              <Text style={{fontWeight:'bold'}}>PIP</Text>
          </View>
          <View style={styles.container5odd}>
              <Text style={{width: "50%"}}>Index Finger</Text>
              <Text>23</Text>
              <Text>24</Text>
          </View>
          <View style={styles.container5}>
              <Text style={{width: "50%"}}>Index Finger</Text>
              <Text>23</Text>
              <Text>24</Text>
          </View>
          <View style={styles.container5odd}>
              <Text style={{width: "50%"}}>Index Finger</Text>
              <Text>23</Text>
              <Text>24</Text>
          </View>
          <View style={styles.container5}>
              <Text style={{width: "50%"}}>Index Finger</Text>
              <Text>23</Text>
              <Text>24</Text>
          </View>
        </View>}
        {!this.state.user.readings && <View style={styles.container2}>
          <View style={styles.container3}>
              <View style={styles.imagebg}><Text style={{color:"#fff",fontSize:32}}>{this.state.letter}</Text></View>
              <Text style={styles.name}>{this.state.user.name}</Text>
              <Text>{this.state.user.email}</Text>
          </View>
          <View style={styles.container6}>
            <Image style={{width: 128, height: 128}}
                source={require('../images/lurker.png')}/>
            <Text>No Readings Yet!!</Text>
          </View>
        </View>}
      </View>
    )  
  }  
}     
 
const styles = StyleSheet.create({
  container: {
    paddingTop: 56,
    paddingBottom: 32,
    paddingHorizontal: 16,
    justifyContent: 'center',
    height: 56,
  },
  container2: {
    backgroundColor: '#fff',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    height: "100%"
  },
  container6: {
    backgroundColor: '#fff',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    height: "70%",
    display: "flex",
    opacity: .4,
    alignItems: "center"
  },
  container3: {
    paddingTop: 56,
    paddingBottom: 32,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems:"center",
    height: "30%",
  },
  container4: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  container5: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor:"#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  container5odd: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor:"#eee",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    fontSize:24,
    color: "#fff",
  },
  name: {
    fontSize:32,
    fontWeight: "bold",
    marginVertical: 8
  },
  imagebg:{
    display:"flex",
    width: 64,
    height: 64,
    justifyContent:"center",
    alignItems:"center",
    borderRadius: 32,
    backgroundColor: "#000",
  }
});
