import React, { useState, useCallback } from "react";
import { View, Text, FlatList, Dimensions, Image, StyleSheet } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const { height, width } = Dimensions.get("window");
const reelsData = require("./reels.json");

// mapping avatar local
const avatarMap = {
    vanh: require("../assets/vanh.png"),
    vanh2: require("../assets/vanh2.png"),
    tuan: require("../assets/tuan.png"),
};

const ReelItem = ({ item, isActive }) => {
    return (
        <View style={styles.container}>
            <YoutubePlayer
                height={height}
                play={isActive}
                videoId={item.videoId}
                forceAndroidAutoplay={true}   
                initialPlayerParams={{
                    controls: false,            
                    modestbranding: true,      
                    rel: false,                 
                    autoplay: true              
                }}
            />
            <View style={styles.overlayRight}>
                <Text style={styles.action}>👍 {item.likes}</Text>
                <Text style={styles.action}>👎</Text>
                <Text style={styles.action}>💬 {item.comments}</Text>
                <Text style={styles.action}>↗️</Text>
                <Image source={avatarMap[item.user.avatar]} style={styles.musicAvatar} />
            </View>
        </View>
    );
};

export default function ReelsScreen() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const onViewableItemsChanged = useCallback(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
        }
    }, []);

    return (
        <FlatList
            data={reelsData}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
                <ReelItem item={item} isActive={index === currentIndex} />
            )}
            pagingEnabled
            showsVerticalScrollIndicator={false}
            snapToInterval={height}
            decelerationRate="fast"
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={{ itemVisiblePercentThreshold: 80 }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        height,
        width,
        backgroundColor: "black",
    },
    overlayRight: {
        position: "absolute",
        right: 10,
        bottom: 100,
        alignItems: "center",
    },
    action: {
        color: "white",
        marginBottom: 20,
        fontSize: 16,
    },
    musicAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "white",
    },
});
