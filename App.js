import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, Text, View, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* header */}
        <View style={styles.header}>
          <Image
            style={styles.logo}
            src="https://nhathuocthanthien.com.vn/wp-content/uploads/2020/11/dgm_nttt_logo-vnexpress.jpg"
          />
        </View>

        {/* scrollview */}
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={{ alignItems: "center" }}
        >
          {Array.from({ length: 50 }).map((_, i) => (
            <Text key={i} style={{ fontSize: 20, margin: 10 }}>
              Item {i + 1}
            </Text>
          ))}
        </ScrollView>

        {/* footer */}
        <View style={styles.footer}>
          <Ionicons name="home" size={30} color="white" /> 
          <Ionicons name="heart" size={30} color="white" />
          <Ionicons name="tv" size={30} color="white" />
          <Ionicons name="person" size={30} color="white" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 70,
    backgroundColor: "#9f224e",
    alignItems: "center",
    justifyContent: "center",
  },
  scroll: {
    flex: 8,
    backgroundColor: "#ffffffff",
  },
  footer: {
    flexDirection: "row",
    height: 80,
    backgroundColor: "#9f224e",
    alignItems: "center",
    justifyContent: "space-around",
    borderTopWidth: 2,
    borderTopColor: "#9f224e",
  },
  logo: {
    width: 200,
    height: 70,
  },

  footerText:{
    color: "#FFF"
  }
});
