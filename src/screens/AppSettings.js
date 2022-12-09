import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'
import { Dimensions } from "react-native";
import ChangePassword from './ChangePassword';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import SignIn from './SignIn';

const AppSettings = (props) => {
    const { width, height } = Dimensions.get("window");

    const onChangePasswordPressed = () => {
        props.navigation.navigate(ChangePassword)
    };
    const onAboutUsPressed = () => {
        props.navigation.navigate(AboutUs)
    };
    const onContactUsPressed = () => {
        props.navigation.navigate(ContactUs)
    };
    const onLogOutPressed = () => {
        props.navigation.navigate(SignIn)
    };

    return (
        <View style={{
            height: height,
            width: width,
        }}>
        <View style={{
            backgroundColor: "black",
            flex: 1
        }}>
            <View style={{
                backgroundColor: "orange",
                height: "23%",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                paddingHorizontal: 20
            }}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop:25,
                    width: "100%"
                }}>
                    <View style={{ width: "100%" }}>
                        <Text style={{
                            fontSize: 28,
                            color: "black",
                            fontWeight: "bold",
                            marginTop: 80,
                        }}>App Settings</Text>

                    </View>
                </View>
                <View style={{
                    alignItems: 'center',
                    padding: 20,
                    marginTop: 40
                }}>
                    <CustomButton
                        text="Change Password"
                        onPress={onChangePasswordPressed}
                        bgColor='black'
                        fgColor='orange'
                    />
                    <CustomButton
                        text="About Us"
                        onPress={onAboutUsPressed}
                        bgColor='black'
                        fgColor='orange'
                    />
                    <CustomButton
                        text="Contact Us"
                        onPress={onContactUsPressed}
                        bgColor='black'
                        fgColor='orange'
                    />
                    <CustomButton
                        text="LogOut"
                        onPress={onLogOutPressed}
                        bgColor='orange'
                        fgColor='black'
                    />
                </View>
            </View>
        </View>
        </View>
    )
}

export default AppSettings