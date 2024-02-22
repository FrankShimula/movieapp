import { View, Text, StyleSheet, TextInput, TextInputComponent, FlatList } from 'react-native';
import React, { useState } from 'react'
import axios from 'axios';
import { styles } from '../theme';

const Chat = () => {
    const [data, setData] = useState([]);
    const apiKey = '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';
    const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-002/completions';
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
        setMessage('');
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

