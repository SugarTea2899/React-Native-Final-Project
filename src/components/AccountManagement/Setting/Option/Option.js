import React, { useState } from 'react';
import { useContext } from 'react';
import {View, StyleSheet, Switch, Text } from 'react-native';
import { ThemeContext } from '../../../../contexts/ThemeContext';


const Option = ({title, helperText, hideHelperText = false, hideSwit = false, value = true , style, onChange = () => {}}) => {
    const [isEnabled, setIsEnabled] = useState(value);
    const {theme} = useContext(ThemeContext);

    const toggleSwitch = () => {

        setIsEnabled(!isEnabled);
        onChange(!isEnabled);
    }

    return (
        <View style={[styles.container, style]}>
            <View style={styles.textContainer}>
                <Text style={[styles.title, {color: theme.TEXT_COLOR}]}>
                    {title}
                </Text>
                {
                    !hideHelperText
                    &&
                    <Text style={[styles.helper, {color: theme.TEXT_COLOR_BLUR}]}>
                        {helperText}
                    </Text>
                }
            </View>
            {
                !hideSwit
                &&
                <Switch 
                    trackColor={{ false: "#767577", true: "steelblue" }} 
                    style={styles.swit} 
                    value={isEnabled} 
                    onValueChange={toggleSwitch} 
                    thumbColor={isEnabled ? "steelblue" : "#f4f3f4"}
                />
            }

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    textContainer: {
        flex: 5
    },
    title: {
        color: 'white',
        fontSize: 22
    },
    helper: {
        color: 'gray',
        fontSize: 12
    },
    swit: {
        flex: 1,
    }
});

export default Option;