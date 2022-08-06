// 地図種類

var t_std = new L.tileLayer('http://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
    attribution: "<a href='http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html' target='_blank'>国土地理院</a>"
});

const t_pale = new L.tileLayer('http://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
    attribution: "<a href='http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html' target='_blank'>国土地理院</a>"
});
const t_ort = new L.tileLayer('http://cyberjapandata.gsi.go.jp/xyz/ort/{z}/{x}/{y}.jpg', {
    attribution: "<a href='http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html' target='_blank'>国土地理院</a>"
});

const Map_b = {
    "地理院地図 標準": t_std,
    "地理院地図 淡色": t_pale,
    "地理院地図 オルソ": t_ort,
    // "OpenStreetMap 標準": o_std,
};

// ページ読み込み時に保土ケ谷区役所を中心
const map = L.map('map', {
    center: [35.4598687, 139.5959969],
    zoom: 15,
    layers: [t_pale]
});

L.control.scale({ maxWidth: 250, imperial: false }).addTo(map);

L.control.layers(Map_b, null, { collapsed: false }).addTo(map);

;

map.on('click', function (e) {
    //クリック位置経緯度取得
    lat = e.latlng.lat;
    lng = e.latlng.lng;
    //経緯度表示
    alert(lat + "," + lng);
});