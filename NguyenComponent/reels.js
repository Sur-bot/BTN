import React, { useRef } from "react";
import { View, Text, FlatList, Dimensions, Image, StyleSheet } from "react-native";
import { Video } from "expo-av";

const { height } = Dimensions.get("window");
const reelsData = require("./reels.json");

const videoSources = {
  vid1: require("../assets/vid1.mp4"),
  vid2: require("../assets/vid2.mp4"),
  vid3: require("../assets/vid3.mp4"),
};

const avatarSources = {
  vanh2: require("../assets/vanh2.png"),
  vanh: require("../assets/vanh.png"),
  tuan: require("../assets/tuan.png"),
};

const ReelItem = React.forwardRef(({ item, isActive }, ref) => {
  return (
    <View style={styles.container}>
      <Video
        ref={ref}
        source={videoSources[item.video]}
        style={styles.video}
        resizeMode="cover"
        shouldPlay={isActive}   // chỉ play khi active
        isLooping
      />
      <View style={styles.overlay}>
        <Image source={avatarSources[item.user.avatar]} style={styles.avatar} />
        <Text style={styles.username}>{item.user.name}</Text>
        <Text style={styles.caption}>{item.caption}</Text>
        <Text style={styles.likes}>👍 {item.likes} | 💬 {item.comments}</Text>
      </View>
    </View>
  );
});

export default function ReelsScreen() {
  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 80 }).current;

  return (
    <FlatList
      data={reelsData}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => (
        <ReelItem
          ref={(el) => (videoRefs.current[index] = el)}
          item={item}
          isActive={activeIndex === index}
        />
      )}
      pagingEnabled
      showsVerticalScrollIndicator={false}
      snapToInterval={height}
      decelerationRate="fast"
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={viewConfig}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    width: "100%",
    backgroundColor: "black",
  },
  video: {
    flex: 1,
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
