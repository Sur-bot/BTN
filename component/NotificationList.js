// components/NotificationList.js
import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { notifications } from "./Notifications"

export default function NotificationList({ navigation }) {
  return (
    
    <FlatList
      data={notifications}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() =>
            navigation.navigate("NotificationDetail", { notification: item })
          }
        >
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text numberOfLines={2} style={styles.desc}>
              {item.desc}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 2,
  },
  image: { width: 100, height: 100 },
  textContainer: { flex: 1, padding: 10 },
  title: { fontSize: 16, fontWeight: "bold" },
  desc: { color: "gray" },
});
