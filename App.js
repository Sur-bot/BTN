import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ReelsScreen from "./NguyenComponent/reels";

// ------------------- BẮT ĐẦU PHẦN THÊM MỚI -------------------

// TÁCH FOOTER RA THÀNH MỘT COMPONENT RIÊNG ĐỂ TÁI SỬ DỤNG
function Footer({ navigation }) {
  return (
    <View style={styles.footer}>
      {/* Bọc icon home bằng TouchableOpacity để có thể nhấn về trang chủ */}
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Ionicons name="home" size={30} color="white" />
      </TouchableOpacity>
      <Ionicons name="heart" size={30} color="white" />
      <TouchableOpacity onPress={() => navigation.navigate("Reels")}>
        <Ionicons name="tv" size={30} color="white" />
      </TouchableOpacity>
      <Ionicons name="person" size={30} color="white" />
    </View>
  );
}

// ------------------- KẾT THÚC PHẦN THÊM MỚI -------------------

// Component HomeScreen không đổi, chỉ thay thế JSX của footer bằng component Footer
function HomeScreen({ navigation }) {
  return (
    // SafeAreaProvider không cần thiết ở đây nữa vì đã có ở App component
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
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Detail", {
              title:
                "Tổng Bí thư quyên góp ủng hộ người dân ảnh hưởng bởi bão Bualoi",
              image:
                "https://i1-vnexpress.vnecdn.net/2025/10/02/z7074423140919-0468717f827d228-6383-8195-1759412172.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=OJ9IqVl8ivWkS4ViMj2T_g",
              desc: "Chiều 2/10, Tổng Bí thư Tô Lâm cùng tập thể cán bộ, công chức, viên chức Văn phòng Trung ương Đảng tổ chức quyên góp ủng hộ người dân bị ảnh hưởng bởi bão Bualoi.",
            })
          }
        >
          <View>
            <Image
              style={styles.image}
              src="https://i1-vnexpress.vnecdn.net/2025/10/02/z7074423140919-0468717f827d228-6383-8195-1759412172.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=OJ9IqVl8ivWkS4ViMj2T_g"
            />
            <Text style={styles.title}>
              Tổng Bí thư quyên góp ủng hộ người dân ảnh hưởng bởi bão Bualoi
            </Text>
            <Text style={styles.desc}>
              Chiều 2/10, Tổng Bí thư Tô Lâm cùng tập thể cán bộ, công chức,
              viên chức Văn phòng Trung ương Đảng tổ chức quyên góp ủng hộ
              người dân bị ảnh hưởng bởi bão Bualoi.
            </Text>
          </View>
        </TouchableOpacity>

        {/* Các bài báo khác tương tự... */}
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Detail", {
              title:
                "Đề xuất lắp hàng nghìn camera AI giám sát giao thông toàn quốc",
              image:
                "https://i1-vnexpress.vnecdn.net/2025/10/02/553531538-1262370109251867-537-6652-1313-1759385738.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=8McWwMjHZTuqLWI8SPyB_A",
              desc: "Cục CSGT đã trình Bộ Công an đề án lắp đặt hàng nghìn camera AI hiện đại để giám sát, phát hiện vi phạm và hỗ trợ điều tiết giao thông trên toàn quốc. ",
            })
          }
        >
          <View>
            <Image
              style={styles.image}
              src="https://i1-vnexpress.vnecdn.net/2025/10/02/553531538-1262370109251867-537-6652-1313-1759385738.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=8McWwMjHZTuqLWI8SPyB_A"
            />
            <Text style={styles.title}>
              Đề xuất lắp hàng nghìn camera AI giám sát giao thông toàn quốc
            </Text>
            <Text style={styles.desc}>
              Cục CSGT đã trình Bộ Công an đề án lắp đặt hàng nghìn camera AI
              hiện đại để giám sát, phát hiện vi phạm và hỗ trợ điều tiết giao
              thông trên toàn quốc.{" "}
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      {/* footer */}
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}

// Thay đổi màn hình chi tiết để thêm Footer
function DetailScreen({ route, navigation }) {
  const { title, image, desc } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ padding: 15, alignItems: "center" }}>
          <Image style={styles.image} src={image} />
          <Text style={[styles.title, { fontSize: 22, marginTop: 15 }]}>
            {title}
          </Text>
          <Text
            style={[
              styles.desc,
              { fontSize: 16, fontStyle: "italic", marginTop: 10 },
            ]}
          >
            {desc}
          </Text>
          <Text style={[styles.desc, { marginTop: 20, textAlign: "justify" }]}>
            (Đây là nội dung chi tiết của bài báo. Hiện tại chúng ta chỉ hiển
            thị lại phần mô tả ngắn gọn.)
          </Text>
        </View>
      </ScrollView>
      {/* THÊM FOOTER VÀO TRANG CHI TIẾT */}
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

export default function App({}) {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{
              title: "Chi Tiết Tin Tức",
              headerStyle: {
                backgroundColor: "#9f224e",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="Reels"
            component={ReelsScreen}/>

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // Thêm màu nền để nhất quán
  },
  header: {
    height: 70,
    backgroundColor: "#9f224e",
    alignItems: "center",
    justifyContent: "center",
  },
  // Chỉnh style của scroll để tương thích với layout mới
  scroll: {
    flex: 1,
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
  image: {
    width: 400,
    height: 230,
    borderRadius: 4,
    marginTop: 30,
  },
  title: {
    width: 400,
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
  },
  desc: {
    width: 400,
    fontSize: 14,
    color: "#555",
    marginTop: 4,
    marginBottom: 5,
  },
});