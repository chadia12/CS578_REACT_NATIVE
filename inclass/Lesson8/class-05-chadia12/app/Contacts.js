import * as Contacts from 'expo-contacts';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function MyContacts() {
    const [first, setFirst] = useState(null)
    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Emails],
                });
                if (data.length > 0) {
                    const contact = data[0];
                    setFirst(contact);
                }
            }
        })();
    }, []);

    return (
        <View style={styles.container}>
            <Text>Contacts Module Example</Text>
            {first && <Text>{JSON.stringify(first)}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
