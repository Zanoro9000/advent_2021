export function problem(){
  const count = depths.reduce((count, depth, i, arr) => 
    i > 0 ? 
      depth > arr[i-1] ? count + 1 : count
      : count
  , 0)
  console.log(count)
}

const depths = [
  182,
  188,
  204,
  203,
  205,
  206,
  208,
  216,
  217,
  218,
  219,
  225,
  226,
  207,
  204,
  205,
  217,
  255,
  254,
  270,
  261,
  262,
  264,
  265,
  255,
  257,
  249,
  248,
  249,
  250,
  265,
  286,
  308,
  309,
  317,
  326,
  328,
  316,
  318,
  333,
  330,
  293,
  292,
  294,
  321,
  313,
  307,
  301,
  296,
  291,
  295,
  297,
  304,
  314,
  331,
  330,
  342,
  325,
  324,
  354,
  360,
  368,
  371,
  372,
  373,
  374,
  381,
  384,
  387,
  389,
  390,
  392,
  393,
  382,
  361,
  350,
  356,
  357,
  359,
  363,
  371,
  391,
  398,
  402,
  403,
  397,
  394,
  397,
  396,
  398,
  399,
  393,
  411,
  417,
  428,
  429,
  456,
  446,
  451,
  459,
  456,
  460,
  458,
  451,
  455,
  452,
  446,
  451,
  448,
  444,
  476,
  478,
  480,
  503,
  502,
  504,
  496,
  511,
  518,
  531,
  543,
  544,
  516,
  512,
  511,
  514,
  524,
  522,
  523,
  535,
  558,
  576,
  589,
  584,
  580,
  582,
  581,
  580,
  571,
  570,
  578,
  616,
  609,
  610,
  603,
  604,
  614,
  615,
  616,
  614,
  612,
  604,
  601,
  606,
  604,
  600,
  599,
  600,
  609,
  614,
  607,
  631,
  629,
  631,
  637,
  653,
  661,
  660,
  661,
  705,
  721,
  719,
  722,
  707,
  720,
  725,
  721,
  729,
  730,
  729,
  730,
  718,
  728,
  733,
  709,
  712,
  699,
  670,
  671,
  670,
  655,
  641,
  658,
  661,
  659,
  648,
  649,
  644,
  643,
  642,
  643,
  636,
  656,
  660,
  670,
  677,
  679,
  676,
  658,
  659,
  651,
  656,
  637,
  632,
  625,
  624,
  585,
  590,
  591,
  594,
  595,
  596,
  607,
  584,
  586,
  587,
  597,
  589,
  588,
  589,
  599,
  597,
  606,
  592,
  612,
  614,
  608,
  602,
  601,
  574,
  567,
  557,
  535,
  533,
  534,
  535,
  509,
  520,
  525,
  539,
  535,
  546,
  551,
  566,
  571,
  564,
  567,
  556,
  566,
  567,
  566,
  579,
  610,
  613,
  620,
  621,
  598,
  599,
  626,
  633,
  659,
  641,
  642,
  643,
  641,
  642,
  646,
  661,
  662,
  668,
  674,
  676,
  681,
  689,
  690,
  689,
  677,
  697,
  700,
  712,
  702,
  704,
  707,
  708,
  705,
  706,
  709,
  704,
  705,
  706,
  705,
  698,
  694,
  693,
  694,
  692,
  689,
  686,
  688,
  694,
  720,
  721,
  733,
  732,
  716,
  702,
  704,
  710,
  701,
  698,
  703,
  704,
  702,
  703,
  723,
  713,
  722,
  724,
  739,
  740,
  741,
  743,
  741,
  727,
  724,
  704,
  699,
  715,
  710,
  699,
  698,
  691,
  694,
  682,
  683,
  684,
  682,
  656,
  657,
  662,
  664,
  668,
  662,
  665,
  649,
  667,
  666,
  667,
  639,
  637,
  639,
  620,
  618,
  621,
  617,
  604,
  605,
  606,
  601,
  603,
  606,
  609,
  610,
  611,
  615,
  617,
  615,
  621,
  619,
  621,
  612,
  602,
  601,
  617,
  618,
  631,
  626,
  633,
  609,
  607,
  610,
  611,
  610,
  615,
  619,
  622,
  621,
  622,
  626,
  637,
  613,
  603,
  612,
  614,
  611,
  607,
  628,
  639,
  643,
  644,
  643,
  642,
  641,
  642,
  641,
  642,
  648,
  649,
  652,
  654,
  657,
  659,
  682,
  687,
  688,
  689,
  678,
  697,
  699,
  703,
  720,
  711,
  712,
  714,
  713,
  699,
  698,
  707,
  710,
  702,
  694,
  684,
  682,
  676,
  680,
  679,
  662,
  666,
  668,
  681,
  671,
  665,
  666,
  662,
  629,
  641,
  632,
  633,
  632,
  641,
  644,
  641,
  647,
  643,
  641,
  642,
  643,
  645,
  647,
  646,
  645,
  648,
  649,
  648,
  637,
  604,
  605,
  600,
  601,
  599,
  598,
  597,
  591,
  592,
  590,
  591,
  565,
  576,
  577,
  578,
  581,
  583,
  586,
  587,
  598,
  604,
  607,
  604,
  602,
  609,
  606,
  609,
  620,
  621,
  629,
  622,
  620,
  618,
  620,
  632,
  654,
  660,
  661,
  658,
  657,
  656,
  680,
  682,
  688,
  680,
  673,
  663,
  665,
  668,
  663,
  669,
  670,
  662,
  668,
  665,
  672,
  678,
  676,
  679,
  680,
  673,
  674,
  677,
  678,
  679,
  680,
  681,
  659,
  664,
  662,
  657,
  664,
  663,
  666,
  696,
  712,
  708,
  709,
  710,
  725,
  729,
  735,
  731,
  732,
  749,
  746,
  726,
  727,
  732,
  741,
  734,
  733,
  723,
  722,
  720,
  722,
  719,
  711,
  695,
  696,
  699,
  700,
  701,
  724,
  725,
  722,
  723,
  715,
  716,
  717,
  714,
  715,
  717,
  716,
  715,
  723,
  728,
  729,
  733,
  734,
  735,
  736,
  748,
  788,
  794,
  795,
  793,
  792,
  803,
  805,
  804,
  805,
  804,
  806,
  805,
  784,
  792,
  778,
  777,
  787,
  799,
  794,
  808,
  811,
  813,
  815,
  812,
  809,
  833,
  859,
  863,
  864,
  866,
  865,
  863,
  850,
  845,
  844,
  854,
  860,
  861,
  865,
  869,
  851,
  850,
  853,
  874,
  875,
  876,
  875,
  876,
  875,
  879,
  880,
  888,
  891,
  890,
  902,
  904,
  892,
  893,
  892,
  900,
  905,
  918,
  925,
  924,
  923,
  914,
  924,
  925,
  926,
  952,
  953,
  951,
  947,
  957,
  971,
  968,
  982,
  971,
  974,
  975,
  958,
  943,
  950,
  934,
  940,
  949,
  947,
  941,
  972,
  971,
  967,
  969,
  968,
  964,
  972,
  966,
  976,
  975,
  962,
  959,
  962,
  967,
  965,
  966,
  963,
  959,
  960,
  959,
  961,
  962,
  949,
  950,
  956,
  957,
  961,
  953,
  949,
  956,
  954,
  955,
  919,
  921,
  913,
  925,
  921,
  945,
  947,
  948,
  963,
  976,
  974,
  980,
  981,
  982,
  978,
  982,
  988,
  985,
  995,
  994,
  981,
  985,
  980,
  984,
  999,
  1001,
  1002,
  1020,
  1021,
  1035,
  1044,
  1040,
  1060,
  1074,
  1075,
  1078,
  1056,
  1062,
  1059,
  1060,
  1058,
  1063,
  1066,
  1068,
  1069,
  1068,
  1082,
  1081,
  1082,
  1086,
  1075,
  1087,
  1085,
  1087,
  1097,
  1096,
  1098,
  1093,
  1102,
  1114,
  1119,
  1128,
  1127,
  1112,
  1113,
  1112,
  1114,
  1133,
  1138,
  1137,
  1144,
  1146,
  1144,
  1145,
  1148,
  1143,
  1150,
  1151,
  1153,
  1152,
  1153,
  1134,
  1124,
  1146,
  1145,
  1140,
  1143,
  1144,
  1143,
  1144,
  1148,
  1149,
  1151,
  1153,
  1152,
  1151,
  1155,
  1156,
  1155,
  1152,
  1187,
  1182,
  1201,
  1206,
  1211,
  1204,
  1205,
  1204,
  1203,
  1205,
  1206,
  1187,
  1188,
  1196,
  1206,
  1205,
  1208,
  1201,
  1218,
  1212,
  1220,
  1201,
  1204,
  1210,
  1228,
  1234,
  1237,
  1225,
  1224,
  1223,
  1207,
  1208,
  1207,
  1213,
  1192,
  1200,
  1198,
  1209,
  1197,
  1209,
  1215,
  1193,
  1234,
  1233,
  1216,
  1213,
  1235,
  1239,
  1237,
  1231,
  1235,
  1240,
  1253,
  1268,
  1270,
  1279,
  1278,
  1280,
  1285,
  1319,
  1323,
  1324,
  1329,
  1324,
  1330,
  1334,
  1308,
  1312,
  1308,
  1307,
  1286,
  1288,
  1294,
  1322,
  1325,
  1336,
  1324,
  1330,
  1331,
  1328,
  1342,
  1341,
  1343,
  1345,
  1351,
  1352,
  1358,
  1357,
  1363,
  1362,
  1358,
  1385,
  1384,
  1395,
  1394,
  1395,
  1402,
  1409,
  1377,
  1378,
  1340,
  1341,
  1339,
  1338,
  1335,
  1348,
  1351,
  1363,
  1358,
  1359,
  1335,
  1347,
  1337,
  1340,
  1339,
  1329,
  1340,
  1334,
  1337,
  1339,
  1340,
  1341,
  1345,
  1346,
  1349,
  1344,
  1345,
  1346,
  1354,
  1340,
  1315,
  1319,
  1321,
  1320,
  1333,
  1334,
  1328,
  1318,
  1309,
  1304,
  1324,
  1339,
  1314,
  1313,
  1310,
  1311,
  1314,
  1316,
  1317,
  1318,
  1319,
  1320,
  1328,
  1337,
  1350,
  1353,
  1347,
  1349,
  1338,
  1339,
  1336,
  1344,
  1329,
  1320,
  1322,
  1343,
  1346,
  1350,
  1306,
  1308,
  1306,
  1303,
  1320,
  1321,
  1320,
  1321,
  1320,
  1330,
  1328,
  1334,
  1350,
  1349,
  1348,
  1350,
  1347,
  1350,
  1351,
  1358,
  1356,
  1364,
  1374,
  1375,
  1354,
  1351,
  1360,
  1364,
  1348,
  1361,
  1356,
  1357,
  1354,
  1357,
  1352,
  1334,
  1335,
  1330,
  1355,
  1354,
  1353,
  1354,
  1355,
  1361,
  1360,
  1358,
  1356,
  1359,
  1371,
  1372,
  1378,
  1377,
  1376,
  1355,
  1357,
  1355,
  1356,
  1357,
  1364,
  1378,
  1379,
  1380,
  1374,
  1381,
  1389,
  1396,
  1402,
  1403,
  1384,
  1386,
  1387,
  1409,
  1413,
  1419,
  1420,
  1421,
  1427,
  1453,
  1456,
  1453,
  1425,
  1427,
  1428,
  1424,
  1420,
  1417,
  1421,
  1412,
  1413,
  1415,
  1414,
  1411,
  1412,
  1413,
  1425,
  1426,
  1440,
  1470,
  1461,
  1466,
  1457,
  1460,
  1494,
  1481,
  1483,
  1482,
  1481,
  1482,
  1481,
  1483,
  1499,
  1485,
  1486,
  1487,
  1488,
  1489,
  1468,
  1472,
  1469,
  1470,
  1479,
  1478,
  1479,
  1485,
  1461,
  1460,
  1456,
  1455,
  1456,
  1455,
  1449,
  1446,
  1448,
  1451,
  1452,
  1439,
  1440,
  1442,
  1448,
  1445,
  1432,
  1433,
  1434,
  1415,
  1420,
  1412,
  1413,
  1419,
  1420,
  1405,
  1401,
  1403,
  1377,
  1380,
  1382,
  1383,
  1379,
  1381,
  1403,
  1405,
  1428,
  1429,
  1431,
  1424,
  1415,
  1420,
  1424,
  1429,
  1439,
  1440,
  1438,
  1440,
  1448,
  1442,
  1441,
  1439,
  1441,
  1442,
  1444,
  1449,
  1450,
  1449,
  1446,
  1477,
  1466,
  1467,
  1496,
  1503,
  1529,
  1538,
  1539,
  1528,
  1558,
  1560,
  1561,
  1573,
  1587,
  1569,
  1566,
  1572,
  1577,
  1585,
  1602,
  1603,
  1606,
  1581,
  1598,
  1599,
  1593,
  1598,
  1595,
  1604,
  1607,
  1606,
  1607,
  1605,
  1614,
  1629,
  1636,
  1638,
  1656,
  1664,
  1668,
  1671,
  1687,
  1683,
  1700,
  1703,
  1706,
  1720,
  1719,
  1718,
  1720,
  1701,
  1700,
  1701,
  1702,
  1704,
  1707,
  1700,
  1712,
  1708,
  1712,
  1729,
  1728,
  1729,
  1730,
  1738,
  1741,
  1730,
  1733,
  1730,
  1729,
  1726,
  1728,
  1745,
  1755,
  1754,
  1755,
  1760,
  1753,
  1747,
  1746,
  1747,
  1749,
  1750,
  1748,
  1749,
  1743,
  1745,
  1754,
  1757,
  1763,
  1766,
  1775,
  1773,
  1774,
  1773,
  1746,
  1747,
  1732,
  1730,
  1709,
  1721,
  1727,
  1718,
  1717,
  1701,
  1700,
  1701,
  1705,
  1712,
  1723,
  1724,
  1725,
  1720,
  1727,
  1728,
  1746,
  1744,
  1760,
  1748,
  1747,
  1746,
  1771,
  1786,
  1784,
  1786,
  1783,
  1795,
  1793,
  1794,
  1808,
  1793,
  1808,
  1811,
  1807,
  1808,
  1806,
  1841,
  1860,
  1861,
  1840,
  1839,
  1831,
  1836,
  1829,
  1818,
  1816,
  1817,
  1846,
  1835,
  1827,
  1815,
  1816,
  1832,
  1831,
  1830,
  1831,
  1829,
  1828,
  1829,
  1831,
  1830,
  1838,
  1852,
  1853,
  1851,
  1865,
  1866,
  1889,
  1890,
  1888,
  1887,
  1879,
  1859,
  1860,
  1863,
  1867,
  1868,
  1860,
  1872,
  1873,
  1881,
  1895,
  1893,
  1892,
  1899,
  1901,
  1907,
  1916,
  1906,
  1916,
  1917,
  1928,
  1933,
  1921,
  1924,
  1925,
  1935,
  1952,
  1953,
  1959,
  1960,
  1958,
  1962,
  1988,
  1995,
  1985,
  1988,
  1986,
  1989,
  2003,
  2004,
  2009,
  2011,
  2020,
  2021,
  2040,
  2039,
  2024,
  2029,
  2030,
  2037,
  2038,
  2037,
  2040,
  2038,
  2042,
  2045,
  2046,
  2051,
  2046,
  2045,
  2034,
  2033,
  2011,
  2015,
  2025,
  2011,
  2012,
  2011,
  1993,
  2007,
  1999,
  1975,
  1970,
  1985,
  1990,
  1989,
  1986,
  1989,
  1991,
  1995,
  1978,
  1976,
  1956,
  1958,
  1945,
  1930,
  1933,
  1931,
  1926,
  1937,
  1936,
  1935,
  1942,
  1936,
  1934,
  1918,
  1919,
  1923,
  1929,
  1935,
  1952,
  1961,
  1959,
  1960,
  1947,
  1948,
  1949,
  1946,
  1944,
  1961,
  1929,
  1932,
  1944,
  1933,
  1928,
  1920,
  1889,
  1894,
  1886,
  1906,
  1900,
  1895,
  1890,
  1901,
  1904,
  1903,
  1898,
  1921,
  1922,
  1931,
  1933,
  1939,
  1940,
  1939,
  1927,
  1920,
  1934,
  1947,
  1946,
  1956,
  1955,
  1949,
  1951,
  1953,
  1951,
  1949,
  1952,
  1942,
  1945,
  1933,
  1934,
  1917,
  1927,
  1934,
  1913,
  1914,
  1911,
  1912,
  1920,
  1919,
  1915,
  1917,
  1943,
  1951,
  1952,
  1945,
  1950,
  1929,
  1926,
  1933,
  1935,
  1949,
  1947,
  1966,
  1967,
  1945,
  1972,
  1985,
  1962,
  1964,
  1956,
  1942,
  1943,
  1937,
  1936,
  1933,
  1941,
  1949,
  1965,
  1968,
  1969,
  1970,
  1957,
  1956,
  1957,
  1962,
  1939,
  1942,
  1957,
  1956,
  1961,
  1960,
  1959,
  1956,
  1957,
  1983,
  1981,
  1979,
  1976,
  1969,
  1974,
  1952,
  1938,
  1952,
  1955,
  1952,
  1958,
  1952,
  1964,
  1965,
  1956,
  1959,
  1960,
  1962,
  1961,
  1960,
  1967,
  1968,
  1979,
  1989,
  1990,
  1993,
  2004,
  2003,
  2012,
  2006,
  1994,
  1998,
  1988,
  1991,
  1987,
  1986,
  1987,
  1985,
  1982,
  1985,
  1988,
  1990,
  1984,
  1978,
  1967,
  1978,
  1990,
  1984,
  1985,
  1984,
  1985,
  2009,
  2007,
  2000,
  1992,
  2012,
  2011,
  2020,
  2021,
  2022,
  2017,
  2000,
  1975,
  1989,
  1988,
  1975,
  1954,
  1955,
  1947,
  1954,
  1971,
  1970,
  1973,
  1981,
  1982,
  1984,
  1996,
  1992,
  1994,
  1996,
  1997,
  2001,
  1998,
  2000,
  1998,
  1997,
  1999,
  2007,
  2001,
  2007,
  2005,
  2003,
  2001,
  2003,
  1999,
  1997,
  1980,
  1981,
  1999,
  2005,
  2011,
  2016,
  2017,
  2026,
  2027,
  2020,
  2021,
  2023,
  2024,
  2025,
  2024,
  2025,
  2029,
  2033,
  2035,
  2039,
  2051,
  2052,
  2054,
  2065,
  2082,
  2084,
  2101,
  2097,
  2096,
  2097,
  2092,
  2104,
  2105,
  2101,
  2092,
  2094,
  2100,
  2101,
  2095,
  2096,
  2093,
  2118,
  2116,
  2152,
  2161,
  2162,
  2163,
  2165,
  2174,
  2163,
  2183,
  2187,
  2155,
  2156,
  2158,
  2162,
  2155,
  2148,
  2147,
  2149,
  2148,
  2142,
  2144,
  2140,
  2129,
  2132,
  2133,
  2137,
  2143,
  2140,
  2150,
  2135,
  2134,
  2133,
  2136,
  2145,
  2136,
  2137,
  2140,
  2141,
  2118,
  2125,
  2106,
  2104,
  2089,
  2088,
  2076,
  2063,
  2060,
  2054,
  2047,
  2046,
  2047,
  2050,
  2051,
  2046,
  2051,
  2061,
  2060,
  2066,
  2068,
  2072,
  2073,
  2083,
  2098,
  2101,
  2096,
  2098,
  2099,
  2103,
  2093,
  2092,
  2111,
  2129,
  2152,
  2159,
  2155,
  2163,
  2155,
  2158,
  2163,
  2166,
  2170,
  2161,
  2155,
  2159,
  2147,
  2146,
  2154,
  2165,
  2172,
  2163,
  2179,
  2182,
  2180,
  2168,
  2172,
  2179,
  2181,
  2183,
  2176,
  2147,
  2170,
  2172,
  2173,
  2153,
  2158,
  2140,
  2135,
  2136,
  2134,
  2130,
  2134,
  2156,
  2161,
  2162,
  2163,
  2149,
  2150,
  2159,
  2160,
  2161,
  2178,
  2185,
  2183,
  2158,
  2173,
  2168,
  2170,
  2165,
  2181,
  2173,
  2175,
  2178,
  2183,
  2185,
  2184,
  2189,
  2202,
  2203,
  2191,
  2176,
  2177,
  2163,
  2150,
  2159,
  2158,
  2153,
  2139,
  2136,
  2135,
  2143,
  2155,
  2166,
  2171,
  2183,
  2190,
  2180,
  2183,
  2165,
  2166,
  2167,
  2168,
  2160,
  2161,
  2174,
  2175,
  2172,
  2176,
  2198,
  2205,
  2210,
  2211,
  2223,
  2249,
  2254,
  2267,
  2260,
  2263,
  2256,
  2258,
  2265,
  2278,
  2279,
  2278,
  2271,
  2273,
  2278,
  2279,
  2272,
  2274,
  2286,
  2273,
  2279,
  2278,
  2264,
  2263,
  2264,
  2274,
  2287,
  2308,
  2309,
  2310,
  2305,
  2304,
  2303,
  2305,
  2317,
  2316,
  2318,
  2319,
  2320,
  2322,
  2326,
  2335,
  2359,
  2351,
  2353,
  2354,
  2356,
  2341,
  2338,
  2333,
  2334,
  2333,
  2344,
  2334,
  2344,
  2323,
  2341,
  2325,
  2317,
  2327,
  2323,
  2321,
  2312,
  2297,
  2302,
  2304,
  2315,
  2308,
  2317,
  2330,
  2350,
  2360,
  2341,
  2342,
  2341,
  2342,
  2357,
  2363,
  2353,
  2355,
  2352,
  2354,
  2360,
  2361,
  2348,
  2354,
  2355,
  2345,
  2346,
  2347,
  2360,
  2358,
  2360,
  2361,
  2364,
  2365,
  2354,
  2361,
  2362,
  2373,
  2375,
  2373,
  2365,
  2346,
  2362,
  2359,
  2357,
  2373,
  2397,
  2398,
  2394,
  2396,
  2401,
  2421,
  2414,
  2420,
  2406,
  2407,
  2403,
  2402,
  2401,
  2397,
  2396,
  2420,
  2444,
  2446,
  2428,
  2427,
  2428,
  2431,
  2429,
  2433,
  2463,
  2487,
  2495,
  2524,
  2535,
  2542,
  2552,
  2575,
  2573,
  2574,
  2568,
  2576,
  2583
]

