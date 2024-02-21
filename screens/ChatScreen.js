import { View, Text, StyleSheet, TextInput, TextInputComponent, FlatList } from 'react-native';
import React, { useState } from 'react'
import axios from 'axios';
import { styles } from '../theme';

const Chat = () => {
    const [data, setData] = useState([]);
    const apiKey = '';
    const apiUrl = '';
    const [message, setMessage] = useState('');

    const handleSend = async () => {
        const prompt = TextInput
        const response = await axios.post(apiUrl, {
            prompt: message,
            maxtokens: 1024,
            temperature: 0.5,
        },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                }
            });
        const text = response.data.choices[0].text;
        setData([...data, { type: 'user', 'text': TextInput }, { type: 'bot', 'text': text }]);
        setTextInput('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Movie Chat</Text>
            <FlatList data={data}
                keyExtractor={(item, index) => index.toString()}
                style={styles.body}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: "row", padding: 10 }}>
                        <Text style={{ fontWeight: 'bold', color: item.type === 'user' ? 'white' : 'black' }}>{item.type === 'user' ? 'Ninza' : 'Bot'}</Text>
                        <Text style={styles.bot}>{item.text}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default Chat

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eab308',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    body: {
        width: '100%',
        backgroundColor: '#eab308',
        padding: 10,
    },
    input: {
        width: '100%',
        height: 40,
        backgroundColor: '#eab308',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    button: {
        width: '100%',
        height: 40,
        backgroundColor: '#eab308',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    }
});