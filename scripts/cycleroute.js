var elevator;
var map;
var chart;
var polyline;


// The following path marks a general path from Mt.
// Whitney, the highest point in the continental United
// States to Badwater, Death Valley, the lowest point.
var p1 = new google.maps.LatLng(50.690701, -1.319223);
var p2 = new google.maps.LatLng(50.689701, -1.320617);
var p3 = new google.maps.LatLng(50.688648, -1.320875);
var p4 = new google.maps.LatLng(50.688179, -1.320725);
var p5 = new google.maps.LatLng(50.687923, -1.320467);
var p6 = new google.maps.LatLng(50.687439, -1.320585);
var p7 = new google.maps.LatLng(50.686646, -1.319609);
var p8 = new google.maps.LatLng(50.686283, -1.319105);
var p9 = new google.maps.LatLng(50.686012, -1.31845);
var p10 = new google.maps.LatLng(50.685848, -1.317753);
var p11 = new google.maps.LatLng(50.685642, -1.317324);
var p12 = new google.maps.LatLng(50.68512, -1.317259);
var p13 = new google.maps.LatLng(50.684841, -1.317452);
var p14 = new google.maps.LatLng(50.684544, -1.31757);
var p15 = new google.maps.LatLng(50.68391, -1.317967);
var p16 = new google.maps.LatLng(50.68362, -1.318053);
var p17 = new google.maps.LatLng(50.68343, -1.31786);
var p18 = new google.maps.LatLng(50.683186, -1.317367);
var p19 = new google.maps.LatLng(50.683632, -1.316176);
var p20 = new google.maps.LatLng(50.683937, -1.31491);
var p21 = new google.maps.LatLng(50.684196, -1.313955);
var p22 = new google.maps.LatLng(50.684303, -1.312324);
var p23 = new google.maps.LatLng(50.684586, -1.311015);
var p24 = new google.maps.LatLng(50.685562, -1.308419);
var p25 = new google.maps.LatLng(50.68552, -1.307829);
var p26 = new google.maps.LatLng(50.685596, -1.307271);
var p27 = new google.maps.LatLng(50.686066, -1.30446);
var p28 = new google.maps.LatLng(50.68483, -1.301327);
var p29 = new google.maps.LatLng(50.684319, -1.300694);
var p30 = new google.maps.LatLng(50.683849, -1.300318);
var p31 = new google.maps.LatLng(50.683056, -1.298763);
var p32 = new google.maps.LatLng(50.682877, -1.297593);
var p33 = new google.maps.LatLng(50.682842, -1.296531);
var p34 = new google.maps.LatLng(50.682659, -1.296574);
var p35 = new google.maps.LatLng(50.68251, -1.29637);
var p36 = new google.maps.LatLng(50.682144, -1.295276);
var p37 = new google.maps.LatLng(50.680721, -1.294053);
var p38 = new google.maps.LatLng(50.680126, -1.29372);
var p39 = new google.maps.LatLng(50.679565, -1.293205);
var p40 = new google.maps.LatLng(50.678284, -1.292089);
var p41 = new google.maps.LatLng(50.676964, -1.29048);
var p42 = new google.maps.LatLng(50.676167, -1.289836);
var p43 = new google.maps.LatLng(50.674793, -1.2893);
var p44 = new google.maps.LatLng(50.675323, -1.287122);
var p45 = new google.maps.LatLng(50.675381, -1.286618);
var p46 = new google.maps.LatLng(50.675373, -1.286113);
var p47 = new google.maps.LatLng(50.675175, -1.285126);
var p48 = new google.maps.LatLng(50.675339, -1.285212);
var p49 = new google.maps.LatLng(50.676079, -1.286028);
var p50 = new google.maps.LatLng(50.677574, -1.287626);
var p51 = new google.maps.LatLng(50.677704, -1.287798);
var p52 = new google.maps.LatLng(50.678452, -1.288517);
var p53 = new google.maps.LatLng(50.678703, -1.288753);
var p54 = new google.maps.LatLng(50.678921, -1.288957);
var p55 = new google.maps.LatLng(50.67997, -1.289493);
var p56 = new google.maps.LatLng(50.680531, -1.289675);
var p57 = new google.maps.LatLng(50.681503, -1.289944);
var p58 = new google.maps.LatLng(50.682529, -1.290105);
var p59 = new google.maps.LatLng(50.683865, -1.290394);
var p60 = new google.maps.LatLng(50.684917, -1.29062);
var p61 = new google.maps.LatLng(50.68578, -1.290566);
var p62 = new google.maps.LatLng(50.68642, -1.290362);
var p63 = new google.maps.LatLng(50.687283, -1.289879);
var p64 = new google.maps.LatLng(50.688049, -1.289418);
var p65 = new google.maps.LatLng(50.688545, -1.289193);
var p66 = new google.maps.LatLng(50.688927, -1.289064);
var p67 = new google.maps.LatLng(50.68903, -1.289021);
var p68 = new google.maps.LatLng(50.689247, -1.288946);
var p69 = new google.maps.LatLng(50.689388, -1.288924);
var p70 = new google.maps.LatLng(50.690281, -1.288667);
var p71 = new google.maps.LatLng(50.690639, -1.288533);
var p72 = new google.maps.LatLng(50.690369, -1.28823);
var p73 = new google.maps.LatLng(50.690151, -1.28755);
var p74 = new google.maps.LatLng(50.69091, -1.2866);
var p75 = new google.maps.LatLng(50.691071, -1.2866);
var p76 = new google.maps.LatLng(50.691292, -1.28643);
var p77 = new google.maps.LatLng(50.691509, -1.28549);
var p78 = new google.maps.LatLng(50.69162, -1.28489);
var p79 = new google.maps.LatLng(50.69178, -1.2842);
var p80 = new google.maps.LatLng(50.692051, -1.28377);
var p81 = new google.maps.LatLng(50.692711, -1.2836);
var p82 = new google.maps.LatLng(50.69347, -1.28377);
var p83 = new google.maps.LatLng(50.69347, -1.28102);
var p84 = new google.maps.LatLng(50.693359, -1.28025);
var p85 = new google.maps.LatLng(50.693222, -1.279521);
var p86 = new google.maps.LatLng(50.69281, -1.27905);
var p87 = new google.maps.LatLng(50.692219, -1.27665);
var p88 = new google.maps.LatLng(50.691822, -1.274972);
var p89 = new google.maps.LatLng(50.69173, -1.27338);
var p90 = new google.maps.LatLng(50.69194, -1.27295);
var p91 = new google.maps.LatLng(50.692162, -1.27175);
var p92 = new google.maps.LatLng(50.692329, -1.27244);
var p93 = new google.maps.LatLng(50.694023, -1.272102);
var p94 = new google.maps.LatLng(50.69574, -1.271919);
var p95 = new google.maps.LatLng(50.695557, -1.271426);
var p96 = new google.maps.LatLng(50.696758, -1.269918);
var p97 = new google.maps.LatLng(50.697033, -1.269532);
var p98 = new google.maps.LatLng(50.69733, -1.26918);
var p99 = new google.maps.LatLng(50.697765, -1.269103);
var p100 = new google.maps.LatLng(50.698196, -1.26899);
var p101 = new google.maps.LatLng(50.698387, -1.268904);
var p102 = new google.maps.LatLng(50.698582, -1.26866);
var p103 = new google.maps.LatLng(50.699165, -1.269323);
var p104 = new google.maps.LatLng(50.699474, -1.269661);
var p105 = new google.maps.LatLng(50.699814, -1.269832);
var p106 = new google.maps.LatLng(50.700748, -1.27004);
var p107 = new google.maps.LatLng(50.701557, -1.269964);
var p108 = new google.maps.LatLng(50.701729, -1.26918);
var p109 = new google.maps.LatLng(50.703091, -1.26652);
var p110 = new google.maps.LatLng(50.7038, -1.26566);
var p111 = new google.maps.LatLng(50.70467, -1.26274);
var p112 = new google.maps.LatLng(50.704872, -1.261767);
var p113 = new google.maps.LatLng(50.704983, -1.260791);
var p114 = new google.maps.LatLng(50.705158, -1.25888);
var p115 = new google.maps.LatLng(50.705105, -1.255169);
var p116 = new google.maps.LatLng(50.705254, -1.254235);
var p117 = new google.maps.LatLng(50.705349, -1.253334);
var p118 = new google.maps.LatLng(50.705479, -1.252444);
var p119 = new google.maps.LatLng(50.705349, -1.250899);
var p120 = new google.maps.LatLng(50.705139, -1.249407);
var p121 = new google.maps.LatLng(50.705158, -1.2436);
var p122 = new google.maps.LatLng(50.705181, -1.24268);
var p123 = new google.maps.LatLng(50.705315, -1.241779);
var p124 = new google.maps.LatLng(50.705593, -1.239934);
var p125 = new google.maps.LatLng(50.705624, -1.239354);
var p126 = new google.maps.LatLng(50.7057, -1.23879);
var p127 = new google.maps.LatLng(50.706303, -1.237091);
var p128 = new google.maps.LatLng(50.706879, -1.236093);
var p129 = new google.maps.LatLng(50.707062, -1.234913);
var p130 = new google.maps.LatLng(50.707279, -1.233711);
var p131 = new google.maps.LatLng(50.707348, -1.23296);
var p132 = new google.maps.LatLng(50.707489, -1.23227);
var p133 = new google.maps.LatLng(50.707542, -1.228218);
var p134 = new google.maps.LatLng(50.706791, -1.22772);
var p135 = new google.maps.LatLng(50.706459, -1.22729);
var p136 = new google.maps.LatLng(50.70657, -1.22686);
var p137 = new google.maps.LatLng(50.706799, -1.226523);
var p138 = new google.maps.LatLng(50.70673, -1.22626);
var p139 = new google.maps.LatLng(50.706505, -1.225504);
var p140 = new google.maps.LatLng(50.706192, -1.22471);
var p141 = new google.maps.LatLng(50.705853, -1.223798);
var p142 = new google.maps.LatLng(50.705574, -1.223272);
var p143 = new google.maps.LatLng(50.705399, -1.223272);
var p144 = new google.maps.LatLng(50.705235, -1.223369);
var p145 = new google.maps.LatLng(50.703617, -1.222939);
var p146 = new google.maps.LatLng(50.70396, -1.22034);
var p147 = new google.maps.LatLng(50.704342, -1.21699);
var p148 = new google.maps.LatLng(50.704121, -1.21648);
var p149 = new google.maps.LatLng(50.702492, -1.21742);
var p150 = new google.maps.LatLng(50.701302, -1.21845);
var p151 = new google.maps.LatLng(50.700588, -1.21905);
var p152 = new google.maps.LatLng(50.700218, -1.219812);
var p153 = new google.maps.LatLng(50.699783, -1.220477);
var p154 = new google.maps.LatLng(50.699341, -1.2212);
var p155 = new google.maps.LatLng(50.699242, -1.221893);
var p156 = new google.maps.LatLng(50.698799, -1.22292);
var p157 = new google.maps.LatLng(50.698029, -1.2242);
var p158 = new google.maps.LatLng(50.69738, -1.224769);
var p159 = new google.maps.LatLng(50.696388, -1.225584);
var p160 = new google.maps.LatLng(50.695652, -1.225906);
var p161 = new google.maps.LatLng(50.694881, -1.22669);
var p162 = new google.maps.LatLng(50.693741, -1.22738);
var p163 = new google.maps.LatLng(50.69265, -1.228352);
var p164 = new google.maps.LatLng(50.69162, -1.22944);
var p165 = new google.maps.LatLng(50.690964, -1.230112);
var p166 = new google.maps.LatLng(50.690369, -1.23098);
var p167 = new google.maps.LatLng(50.689606, -1.232064);
var p168 = new google.maps.LatLng(50.689171, -1.23219);
var p169 = new google.maps.LatLng(50.688747, -1.231978);
var p170 = new google.maps.LatLng(50.688301, -1.23236);
var p171 = new google.maps.LatLng(50.68808, -1.2333);
var p172 = new google.maps.LatLng(50.687759, -1.23407);
var p173 = new google.maps.LatLng(50.68716, -1.23442);
var p174 = new google.maps.LatLng(50.68668, -1.234639);
var p175 = new google.maps.LatLng(50.686131, -1.23467);
var p176 = new google.maps.LatLng(50.684929, -1.23459);
var p177 = new google.maps.LatLng(50.684769, -1.23528);
var p178 = new google.maps.LatLng(50.684769, -1.24034);
var p179 = new google.maps.LatLng(50.684643, -1.241613);
var p180 = new google.maps.LatLng(50.68417, -1.24283);
var p181 = new google.maps.LatLng(50.68354, -1.241549);
var p182 = new google.maps.LatLng(50.68309, -1.240046);
var p183 = new google.maps.LatLng(50.682812, -1.23845);
var p184 = new google.maps.LatLng(50.6824, -1.235197);
var p185 = new google.maps.LatLng(50.68187, -1.232129);
var p186 = new google.maps.LatLng(50.681255, -1.231356);
var p187 = new google.maps.LatLng(50.68063, -1.23038);
var p188 = new google.maps.LatLng(50.680248, -1.2303);
var p189 = new google.maps.LatLng(50.68021, -1.228223);
var p190 = new google.maps.LatLng(50.67329, -1.22729);
var p191 = new google.maps.LatLng(50.673344, -1.223395);
var p192 = new google.maps.LatLng(50.673889, -1.22068);
var p193 = new google.maps.LatLng(50.674, -1.21974);
var p194 = new google.maps.LatLng(50.673939, -1.21751);
var p195 = new google.maps.LatLng(50.674599, -1.21493);
var p196 = new google.maps.LatLng(50.675072, -1.214533);
var p197 = new google.maps.LatLng(50.6759, -1.21202);
var p198 = new google.maps.LatLng(50.675091, -1.21124);
var p199 = new google.maps.LatLng(50.674271, -1.21099);
var p200 = new google.maps.LatLng(50.671169, -1.21056);
var p201 = new google.maps.LatLng(50.669922, -1.2097);
var p202 = new google.maps.LatLng(50.670078, -1.20953);
var p203 = new google.maps.LatLng(50.67033, -1.20807);
var p204 = new google.maps.LatLng(50.670631, -1.20605);
var p205 = new google.maps.LatLng(50.670792, -1.20442);
var p206 = new google.maps.LatLng(50.670712, -1.2024);
var p207 = new google.maps.LatLng(50.67046, -1.19609);
var p208 = new google.maps.LatLng(50.67033, -1.19305);
var p209 = new google.maps.LatLng(50.670219, -1.19257);
var p210 = new google.maps.LatLng(50.670078, -1.1918);
var p211 = new google.maps.LatLng(50.669781, -1.19069);
var p212 = new google.maps.LatLng(50.66864, -1.18828);
var p213 = new google.maps.LatLng(50.66811, -1.187242);
var p214 = new google.maps.LatLng(50.66766, -1.18622);
var p215 = new google.maps.LatLng(50.667229, -1.18506);
var p216 = new google.maps.LatLng(50.667061, -1.18408);
var p217 = new google.maps.LatLng(50.666801, -1.183913);
var p218 = new google.maps.LatLng(50.666519, -1.18403);
var p219 = new google.maps.LatLng(50.665848, -1.18475);
var p220 = new google.maps.LatLng(50.665871, -1.18541);
var p221 = new google.maps.LatLng(50.66568, -1.18575);
var p222 = new google.maps.LatLng(50.665131, -1.18682);
var p223 = new google.maps.LatLng(50.66494, -1.18725);
var p224 = new google.maps.LatLng(50.66494, -1.18777);
var p225 = new google.maps.LatLng(50.66478, -1.18858);
var p226 = new google.maps.LatLng(50.664532, -1.18897);
var p227 = new google.maps.LatLng(50.663639, -1.19039);
var p228 = new google.maps.LatLng(50.6632, -1.1912);
var p229 = new google.maps.LatLng(50.662628, -1.19197);
var p230 = new google.maps.LatLng(50.661999, -1.192689);
var p231 = new google.maps.LatLng(50.661491, -1.19352);
var p232 = new google.maps.LatLng(50.661018, -1.19425);
var p233 = new google.maps.LatLng(50.660751, -1.19455);
var p234 = new google.maps.LatLng(50.66037, -1.19468);
var p235 = new google.maps.LatLng(50.65966, -1.19463);
var p236 = new google.maps.LatLng(50.659485, -1.194942);
var p237 = new google.maps.LatLng(50.659348, -1.195136);
var p238 = new google.maps.LatLng(50.659061, -1.195264);
var p239 = new google.maps.LatLng(50.658852, -1.19472);
var p240 = new google.maps.LatLng(50.658772, -1.19365);
var p241 = new google.maps.LatLng(50.658821, -1.19236);
var p242 = new google.maps.LatLng(50.658791, -1.19193);
var p243 = new google.maps.LatLng(50.658218, -1.192453);
var p244 = new google.maps.LatLng(50.657646, -1.193312);
var p245 = new google.maps.LatLng(50.657417, -1.193634);
var p246 = new google.maps.LatLng(50.657169, -1.193998);
var p247 = new google.maps.LatLng(50.656967, -1.194299);
var p248 = new google.maps.LatLng(50.6567, -1.19446);
var p249 = new google.maps.LatLng(50.656399, -1.19442);
var p250 = new google.maps.LatLng(50.655659, -1.19425);
var p251 = new google.maps.LatLng(50.655033, -1.19387);
var p252 = new google.maps.LatLng(50.654491, -1.19378);
var p253 = new google.maps.LatLng(50.654251, -1.19343);
var p254 = new google.maps.LatLng(50.6539, -1.19322);
var p255 = new google.maps.LatLng(50.653461, -1.19318);
var p256 = new google.maps.LatLng(50.652969, -1.19369);
var p257 = new google.maps.LatLng(50.651501, -1.19352);
var p258 = new google.maps.LatLng(50.65052, -1.19227);
var p259 = new google.maps.LatLng(50.648449, -1.19215);
var p260 = new google.maps.LatLng(50.648399, -1.19245);
var p261 = new google.maps.LatLng(50.648209, -1.19275);
var p262 = new google.maps.LatLng(50.647659, -1.1927);
var p263 = new google.maps.LatLng(50.646709, -1.192174);
var p264 = new google.maps.LatLng(50.646488, -1.18742);
var p265 = new google.maps.LatLng(50.646049, -1.18736);
var p266 = new google.maps.LatLng(50.645679, -1.18734);
var p267 = new google.maps.LatLng(50.644878, -1.18805);
var p268 = new google.maps.LatLng(50.644482, -1.18856);
var p269 = new google.maps.LatLng(50.643959, -1.18957);
var p270 = new google.maps.LatLng(50.642132, -1.19034);
var p271 = new google.maps.LatLng(50.64188, -1.19064);
var p272 = new google.maps.LatLng(50.64143, -1.19101);
var p273 = new google.maps.LatLng(50.641319, -1.19139);
var p274 = new google.maps.LatLng(50.64119, -1.1915);
var p275 = new google.maps.LatLng(50.640671, -1.1915);
var p276 = new google.maps.LatLng(50.640671, -1.19249);
var p277 = new google.maps.LatLng(50.640671, -1.19279);
var p278 = new google.maps.LatLng(50.640511, -1.19313);
var p279 = new google.maps.LatLng(50.640591, -1.19335);
var p280 = new google.maps.LatLng(50.640209, -1.19382);
var p281 = new google.maps.LatLng(50.63953, -1.19485);
var p282 = new google.maps.LatLng(50.639042, -1.19511);
var p283 = new google.maps.LatLng(50.638741, -1.19562);
var p284 = new google.maps.LatLng(50.638378, -1.19682);
var p285 = new google.maps.LatLng(50.638111, -1.19721);
var p286 = new google.maps.LatLng(50.636829, -1.19721);
var p287 = new google.maps.LatLng(50.63599, -1.19794);
var p288 = new google.maps.LatLng(50.635422, -1.19808);
var p289 = new google.maps.LatLng(50.635231, -1.19819);
var p290 = new google.maps.LatLng(50.635101, -1.19831);
var p291 = new google.maps.LatLng(50.634701, -1.19846);
var p292 = new google.maps.LatLng(50.63448, -1.19879);
var p293 = new google.maps.LatLng(50.634392, -1.19881);
var p294 = new google.maps.LatLng(50.634151, -1.19914);
var p295 = new google.maps.LatLng(50.634041, -1.19911);
var p296 = new google.maps.LatLng(50.633919, -1.19898);
var p297 = new google.maps.LatLng(50.633739, -1.19887);
var p298 = new google.maps.LatLng(50.633369, -1.19888);
var p299 = new google.maps.LatLng(50.632931, -1.19858);
var p300 = new google.maps.LatLng(50.632771, -1.19868);
var p301 = new google.maps.LatLng(50.632629, -1.19859);
var p302 = new google.maps.LatLng(50.63245, -1.1986);
var p303 = new google.maps.LatLng(50.632309, -1.19851);
var p304 = new google.maps.LatLng(50.632141, -1.19821);
var p305 = new google.maps.LatLng(50.63176, -1.19817);
var p306 = new google.maps.LatLng(50.631672, -1.19831);
var p307 = new google.maps.LatLng(50.631519, -1.19823);
var p308 = new google.maps.LatLng(50.631031, -1.1984);
var p309 = new google.maps.LatLng(50.63081, -1.19853);
var p310 = new google.maps.LatLng(50.630669, -1.19874);
var p311 = new google.maps.LatLng(50.630371, -1.19903);
var p312 = new google.maps.LatLng(50.630161, -1.19897);
var p313 = new google.maps.LatLng(50.630058, -1.19908);
var p314 = new google.maps.LatLng(50.629929, -1.19939);
var p315 = new google.maps.LatLng(50.629429, -1.19864);
var p316 = new google.maps.LatLng(50.629429, -1.19944);
var p317 = new google.maps.LatLng(50.629459, -1.20189);
var p318 = new google.maps.LatLng(50.62965, -1.20571);
var p319 = new google.maps.LatLng(50.62888, -1.20631);
var p320 = new google.maps.LatLng(50.628559, -1.20631);
var p321 = new google.maps.LatLng(50.62809, -1.20635);
var p322 = new google.maps.LatLng(50.62682, -1.20798);
var p323 = new google.maps.LatLng(50.625671, -1.20884);
var p324 = new google.maps.LatLng(50.62537, -1.20927);
var p325 = new google.maps.LatLng(50.624039, -1.21026);
var p326 = new google.maps.LatLng(50.623821, -1.21017);
var p327 = new google.maps.LatLng(50.623219, -1.21111);
var p328 = new google.maps.LatLng(50.6227, -1.21184);
var p329 = new google.maps.LatLng(50.62273, -1.21287);
var p330 = new google.maps.LatLng(50.62273, -1.21365);
var p331 = new google.maps.LatLng(50.622601, -1.21399);
var p332 = new google.maps.LatLng(50.622238, -1.21403);
var p333 = new google.maps.LatLng(50.622108, -1.21425);
var p334 = new google.maps.LatLng(50.62167, -1.21532);
var p335 = new google.maps.LatLng(50.621193, -1.216038);
var p336 = new google.maps.LatLng(50.620609, -1.21618);
var p337 = new google.maps.LatLng(50.620338, -1.21652);
var p338 = new google.maps.LatLng(50.619331, -1.21764);
var p339 = new google.maps.LatLng(50.618179, -1.21953);
var p340 = new google.maps.LatLng(50.61726, -1.22141);
var p341 = new google.maps.LatLng(50.616959, -1.22167);
var p342 = new google.maps.LatLng(50.615921, -1.22197);
var p343 = new google.maps.LatLng(50.615871, -1.22266);
var p344 = new google.maps.LatLng(50.61631, -1.22296);
var p345 = new google.maps.LatLng(50.616772, -1.2236);
var p346 = new google.maps.LatLng(50.618019, -1.22399);
var p347 = new google.maps.LatLng(50.61895, -1.22463);
var p348 = new google.maps.LatLng(50.618889, -1.22545);
var p349 = new google.maps.LatLng(50.61895, -1.22802);
var p350 = new google.maps.LatLng(50.619141, -1.22892);
var p351 = new google.maps.LatLng(50.619221, -1.2294);
var p352 = new google.maps.LatLng(50.62151, -1.23283);
var p353 = new google.maps.LatLng(50.623169, -1.23532);
var p354 = new google.maps.LatLng(50.62355, -1.23643);
var p355 = new google.maps.LatLng(50.624119, -1.23742);
var p356 = new google.maps.LatLng(50.624008, -1.23772);
var p357 = new google.maps.LatLng(50.622021, -1.24012);
var p358 = new google.maps.LatLng(50.622002, -1.24073);
var p359 = new google.maps.LatLng(50.621571, -1.242214);
var p360 = new google.maps.LatLng(50.621433, -1.24275);
var p361 = new google.maps.LatLng(50.621368, -1.24334);
var p362 = new google.maps.LatLng(50.62159, -1.24493);
var p363 = new google.maps.LatLng(50.621597, -1.245754);
var p364 = new google.maps.LatLng(50.621811, -1.24648);
var p365 = new google.maps.LatLng(50.621971, -1.24716);
var p366 = new google.maps.LatLng(50.621891, -1.24768);
var p367 = new google.maps.LatLng(50.62159, -1.24832);
var p368 = new google.maps.LatLng(50.6208, -1.24849);
var p369 = new google.maps.LatLng(50.619949, -1.24854);
var p370 = new google.maps.LatLng(50.61903, -1.24824);
var p371 = new google.maps.LatLng(50.618649, -1.24824);
var p372 = new google.maps.LatLng(50.6175, -1.24849);
var p373 = new google.maps.LatLng(50.616329, -1.24871);
var p374 = new google.maps.LatLng(50.61562, -1.24849);
var p375 = new google.maps.LatLng(50.61475, -1.24794);
var p376 = new google.maps.LatLng(50.61459, -1.24721);
var p377 = new google.maps.LatLng(50.614357, -1.24687);
var p378 = new google.maps.LatLng(50.614021, -1.24673);
var p379 = new google.maps.LatLng(50.613579, -1.24579);
var p380 = new google.maps.LatLng(50.61282, -1.24274);
var p381 = new google.maps.LatLng(50.612579, -1.24188);
var p382 = new google.maps.LatLng(50.612251, -1.24115);
var p383 = new google.maps.LatLng(50.612068, -1.241205);
var p384 = new google.maps.LatLng(50.611919, -1.24103);
var p385 = new google.maps.LatLng(50.611469, -1.240561);
var p386 = new google.maps.LatLng(50.611252, -1.240025);
var p387 = new google.maps.LatLng(50.610912, -1.239639);
var p388 = new google.maps.LatLng(50.610119, -1.2397);
var p389 = new google.maps.LatLng(50.609169, -1.24);
var p390 = new google.maps.LatLng(50.606449, -1.2406);
var p391 = new google.maps.LatLng(50.604809, -1.24021);
var p392 = new google.maps.LatLng(50.603588, -1.24137);
var p393 = new google.maps.LatLng(50.60321, -1.24317);
var p394 = new google.maps.LatLng(50.603149, -1.24437);
var p395 = new google.maps.LatLng(50.602879, -1.2457);
var p396 = new google.maps.LatLng(50.602119, -1.24836);
var p397 = new google.maps.LatLng(50.60321, -1.24918);
var p398 = new google.maps.LatLng(50.602661, -1.25068);
var p399 = new google.maps.LatLng(50.602531, -1.2515);
var p400 = new google.maps.LatLng(50.602119, -1.2521);
var p401 = new google.maps.LatLng(50.600731, -1.25364);
var p402 = new google.maps.LatLng(50.601139, -1.25502);
var p403 = new google.maps.LatLng(50.600479, -1.25562);
var p404 = new google.maps.LatLng(50.600101, -1.25669);
var p405 = new google.maps.LatLng(50.598171, -1.25952);
var p406 = new google.maps.LatLng(50.598, -1.26064);
var p407 = new google.maps.LatLng(50.598221, -1.26102);
var p408 = new google.maps.LatLng(50.597321, -1.26167);
var p409 = new google.maps.LatLng(50.597271, -1.26205);
var p410 = new google.maps.LatLng(50.596802, -1.2633);
var p411 = new google.maps.LatLng(50.596588, -1.2636);
var p412 = new google.maps.LatLng(50.596149, -1.26463);
var p413 = new google.maps.LatLng(50.595219, -1.26746);
var p414 = new google.maps.LatLng(50.593922, -1.26931);
var p415 = new google.maps.LatLng(50.592659, -1.2709);
var p416 = new google.maps.LatLng(50.591316, -1.271705);
var p417 = new google.maps.LatLng(50.590679, -1.27287);
var p418 = new google.maps.LatLng(50.59008, -1.27476);
var p419 = new google.maps.LatLng(50.589481, -1.27549);
var p420 = new google.maps.LatLng(50.58939, -1.27587);
var p421 = new google.maps.LatLng(50.589371, -1.27669);
var p422 = new google.maps.LatLng(50.588902, -1.27828);
var p423 = new google.maps.LatLng(50.587811, -1.28085);
var p424 = new google.maps.LatLng(50.588501, -1.28119);
var p425 = new google.maps.LatLng(50.588428, -1.284354);
var p426 = new google.maps.LatLng(50.58847, -1.284815);
var p427 = new google.maps.LatLng(50.588413, -1.285148);
var p428 = new google.maps.LatLng(50.588299, -1.286199);
var p429 = new google.maps.LatLng(50.588326, -1.286704);
var p430 = new google.maps.LatLng(50.58852, -1.28677);
var p431 = new google.maps.LatLng(50.58868, -1.287143);
var p432 = new google.maps.LatLng(50.588799, -1.28746);
var p433 = new google.maps.LatLng(50.589199, -1.28879);
var p434 = new google.maps.LatLng(50.589642, -1.28918);
var p435 = new google.maps.LatLng(50.589802, -1.28922);
var p436 = new google.maps.LatLng(50.593449, -1.29377);
var p437 = new google.maps.LatLng(50.594952, -1.29506);
var p438 = new google.maps.LatLng(50.594898, -1.29836);
var p439 = new google.maps.LatLng(50.59544, -1.30085);
var p440 = new google.maps.LatLng(50.597191, -1.30471);
var p441 = new google.maps.LatLng(50.598492, -1.30411);
var p442 = new google.maps.LatLng(50.600239, -1.3042);
var p443 = new google.maps.LatLng(50.601219, -1.30385);
var p444 = new google.maps.LatLng(50.60165, -1.30334);
var p445 = new google.maps.LatLng(50.603119, -1.30257);
var p446 = new google.maps.LatLng(50.604382, -1.30197);
var p447 = new google.maps.LatLng(50.606449, -1.30076);
var p448 = new google.maps.LatLng(50.606991, -1.30111);
var p449 = new google.maps.LatLng(50.60743, -1.30068);
var p450 = new google.maps.LatLng(50.608459, -1.30021);
var p451 = new google.maps.LatLng(50.608822, -1.30145);
var p452 = new google.maps.LatLng(50.60936, -1.30231);
var p453 = new google.maps.LatLng(50.610779, -1.30308);
var p454 = new google.maps.LatLng(50.611382, -1.30385);
var p455 = new google.maps.LatLng(50.611679, -1.30441);
var p456 = new google.maps.LatLng(50.61195, -1.30506);
var p457 = new google.maps.LatLng(50.613152, -1.30548);
var p458 = new google.maps.LatLng(50.61467, -1.3042);
var p459 = new google.maps.LatLng(50.615822, -1.30385);
var p460 = new google.maps.LatLng(50.616032, -1.30214);
var p461 = new google.maps.LatLng(50.616959, -1.30171);
var p462 = new google.maps.LatLng(50.617561, -1.30171);
var p463 = new google.maps.LatLng(50.618431, -1.30179);
var p464 = new google.maps.LatLng(50.619949, -1.30154);
var p465 = new google.maps.LatLng(50.619362, -1.30488);
var p466 = new google.maps.LatLng(50.619251, -1.30746);
var p467 = new google.maps.LatLng(50.61887, -1.30995);
var p468 = new google.maps.LatLng(50.619629, -1.31003);
var p469 = new google.maps.LatLng(50.620281, -1.30909);
var p470 = new google.maps.LatLng(50.62077, -1.30986);
var p471 = new google.maps.LatLng(50.623219, -1.30746);
var p472 = new google.maps.LatLng(50.623878, -1.30943);
var p473 = new google.maps.LatLng(50.624859, -1.31072);
var p474 = new google.maps.LatLng(50.625889, -1.31184);
var p475 = new google.maps.LatLng(50.626049, -1.31304);
var p476 = new google.maps.LatLng(50.62611, -1.31613);
var p477 = new google.maps.LatLng(50.62616, -1.31845);
var p478 = new google.maps.LatLng(50.626759, -1.31999);
var p479 = new google.maps.LatLng(50.627029, -1.32076);
var p480 = new google.maps.LatLng(50.629318, -1.32368);
var p481 = new google.maps.LatLng(50.62899, -1.32497);
var p482 = new google.maps.LatLng(50.627468, -1.32771);
var p483 = new google.maps.LatLng(50.626747, -1.330837);
var p484 = new google.maps.LatLng(50.62627, -1.33381);
var p485 = new google.maps.LatLng(50.62627, -1.3363);
var p486 = new google.maps.LatLng(50.626049, -1.3381);
var p487 = new google.maps.LatLng(50.625889, -1.33922);
var p488 = new google.maps.LatLng(50.624908, -1.34119);
var p489 = new google.maps.LatLng(50.626709, -1.346);
var p490 = new google.maps.LatLng(50.62698, -1.34728);
var p491 = new google.maps.LatLng(50.627361, -1.34883);
var p492 = new google.maps.LatLng(50.627468, -1.35012);
var p493 = new google.maps.LatLng(50.627361, -1.3508);
var p494 = new google.maps.LatLng(50.627251, -1.35115);
var p495 = new google.maps.LatLng(50.627522, -1.35201);
var p496 = new google.maps.LatLng(50.628071, -1.35218);
var p497 = new google.maps.LatLng(50.630192, -1.35235);
var p498 = new google.maps.LatLng(50.63068, -1.35183);
var p499 = new google.maps.LatLng(50.632641, -1.35063);
var p500 = new google.maps.LatLng(50.633743, -1.349891);
var p501 = new google.maps.LatLng(50.633907, -1.350363);
var p502 = new google.maps.LatLng(50.634506, -1.350234);
var p503 = new google.maps.LatLng(50.636131, -1.34986);
var p504 = new google.maps.LatLng(50.63765, -1.35003);
var p505 = new google.maps.LatLng(50.638142, -1.35106);
var p506 = new google.maps.LatLng(50.63879, -1.35029);
var p507 = new google.maps.LatLng(50.640751, -1.35372);
var p508 = new google.maps.LatLng(50.641998, -1.35321);
var p509 = new google.maps.LatLng(50.642979, -1.35398);
var p510 = new google.maps.LatLng(50.644402, -1.35509);
var p511 = new google.maps.LatLng(50.644341, -1.35707);
var p512 = new google.maps.LatLng(50.644508, -1.3587);
var p513 = new google.maps.LatLng(50.645203, -1.360877);
var p514 = new google.maps.LatLng(50.646141, -1.36291);
var p515 = new google.maps.LatLng(50.646358, -1.36582);
var p516 = new google.maps.LatLng(50.646679, -1.36668);
var p517 = new google.maps.LatLng(50.64777, -1.37286);
var p518 = new google.maps.LatLng(50.648102, -1.37587);
var p519 = new google.maps.LatLng(50.64843, -1.37681);
var p520 = new google.maps.LatLng(50.649078, -1.37672);
var p521 = new google.maps.LatLng(50.649349, -1.38033);
var p522 = new google.maps.LatLng(50.649681, -1.38256);
var p523 = new google.maps.LatLng(50.650059, -1.38282);
var p524 = new google.maps.LatLng(50.65126, -1.38385);
var p525 = new google.maps.LatLng(50.652561, -1.38419);
var p526 = new google.maps.LatLng(50.653111, -1.38479);
var p527 = new google.maps.LatLng(50.653648, -1.38582);
var p528 = new google.maps.LatLng(50.654362, -1.38745);
var p529 = new google.maps.LatLng(50.656052, -1.39123);
var p530 = new google.maps.LatLng(50.656368, -1.39269);
var p531 = new google.maps.LatLng(50.656921, -1.39647);
var p532 = new google.maps.LatLng(50.658058, -1.4005);
var p533 = new google.maps.LatLng(50.658279, -1.40222);
var p534 = new google.maps.LatLng(50.65844, -1.40333);
var p535 = new google.maps.LatLng(50.658489, -1.40513);
var p536 = new google.maps.LatLng(50.658981, -1.40719);
var p537 = new google.maps.LatLng(50.659641, -1.40994);
var p538 = new google.maps.LatLng(50.660019, -1.41303);
var p539 = new google.maps.LatLng(50.66045, -1.41938);
var p540 = new google.maps.LatLng(50.6604, -1.42479);
var p541 = new google.maps.LatLng(50.660561, -1.42659);
var p542 = new google.maps.LatLng(50.66116, -1.42831);
var p543 = new google.maps.LatLng(50.662029, -1.43063);
var p544 = new google.maps.LatLng(50.66301, -1.43217);
var p545 = new google.maps.LatLng(50.663391, -1.4326);
var p546 = new google.maps.LatLng(50.663502, -1.43294);
var p547 = new google.maps.LatLng(50.663769, -1.43706);
var p548 = new google.maps.LatLng(50.663609, -1.43844);
var p549 = new google.maps.LatLng(50.663719, -1.44067);
var p550 = new google.maps.LatLng(50.663769, -1.44178);
var p551 = new google.maps.LatLng(50.663658, -1.44307);
var p552 = new google.maps.LatLng(50.663719, -1.44453);
var p553 = new google.maps.LatLng(50.664322, -1.44848);
var p554 = new google.maps.LatLng(50.66486, -1.4508);
var p555 = new google.maps.LatLng(50.665951, -1.45406);
var p556 = new google.maps.LatLng(50.666439, -1.45672);
var p557 = new google.maps.LatLng(50.667294, -1.461986);
var p558 = new google.maps.LatLng(50.668221, -1.464775);
var p559 = new google.maps.LatLng(50.669048, -1.46813);
var p560 = new google.maps.LatLng(50.669971, -1.47895);
var p561 = new google.maps.LatLng(50.670189, -1.48985);
var p562 = new google.maps.LatLng(50.6703, -1.49414);
var p563 = new google.maps.LatLng(50.670631, -1.49457);
var p564 = new google.maps.LatLng(50.670952, -1.50109);
var p565 = new google.maps.LatLng(50.670792, -1.50487);
var p566 = new google.maps.LatLng(50.670952, -1.50633);
var p567 = new google.maps.LatLng(50.671219, -1.50564);
var p568 = new google.maps.LatLng(50.672089, -1.50504);
var p569 = new google.maps.LatLng(50.672909, -1.50487);
var p570 = new google.maps.LatLng(50.674, -1.50547);
var p571 = new google.maps.LatLng(50.675091, -1.50659);
var p572 = new google.maps.LatLng(50.675362, -1.50727);
var p573 = new google.maps.LatLng(50.675678, -1.50659);
var p574 = new google.maps.LatLng(50.676121, -1.50504);
var p575 = new google.maps.LatLng(50.67672, -1.50444);
var p576 = new google.maps.LatLng(50.67786, -1.50461);
var p577 = new google.maps.LatLng(50.678509, -1.50393);
var p578 = new google.maps.LatLng(50.679001, -1.50435);
var p579 = new google.maps.LatLng(50.680801, -1.50667);
var p580 = new google.maps.LatLng(50.681831, -1.50736);
var p581 = new google.maps.LatLng(50.68248, -1.5077);
var p582 = new google.maps.LatLng(50.682701, -1.50753);
var p583 = new google.maps.LatLng(50.684219, -1.50453);
var p584 = new google.maps.LatLng(50.685532, -1.50247);
var p585 = new google.maps.LatLng(50.686401, -1.50161);
var p586 = new google.maps.LatLng(50.68716, -1.50161);
var p587 = new google.maps.LatLng(50.688568, -1.50195);
var p588 = new google.maps.LatLng(50.690151, -1.50247);
var p589 = new google.maps.LatLng(50.691132, -1.50255);
var p590 = new google.maps.LatLng(50.692162, -1.50212);
var p591 = new google.maps.LatLng(50.692921, -1.50075);
var p592 = new google.maps.LatLng(50.694012, -1.49938);
var p593 = new google.maps.LatLng(50.695259, -1.49835);
var p594 = new google.maps.LatLng(50.696949, -1.49783);
var p595 = new google.maps.LatLng(50.699009, -1.49749);
var p596 = new google.maps.LatLng(50.69939, -1.49732);
var p597 = new google.maps.LatLng(50.700642, -1.49637);
var p598 = new google.maps.LatLng(50.702271, -1.4956);
var p599 = new google.maps.LatLng(50.703041, -1.49457);
var p600 = new google.maps.LatLng(50.7038, -1.49302);
var p601 = new google.maps.LatLng(50.704342, -1.49096);
var p602 = new google.maps.LatLng(50.70472, -1.48916);
var p603 = new google.maps.LatLng(50.70483, -1.48719);
var p604 = new google.maps.LatLng(50.70483, -1.48582);
var p605 = new google.maps.LatLng(50.70385, -1.4853);
var p606 = new google.maps.LatLng(50.702271, -1.48513);
var p607 = new google.maps.LatLng(50.701241, -1.48273);
var p608 = new google.maps.LatLng(50.700699, -1.48273);
var p609 = new google.maps.LatLng(50.699879, -1.48195);
var p610 = new google.maps.LatLng(50.6982, -1.48204);
var p611 = new google.maps.LatLng(50.69738, -1.47491);
var p612 = new google.maps.LatLng(50.696732, -1.47148);
var p613 = new google.maps.LatLng(50.695911, -1.46899);
var p614 = new google.maps.LatLng(50.69548, -1.46693);
var p615 = new google.maps.LatLng(50.6945, -1.46324);
var p616 = new google.maps.LatLng(50.693581, -1.46135);
var p617 = new google.maps.LatLng(50.693073, -1.458424);
var p618 = new google.maps.LatLng(50.692257, -1.456321);
var p619 = new google.maps.LatLng(50.691841, -1.45406);
var p620 = new google.maps.LatLng(50.690861, -1.45397);
var p621 = new google.maps.LatLng(50.68988, -1.45131);
var p622 = new google.maps.LatLng(50.68819, -1.45234);
var p623 = new google.maps.LatLng(50.686562, -1.45311);
var p624 = new google.maps.LatLng(50.684059, -1.45389);
var p625 = new google.maps.LatLng(50.683681, -1.45432);
var p626 = new google.maps.LatLng(50.681992, -1.45406);
var p627 = new google.maps.LatLng(50.680801, -1.45389);
var p628 = new google.maps.LatLng(50.679218, -1.45457);
var p629 = new google.maps.LatLng(50.676449, -1.45603);
var p630 = new google.maps.LatLng(50.675739, -1.45543);
var p631 = new google.maps.LatLng(50.675091, -1.4544);
var p632 = new google.maps.LatLng(50.672039, -1.44977);
var p633 = new google.maps.LatLng(50.670952, -1.4465);
var p634 = new google.maps.LatLng(50.670792, -1.44522);
var p635 = new google.maps.LatLng(50.669102, -1.4441);
var p636 = new google.maps.LatLng(50.668289, -1.44238);
var p637 = new google.maps.LatLng(50.667629, -1.44153);
var p638 = new google.maps.LatLng(50.66687, -1.43826);
var p639 = new google.maps.LatLng(50.663609, -1.43123);
var p640 = new google.maps.LatLng(50.662899, -1.4241);
var p641 = new google.maps.LatLng(50.662849, -1.42101);
var p642 = new google.maps.LatLng(50.662788, -1.41964);
var p643 = new google.maps.LatLng(50.662571, -1.41827);
var p644 = new google.maps.LatLng(50.662571, -1.41586);
var p645 = new google.maps.LatLng(50.662571, -1.41423);
var p646 = new google.maps.LatLng(50.662361, -1.41303);
var p647 = new google.maps.LatLng(50.662079, -1.41234);
var p648 = new google.maps.LatLng(50.662079, -1.4108);
var p649 = new google.maps.LatLng(50.662251, -1.40977);
var p650 = new google.maps.LatLng(50.662411, -1.40891);
var p651 = new google.maps.LatLng(50.662251, -1.40805);
var p652 = new google.maps.LatLng(50.661758, -1.40754);
var p653 = new google.maps.LatLng(50.661491, -1.40676);
var p654 = new google.maps.LatLng(50.661209, -1.40591);
var p655 = new google.maps.LatLng(50.660511, -1.40376);
var p656 = new google.maps.LatLng(50.659908, -1.40196);
var p657 = new google.maps.LatLng(50.659531, -1.39981);
var p658 = new google.maps.LatLng(50.659359, -1.39887);
var p659 = new google.maps.LatLng(50.659039, -1.39784);
var p660 = new google.maps.LatLng(50.658379, -1.39612);
var p661 = new google.maps.LatLng(50.657841, -1.39441);
var p662 = new google.maps.LatLng(50.657745, -1.393235);
var p663 = new google.maps.LatLng(50.657021, -1.39114);
var p664 = new google.maps.LatLng(50.656811, -1.39046);
var p665 = new google.maps.LatLng(50.657619, -1.38943);
var p666 = new google.maps.LatLng(50.658379, -1.38857);
var p667 = new google.maps.LatLng(50.65958, -1.38711);
var p668 = new google.maps.LatLng(50.66127, -1.38548);
var p669 = new google.maps.LatLng(50.662472, -1.38402);
var p670 = new google.maps.LatLng(50.663769, -1.38136);
var p671 = new google.maps.LatLng(50.66497, -1.37861);
var p672 = new google.maps.LatLng(50.66573, -1.37775);
var p673 = new google.maps.LatLng(50.666382, -1.37638);
var p674 = new google.maps.LatLng(50.667198, -1.37458);
var p675 = new google.maps.LatLng(50.667469, -1.37097);
var p676 = new google.maps.LatLng(50.66769, -1.3678);
var p677 = new google.maps.LatLng(50.667912, -1.36685);
var p678 = new google.maps.LatLng(50.6684, -1.36591);
var p679 = new google.maps.LatLng(50.668991, -1.36316);
var p680 = new google.maps.LatLng(50.669971, -1.36033);
var p681 = new google.maps.LatLng(50.670521, -1.35904);
var p682 = new google.maps.LatLng(50.671711, -1.35673);
var p683 = new google.maps.LatLng(50.67345, -1.35578);
var p684 = new google.maps.LatLng(50.674919, -1.35484);
var p685 = new google.maps.LatLng(50.676231, -1.35424);
var p686 = new google.maps.LatLng(50.677429, -1.35406);
var p687 = new google.maps.LatLng(50.678299, -1.35346);
var p688 = new google.maps.LatLng(50.679272, -1.35261);
var p689 = new google.maps.LatLng(50.681992, -1.34986);
var p690 = new google.maps.LatLng(50.682968, -1.34892);
var p691 = new google.maps.LatLng(50.682877, -1.348604);
var p692 = new google.maps.LatLng(50.683079, -1.34857);
var p693 = new google.maps.LatLng(50.68346, -1.34514);
var p694 = new google.maps.LatLng(50.683994, -1.342037);
var p695 = new google.maps.LatLng(50.684441, -1.33939);
var p696 = new google.maps.LatLng(50.684551, -1.33853);
var p697 = new google.maps.LatLng(50.685692, -1.33501);
var p698 = new google.maps.LatLng(50.686779, -1.33226);
var p699 = new google.maps.LatLng(50.68819, -1.3302);
var p700 = new google.maps.LatLng(50.689075, -1.327543);
var p701 = new google.maps.LatLng(50.689819, -1.3248);
var p702 = new google.maps.LatLng(50.690311, -1.32394);
var p703 = new google.maps.LatLng(50.690369, -1.32342);
var p704 = new google.maps.LatLng(50.690151, -1.32257);
var p705 = new google.maps.LatLng(50.690273, -1.32088);
var p706 = new google.maps.LatLng(50.690735, -1.319421);



// Load the Visualization API and the columnchart package.
google.load('visualization', '1', {packages: ['columnchart']});

function initialize() {

    var myLatlng = new google.maps.LatLng(50.68, -1.319223);

    var mapOptions = {
        zoom: 11,
        center: myLatlng,
		scaleControl: true,
        mapTypeId: 'terrain'
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	
	 
	
// add marker at starting point of the route	
    
    var startmarker = new google.maps.Marker({
        position: p1,
        map: map,
        title: 'Start',
        visible: true
    });

    startmarker.setMap(map);

// add an info window attached to the marker to give information about the route	
	google.maps.event.addListener(startmarker,"click",function(event){infowin = 
    new google.maps.InfoWindow({
      position: new google.maps.LatLng(p1),
      content: "<b>Congratulations!</b><br/>You've cycled 84km from start to finish<br/>"
    });
    infowin.open(map,startmarker);
  });
	

    // Create an ElevationService.
    elevator = new google.maps.ElevationService();

    // Draw the path, using the Visualization API and the Elevation service.
    drawPath();
   

}

function drawPath() {

    // Create a new chart in the elevation_chart DIV.
    chart = new google.visualization.ColumnChart(document.getElementById('elevation_chart'));

    var path = [p1, p3, p5, p7, p9, p11, p13, p15, p17, p19, p21, p23, p25, p27, p29, p31, p33, p35, p37, p39, p41, p43, p45, p47, p49, p51, p53, p55, p57, p59, p61, p63, p65, p67, p69, p71, p73, p75, p77, p79, p81, p83, p85, p87, p89, p91, p93, p95, p97, p99, p101, p103, p105, p107, p109, p111, p113, p115, p117, p119, p121, p123, p125, p127, p129, p131, p133, p135, p137, p139, p141, p143, p145, p147, p149, p151, p153, p155, p157, p159, p161, p163, p165, p167, p169, p171, p173, p175, p177, p179, p181, p183, p185, p187, p189, p191, p193, p195, p197, p199, p201, p203, p205, p207, p209, p211, p213, p215, p217, p219, p221, p223, p225, p227, p229, p231, p233, p235, p237, p239, p241, p243, p245, p247, p249, p251, p253, p255, p257, p259, p261, p263, p265, p267, p269, p271, p273, p275, p277, p279, p281, p283, p285, p287, p289, p291, p293, p295, p297, p299, p301, p303, p305, p307, p309, p311, p313, p315, p317, p319, p321, p323, p325, p327, p329, p331, p333, p335, p337, p339, p341, p343, p345, p347, p349, p351, p353, p355, p357, p359, p361, p363, p365, p367, p369, p371, p373, p375, p377, p379, p381, p383, p385, p387, p389, p391, p393, p395, p397, p399, p401, p403, p405, p407, p409, p411, p413, p415, p417, p419, p421, p423, p425, p427, p429, p431, p433, p435, p437, p439, p441, p443, p445, p447, p449, p451, p453, p455, p457, p459, p461, p463, p465, p467, p469, p471, p473, p475, p477, p479, p481, p483, p485, p487, p489, p491, p493, p495, p497, p499, p501, p503, p505, p507, p509, p511, p513, p515, p517, p519, p521, p523, p525, p527, p529, p531, p533, p535, p537, p539, p541, p543, p545, p547, p549, p551, p553, p555, p557, p559, p561, p563, p565, p567, p569, p571, p573, p575, p577, p579, p581, p583, p585, p587, p589, p591, p593, p595, p597, p599, p601, p603, p605, p607, p609, p611, p613, p615, p617, p619, p621, p623, p625, p627, p629, p631, p633, p635, p637, p639, p641, p643, p645, p647, p649, p651, p653, p655, p657, p659, p661, p663, p665, p667, p669, p671, p673, p675, p677, p679, p681, p683, p685, p687, p689, p691, p693, p695, p697, p699, p701, p703, p705
    ];

    // Create a PathElevationRequest object using this array.
    // Ask for 256 samples along that path.
    var pathRequest = {
        'path': path,
        'samples': 400
    };

    // Initiate the path request.
    elevator.getElevationAlongPath(pathRequest, plotElevation);
}

// Takes an array of ElevationResult objects, draws the path on the map
// and plots the elevation profile on a Visualization API ColumnChart.
function plotElevation(results, status) {
    if (status !== google.maps.ElevationStatus.OK) {
        return;
    }
    var elevations = results;

    // Extract the elevation samples from the returned results
    // and store them in an array of LatLngs.
    var elevationPath = [];
    for (var i = 0; i < results.length; i++) {
        elevationPath.push(elevations[i].location);
    }

    // Display a polyline of the elevation path.
    var pathOptions = {
        path: [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28, p29, p30, p31, p32, p33, p34, p35, p36, p37, p38, p39, p40, p41, p42, p43, p44, p45, p46, p47, p48, p49, p50, p51, p52, p53, p54, p55, p56, p57, p58, p59, p60, p61, p62, p63, p64, p65, p66, p67, p68, p69, p70, p71, p72, p73, p74, p75, p76, p77, p78, p79, p80, p81, p82, p83, p84, p85, p86, p87, p88, p89, p90, p91, p92, p93, p94, p95, p96, p97, p98, p99, p100, p101, p102, p103, p104, p105, p106, p107, p108, p109, p110, p111, p112, p113, p114, p115, p116, p117, p118, p119, p120, p121, p122, p123, p124, p125, p126, p127, p128, p129, p130, p131, p132, p133, p134, p135, p136, p137, p138, p139, p140, p141, p142, p143, p144, p145, p146, p147, p148, p149, p150, p151, p152, p153, p154, p155, p156, p157, p158, p159, p160, p161, p162, p163, p164, p165, p166, p167, p168, p169, p170, p171, p172, p173, p174, p175, p176, p177, p178, p179, p180, p181, p182, p183, p184, p185, p186, p187, p188, p189, p190, p191, p192, p193, p194, p195, p196, p197, p198, p199, p200, p201, p202, p203, p204, p205, p206, p207, p208, p209, p210, p211, p212, p213, p214, p215, p216, p217, p218, p219, p220, p221, p222, p223, p224, p225, p226, p227, p228, p229, p230, p231, p232, p233, p234, p235, p236, p237, p238, p239, p240, p241, p242, p243, p244, p245, p246, p247, p248, p249, p250, p251, p252, p253, p254, p255, p256, p257, p258, p259, p260, p261, p262, p263, p264, p265, p266, p267, p268, p269, p270, p271, p272, p273, p274, p275, p276, p277, p278, p279, p280, p281, p282, p283, p284, p285, p286, p287, p288, p289, p290, p291, p292, p293, p294, p295, p296, p297, p298, p299, p300, p301, p302, p303, p304, p305, p306, p307, p308, p309, p310, p311, p312, p313, p314, p315, p316, p317, p318, p319, p320, p321, p322, p323, p324, p325, p326, p327, p328, p329, p330, p331, p332, p333, p334, p335, p336, p337, p338, p339, p340, p341, p342, p343, p344, p345, p346, p347, p348, p349, p350, p351, p352, p353, p354, p355, p356, p357, p358, p359, p360, p361, p362, p363, p364, p365, p366, p367, p368, p369, p370, p371, p372, p373, p374, p375, p376, p377, p378, p379, p380, p381, p382, p383, p384, p385, p386, p387, p388, p389, p390, p391, p392, p393, p394, p395, p396, p397, p398, p399, p400, p401, p402, p403, p404, p405, p406, p407, p408, p409, p410, p411, p412, p413, p414, p415, p416, p417, p418, p419, p420, p421, p422, p423, p424, p425, p426, p427, p428, p429, p430, p431, p432, p433, p434, p435, p436, p437, p438, p439, p440, p441, p442, p443, p444, p445, p446, p447, p448, p449, p450, p451, p452, p453, p454, p455, p456, p457, p458, p459, p460, p461, p462, p463, p464, p465, p466, p467, p468, p469, p470, p471, p472, p473, p474, p475, p476, p477, p478, p479, p480, p481, p482, p483, p484, p485, p486, p487, p488, p489, p490, p491, p492, p493, p494, p495, p496, p497, p498, p499, p500, p501, p502, p503, p504, p505, p506, p507, p508, p509, p510, p511, p512, p513, p514, p515, p516, p517, p518, p519, p520, p521, p522, p523, p524, p525, p526, p527, p528, p529, p530, p531, p532, p533, p534, p535, p536, p537, p538, p539, p540, p541, p542, p543, p544, p545, p546, p547, p548, p549, p550, p551, p552, p553, p554, p555, p556, p557, p558, p559, p560, p561, p562, p563, p564, p565, p566, p567, p568, p569, p570, p571, p572, p573, p574, p575, p576, p577, p578, p579, p580, p581, p582, p583, p584, p585, p586, p587, p588, p589, p590, p591, p592, p593, p594, p595, p596, p597, p598, p599, p600, p601, p602, p603, p604, p605, p606, p607, p608, p609, p610, p611, p612, p613, p614, p615, p616, p617, p618, p619, p620, p621, p622, p623, p624, p625, p626, p627, p628, p629, p630, p631, p632, p633, p634, p635, p636, p637, p638, p639, p640, p641, p642, p643, p644, p645, p646, p647, p648, p649, p650, p651, p652, p653, p654, p655, p656, p657, p658, p659, p660, p661, p662, p663, p664, p665, p666, p667, p668, p669, p670, p671, p672, p673, p674, p675, p676, p677, p678, p679, p680, p681, p682, p683, p684, p685, p686, p687, p688, p689, p690, p691, p692, p693, p694, p695, p696, p697, p698, p699, p700, p701, p702, p703, p704, p705, p706
        ],
        strokeColor: '#0000CC',
        opacity: 0.4,
        map: map
    };
    polyline = new google.maps.Polyline(pathOptions);
 
  // calculate the length of the polyline  
 var polyLengthInMeters = google.maps.geometry.spherical.computeLength(polyline.getPath().getArray());
  

    // Extract the data from which to populate the chart.
    // Because the samples are equidistant, the 'Sample'
    // column here does double duty as distance along the
    // X axis.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Sample');
    data.addColumn('number', 'Elevation');
    for (var i = 0; i < results.length; i++) {
        data.addRow(['', parseInt(elevations[i].elevation)]);
    }

    // Draw the chart using the data within its DIV.
    document.getElementById('elevation_chart').style.display = 'block';
    chart.draw(data, {
        height: '100px',
        legend: 'none',
        fontSize: '10px',
        titleY: 'Elevation (m)',
        titleX: 'Total Distance (km) = ' + parseInt(polyLengthInMeters/1000
		)
    });
}

google.maps.event.addDomListener(window, 'load', initialize);