import React from 'react'
import { View, Image, Text, SafeAreaView, StyleSheet } from 'react-native'


function GalleryDetailScreen({ route }) {
    const { post } = route.params;

    return (
        !post ?
            <Text>Error: Post not found!</Text> :
            <SafeAreaView style={{ flex: 1 }}>
                <Image source={post.img} style={styles.image} />
                <Text>{post.author}</Text>
                <Text>{post.description}</Text>
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '90%',
        objectFit: 'contain',
    }
})

export default GalleryDetailScreen