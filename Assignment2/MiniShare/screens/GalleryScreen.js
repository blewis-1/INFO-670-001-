import React from 'react';
import { Text, Image, View, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const GalleryScreen = () => {
    const posts = [
        {
            img: require('../assets/minimalist01.jpg'),
            author: "James David",
            description: "The art of simple living."
        },
        {
            img: require('../assets/minimalist02.jpg'),
            author: "James David",
            description: "The art of simple living."
        },
        {
            img: require('../assets/minimalist03.jpeg'),
            author: "James David",
            description: "The art of simple living."
        },
        {
            img: require('../assets/minimalist04.jpg'),
            author: "James David",
            description: "The art of simple living."
        },

    ]

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.heading}> Minimalist Gallery </Text>
                <FlatList
                    style={styles.list}
                    data={posts}
                    renderItem={({ item }) => (
                        <View>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('GalleryDetailScreen', { post: item })
                            }} activeOpacity={0}>
                                <View style={styles.imageWrapper}>
                                    <Image style={styles.image} source={item.img} />
                                </View>
                            </TouchableOpacity>
                            <Text>{item.author}</Text>
                            <Text> {item.description} </Text>
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        paddingLeft: 16,
        paddingTop: 16,
    },
    list: {
        padding: 16,
    },
    imageWrapper: {
        width: '100%',
        height: 300,
        marginBottom: 8,
        marginTop: 8,
    },
    image: {
        width: '100%',
        height: "100%",
        objectFit: "cover",
        borderRadius: 8,
        // alignSelf:"center"
    }
});
export default GalleryScreen;

