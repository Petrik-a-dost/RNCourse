import {StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View>
               <Text>Another text</Text>
            </View>
            <Text>Hello World!</Text>
            <Button title='tap me' />
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
