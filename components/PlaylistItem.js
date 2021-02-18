import React from 'react'
import { TouchableOpacity, StyleSheet, Image } from 'react-native'

const PlaylistItem = (props) => {
    const { playlist, displayPlaylist } = props

    return (
        <TouchableOpacity
            style={styles.item}
            onPress={() => displayPlaylist(playlist.id)}
        >
            <Image
                source={{ uri: playlist.images[0].url }}
                style={styles.image}
            />
        </TouchableOpacity>
    )
}

export default PlaylistItem

const styles = StyleSheet.create({
    item: {
        width: 180,
        height: 180,
        margin: 10
    },
    image: {
        width: '100%',
        height: '100%'
    }
});
