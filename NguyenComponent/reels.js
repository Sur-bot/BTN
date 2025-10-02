import React from "react";
import { View, Text, FlatList, Dimensions, Image, StyleSheet } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const { height } = Dimensions.get("window");

const reelsData = require("./reels.json");

const ReelItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={height}
        play={true}
        videoId={item.videoId}
      />

      {/* Overlay thông tin */}
      <View style={styles.overlay}>
        <Image
          source={
            item.user.avatar.startsWith("http")
              ? { uri: item.user.avatar }
              : require("../BTN/assets/vanh.png")
          }
          style={styles.avatar}
        />
        <Text style={styles.username}>{item.user.name}</Text>
        <Text style={styles.caption}>{item.caption}</Text>
        <Text style={styles.likes}>❤️ {item.likes} | 💬 {item.comments}</Text>
      </View>
    </View>
  );
};

export default function ReelsScreen() {
  return (
    <FlatList
      data={reelsData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ReelItem item={item} />}
      pagingEnabled
      showsVerticalScrollIndicator={false}
      snapToInterval={height}
      decelerationRate="fast"
    />
  );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    width: "100%",
    backgroundColor: "black",
  },
  overlay: {
    position: "absolute",
    bottom: 80,
    left: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 6,
  },
  username: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  caption: {
    color: "white",
    marginTop: 4,
  },
  likes: {
    color: "white",
    marginTop: 8,
  },
});
