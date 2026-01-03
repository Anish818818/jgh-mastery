
data = [
    ("AKJ", "旭川", "あさひかわ", "Hokkaido", "北海道", "ほっかいどう"),
    ("AOJ", "青森", "あおもり", "Aomori", "青森県", "あおもりけん"),
    ("ASJ", "奄美", "あまみ", "Kagoshima", "鹿児島県", "かごしまけん"),
    ("AXT", "秋田", "あきた", "Akita", "秋田県", "あきたけん"),
    ("CTS", "新千歳", "しんちとせ", "Hokkaido", "北海道", "ほっかいどう"),
    ("FKS", "福島", "ふくしま", "Fukushima", "福島県", "ふくしまけん"),
    ("FSZ", "静岡", "しずおか", "Shizuoka", "静岡県", "しずおかけん"),
    ("FUJ", "福江", "ふくえ", "Nagasaki", "長崎県", "ながさきけん"),
    ("FUK", "福岡", "ふくおか", "Fukuoka", "福岡県", "ふくおかけん"),
    ("GAJ", "山形", "やまがた", "Yamagata", "山形県", "やまがたけん"),
    ("HAC", "八丈島", "はちじょうじま", "Tokyo", "東京都", "とうきょうと"),
    ("HIJ", "広島", "ひろしま", "Hiroshima", "広島県", "ひろしまけん"),
    ("HIW", "広島西", "ひろしまにし", "Hiroshima", "広島県", "ひろしまけん"),
    ("HKD", "函館", "はこだて", "Hokkaido", "北海道", "ほっかいどう"),
    ("HNA", "花巻", "はなまき", "Iwate", "岩手県", "いわてけん"),
    ("HND", "東京国際（羽田）", "とうきょうこくさい（はねだ）", "Tokyo", "東京都", "とうきょうと"),
    ("HSG", "佐賀", "さが", "Saga", "佐賀県", "さがけん"),
    ("IBR", "茨城", "いばらき", "Ibaraki", "茨城県", "いばらきけん"),
    ("IKI", "壱岐", "いき", "Nagasaki", "長崎県", "ながさきけん"),
    ("ISG", "石垣", "いしがき", "Okinawa", "沖縄県", "おきなわけん"),
    ("ITM", "大阪国際（伊丹）", "おおさかこくさい（いたみ）", "Osaka", "大阪府", "おおさかふ"),
    ("IWJ", "石見", "いわみ", "Shimane", "島根県", "しまねけん"),
    ("IWK", "岩国", "いわくに", "Yamaguchi", "山口県", "やまぐちけん"),
    ("IZO", "出雲", "いずも", "Shimane", "島根県", "しまねけん"),
    ("KCZ", "高知", "こうち", "Kochi", "高知県", "こうちけん"),
    ("KIJ", "新潟", "にいがた", "Niigata", "新潟県", "にいがたけん"),
    ("KIX", "関西国際", "かんさいこくさい", "Osaka", "大阪府", "おおさかふ"),
    ("KKJ", "北九州", "きたきゅうしゅう", "Fukuoka", "福岡県", "ふくおかけん"),
    ("KMI", "宮崎", "みやざき", "Miyazaki", "宮崎県", "みやざきけん"),
    ("KMJ", "熊本", "くまもと", "Kumamoto", "熊本県", "くまもとけん"),
    ("KMQ", "小松", "こまつ", "Ishikawa", "石川県", "いしかわけん"),
    ("KOJ", "鹿児島", "かごしま", "Kagoshima", "鹿児島県", "かごしまけん"),
    ("KUH", "釧路", "くしろ", "Hokkaido", "北海道", "ほっかいどう"),
    ("KUM", "屋久島", "やくしま", "Kagoshima", "鹿児島県", "かごしまけん"),
    ("MMB", "女満別", "めまんべつ", "Hokkaido", "北海道", "ほっかいどう"),
    ("MMJ", "松本", "まつもと", "Nagano", "長野県", "ながのけん"),
    ("MMY", "宮古", "みやこ", "Okinawa", "沖縄県", "おきなわけん"),
    ("MSJ", "三沢", "みさわ", "Aomori", "青森県", "あおもりけん"),
    ("MYE", "三宅島", "みやけじま", "Tokyo", "東京都", "とうきょうと"),
    ("MYJ", "松山", "まつやま", "Ehime", "愛媛県", "えひめけん"),
    ("NGO", "中部国際", "ちゅうぶこくさい", "Aichi", "愛知県", "あいちけん"),
    ("NGS", "長崎", "ながさき", "Nagasaki", "長崎県", "ながさきけん"),
    ("NKM", "名古屋", "なごや", "Aichi", "愛知県", "あいちけん"),
    ("NRT", "成田国際", "なりたこくさい", "Chiba", "千葉県", "ちばけん"),
    ("NTQ", "能登", "のと", "Ishikawa", "石川県", "いしかわけん"),
    ("OBO", "帯広", "おびひろ", "Hokkaido", "北海道", "ほっかいどう"),
    ("OGN", "与那国島", "よなぐにじま", "Okinawa", "沖縄県", "おきなわけん"),
    ("OIM", "大島", "おおしま", "Tokyo", "東京都", "とうきょうと"),
    ("OIT", "大分", "おおいた", "Oita", "大分県", "おおいたけん"),
    ("OKA", "那覇", "なは", "Okinawa", "沖縄県", "おきなわけん"),
    ("OKD", "丘珠", "おかだま", "Hokkaido", "北海道", "ほっかいどう"),
    ("OKE", "沖永良部", "おきのえらぶ", "Kagoshima", "鹿児島県", "かごしまけん"),
    ("OKJ", "岡山", "おかやま", "Okayama", "岡山県", "おかやまけん"),
    ("ONJ", "大館能代", "おおだてのしろ", "Akita", "秋田県", "あきたけん"),
    ("RNJ", "与論", "よろん", "Kagoshima", "鹿児島県", "かごしまけん"),
    ("SDJ", "仙台", "せんだい", "Miyagi", "宮城県", "みやぎけん"),
    ("SHB", "中標津", "なかしべつ", "Hokkaido", "北海道", "ほっかいどう"),
    ("SHM", "南紀白浜", "なんきしらはま", "Wakayama", "和歌山県", "わかやまけん"),
    ("SYO", "庄内", "しょうない", "Yamagata", "山形県", "やまがたけん"),
    ("TAK", "高松", "たかまつ", "Kagawa", "香川県", "かがわけん"),
    ("TJH", "コウノトリ但馬", "こうのとりたじま", "Hyogo", "兵庫県", "ひょうごけん"),
    ("TKS", "徳島", "とくしま", "Tokushima", "徳島県", "とくしまけん"),
    ("TOY", "富山", "とやま", "Toyama", "富山県", "とやまけん"),
    ("TSJ", "対馬", "つしま", "Nagasaki", "長崎県", "ながさきけん"),
    ("TTJ", "鳥取", "とっとり", "Tottori", "鳥取県", "とっとりけん"),
    ("UBJ", "山口宇部", "やまぐちうべ", "Yamaguchi", "山口県", "やまぐちけん"),
    ("UEO", "久米島", "くめじま", "Okinawa", "沖縄県", "おきなわけん"),
    ("UKB", "神戸", "こうべ", "Hyogo", "兵庫県", "ひょうごけん"),
    ("WKJ", "稚内", "わっかない", "Hokkaido", "北海道", "ほっかいどう"),
    ("YGJ", "米子", "よなご", "Tottori", "鳥取県", "とっとりけん")
]

# Sort by English Region
data.sort(key=lambda x: x[3]) # Index 3 is Region En

html_output = """
<h3 style="margin-top: 40px; margin-bottom: 20px; color: #2c3e50;">B. 日本の主なおもな空港の空白のスリーレター・コード</h3>
<div class="table-container">
    <table class="ios-table">
        <thead>
            <tr>
                <th>Code</th>
                <th>Airport Name</th>
                <th>Location</th>
            </tr>
        </thead>
        <tbody>
"""

current_region = None

for code, name, reading, region_en, region_jp, region_reading in data:
    
    if region_en != current_region:
        current_region = region_en
        # Header Row
        header_content = f'{region_en} <span class="jp-main" style="font-size: 0.9em; margin-left: 10px;">{region_jp}</span>'
        html_output += f"""
            <tr class="country-row">
                <td colspan="3" class="country-header">{header_content}</td>
            </tr>"""

    row = f"""
            <tr>
                <td><strong>{code}</strong></td>
                <td>
                    <div class="jp-main">{name}</div>
                    <div class="jp-sub">{reading}</div>
                </td>
                <td>
                    <div class="jp-main">{region_jp}</div>
                    <div class="jp-sub">{region_reading}</div>
                </td>
            </tr>"""
    html_output += row

html_output += """
        </tbody>
    </table>
</div>
"""

with open('domestic_codes_grouped.html', 'w', encoding='utf-8') as f:
    f.write(html_output)

print("Generated domestic_codes_grouped.html")
