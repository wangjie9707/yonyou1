function Dsy() {
    this.Items = {};
}
Dsy.prototype.add = function (id, iArray) {
    this.Items[id] = iArray;
}
Dsy.prototype.Exists = function (id) {
    if (typeof(this.Items[id]) == "undefined") return false;
    return true;
}

function change(v) {
    var str = "0";
    for (i = 0; i < v; i++) {
        str += ("_" + (document.getElementById(s[i]).selectedIndex - 1));
    };
    var ss = document.getElementById(s[v]);
    with (ss) {
        length = 0;
        options[0] = new Option(opt0[v], opt0[v]);
        if (v && document.getElementById(s[v - 1]).selectedIndex > 0 || !v) {
            if (dsy.Exists(str)) {
                ar = dsy.Items[str];
                for (i = 0; i < ar.length; i++) {
                    options[length] = new Option(ar[i], ar[i]);
                }//end for
                if (v) {
                    options[0].selected = true;
                }
            }
        }//end if v
        if (++v < s.length) {
            change(v);
        }
    }//End with
}

var dsy = new Dsy();

dsy.add("0", ["北京", "上海", "天津", "陕西", "江苏", "辽宁", "黑龙江", "浙江", "湖北", "安徽", "湖南", "广东", "河北", "福建", "河南", "吉林", "山东", "四川", "江西", "山西", "重庆","海南", "贵州", "广西", "内蒙古", "甘肃", "云南","青海","新疆","西藏","宁夏"]);
dsy.add("0_0", ["北京"]);
dsy.add("0_1", ["上海"]);
dsy.add("0_2", ["天津"]);
dsy.add("0_3", ["西安","铜川","宝鸡","咸阳","渭南","延安","汉中","榆林","安康","商洛"]);
dsy.add("0_4", ["南京", "淮安","扬州","镇江","苏州","南通", "昆山","盐城","泰州","无锡","常州", "徐州","连云港","宿迁"]);
dsy.add("0_5", ["沈阳","鞍山","抚顺","本溪","锦州","阜新","辽阳","盘锦","铁岭","朝阳","葫芦岛","大连","丹东","营口"]);
dsy.add("0_6", ["哈尔滨","齐齐哈尔","鸡西","鹤岗","双鸭山","大庆","伊春","佳木斯","七台河","牡丹江","黑河","绥化","大兴安岭"]);
dsy.add("0_7", ["杭州","温州","嘉兴","湖州","绍兴","金华","衢州","丽水","宁波","舟山","台州"]);
dsy.add("0_8", ["武汉","黄石","十堰","宜昌","襄阳","鄂州","荆门","孝感","荆州","黄冈","咸宁","随州","恩施","仙桃","潜江","天门","神农架"]);
dsy.add("0_9", ["合肥","芜湖","蚌埠","淮南","马鞍山","淮北","铜陵","安庆","黄山","滁州","阜阳","宿州","六安","宣城","池州","亳州","巢湖"]);
dsy.add("0_10", ["长沙","株洲","湘潭","衡阳","邵阳","岳阳","常德","张家界","益阳","郴州","永州","怀化","娄底","湘西"]);
dsy.add("0_11", ["广州", "韶关","汕头","佛山","江门","湛江","茂名","肇庆","梅州","汕尾","河源","阳江","清远","中山","潮州","揭阳","云浮","深圳","东莞","珠海","惠州"]);
dsy.add("0_12", ["石家庄","唐山","秦皇岛","邯郸","邢台","保定","张家口","承德","沧州","廊坊","衡水"]);
dsy.add("0_13", ["福州","莆田","三明","南平","宁德","厦门","泉州","漳州","龙岩"]);
dsy.add("0_14", ["郑州","开封","洛阳","平顶山","安阳","鹤壁","新乡","焦作","濮阳","许昌","漯河","三门峡","南阳","商丘","信阳","周口","驻马店","济源"]);
dsy.add("0_15", ["长春","吉林市","四平","辽源","通化","白山","松原","白城","延边"]);
dsy.add("0_16", ["济南","淄博","枣庄","东营","济宁","泰安","威海","莱芜","临沂","德州","聊城","滨州","菏泽","青岛","烟台","潍坊","日照"]);
dsy.add("0_17", ["成都","自贡","攀枝花","泸州","德阳","绵阳","广元","遂宁","内江","乐山","南充","眉山","宜宾","广安","达州","雅安","巴中","资阳","阿坝","甘孜","凉山"]);
dsy.add("0_18", ["南昌","景德镇","萍乡","九江","新余","鹰潭","赣州","吉安","宜春","抚州","上饶"]);
dsy.add("0_19", ["太原","大同","阳泉","长治","晋城","朔州","晋中","运城","忻州","临汾","吕梁"]);
dsy.add("0_20", ["重庆"]);
dsy.add("0_21", ["海口","三亚","三沙","儋州","五指山","琼海","文昌","万宁","东方","定安","屯昌","澄迈","临高","白沙","昌江","乐东","陵水","保亭","琼中"]);
dsy.add("0_22", ["贵阳","六盘水","遵义","安顺","毕节","铜仁","黔西南","黔东南","黔南"]);
dsy.add("0_23", ["南宁","柳州","桂林","梧州","北海","防城港","钦州","贵港","玉林","百色","贺州","河池","来宾","崇左"]);
dsy.add("0_24", ["呼和浩特","包头","乌海","赤峰","通辽","鄂尔多斯","呼伦贝尔","巴彦淖尔","乌兰察布","兴安","锡林郭勒","阿拉善"]);
dsy.add("0_25", ["兰州","嘉峪关","金昌","白银","天水","武威","张掖","平凉","酒泉","庆阳","定西","陇南","临夏","甘南"]);
dsy.add("0_26", ["昆明","曲靖","玉溪","保山","昭通","丽江","普洱","临沧","楚雄","红河","文山","西双版纳","大理","德宏","怒江","迪庆"]);
dsy.add("0_27", ["西宁","海东","海北","黄南","果洛","玉树","海西","海南"]);
dsy.add("0_28", ["乌鲁木齐","克拉玛依","吐鲁番","哈密","昌吉","博尔塔拉","巴音郭楞","阿克苏","克孜勒苏","喀什","和田","伊犁","塔城","阿勒泰","石河子","阿拉尔","图木舒克","五家渠","北屯","铁门关","双河","可克达拉"]);
dsy.add("0_29", ["拉萨","日喀则","昌都","林芝","山南","那曲","阿里"]);
dsy.add("0_30", ["银川","石嘴山","吴忠","固原","中卫"]);
dsy.add("0", ["北京", "上海", "天津", "陕西", "江苏", "辽宁", "黑龙江", "浙江", "湖北", "安徽", "湖南", "广东", "河北", "福建", "河南", "吉林", "山东", "四川", "江西", "山西", "重庆", "海南" , "贵州" , "广西", "内蒙古", "甘肃", "云南", "青海", "新疆", "西藏", "宁夏"]);

var s = ["s_province", "s_city"];//三个select的name
var opt0 = ["请选择省", "请选择市"];//初始值
function _init_area() { //初始化函数
    for (i = 0; i < s.length - 1; i++) {
        document.getElementById(s[i]).onchange = new Function("change(" + (i + 1) + ")");
    }
    change(0);
}
