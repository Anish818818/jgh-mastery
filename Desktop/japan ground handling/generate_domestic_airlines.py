
data = [
    ("6J", "SNJ", "", "ソラシドエア", "そらしどえあ"),
    ("7G", "SFJ", "922", "スターフライヤー", "すたーふらいやー"),
    ("BC", "SKY", "", "スカイマークエアラインズ", "すかいまーくえあらいんず"),
    ("EH", "AKX", "", "ANAウイングス", "えーえぬえーういんぐす"),
    ("FW", "IBX", "", "アイベックスエアラインズ", "あいべっくすえあらいんず"),
    ("GK", "JJP", "", "ジェットスター・ジャパン", "じぇっとすたーじゃぱん"),
    ("HC", "NTH", "", "北海道エアシステム", "ほっかいどうえあしすてむ"),
    ("HD", "ADO", "", "AIRDO", "えあどぅ"),
    ("IJ", "SJO", "", "春秋航空日本", "しゅんじゅうこうくうにほん"),
    ("JC", "JAC", "", "日本エアコミューター", "にほんえあこみゅーたー"),
    ("JH", "FDA", "", "フジドリームエアラインズ", "ふじどりーむえあらいんず"),
    ("JL", "JAL", "131", "日本航空", "にほんこうくう"),
    ("KZ", "NCA", "933", "日本貨物航空", "にほんかもつこうくう"),
    ("MM", "APJ", "", "ピーチアビエーション", "ぴーちあびえーしょん"),
    ("MZ", "AHX", "", "天草エアライン", "あまくさえあらいん"),
    ("NH", "ANA", "205", "全日本空輸", "ぜんにほんくうゆ"),
    ("NQ", "AJX", "", "エアージャパン", "えあーじゃぱん"),
    ("NU", "JTA", "353", "日本トランスオーシャン航空", "にほんとらんすおーしゃんこうくう"),
    ("---", "RAC", "", "琉球エアーコミューター", "りゅうきゅうえあーこみゅーたー"),
    ("OC", "ORC", "", "オリエンタルエアブリッジ", "おりえんたるえあぶりっじ"),
    ("XM", "JLJ", "", "ジェイエア", "じぇいえあ"),
    ("ZG", "TZP", "", "ZIPAIR Tokyo", "じっぷえあーとうきょう")
]

# Note: Some readings (furigana) are approximated based on standard readings 
# matching the user's typical hiragana style if not fully visible, 
# but mostly transcribed from common knowledge of these specific airline localized names.
# "ANA Wings" -> "えーえぬえーういんぐす" usually. 
# "AIRDO" -> "えあどぅ".

html_output = """
<h3 style="margin-top: 40px; margin-bottom: 20px; color: #2c3e50;">D. 日本の主なおもな航空会社エアライン・コード（ツーレター、スリーレター、Prefix）</h3>
<div class="table-container">
    <table class="ios-table">
        <thead>
            <tr>
                <th>2 Letter</th>
                <th>3 Letter</th>
                <th>Prefix</th>
                <th>Airline Name</th>
            </tr>
        </thead>
        <tbody>
"""

for code2, code3, prefix, name, reading in data:
    row = f"""
            <tr>
                <td><strong>{code2}</strong></td>
                <td><strong>{code3}</strong></td>
                <td>{prefix}</td>
                <td>
                    <div class="jp-main">{name}</div>
                    <div class="jp-sub">{reading}</div>
                </td>
            </tr>"""
    html_output += row

html_output += """
        </tbody>
    </table>
</div>
"""

with open('domestic_airlines.html', 'w', encoding='utf-8') as f:
    f.write(html_output)

print("Generated domestic_airlines.html")
