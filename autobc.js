

jist_task_queue(0, 60, 0, function() {
    tshock_broadcast("这里是blabla的服务器. 网站是 http://blambin.org/tr , QQ群:480255423\n如果被冻住了，检查一下自己的第一排背包栏，装备栏，还有钩爪坐骑栏那些在当前等级不能用的东西 ,\n使用 /rank up 来升级，来怪会掉经验，/bank bal 可以看到你获得的经验数 exp. \n 不要尝试作弊. 输入 lv1,lv2 ... 来查看对应等级能用的物品. ");
});


acmd_alias_create("lv1", "0", 0, "", function(player, args) {
    tshock_msg(player, "[i:-24][i:-23][i:-22][i:-21][i:-20][i:-19][i:44][i:45][i:46][i:47][i:49][i:51][i:53][i:54][i:55][i:64][i:84][i:88][i:95][i:96][i:100][i:101]\n[i:102][i:103][i:104][i:111][i:123][i:124][i:125][i:158][i:159][i:162][i:187][i:198][i:199][i:200][i:201][i:202][i:203][i:204][i:216][i:256]\n[i:257][i:258][i:277][i:393][i:410][i:411][i:741][i:742][i:743][i:792][i:793][i:794][i:795][i:796][i:797][i:798][i:799][i:800][i:801][i:802]\n[i:930][i:946][i:950][i:953][i:956][i:957][i:958][i:975][i:982][i:987][i:1236][i:1237][i:1238][i:1239][i:1240][i:1241][i:1256][i:1257][i:1284]\n[i:1285][i:1286][i:1287][i:1307][i:1319][i:1320][i:1579][i:1909][i:1918][i:2273][i:2277][i:2279][i:2293][i:2330][i:2421][i:2423][i:2590][i:2997]\n[i:3037][i:3097][i:3200][i:3201][i:3212][i:3213][i:3223][i:3224][i:3225][i:3241][i:3250][i:3251][i:3252][i:3279][i:3280][i:3285][i:3374][i:3375][i:3376]");
});


acmd_alias_create("lv2", "0", 0, "", function(player, args) {
    tshock_msg(player, "[i:65][i:98][i:113][i:151][i:152][i:153][i:155][i:156][i:157][i:160][i:163][i:164][i:165][i:193][i:197][i:238][i:266][i:268][i:744][i:857]\n[i:891][i:934][i:939][i:959][i:964][i:976][i:989][i:1121][i:1132][i:1249][i:1273][i:1303][i:1313][i:1325][i:1595][i:1724][i:1827][i:1921]\n[i:2269][i:2275][i:2292][i:2295][i:2296][i:2332][i:3090][i:3103][i:3245][i:3262][i:3349][i:3350][i:3351][i:3352][i:3368][i:3548]");
});


acmd_alias_create("lv3", "0", 0, "", function(player, args) {
    tshock_msg(player, "[i:207][i:112][i:119][i:120][i:121][i:122][i:128][i:190][i:191][i:211][i:212][i:217][i:218][i:219][i:220][i:223][i:228][i:229][i:230]\n[i:231][i:232][i:233][i:272][i:273][i:274][i:395][i:407][i:906][i:928][i:960][i:961][i:962][i:986][i:1123][i:1166][i:1302][i:1322][i:1323]\n[i:1578][i:1800][i:1837][i:1959][i:2320][i:2341][i:2342][i:2360][i:2361][i:2362][i:2363][i:2364][i:2365][i:2422][i:2424][i:2428][i:2429]\n[i:2430][i:2491][i:2585][i:2888][i:3009][i:3010][i:3011][i:3019][i:3036][i:3281][i:3282][i:3315][i:3316][i:3317][i:3333]");
});


acmd_alias_create("lv4", "0", 0, "", function(player, args) {
    tshock_msg(player, "[i:367][i:371][i:372][i:373][i:374][i:375][i:376][i:377][i:378][i:379][i:380][i:383][i:384][i:385][i:386][i:387][i:388][i:390][i:394][i:396]\n[i:397][i:399][i:400][i:401][i:402][i:403][i:404][i:405][i:406][i:426][i:434][i:435][i:436][i:437][i:481][i:482][i:483][i:484][i:485][i:489]\n[i:490][i:491][i:496][i:514][i:517][i:518][i:519][i:532][i:534][i:535][i:536][i:537][i:554][i:555][i:672][i:723][i:776][i:777][i:778][i:863]\n[i:885][i:886][i:887][i:888][i:889][i:890][i:892][i:893][i:907][i:983][i:990][i:991][i:992][i:993][i:1163][i:1185][i:1186][i:1187][i:1188][i:1189]\n[i:1190][i:1192][i:1193][i:1194][i:1195][i:1196][i:1197][i:1199][i:1200][i:1201][i:1202][i:1203][i:1204][i:1205][i:1206][i:1207][i:1208]\n[i:1209][i:1210][i:1211][i:1212][i:1213][i:1214][i:1215][i:1216][i:1217][i:1218][i:1219][i:1222][i:1223][i:1224][i:1247][i:1250][i:1251][i:1252]\n[i:1300][i:1309][i:1314][i:1321][i:1336][i:1863][i:2219][i:2270][i:2366][i:2370][i:2371][i:2372][i:2494][i:2551][i:2608][i:2749][i:2998]\n[i:3031][i:3183][i:3258][i:3269][i:3283][i:3289][i:3290][i:3334][i:3335][i:3366]");
});


acmd_alias_create("lv5", "0", 0, "", function(player, args) {
    tshock_msg(player, "[i:368][i:389][i:425][i:492][i:493][i:494][i:495][i:497][i:506][i:533][i:550][i:551][i:552][i:553][i:561][i:578][i:579][i:676][i:682][i:684]\n[i:685][i:686][i:725][i:726][i:748][i:749][i:761][i:785][i:786][i:821][i:822][i:854][i:855][i:897][i:898][i:900][i:901][i:902][i:903][i:904]\n[i:935][i:1162][i:1165][i:1253][i:1261][i:1306][i:1324][i:1515][i:1611][i:1860][i:1866][i:1871][i:2220][i:2221][i:2535][i:2584][i:2750][i:3006]\n[i:3007][i:3008][i:3012][i:3013][i:3014][i:3016][i:3015][i:3018][i:3033][i:3034][i:3051][i:3052][i:3053][i:3054][i:3209][i:3210][i:3211][i:3284]");
});


acmd_alias_create("lv6", "0", 0, "", function(player, args) {
    tshock_msg(player, "[i:683][i:860][i:861][i:862][i:905][i:936][i:1244][i:1264][i:1308][i:1327][i:1612][i:1861][i:3029][i:3030][i:3035][i:3353]");
});


acmd_alias_create("lv7", "0", 0, "", function(player, args) {
    tshock_msg(player, "[i:756][i:787][i:788][i:899][i:908][i:963][i:977][i:1001][i:1002][i:1003][i:1004][i:1005][i:1006][i:1122][i:1157][i:1158][i:1159][i:1160]\n[i:1161][i:1167][i:1178][i:1179][i:1226][i:1227][i:1228][i:1229][i:1230][i:1231][i:1232][i:1233][i:1234][i:1235][i:1248][i:1255][i:1258][i:1259]\n[i:1262][i:1265][i:1294][i:1295][i:1296][i:1297][i:1301][i:1343][i:1613][i:1797][i:1829][i:1830][i:1858][i:1862][i:1865][i:1915][i:1916]\n[i:1947][i:2188][i:2280][i:2331][i:2800][i:3124][i:3286][i:3544]");
});


acmd_alias_create("lv8", "0", 0, "", function(player, args) {
    tshock_msg(player, "[i:671][i:674][i:675][i:679][i:757][i:758][i:759][i:760][i:823][i:938][i:948][i:984][i:1131][i:1155][i:1156][i:1164][i:1184][i:1254][i:1260]\n[i:1266][i:1305][i:1316][i:1317][i:1318][i:1444][i:1445][i:1446][i:1503][i:1504][i:1505][i:1506][i:1507][i:1513][i:1546][i:1547][i:1548][i:1549]\n[i:1550][i:1569][i:1571][i:1572][i:1782][i:1784][i:1801][i:1802][i:1825][i:1826][i:1832][i:1833][i:1834][i:1835][i:1844][i:1845][i:1864]\n[i:1910][i:1914][i:1928][i:1929][i:1930][i:1931][i:1946][i:1958][i:2176][i:2189][i:2199][i:2201][i:2202][i:2223][i:2609][i:2611][i:2621][i:2622]\n[i:2623][i:2624][i:2767][i:2768][i:2769][i:2770][i:2771][i:2880][i:2881][i:2882][i:3098][i:3105][i:3106][i:3107][i:3108][i:3110][i:3249]\n[i:3287][i:3291][i:3292][i:3336][i:3337][i:3367][i:3384]");
});


acmd_alias_create("lv9", "0", 0, "", function(player, args) {
    tshock_msg(player, "[i:665][i:1583][i:1584][i:1585][i:1586][i:2795][i:2796][i:2797][i:2798][i:3065][i:3228][i:3567][i:3568][i:3581][i:3580][i:3582][i:3592]");
});

acmd_alias_create("lv10", "0", 0, "", function(player, args) {
    tshock_msg(player, "[i:1553][i:2756][i:2757][i:2758][i:2759][i:2760][i:2761][i:2762][i:2763][i:2764][i:2765][i:2772][i:2773][i:2774][i:2775][i:2776][i:2777]\n[i:2778][i:2779][i:2780][i:2781][i:2782][i:2783][i:2784][i:2785][i:2786][i:3063][i:3381][i:3382][i:3383][i:3389][i:3462][i:3463][i:3464][i:3465]\n[i:3466][i:3468][i:3469][i:3470][i:3471][i:3473][i:3474][i:3475][i:3476][i:3522][i:3523][i:3524][i:3525][i:3531][i:3540][i:3541][i:3542][i:3543]\n[i:3546][i:3569][i:3570][i:3571][i:3572][i:3577]");
});

