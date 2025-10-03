import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

export const notifications = [
  {
    id: 1,
    title: "Nam Định xếp 11 ngoại binh đá chính khi hạ CLB Hong Kong",
    image:
      "https://i1-thethao.vnecdn.net/2025/10/02/z7074234370357-bf3eb9ee1f37a8a-7349-1350-1759407481.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=vElcDSiqbmhfXT1KriJdeA",
    desc: "Nam Định trở thành CLB Việt Nam đầu tiên dùng toàn ngoại binh đá chính...",
    fullContent: [
    "Hong Kong - Nam Định trở thành CLB Việt Nam đầu tiên dùng toàn ngoại binh đá chính, trong trận thắng Eastern FC 1-0 ở lượt hai bảng F AFC Champions League Two 2025-2026, tối 2/10.",
    "* Ghi bàn: Normann 54'.",
    "Nam Định có tinh thần không tốt sau những màn trình diễn kém thuyết phục từ đầu mùa. 4 ngày trước, trên sân Thiên Trường, họ thua Công an Hà Nội 0-2.",
    "Với mật độ thi đấu dày, HLV Vũ Hồng Việt buộc phải xoay tua đội hình và tận dụng điều lệ không giới hạn ngoại binh ở Cup châu Á, khi sang Hong Kong làm khách của Eastern FC tại ACL Two hôm nay. Ông sử dụng toàn bộ 12 ngoại binh, gồm cả Việt kiều Pháp Kevin Pham Ba chưa có quốc tịch.",
    "Tuy nhiên, lối chơi của nhà vô địch V-League không thực sự thuyết phục. Các cầu thủ thiếu ăn ý, nhiều lần chọn chuyền dài để phát triển tấn công trong hiệp một.",
    "Trái lại, Eastern FC chỉ sử dụng 7 ngoại binh. Đoàn quân của HLV Roberto Losada cũng phối hợp nhịp nhàng hơn với bóng ngắn, nhờ khả năng kiểm soát tốt của nhạc trưởng Marcos Gondra. Dù vậy, chất lượng trong các pha bóng cuối của họ chưa đủ để xuyên phá hàng thủ Nam Định."
  ],
  },
  {
    id: 2,
    title: "Nhạc sĩ Thế Hiển - 'nhánh lan rừng' đã xa",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR5NNHh22Rj8gFDL9qfOMptK2QQtS0ZBRcqX1IP5u708xsVWMEmzbMKkFdVPl4DthyrhL6N1tYgZn4hPJf3r7OmIhx8x6BmbW-LENY5Ihe_CA",
    desc: "Nhạc sĩ Thế Hiển, tác giả nhiều ca khúc nổi tiếng, đã qua đời...",
    fullContent: [
    "Nhạc sĩ Thế Hiển qua đời, để lại trong khán giả dư âm hình ảnh 'cây súng trên vai', 'ba lô trên lưng, mang theo nhánh lan rừng' và giai điệu vượt thời gian.",
    "Ông qua đời ở tuổi 70 tại Bệnh viện Quân y 175, TP HCM hôm 1/10, sau thời gian lâm trọng bệnh. Đông đảo khán giả đăng lại lời hát của nhạc sĩ, như một cách tiễn biệt ông: 'Dù cho đời lính chinh chiến qua nhiều gian khổ/ Vẫn hẹn ngày trở về trọn vẹn bao ước mơ'.",
    "Nửa thế kỷ sáng tác, ông ghi dấu ấn với hàng chục ca khúc về người lính. Quê ở Nam Định, sinh ra và lớn lên ở Sài Gòn, nhạc sĩ từng nói nghệ thuật với ông là 'một ngã rẽ định mệnh'.",
    "Thuở nhỏ, cậu bé Lại Thế Hiển được cha tặng cho cây đàn. Từ đó, ông như quên hết mọi trò chơi, mày mò tự học đàn. Thích nhạc, thành thạo guitar lẫn piano song ông lại ấp ủ trở thành luật sư.",
    "Năm 1975, chứng kiến ngày tháng lịch sử của đất nước, Thế Hiển - đang là sinh viên năm nhất ngành luật - như được khơi dậy đam mê ngày nào. Ông bước vào phong trào văn nghệ quần chúng, khởi đầu với những buổi sinh hoạt thanh niên ở quận Phú Nhuận (cũ) - nơi gia đình ông sinh sống.",
    ],
  },
  {
     id: 3,
  title: "Công an hỗ trợ sản phụ giữa dòng nước ngập",
  image: "https://i1-suckhoe.vnecdn.net/2025/10/02/Anh-chup-Man-hinh-2025-10-02-l-8339-1835-1759391665.png?w=1020&h=0&q=100&dpr=1&fit=crop&s=rMmeIKMEka3NIIhDahSnAw", 
  desc: "Công an phường Phương Liệt kịp thời hỗ trợ đưa một sản phụ đến viện an toàn khi xe cứu thương chết máy giữa dòng nước ngập.",
  fullContent: [
    "Xe cứu thương chở một sản phụ bất ngờ chết máy giữa đường ngập sâu, công an phường Phương Liệt kịp thời hỗ trợ đưa chị đến bệnh viện an toàn.",
    "Ngày 2/10, đại diện Bệnh viện Việt Pháp Hà Nội cho biết thai phụ 35 tuổi, vỡ ối tại nhà cách đây ba hôm. Thời điểm đó, Hà Nội có mưa lớn kéo dài do ảnh hưởng của bão Bualoi, khiến nhiều tuyến đường ngập sâu. Gia đình gọi xe cấp cứu đưa chị đến Bệnh viện Việt Pháp Hà Nội.",
    "Tuy nhiên, khi đi qua đoạn đường Lê Trọng Tấn (phường Phương Liệt), chiếc xe cứu thương chết máy vì ngập nước. Lúc này, sản phụ đau bụng ngày càng tăng, người nhà vô cùng lo lắng. Cùng thời điểm, tổ công an phường Phương Liệt đang làm nhiệm vụ phân luồng, chống úng ngập tại khu vực, nhanh chóng hỗ trợ chuyển thai phụ từ xe cấp cứu sang xe công vụ rồi đưa thẳng đến viện.",
    "Bác sĩ Ngô Ngọc Loát, khoa Sản và Phụ khoa, cho biết thai phụ nhập viện trong tình trạng vỡ ối hơn 3 tiếng. May mắn, hai mẹ con đã 'vượt bão' và 'vượt cạn' thành công. Hiện sức khỏe của mẹ và em bé đều ổn định.",
    "\"Tôi cảm ơn công an phường Phương Liệt, đội ngũ y bác sĩ bệnh viện đã đồng hành và giúp tôi sinh con an toàn\", sản phụ chia sẻ."
  ],
  }
];

export default function Notifications({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate("NotificationDetail", { item })}
    >
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text numberOfLines={2} style={styles.desc}>
          {item.desc}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={notifications}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  image: { width: 80, height: 80, borderRadius: 8 },
  textContainer: { flex: 1, marginLeft: 10, justifyContent: "center" },
  title: { fontSize: 16, fontWeight: "bold", marginBottom: 4 },
  desc: { fontSize: 14, color: "#555" },
});
