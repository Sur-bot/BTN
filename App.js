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

// 1. DATA (Dữ liệu JSON)

const ARTICLES_DATA = [
  {
    id: "1",
    title: "Tổng Bí thư quyên góp ủng hộ người dân ảnh hưởng bởi bão Bualoi",
    image:
      "https://i1-vnexpress.vnecdn.net/2025/10/02/z7074423140919-0468717f827d228-6383-8195-1759412172.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=OJ9IqVl8ivWkS4ViMj2T_g",
    desc: "Chiều 2/10, Tổng Bí thư Tô Lâm cùng tập thể cán bộ, công chức, viên chức Văn phòng Trung ương Đảng tổ chức quyên góp ủng hộ người dân bị ảnh hưởng bởi bão Bualoi.",
    fullContent: [
      "Bão Bualoi đã gây ra nhiều thiệt hại nặng nề về người và của cải tại các tỉnh miền Trung. Hưởng ứng lời kêu gọi của Ủy ban Trung ương Mặt trận Tổ quốc Việt Nam, các cán bộ đã cùng nhau quyên góp để hỗ trợ đồng bào sớm ổn định lại cuộc sống.",
      "Số tiền quyên góp sẽ được chuyển trực tiếp đến các địa phương bị ảnh hưởng để hỗ trợ người dân sửa chữa nhà cửa, mua sắm nhu yếu phẩm và khôi phục sản xuất."
    ],
  },
  {
    id: "2",
    title: "Đề xuất lắp hàng nghìn camera AI giám sát giao thông toàn quốc",
    image:
      "https://i1-vnexpress.vnecdn.net/2025/10/02/553531538-1262370109251867-537-6652-1313-1759385738.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=8McWwMjHZTuqLWI8SPyB_A",
    desc: "Cục CSGT đã trình Bộ Công an đề án lắp đặt hàng nghìn camera AI hiện đại để giám sát, phát hiện vi phạm và hỗ trợ điều tiết giao thông trên toàn quốc.",
    fullContent: [
      "Theo Cục Cảnh sát giao thông, đề án ứng dụng công nghệ trí tuệ nhân tạo (AI) trong giám sát giao thông đã được trình lên lãnh đạo Bộ Công an. Mục tiêu của đề án là xây dựng một hệ thống giám sát thông minh, đồng bộ trên toàn quốc, có khả năng tự động phát hiện các hành vi vi phạm và hỗ trợ điều tiết giao thông hiệu quả.",
      "Hệ thống này sẽ bao gồm hàng nghìn camera có độ phân giải cao, được trang bị công nghệ AI để phân tích hình ảnh và video theo thời gian thực.",
      "Đại diện Cục CSGT cho biết, việc áp dụng công nghệ này không chỉ giúp giảm tải áp lực cho lực lượng chức năng mà còn góp phần nâng cao ý thức của người dân, xây dựng văn hóa giao thông an toàn và văn minh hơn."
    ],
  },
  {
    id: "3",
    title: "Mua bán tài sản mã hóa đang hình thành 'chợ đen' quy mô lớn",
    image:
      "https://i1-vnexpress.vnecdn.net/2025/10/02/Bitcoin-6203-1759391040.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=rL5jwE3N5pMP_yu8zPBGnQ",
    desc: "Thượng tá Nguyễn Thành Chung cảnh báo hoạt động mua bán tài sản mã hóa ở Việt Nam đang hình thành những 'chợ đen' quy mô lớn, tiềm ẩn nhiều rủi ro.",
    fullContent: [
      "Các chuyên gia cảnh báo về nguy cơ rửa tiền, tài trợ khủng bố và lừa đảo thông qua các sàn giao dịch chưa được cấp phép. Cần có một hành lang pháp lý rõ ràng để quản lý loại tài sản này."
    ],
  },
  {
    id: "4",
    title: "Vì sao bão Bualoi gây thiệt hại lớn?",
    image:
    "https://i1-vnexpress.vnecdn.net/2025/10/02/oto-hu-hong-trong-bao-17593442-2841-5974-1759345352.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=_wUx8J5tX3Gn8X45ORL8Jw",
    desc: "Dự báo sát, công tác ứng phó triển khai từ sớm, song bão Bualoi vẫn gây thiệt hại nặng nề bởi tạo tổ hợp đa thiên tai và một phần tâm lý chủ quan từ người dân.",
    fullContent: ["Bão Bualoi đổ bộ Nghệ An - bắc Quảng Trị ngày 29/9 với sức gió cấp 8-11 khiến 36 người chết, 21 người mất tích, hơn 150.000 ngôi nhà tốc mái, hư hỏng, 147 người bị thương, 8.200 cột điện gãy đổ làm gần 2,7 triệu khách hàng mất điện. Đến sáng nay vẫn còn hơn 770.000 khách hàng khu vực Thanh Hóa - Quảng Trị chưa có điện trở lại. Thiệt hại kinh tế hơn 11.455 tỷ đồng. Trung tâm Dự báo Khí tượng Thủy văn quốc gia liên tục cập nhật diễn biến, cảnh báo Bualoi di chuyển rất nhanh (gần gấp đôi tốc độ trung bình), cường độ bão mạnh, phạm vi ảnh hưởng rộng, có thể gây tác động tổng hợp của nhiều loại hình thiên tai như gió mạnh, mưa lớn, lũ, lũ quét, sạt lở đất và ngập lụt. Riêng về mưa, trung tâm cảnh báo từ đêm 27 đến ngày 30/9, Bắc Bộ và khu vực từ Thanh Hóa đến TP Huế có khả năng xảy ra đợt mưa lớn diện rộng với tổng lượng phổ biến 100-300 mm, cục bộ có nơi trên 400 mm. Riêng đồng bằng Bắc Bộ và từ Thanh Hóa đến Quảng Trị mưa 200-400 mm, có nơi trên 600 mm. Hà Nội là một trong 6 tỉnh thành đồng bằng Bắc Bộ, bên cạnh Hải Phòng, Quảng Ninh, Hưng Yên, Bắc Ninh, Ninh Bình."],
  },
  {    id: "5",
    title: "Bộ Nội vụ đề xuất tăng lương tối thiểu 7,2% từ năm 2026",
    image:
    "https://i1-vnexpress.vnecdn.net/2025/10/02/233A2633-4222-1759395084.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=iO9p6tqwOIwDZnvJ6M7wAg",
    desc: "Bộ Nội vụ đề xuất tăng lương tối thiểu vùng 7,2%, tương đương 250.000-350.000 đồng mỗi tháng, cao hơn khoảng 0,6% so với mức sống tối thiểu đến hết năm 2026.",
    fullContent: ["Bộ Tư pháp đang thẩm định dự thảo Nghị định về mức lương tối thiểu cho lao động có hợp đồng do Bộ Nội vụ xây dựng. Cơ quan soạn thảo đề xuất điều chỉnh lương tối thiểu vùng theo tháng và giờ từ ngày 1/1/2026. Theo đó vùng I là 5,31 triệu đồng; vùng II là 4,73 triệu đồng; vùng III 4,14 triệu đồng; vùng IV 3,7 triệu đồng. Mức tăng này tương ứng 250.000-350.000 đồng so với hiện hành.Lương tối thiểu giờ quy đổi dựa trên mức tháng và thời gian làm việc tiêu chuẩn, cụ thể vùng I là 25.500 đồng mỗi giờ; vùng II 22.700 đồng; vùng III 20.000 đồng; vùng IV 17.800 đồng. Bộ Nội vụ đánh giá lương tối thiểu tăng 7,2% giúp cải thiện thu nhập khi đã tính trước một phần chỉ số giá tiêu dùng năm 2026, đồng thời hài hòa lợi ích lao động và doanh nghiệp - vừa nâng cao thu nhập vừa duy trì sản xuất kinh doanh."],
  }
];


// 2. COMPONENTS (Các thành phần giao diện)

// Component Footer
function Footer({ navigation }) {
  return (
    <View style={styles.footer}>
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

// Màn hình chính
function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          src="https://nhathuocthanthien.com.vn/wp-content/uploads/2020/11/dgm_nttt_logo-vnexpress.jpg"
        />
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {ARTICLES_DATA.map((article) => (
          <TouchableOpacity
            key={article.id}
            onPress={() => navigation.navigate("Detail", { article: article })}
          >
            <View>
              <Image style={styles.image} src={article.image} />
              <Text style={styles.title}>{article.title}</Text>
              <Text style={styles.desc}>{article.desc}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}

// Màn hình chi tiết
function DetailScreen({ route, navigation }) {
  const { article } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ padding: 15, alignItems: "center" }}>
          <Image style={styles.image} src={article.image} />
          <Text style={[styles.title, { fontSize: 22, marginTop: 15, width: '100%' }]}>
            {article.title}
          </Text>
          <Text
            style={[
              styles.desc,
              { fontSize: 16, fontStyle: "italic", marginTop: 10, width: '100%' },
            ]}
          >
            {article.desc}
          </Text>

          {article.fullContent.map((paragraph, index) => (
            <Text key={index} style={styles.contentText}>
              {paragraph}
            </Text>
          ))}
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}


// 3. APP (Phần chính của ứng dụng và điều hướng)


const Stack = createStackNavigator();

export default function App() {
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
            component={ReelsScreen}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


// 4. STYLES (Tất cả style của ứng dụng)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 70,
    backgroundColor: "#9f224e",
    alignItems: "center",
    justifyContent: "center",
  },
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
  contentText: {
    width: 400,
    fontSize: 16,
    lineHeight: 26,
    color: '#333',
    textAlign: 'justify',
    marginTop: 15,
  }
});