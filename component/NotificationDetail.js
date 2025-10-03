import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

export default function NotificationDetail({ route }) {
  const { item } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.desc}>{item.desc}</Text>
      {item.fullContent.map((paragraph, index) => (
        <Text key={index} style={styles.content}>
          {paragraph}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  image: { width: "100%", height: 200, borderRadius: 10, marginBottom: 10 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 8 },
  desc: { fontSize: 16, marginBottom: 8, color: "#555" },
  content: { fontSize: 16, marginBottom: 6, lineHeight: 22 },
});
