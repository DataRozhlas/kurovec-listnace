﻿import "./byeie"; // loučíme se s IE

var colors = ["#3366cc", "#dc3912", "#ff9900", "#109618", "#990099", "#0099c6", "#dd4477", "#66aa00", "#b82e2e", "#316395", "#994499", "#22aa99", "#aaaa11", "#6633cc", "#e67300", "#8b0707", "#651067", "#329262", "#5574a6", "#3b3eac"];

var kontrast = ['#0099c6', '#dd4477', '#333'];

var roky = [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019];

var datazalesnovanijehlicnate = [
{"y":11658,"podil":63.6},
{"y":11700,"podil":63.4},
{"y":11999,"podil":63.8},
{"y":12382,"podil":62.3},
{"y":12795,"podil":61.2},
{"y":12967,"podil":59.3},
{"y":13363,"podil":61.4},
{"y":12290,"podil":61.7},
{"y":12101,"podil":60.7},
{"y":12410,"podil":61.4},
{"y":11551,"podil":61.5},
{"y":11881,"podil":59.6},
{"y":11523,"podil":57.7},
{"y":11740,"podil":55.3},
{"y":13954,"podil":48.7}
];

var datazalesnovanilistnate = [
{"y":6660,"podil":36.4},
{"y":6745,"podil":36.6},
{"y":6805,"podil":36.2},
{"y":7506,"podil":37.7},
{"y":8105,"podil":38.8},
{"y":8892,"podil":40.7},
{"y":8392,"podil":38.6},
{"y":7613,"podil":38.3},
{"y":7819,"podil":39.3},
{"y":7793,"podil":38.6},
{"y":7246,"podil":38.5},
{"y":8048,"podil":40.4},
{"y":8450,"podil":42.3},
{"y":9505,"podil":44.7},
{"y":14716,"podil":51.3}
];

var datazalesnovanismrk = [
{"y":7910,"podil":43.2},
{"y":7954,"podil":43.1},
{"y":8005,"podil":42.6},
{"y":8567,"podil":43.1},
{"y":9162,"podil":43.8},
{"y":9171,"podil":42.0},
{"y":9687,"podil":44.5},
{"y":9034,"podil":45.4},
{"y":8840,"podil":44.4},
{"y":8919,"podil":44.1},
{"y":8101,"podil":43.1},
{"y":8273,"podil":41.5},
{"y":7940,"podil":39.8},
{"y":7818,"podil":36.8},
{"y":8739,"podil":30.5}
];

var datazalesnovanijedle = [
{"y":929,"podil":5.1},
{"y":949,"podil":5.1},
{"y":1173,"podil":6.2},
{"y":1268,"podil":6.4},
{"y":1314,"podil":6.3},
{"y":1274,"podil":5.8},
{"y":1188,"podil":5.5},
{"y":974,"podil":4.9},
{"y":872,"podil":4.4},
{"y":886,"podil":4.4},
{"y":884,"podil":4.7},
{"y":945,"podil":4.7},
{"y":1143,"podil":5.7},
{"y":1078,"podil":5.1},
{"y":1392,"podil":4.9}
];

var datazalesnovanidouglaska = [
{"y":135,"podil":0.7},
{"y":116,"podil":0.6},
{"y":115,"podil":0.6},
{"y":123,"podil":0.6},
{"y":127,"podil":0.6},
{"y":139,"podil":0.6},
{"y":163,"podil":0.7},
{"y":124,"podil":0.6},
{"y":149,"podil":0.7},
{"y":198,"podil":1.0},
{"y":214,"podil":1.1},
{"y":264,"podil":1.3},
{"y":289,"podil":1.4},
{"y":324,"podil":1.5},
{"y":675,"podil":2.4}
];

var datazalesnovaniborovice = [
{"y":2388,"podil":13.0},
{"y":2437,"podil":13.2},
{"y":2439,"podil":13.0},
{"y":2141,"podil":10.8},
{"y":1947,"podil":9.3},
{"y":2171,"podil":9.9},
{"y":2128,"podil":9.8},
{"y":1933,"podil":9.7},
{"y":2055,"podil":10.3},
{"y":2232,"podil":11.0},
{"y":2130,"podil":11.3},
{"y":2101,"podil":10.5},
{"y":1778,"podil":8.9},
{"y":2076,"podil":9.8},
{"y":2338,"podil":8.2}
];

var datazalesnovanimodrin = [
{"y":268,"podil":1.5},
{"y":217,"podil":1.2},
{"y":250,"podil":1.3},
{"y":263,"podil":1.3},
{"y":234,"podil":1.1},
{"y":206,"podil":0.9},
{"y":196,"podil":0.9},
{"y":221,"podil":1.1},
{"y":183,"podil":0.9},
{"y":174,"podil":0.9},
{"y":222,"podil":1.2},
{"y":296,"podil":1.5},
{"y":371,"podil":1.9},
{"y":444,"podil":2.1},
{"y":810,"podil":2.8}
];

var datazalesnovanijehlost = [
{"y":28,"podil":0.2},
{"y":27,"podil":0.1},
{"y":17,"podil":0.1},
{"y":20,"podil":0.1},
{"y":11,"podil":0.1},
{"y":6,"podil":0.0},
{"y":1,"podil":0.0},
{"y":4,"podil":0.0},
{"y":2,"podil":0.0},
{"y":1,"podil":0.0},
{"y":0,"podil":0.0},
{"y":2,"podil":0.0},
{"y":2,"podil":0.0},
{"y":0,"podil":0.0},
{"y":0,"podil":0.0}
];

var datazalesnovanidub = [
{"y":1935,"podil":10.6},
{"y":2005,"podil":10.9},
{"y":1949,"podil":10.4},
{"y":2246,"podil":11.3},
{"y":2473,"podil":11.8},
{"y":2607,"podil":11.9},
{"y":2494,"podil":11.5},
{"y":2263,"podil":11.4},
{"y":2277,"podil":11.4},
{"y":2406,"podil":11.9},
{"y":2293,"podil":12.2},
{"y":2484,"podil":12.5},
{"y":2594,"podil":13.0},
{"y":2999,"podil":14.1},
{"y":4746,"podil":16.6}
];

var datazalesnovanibuk = [
{"y":3275,"podil":17.9},
{"y":3433,"podil":18.6},
{"y":3625,"podil":19.3},
{"y":3865,"podil":19.4},
{"y":4316,"podil":20.7},
{"y":4899,"podil":22.4},
{"y":4485,"podil":20.6},
{"y":4064,"podil":20.4},
{"y":4226,"podil":21.2},
{"y":4036,"podil":20.0},
{"y":3678,"podil":19.6},
{"y":4230,"podil":21.2},
{"y":4415,"podil":22.1},
{"y":4768,"podil":22.4},
{"y":7159,"podil":25.0}
];

var datazalesnovanijavor = [
{"y":342,"podil":1.9},
{"y":336,"podil":1.8},
{"y":354,"podil":1.9},
{"y":420,"podil":2.1},
{"y":437,"podil":2.1},
{"y":417,"podil":1.9},
{"y":415,"podil":1.9},
{"y":363,"podil":1.8},
{"y":408,"podil":2.0},
{"y":374,"podil":1.9},
{"y":357,"podil":1.9},
{"y":420,"podil":2.1},
{"y":446,"podil":2.2},
{"y":569,"podil":2.7},
{"y":989,"podil":3.4}
];

var datazalesnovanijasan = [
{"y":236,"podil":1.3},
{"y":212,"podil":1.1},
{"y":204,"podil":1.1},
{"y":205,"podil":1.0},
{"y":153,"podil":0.7},
{"y":148,"podil":0.7},
{"y":118,"podil":0.5},
{"y":81,"podil":0.4},
{"y":38,"podil":0.2},
{"y":35,"podil":0.2},
{"y":17,"podil":0.1},
{"y":11,"podil":0.1},
{"y":17,"podil":0.1},
{"y":4,"podil":0.0},
{"y":7,"podil":0.0}
];

var datazalesnovanilipa = [
{"y":283,"podil":1.5},
{"y":260,"podil":1.4},
{"y":251,"podil":1.3},
{"y":251,"podil":1.3},
{"y":218,"podil":1.0},
{"y":264,"podil":1.2},
{"y":261,"podil":1.2},
{"y":252,"podil":1.3},
{"y":294,"podil":1.5},
{"y":300,"podil":1.5},
{"y":295,"podil":1.6},
{"y":339,"podil":1.7},
{"y":325,"podil":1.6},
{"y":376,"podil":1.8},
{"y":553,"podil":1.9}
];

var datazalesnovanilistost = [
{"y":589,"podil":3.2},
{"y":499,"podil":2.7},
{"y":422,"podil":2.2},
{"y":519,"podil":2.6},
{"y":508,"podil":2.4},
{"y":557,"podil":2.5},
{"y":619,"podil":2.8},
{"y":590,"podil":3.0},
{"y":576,"podil":2.9},
{"y":642,"podil":3.2},
{"y":606,"podil":3.2},
{"y":564,"podil":2.8},
{"y":653,"podil":3.3},
{"y":789,"podil":3.7},
{"y":1264,"podil":4.4}
];

var datatezbajehlicnate = [
{"y":13.9,"podil":89.5},
{"y":16.1,"podil":91.2},
{"y":17.3,"podil":93.4},
{"y":14.9,"podil":91.9},
{"y":14,"podil":90.6},
{"y":15.1,"podil":90.0},
{"y":13.3,"podil":86.7},
{"y":13.1,"podil":86.7},
{"y":13.2,"podil":86.3},
{"y":13.5,"podil":87.0},
{"y":14.4,"podil":89.0},
{"y":15.9,"podil":90.4},
{"y":17.7,"podil":91.5},
{"y":24.2,"podil":94.3},
{"y":31.3,"podil":96.1}
];

var datatezbalistnate = [
{"y":1.6,"podil":10.5},
{"y":1.6,"podil":8.8},
{"y":1.2,"podil":6.6},
{"y":1.3,"podil":8.1},
{"y":1.5,"podil":9.4},
{"y":1.7,"podil":10.0},
{"y":2,"podil":13.3},
{"y":2,"podil":13.3},
{"y":2.1,"podil":13.7},
{"y":2,"podil":13.0},
{"y":1.8,"podil":11.0},
{"y":1.7,"podil":9.6},
{"y":1.7,"podil":8.5},
{"y":1.5,"podil":5.7},
{"y":1.3,"podil":3.9}
];

var datatezbasmrk = [
{"y":11.7,"podil":75.4},
{"y":13,"podil":73.7},
{"y":15.7,"podil":85.0},
{"y":13,"podil":80.1},
{"y":12.2,"podil":78.5},
{"y":12.3,"podil":73.5},
{"y":10.8,"podil":70.1},
{"y":10.5,"podil":69.6},
{"y":10.7,"podil":69.6},
{"y":11,"podil":71.0},
{"y":12.2,"podil":75.7},
{"y":14,"podil":79.4},
{"y":15.8,"podil":81.4},
{"y":22.4,"podil":87.2},
{"y":29.4,"podil":90.1}
];

var datatezbajedle = [
{"y":0.08,"podil":0.5},
{"y":0.08,"podil":0.5},
{"y":0.09,"podil":0.5},
{"y":0.06,"podil":0.4},
{"y":0.07,"podil":0.4},
{"y":0.08,"podil":0.5},
{"y":0.09,"podil":0.6},
{"y":0.11,"podil":0.7},
{"y":0.12,"podil":0.8},
{"y":0.12,"podil":0.8},
{"y":0.11,"podil":0.7},
{"y":0.12,"podil":0.7},
{"y":0.12,"podil":0.6},
{"y":0.14,"podil":0.5},
{"y":0.16,"podil":0.5}
];

var datatezbadouglaska = [
{"y":0.01,"podil":0.1},
{"y":0.02,"podil":0.1},
{"y":0.02,"podil":0.1},
{"y":0.02,"podil":0.1},
{"y":0.02,"podil":0.1},
{"y":0.02,"podil":0.1},
{"y":0.02,"podil":0.2},
{"y":0.03,"podil":0.2},
{"y":0.03,"podil":0.2},
{"y":0.04,"podil":0.3},
{"y":0.03,"podil":0.2},
{"y":0.03,"podil":0.2},
{"y":0.02,"podil":0.1},
{"y":0.03,"podil":0.1},
{"y":0.01,"podil":0.0}
];

var datatezbaborovice = [
{"y":1.7,"podil":10.7},
{"y":2.6,"podil":14.5},
{"y":1.2,"podil":6.3},
{"y":1.4,"podil":8.7},
{"y":1.4,"podil":8.9},
{"y":2.1,"podil":12.4},
{"y":1.9,"podil":12.4},
{"y":1.9,"podil":12.6},
{"y":1.9,"podil":12.3},
{"y":1.8,"podil":11.7},
{"y":1.6,"podil":9.6},
{"y":1.4,"podil":7.8},
{"y":1.4,"podil":7.0},
{"y":1.1,"podil":4.4},
{"y":1.3,"podil":4.0}
];

var datatezbamodrin = [
{"y":0.4,"podil":2.8},
{"y":0.4,"podil":2.4},
{"y":0.3,"podil":1.5},
{"y":0.4,"podil":2.6},
{"y":0.4,"podil":2.6},
{"y":0.6,"podil":3.5},
{"y":0.5,"podil":3.5},
{"y":0.5,"podil":3.6},
{"y":0.5,"podil":3.5},
{"y":0.5,"podil":3.4},
{"y":0.5,"podil":2.9},
{"y":0.4,"podil":2.4},
{"y":0.5,"podil":2.4},
{"y":0.5,"podil":2.0},
{"y":0.5,"podil":1.5}
];

var datatezbajehlost = [
{"y":0.001,"podil":0.0},
{"y":0.001,"podil":0.0},
{"y":0.003,"podil":0.0},
{"y":0.003,"podil":0.0},
{"y":0.002,"podil":0.0},
{"y":0.001,"podil":0.0},
{"y":0.000,"podil":0.0},
{"y":0.000,"podil":0.0},
{"y":0.000,"podil":0.0},
{"y":0.000,"podil":0.0},
{"y":0.000,"podil":0.0},
{"y":0.000,"podil":0.0},
{"y":0.000,"podil":0.0},
{"y":0.000,"podil":0.0},
{"y":0.000,"podil":0.0}
];

var datatezbadub = [
{"y":0.4,"podil":2.4},
{"y":0.4,"podil":2.2},
{"y":0.3,"podil":1.7},
{"y":0.3,"podil":2.1},
{"y":0.4,"podil":2.4},
{"y":0.4,"podil":2.3},
{"y":0.4,"podil":2.8},
{"y":0.5,"podil":3.2},
{"y":0.5,"podil":3.2},
{"y":0.4,"podil":2.9},
{"y":0.4,"podil":2.5},
{"y":0.4,"podil":2.2},
{"y":0.4,"podil":1.8},
{"y":0.3,"podil":1.2},
{"y":0.3,"podil":0.8}
];

var datatezbabuk = [
{"y":0.8,"podil":5.2},
{"y":0.7,"podil":4.0},
{"y":0.6,"podil":3.1},
{"y":0.6,"podil":3.5},
{"y":0.6,"podil":4.1},
{"y":0.8,"podil":4.9},
{"y":1,"podil":6.6},
{"y":0.9,"podil":5.9},
{"y":0.9,"podil":6.2},
{"y":0.9,"podil":5.8},
{"y":0.8,"podil":4.7},
{"y":0.7,"podil":4.2},
{"y":0.7,"podil":3.7},
{"y":0.7,"podil":2.5},
{"y":0.6,"podil":1.7}
];

var datatezbajavor = [
{"y":0.028,"podil":0.2},
{"y":0.028,"podil":0.2},
{"y":0.017,"podil":0.1},
{"y":0.023,"podil":0.1},
{"y":0.025,"podil":0.2},
{"y":0.030,"podil":0.2},
{"y":0.044,"podil":0.3},
{"y":0.045,"podil":0.3},
{"y":0.054,"podil":0.4},
{"y":0.047,"podil":0.3},
{"y":0.043,"podil":0.3},
{"y":0.038,"podil":0.2},
{"y":0.042,"podil":0.2},
{"y":0.033,"podil":0.1},
{"y":0.026,"podil":0.1}
];

var datatezbajasan = [
{"y":0.07,"podil":0.5},
{"y":0.07,"podil":0.4},
{"y":0.06,"podil":0.3},
{"y":0.07,"podil":0.4},
{"y":0.08,"podil":0.5},
{"y":0.07,"podil":0.4},
{"y":0.1,"podil":0.6},
{"y":0.09,"podil":0.6},
{"y":0.1,"podil":0.7},
{"y":0.11,"podil":0.7},
{"y":0.12,"podil":0.7},
{"y":0.12,"podil":0.7},
{"y":0.15,"podil":0.8},
{"y":0.19,"podil":0.7},
{"y":0.19,"podil":0.6}
];

var datatezbalipa = [
{"y":0.053,"podil":0.3},
{"y":0.055,"podil":0.3},
{"y":0.040,"podil":0.2},
{"y":0.055,"podil":0.3},
{"y":0.056,"podil":0.4},
{"y":0.062,"podil":0.4},
{"y":0.077,"podil":0.5},
{"y":0.082,"podil":0.5},
{"y":0.074,"podil":0.5},
{"y":0.073,"podil":0.5},
{"y":0.066,"podil":0.4},
{"y":0.054,"podil":0.3},
{"y":0.052,"podil":0.3},
{"y":0.042,"podil":0.2},
{"y":0.037,"podil":0.1}
];

var datatezbalistost = [
{"y":0.3,"podil":1.9},
{"y":0.3,"podil":1.7},
{"y":0.2,"podil":1.3},
{"y":0.3,"podil":1.6},
{"y":0.3,"podil":1.9},
{"y":0.3,"podil":1.9},
{"y":0.4,"podil":2.5},
{"y":0.4,"podil":2.8},
{"y":0.4,"podil":2.9},
{"y":0.4,"podil":2.8},
{"y":0.4,"podil":2.3},
{"y":0.3,"podil":1.9},
{"y":0.3,"podil":1.7},
{"y":0.3,"podil":1.0},
{"y":0.2,"podil":0.6}
];

var rokyholiny = [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019];

var dataholinyprirustek = [
{"y":25600,"tezba":21001,"nezalesneni":3087,"pohromy":1512},
{"y":25056,"tezba":20329,"nezalesneni":3712,"pohromy":1015},
{"y":24511,"tezba":19835,"nezalesneni":3751,"pohromy":925},
{"y":23537,"tezba":18233,"nezalesneni":4327,"pohromy":977},
{"y":23495,"tezba":17872,"nezalesneni":4634,"pohromy":989},
{"y":22345,"tezba":15510,"nezalesneni":5246,"pohromy":1589},
{"y":23111,"tezba":17552,"nezalesneni":4433,"pohromy":1126},
{"y":26300,"tezba":20741,"nezalesneni":4095,"pohromy":1464},
{"y":35867,"tezba":27824,"nezalesneni":3941,"pohromy":4102},
{"y":51745,"tezba":43501,"nezalesneni":3799,"pohromy":4445}
];

var dataholinyubytek = [
{"y":25795,"zalesneni":21383,"obnova":4412},
{"y":25884,"zalesneni":21348,"obnova":4536},
{"y":24506,"zalesneni":19633,"obnova":4873},
{"y":24467,"zalesneni":19466,"obnova":5001},
{"y":24449,"zalesneni":19823,"obnova":4626},
{"y":22694,"zalesneni":18558,"obnova":4136},
{"y":23513,"zalesneni":19719,"obnova":3794},
{"y":23542,"zalesneni":19643,"obnova":3899},
{"y":24257,"zalesneni":21013,"obnova":3244},
{"y":33009,"zalesneni":28449,"obnova":4561}
];

var dataholinyrozloha = [24851,24023,24028,23098,22144,21795,21393,24151,35761,54497];

var datanahodilatezba = [
{"y":4539,"zivelni":2303,"exhalacni":38,"hmyzova":983,"ostatni":1215},
{"y":8027,"zivelni":5973,"exhalacni":26,"hmyzova":1139,"ostatni":889},
{"y":14885,"zivelni":12652,"exhalacni":39,"hmyzova":1556,"ostatni":638},
{"y":10749,"zivelni":7601,"exhalacni":35,"hmyzova":2315,"ostatni":798},
{"y":6628,"zivelni":3246,"exhalacni":28,"hmyzova":2624,"ostatni":730},
{"y":6459,"zivelni":4075,"exhalacni":27,"hmyzova":1788,"ostatni":569},
{"y":3820,"zivelni":2170,"exhalacni":21,"hmyzova":1054,"ostatni":575},
{"y":3237,"zivelni":1700,"exhalacni":22,"hmyzova":786,"ostatni":729},
{"y":4248,"zivelni":2277,"exhalacni":22,"hmyzova":1052,"ostatni":897},
{"y":4527,"zivelni":2455,"exhalacni":19,"hmyzova":1133,"ostatni":920},
{"y":8153,"zivelni":4388,"exhalacni":28,"hmyzova":2309,"ostatni":1428},
{"y":9399,"zivelni":2636,"exhalacni":29,"hmyzova":4420,"ostatni":2314},
{"y":11743,"zivelni":4345,"exhalacni":20,"hmyzova":5853,"ostatni":1525},
{"y":23013,"zivelni":8378,"exhalacni":19,"hmyzova":13059,"ostatni":1557},
{"y":30945,"zivelni":5879,"exhalacni":20,"hmyzova":22780,"ostatni":2266}
];

var datanahodilazbyva = [
{"y":474,"zivelni":384,"exhalacni":11,"hmyzova":26,"ostatni":53},
{"y":243,"zivelni":154,"exhalacni":9,"hmyzova":18,"ostatni":63},
{"y":341,"zivelni":247,"exhalacni":7,"hmyzova":30,"ostatni":57},
{"y":371,"zivelni":287,"exhalacni":7,"hmyzova":33,"ostatni":45},
{"y":273,"zivelni":221,"exhalacni":5,"hmyzova":21,"ostatni":26},
{"y":162,"zivelni":131,"exhalacni":6,"hmyzova":6,"ostatni":19},
{"y":95,"zivelni":64,"exhalacni":6,"hmyzova":2,"ostatni":23},
{"y":79,"zivelni":53,"exhalacni":4,"hmyzova":5,"ostatni":16},
{"y":224,"zivelni":168,"exhalacni":4,"hmyzova":15,"ostatni":38},
{"y":280,"zivelni":211,"exhalacni":4,"hmyzova":19,"ostatni":46},
{"y":441,"zivelni":173,"exhalacni":3,"hmyzova":142,"ostatni":122},
{"y":443,"zivelni":163,"exhalacni":2,"hmyzova":214,"ostatni":64},
{"y":2282,"zivelni":1648,"exhalacni":1,"hmyzova":539,"ostatni":94},
{"y":3182,"zivelni":609,"exhalacni":1,"hmyzova":2246,"ostatni":326},
{"y":6345,"zivelni":455,"exhalacni":1,"hmyzova":5130,"ostatni":759}
];

var rokycena = ["1/2005","2/2005","3/2005","4/2005","1/2006","2/2006","3/2006","4/2006","1/2007","2/2007","3/2007","4/2007","1/2008","2/2008","3/2008","4/2008","1/2009","2/2009","3/2009","4/2009","1/2010","2/2010","3/2010","4/2010","1/2011","2/2011","3/2011","4/2011","1/2012","2/2012","3/2012","4/2012","1/2013","2/2013","3/2013","4/2013","1/2014","2/2014","3/2014","4/2014","1/2015","2/2015","3/2015","4/2015","1/2016","2/2016","3/2016","4/2016","1/2017","2/2017","3/2017","4/2017","1/2018","2/2018","3/2018","4/2018","1/2019","2/2019","3/2019","4/2019","1/2020"];

var cenakat = ["I. třída","II. třída","III.A/III.B třída","III.C třída","III.D třída","V. třída"];

var datacena = [
  [3611,3041,1747,null,null,649],
  [3642,2994,1748,null,null,656],
  [3535,2909,1699,null,null,649],
  [3938,3025,1766,null,null,664],
  [4150,3156,1733,null,null,713],
  [4010,3257,1712,null,null,754],
  [3909,3104,1727,null,null,732],
  [4119,3193,1809,null,null,747],
  [4211,3276,2113,1733,1243,806],
  [4242,3171,1835,1491,1062,744],
  [3625,3025,1702,1397,952,761],
  [3615,3247,1778,1448,964,747],
  [4244,3227,1896,1560,1043,740],
  [3783,2934,1423,1136,823,616],
  [3969,2856,1395,1128,787,589],
  [4008,2667,1391,1106,790,576],
  [3290,2745,1415,1091,772,559],
  [3405,2396,1445,1135,819,553],
  [3442,2350,1497,1205,845,609],
  [4045,2429,1535,1231,875,637],
  [3800,2519,1640,1324,936,713],
  [null,2354,1785,1447,1060,760],
  [null,2433,1866,1529,1145,807],
  [null,2566,1983,1743,1192,814],
  [null,2795,2048,1910,1350,1078],
  [null,2885,2000,1872,1368,1074],
  [null,2389,2006,1815,1393,980],
  [null,2969,2111,1943,1399,938],
  [null,2900,2165,1942,1463,887],
  [null,2973,2132,1967,1459,859],
  [null,2680,2107,1910,1468,859],
  [null,2976,2137,1938,1467,894],
  [null,2909,2153,1941,1556,921],
  [null,2802,2160,1958,1499,947],
  [null,2827,2181,1971,1526,973],
  [null,2858,2205,1976,1577,1038],
  [2744,2931,2376,2100,1647,1084],
  [null,2834,2258,1995,1603,1072],
  [null,2589,2229,1908,1635,1016],
  [null,2858,2279,1976,1652,990],
  [null,3067,2413,2105,1730,1018],
  [null,2911,2323,2099,1741,1009],
  [null,2723,2191,1949,1691,1001],
  [null,2731,2098,1831,1588,938],
  [null,2985,2092,1841,1532,860],
  [null,2912,2051,1816,1486,790],
  [null,2747,2046,1707,1480,743],
  [null,2901,2074,1799,1494,748],
  [3209,2931,2139,1842,1485,774],
  [null,2840,2111,1811,1496,751],
  [null,null,2056,1705,1451,746],
  [null,2882,1983,1574,1207,705],
  [null,2996,2064,1628,1318,719],
  [null,2661,1928,1541,1232,684],
  [null,null,1735,1423,1069,624],
  [null,3092,1694,1320,992,602],
  [null,2879,1715,1329,961,618],
  [null,2657,1628,1371,922,518],
  [null,2315,1464,1180,834,465],
  [null,null,1392,1127,804,436],
  [null,null,1423,1233,837,414]
];

var datacena0 = datacena.map(function(value,index) {return value[0]});

var datacena1 = datacena.map(function(value,index) {return value[1]});

var datacena2 = datacena.map(function(value,index) {return value[2]});

var datacena3 = datacena.map(function(value,index) {return value[3]});

var datacena4 = datacena.map(function(value,index) {return value[4]});

var datacena5 = datacena.map(function(value,index) {return value[5]});

var dataplocha = [20.0,20.1,20.0,20.0,20.1,20.2,20.3,20.4,20.5,20.7,20.8,20.9,21.1,21.2,21.3,21.5,21.6,21.7,22.0,22.1,22.3,22.5,22.8,23.2,23.4,23.7,23.9,24.2,24.5,24.8,25.1,25.3,25.6,25.9,26.2,26.5,26.7,27.0,27.3];

var rokyplocha = [1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018];

var dataprodejjehl = [3.53,3.67,4.22,4.85,5.13,5.86,5.36];

var dataprodejlist = [0.39,0.48,0.42,0.24,0.19,0.09,0.04];

var rokyprodej = [2013,2014,2015,2016,2017,2018,2019];

Highcharts.chart('zalesnovani', {
    chart: {
        type: 'line'
    },

    title: {
        text: ''
    },

    subtitle: {
        text: ''
    },

    xAxis: {
        categories: roky
    },

    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function () {
                return this.value + ' ha';
            }
        },
        min: 0
    },

    tooltip: {
        pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b> ({point.podil} %)<br/>',
        valueSuffix: ' ha',
        shared: true
    },

    exporting: {
        enabled: false
    },

    credits: {
        text: ''
    },

    legend: {
        layout: 'horizontal'
    },

    plotOptions: {
        line: {
            marker: {
                symbol: 'circle'
            }
        }
    },

    series: [{
        name: 'jehličnaté',
        data: datazalesnovanijehlicnate,
        color: colors[11]
    }, {
        name: 'listnaté',
        data: datazalesnovanilistnate,
        color: colors[7]
    }]
});

Highcharts.chart('zalesnovanidruhy', {
    chart: {
        type: 'line'
    },

    title: {
        text: ''
    },

    subtitle: {
        text: ''
    },

    xAxis: {
        categories: roky
    },

    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function () {
                return this.value + ' ha';
            }
        },
        min: 0
    },

    tooltip: {
        pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b> ({point.podil} %)<br/>',
        valueSuffix: ' ha',
        shared: true
    },

    exporting: {
        enabled: false
    },

    credits: {
        text: ''
    },

    legend: {
        layout: 'horizontal'
    },

    plotOptions: {
        line: {
            marker: {
                symbol: 'circle'
            }
        }
    },

    series: [{
        name: 'smrk',
        data: datazalesnovanismrk,
        color: colors[11]
    }, {
        name: 'borovice',
        data: datazalesnovaniborovice,
        color: colors[6]
    }, {
        name: 'jedle',
        data: datazalesnovanijedle,
        color: colors[8],
        visible: false
    }, {
        name: 'douglaska',
        data: datazalesnovanidouglaska,
        color: colors[3],
        visible: false
    }, {
        name: 'modřín',
        data: datazalesnovanimodrin,
        color: colors[5],
        visible: false
    }, {
        name: 'buk',
        data: datazalesnovanibuk,
        color: colors[7]
    }, {
        name: 'dub',
        data: datazalesnovanidub,
        color: colors[2]
    }, {
        name: 'javor',
        data: datazalesnovanijavor,
        color: colors[9],
        visible: false
    }, {
        name: 'lípa',
        data: datazalesnovanilipa,
        color: colors[1],
        visible: false
    }, {
        name: 'jasan',
        data: datazalesnovanijasan,
        color: colors[11],
        visible: false
    }, {
        name: 'ostatní listnaté',
        data: datazalesnovanilistost,
        color: colors[4],
        visible: false
    }]
});

Highcharts.chart('tezba', {
    chart: {
        type: 'line'
    },

    title: {
        text: ''
    },

    subtitle: {
        text: ''
    },

    xAxis: {
        categories: roky
    },

    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function () {
                return this.value + ' mil. m³';
            }
        },
        min: 0
    },

    tooltip: {
        pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b> ({point.podil} %)<br/>',
        valueSuffix: ' mil. m³',
        shared: true
    },

    exporting: {
        enabled: false
    },

    credits: {
        text: ''
    },

    legend: {
        layout: 'horizontal'
    },

    plotOptions: {
        line: {
            marker: {
                symbol: 'circle'
            }
        }
    },

    series: [{
        name: 'jehličnaté',
        data: datatezbajehlicnate,
        color: colors[11]
    }, {
        name: 'listnaté',
        data: datatezbalistnate,
        color: colors[7]
    }]
});

Highcharts.chart('tezbadruhy', {
    chart: {
        type: 'line'
    },

    title: {
        text: ''
    },

    subtitle: {
        text: ''
    },

    xAxis: {
        categories: roky
    },

    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function () {
                return this.value + ' mil. m³';
            }
        },
        min: 0
    },

    tooltip: {
        pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b> ({point.podil} %)<br/>',
        valueSuffix: ' mil. m³',
        shared: true
    },

    exporting: {
        enabled: false
    },

    credits: {
        text: ''
    },

    legend: {
        layout: 'horizontal'
    },

    plotOptions: {
        line: {
            marker: {
                symbol: 'circle'
            }
        }
    },

    series: [{
        name: 'smrk',
        data: datatezbasmrk,
        color: colors[11]
    }, {
        name: 'borovice',
        data: datatezbaborovice,
        color: colors[6]
    }, {
        name: 'modřín',
        data: datatezbamodrin,
        color: colors[5],
        visible: false
    }, {
        name: 'buk',
        data: datatezbabuk,
        color: colors[7]
    }, {
        name: 'dub',
        data: datatezbadub,
        color: colors[2]
    }, {
        name: 'ostatní listnaté',
        data: datatezbalistost,
        color: colors[10],
        visible: false
    }]
});

Highcharts.chart('holiny', {
    chart: {
        type: 'column'
    },

    title: {
        text: 'Plocha holin'
    },

    subtitle: {
        text: ''
    },

    xAxis: {
        categories: rokyholiny
    },

    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function () {
                return this.value + ' ha';
            }
        },
        min: 0
    },

    tooltip: {
        formatter: function () {
            if (this.series.name == 'zalesnění') {
                return '<span style="color:' + this.point.color + '">● </span><span style="font-size: 10px;">' + this.x + '</span><br/><b>' + this.series.name + ': ' + this.point.y + ' ha</b><br/>• umělé zalesnění: ' + this.point.zalesneni + ' ha<br/>• přirozená obnova: ' + this.point.obnova + ' ha';
            } else if (this.series.name == 'odlesnění') {
                return '<span style="color:' + this.point.color + '">● </span><span style="font-size: 10px;">' + this.x + '</span><br/><b>' + this.series.name + ': ' + this.point.y + ' ha</b><br/>• těžba: ' + this.point.tezba + ' ha<br/>• neúspěšné zalesnění: ' + this.point.nezalesneni + ' ha<br/>• živelní pohromy: ' + this.point.pohromy + ' ha';
            } else {
                return '<span style="color:' + this.point.color + '">● </span><span style="font-size: 10px;">' + this.x + '</span><br/>' + this.series.name + ': <b>' + this.point.y + ' ha</b><br/>';
            }
        }
    },

    exporting: {
        enabled: false
    },

    credits: {
        href: 'https://www.czso.cz/csu/czso/lesnictvi-2019',
        text: 'Zdroj: ČSÚ'
    },

    plotOptions: {
        line: {
            marker: {
                symbol: 'circle'
            }
        }
    },

    series: [{
        name: 'zalesnění',
        data: dataholinyubytek,
        color: colors[3]
    }, {
        name: 'odlesnění',
        data: dataholinyprirustek,
        color: colors[8]
    }, {
        name: 'plocha holin ke konci roku',
        type: 'line',
        data: dataholinyrozloha,
        color: kontrast[2]
    }]
});

Highcharts.chart('nahodila', {
    chart: {
        type: 'column'
    },

    title: {
        text: 'Nahodilá těžba dřeva'
    },

    subtitle: {
        text: ''
    },

    xAxis: {
        categories: roky
    },

    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function () {
                return this.value + ' tisíc m³';
            }
        },
        min: 0
    },

    tooltip: {
        formatter: function () {
            return '<span style="color:' + this.point.color + '">● </span><span style="font-size: 10px;">' + this.x + '</span><br/><b>' + this.series.name + ': ' + this.point.y + ' tisíc m³</b><br/>• živelní pohroma: ' + this.point.zivelni + ' tisíc m³<br/>• znečistění vzduchu: ' + this.point.exhalacni + ' tisíc m³<br/>• napadení hmyzem: ' + this.point.hmyzova + ' tisíc m³<br/>• ostatní: ' + this.point.ostatni + ' tisíc m³';
        }
    },

    exporting: {
        enabled: false
    },

    credits: {
        href: 'https://www.czso.cz/csu/czso/lesnictvi-2019',
        text: 'Zdroj: ČSÚ'
    },

    series: [{
        name: 'nahodilá těžba',
        data: datanahodilatezba,
        color: colors[11]
    }, {
        name: 'zbývá zpracovat',
        data: datanahodilazbyva,
        color: colors[2]
    }]
});

Highcharts.chart('cena', {
    chart: {
        type: 'line'
    },

    title: {
        text: 'Průměrná cena surového smrkového dřeva'
    },

    subtitle: {
        text: 'kategorie <i>vlastníci</i>'
    },

    xAxis: {
        categories: rokycena
    },

    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function () {
                return this.value + ' Kč/m³';
            }
        },
        min: 0
    },

    tooltip: {
        formatter: function () {
            return '<span style="color:' + this.point.color + '">● </span><span style="font-size: 10px;">' + this.x + '</span><br/><b>' + this.series.name + ': ' + this.point.y + ' tisíc m³</b><br/>• živelní pohroma: ' + this.point.zivelni + ' tisíc m³<br/>• znečistění vzduchu: ' + this.point.exhalacni + ' tisíc m³<br/>• napadení hmyzem: ' + this.point.hmyzova + ' tisíc m³<br/>• ostatní: ' + this.point.ostatni + ' tisíc m³';
        }
    },

    exporting: {
        enabled: false
    },

    credits: {
        href: 'https://www.czso.cz/csu/czso/indexy-cen-v-lesnictvi-surove-drivi-1-ctvrtleti-2020',
        text: 'Zdroj: ČSÚ'
    },

    plotOptions: {
        line: {
            marker: {
                symbol: 'circle'
            }
        }
    },

    tooltip: {
        valueSuffix: ' Kč/m³',
        shared: true
    },

    series: [{
        name: cenakat[0],
        data: datacena0,
        color: colors[9],
        visible: false
    }, {
        name: cenakat[1],
        data: datacena1,
        color: colors[11]
    }, {
        name: cenakat[2],
        data: datacena2,
        color: colors[2]
    }, {
        name: cenakat[3],
        data: datacena3,
        color: colors[6],
        visible: false
    }, {
        name: cenakat[4],
        data: datacena4,
        color: colors[1],
        visible: false
    }, {
        name: cenakat[5],
        data: datacena5,
        color: colors[8]
    }]
});

Highcharts.chart('plocha', {
    chart: {
        type: 'line'
    },

    title: {
        text: 'Plocha listnatých lesů'
    },

    subtitle: {
        text: ''
    },

    xAxis: {
        categories: rokyplocha
    },

    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function () {
                return this.value + ' %';
            }
        },
        min: 0
    },

    tooltip: {
        valueSuffix: ' %'
    },

    exporting: {
        enabled: false
    },

    legend: {
        enabled: false
    },

    credits: {
        href: 'http://eagri.cz/public/app/uhul/SIL/Default.cshtml',
        text: 'Zdroj: ÚHÚL'
    },

    plotOptions: {
        line: {
            marker: {
                symbol: 'circle'
            }
        }
    },

    series: [{
        name: 'plocha listnatých lesů',
        data: dataplocha,
        color: colors[7]
    }]
});

Highcharts.chart('prodej', {
    chart: {
        type: 'column'
    },

    title: {
        text: 'Prodej dřeva'
    },

    subtitle: {
        text: 'Surové dříví nakoupené v ČR od největších společností obchodujících se dřevem'
    },

    xAxis: {
        categories: rokyprodej
    },

    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function () {
                return this.value + ' mil. m³';
            }
        },
        min: 0
    },

    tooltip: {
        valueSuffix: ' mil. m³'
    },

    exporting: {
        enabled: false
    },

    credits: {
        href: 'https://www.czso.cz/csu/czso/lesnictvi-2019',
        text: 'Zdroj: ČSÚ'
    },

    series: [{
        name: 'jehličnaté',
        data: dataprodejjehl,
        color: colors[11]
    }, {
        name: 'listnaté',
        data: dataprodejlist,
        color: colors[7]
    }]
});