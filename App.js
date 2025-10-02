import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, Text, View, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

export default function App({}) {
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
              viên chức Văn phòng Trung ương Đảng tổ chức quyên góp ủng hộ người
              dân bị ảnh hưởng bởi bão Bualoi.
            </Text>
          </View>

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

          <View>
            <Image
              style={styles.image}
              src="https://i1-vnexpress.vnecdn.net/2025/10/02/Bitcoin-6203-1759391040.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=rL5jwE3N5pMP_yu8zPBGnQ"
            />
            <Text style={styles.title}>
              Mua bán tài sản mã hóa đang hình thành 'chợ đen' quy mô lớn
            </Text>
            <Text style={styles.desc}>
              Thượng tá Nguyễn Thành Chung cảnh báo hoạt động mua bán tài sản mã
              hóa ở Việt Nam đang hình thành những "chợ đen" quy mô lớn, tiềm ẩn
              nhiều rủi ro.{" "}
            </Text>
          </View>

          <View>
            <Image
              style={styles.image}
              src="https://i1-vnexpress.vnecdn.net/2025/10/02/oto-hu-hong-trong-bao-17593442-2841-5974-1759345352.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=hscRBuat8Btx__Jkmf0S6Q"
            />
            <Text style={styles.title}>
              {" "}
              Vì sao bão Bualoi gây thiệt hại lớn?
            </Text>
            <Text style={styles.desc}>
              {" "}
              Dự báo sát, công tác ứng phó triển khai từ sớm, song bão Bualoi
              vẫn gây thiệt hại nặng nề bởi tạo tổ hợp đa thiên tai và một phần
              tâm lý chủ quan từ người dân.
            </Text>
          </View>

          <View>
            <Image
              style={styles.image}
              src="https://i1-vnexpress.vnecdn.net/2025/10/02/233A2633-4222-1759395084.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=DPTfjLqoOkhK1YDMyDXhTg"
            />
            <Text style={styles.title}>
              Bộ Nội vụ đề xuất tăng lương tối thiểu 7,2% từ năm 2026
            </Text>
            <Text style={styles.desc}>
              Bộ Nội vụ đề xuất tăng lương tối thiểu vùng 7,2%, tương đương
              250.000-350.000 đồng mỗi tháng, cao hơn khoảng 0,6% so với mức
              sống tối thiểu đến hết năm 2026.
            </Text>
          </View>
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
