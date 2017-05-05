import React from 'react';
import {Text,View} from 'react-native';

const Header = (props)=>{
    return (
        <View style={styles.viewStyles}>
            <Text style={styles.textStyles}>{props.headerText}</Text>
        </View>
    );
}

const styles = {
    viewStyles:{
        borderTopWidth: 1,
        borderColor: "#0e2447",
        // marginTop: 27,
        padding: 5,
        backgroundColor : "#fff",
        width: "100%",
        // shadowColor:"#000",
        // shadowOffset: {width: 0, height:2},
        // shadowOpacity: 0.9,
        position: "relative",
    },

    textStyles:{
        color: "#0e2447",
        textAlign: "center",
        fontSize: 19,
        fontWeight: "700"
    }
}

export default Header;