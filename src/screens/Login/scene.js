import React, { useState } from 'react';
import { emailFormat, passwordFormat } from '../../utils/constants';
import { 
    Text, 
    View, 
    TextInput, 
    TouchableHighlight, 
    Image 
} from 'react-native';

import Styles from './style';
import Router from '../../navigator/router';

export default function Login() {
    const [email, inputEmail] = useState('');
    const [password, inputPassword] = useState('');

    const [isEmail, validEmail] = useState(false);
    const [isPassword, validPassword] = useState(false);

    const isValid = () => {
        (isEmail && isPassword) ? Router.navigation('Map', Map) : alert('Invalid User');
    }
    
    return (
        <View style = {Styles.container}>
            <View style = {Styles.inputContainer}>
                <Image style = {Styles.inputIcon} source = {{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
                <TextInput style = {Styles.inputs}
                    placeholder = "Enter Email"
                    keyboardType = "email-address"
                    underlineColorAndroid = 'transparent'
                    onChangeText = {(currEmail) => {
                        inputEmail(currEmail);
                        validEmail(emailFormat.test(currEmail));
                    }}
                />
            </View>
        
            <View style={Styles.inputContainer}>
                <Image style={Styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
                <TextInput style={Styles.inputs}
                    placeholder = "Password"
                    secureTextEntry = {true}
                    underlineColorAndroid = 'transparent'
                    onChangeText = {(currPassword) => {
                        inputPassword(currPassword);
                        validPassword(passwordFormat.test(currPassword));
                    }}
                />
            </View>

            <TouchableHighlight style={[Styles.buttonContainer, Styles.loginButton]} onPress={() => { isValid() }}>
                <Text style={Styles.loginText}>Login</Text>
            </TouchableHighlight>

            <TouchableHighlight style={Styles.buttonContainer} onPress={() => Router.navigation('createAccount', {createAccount: 'createAccount'})}>
                <Text>Forgot your password?</Text>
            </TouchableHighlight>

            <TouchableHighlight style={Styles.buttonContainer} onPress = {() => Router.navigation('Register', {Register: 'Register'})}>
                <Text>Register</Text>
            </TouchableHighlight>
      </View>
    );
}