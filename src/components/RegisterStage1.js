import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, Image, Dimensions, TextInput, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const RegisterStage1 = ({ navigation }) => {
  return (
    <View style={{ flex:1}}>
    <ScrollView>

        <View style={{backgroundColor: '#ffffff'}}>
            <View style={{backgroundColor: '#489c80', padding: 65, borderBottomLeftRadius: 35}}>
                
                <View style={{justifyContent: 'center', alignItems:'center'}}>
                    <Image Style={{width:100, height: 100, resizeMode:'contain'}}/>
                </View>
                
                <View style={{justifyContent: 'center', alignItems:'center'}}>
                    <Text style={{fontWeight: '500', fontSize: 25, color: '#ffffff'}}>Registrar</Text>
                    <Text style={{fontWeight: '400', fontSize: 20, color: '#ffffff'}}>Usuario visitante</Text>
                </View>
            
            </View>
        </View>

        <View style={{backgroundColor: '#489c80'}}>
            <View style={{justifyContent: 'center', backgroundColor: '#ffffff', paddingHorizontal: 30, borderTopRightRadius: 35}}>
                
                <View style={{marginTop: 40, textAlign: 'center', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontWeight: '600', paddingLeft: 5, fontSize: 26, color: '#246b54', padding:20}}>Email</Text>
                    <TextInput style={{fontSize: 20,textAlign: 'center',width:300,height: 40, margin: 5, borderRadius: 100, color:'#244f37', backgroundColor: '#e7e7e7', padding: 10}}
                    autoCapitalize='none' autoCorrect={false} placeholder = {'Ingrese su email'}/>
                </View>

                <View style={{marginTop: 10, textAlign: 'center', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontWeight: '600', paddingLeft: 5, fontSize: 26, color: '#246b54', padding:20}}>Username</Text>
                    <TextInput style={{fontSize: 20,textAlign: 'center',width:300,height: 40, margin: 5, borderRadius: 100, color:'#244f37', backgroundColor: '#e7e7e7', padding: 10}}
                    autoCapitalize='none' autoCorrect={false} placeholder = {'Ingrese un username'}/>
                </View>

            
                <View style={{display:'flex', marginTop: 20, alignItems:'center', justifyContent:'center'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('RegisterStage2')}>
                        <View style={{margin: 5, backgroundColor: '#244f37', borderRadius: 100, paddingVertical: 10, textAlign:'center', width:300}}>
                            <Text style={{color: 'white', fontSize: 20}}>Continuar</Text>
                        </View>
                    </TouchableOpacity>

                </View>
                

                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
                    <Text style={{fontWeight: '300', paddingLeft: 5, fontSize: 17, color: '#244f37'}}><br></br>Ya tienes una cuenta?</Text>
                    </TouchableOpacity>
                </View>

            
            

            </View>
        </View>
        </ScrollView>
    </View>

    );
};

export default RegisterStage1;

const styles = StyleSheet.create({

});