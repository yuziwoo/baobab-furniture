/*
  규칙
  1. ID
  - WOOD는 100001부터 시작
  - METAL 200001
  - SOFA 300001
  - TABLE 400001
  - BAR & STOOL 500001

  2. type
  - WOOD : "wood"
  - METAL : "metal"
  - SOFA : "sofa"
  - TABLE : "table"
  - BAR & STOOL : "stool"
*/

const product = [
  {
    id: 100001,
    type: "wood",
    name: "바이킹",
    color: "BROWN",
    price: 230000,
    material: "MAHOGANY WOOD + BABUL ACACIA WOOD",
    size: "W450 D550 SH450 H980",
    origin: "인도네시아 OEM",
    render: 96
  },
  {
    id: 100002,
    type: "wood",
    name: "바이킹",
    color: "NATURAL",
    price: 230000,
    material: "MAHOGANY WOOD + BABUL ACACIA WOOD",
    size: "W450 D550 SH450 H980",
    origin: "인도네시아 OEM",
    render: 95
  },
  {
    id: 100003,
    type: "wood",
    name: "바이킹",
    color: "GREEN",
    price: 230000,
    material: "MAHOGANY WOOD + BABUL ACACIA WOOD",
    size: "W450 D550 SH450 H980",
    origin: "인도네시아 OEM",
    render: 94
  },
  {
    id: 100004,
    type: "wood",
    name: "가젤",
    color: "OLD TEAK",
    price: 196000,
    material: "TEAK WOOD",
    size: "W450 D500 SH450 H1010",
    origin: "인도네시아 OEM",
    render: 93
  },
  {
    id: 100005,
    type: "wood",
    name: "가젤",
    color: "WALNUT",
    price: 196000,
    material: "TEAK WOOD",
    size: "W450 D500 SH450 H1010",
    origin: "인도네시아 OEM",
    render: 92
  },
  {
    id: 100006,
    type: "wood",
    name: "가젤",
    color: "RUSTIC",
    price: 196000,
    material: "TEAK WOOD",
    size: "W450 D500 SH450 H1010",
    origin: "인도네시아 OEM",
    render: 91
  },
  {
    id: 100007,
    type: "wood",
    name: "가젤",
    color: "PAPUAROSE",
    price: 196000,
    material: "TEAK WOOD",
    size: "W450 D500 SH450 H1010",
    origin: "인도네시아 OEM",
    render: 90
  },
  {
    id: 100008,
    type: "wood",
    name: "플로라",
    color: "NATURAL",
    price: 200000,
    material: "TEAK WOOD",
    size: "W490 D560 SH450 H900",
    origin: "인도네시아 OEM",
    render: 89
  },
  {
    id: 100009,
    type: "wood",
    name: "플로라",
    color: "RUSTIC",
    price: 200000,
    material: "TEAK WOOD",
    size: "W490 D560 SH450 H900",
    origin: "인도네시아 OEM",
    render: 88
  },
  {
    id: 100010,
    type: "wood",
    name: "하프암",
    color: "WALNUT",
    price: 190000,
    material: "MAHOGANY WOOD",
    size: "W630 D500 SH450 H800",
    origin: "인도네시아 OEM",
    render: 87
  },
  {
    id: 100011,
    type: "wood",
    name: "토르",
    color: "NATURAL WOOD",
    price: 196000,
    material: "TEAK WOOD",
    size: "W440 D500 SH450 H790",
    origin: "인도네시아 OEM",
    render: 86
  },
  {
    id: 100012,
    type: "wood",
    name: "토르",
    color: "NATURAL PU",
    price: 210000,
    material: "TEAK WOOD",
    size: "W440 D500 SH450 H790",
    origin: "인도네시아 OEM",
    render: 85
  },
  {
    id: 100013,
    type: "wood",
    name: "토르",
    color: "WALNUT WOOD",
    price: 196000,
    material: "TEAK WOOD",
    size: "W440 D500 SH450 H790",
    origin: "인도네시아 OEM",
    render: 84
  },
  {
    id: 100014,
    type: "wood",
    name: "토르",
    color: "WALNUT PU",
    price: 210000,
    material: "TEAK WOOD",
    size: "W440 D500 SH450 H790",
    origin: "인도네시아 OEM",
    render: 83
  },
  {
    id: 100015,
    type: "wood",
    name: "토르",
    color: "RUSTIC WOOD",
    price: 196000,
    material: "TEAK WOOD",
    size: "W440 D500 SH450 H790",
    origin: "인도네시아 OEM",
    render: 82
  },
  {
    id: 100016,
    type: "wood",
    name: "토르",
    color: "RUSTIC PU",
    price: 210000,
    material: "TEAK WOOD",
    size: "W440 D500 SH450 H790",
    origin: "인도네시아 OEM",
    render: 81
  },
  {
    id: 100017,
    type: "wood",
    name: "토르",
    color: "VINTAGE WOOD",
    price: 196000,
    material: "TEAK WOOD",
    size: "W440 D500 SH450 H790",
    origin: "인도네시아 OEM",
    render: 80
  },
  {
    id: 100018,
    type: "wood",
    name: "토르",
    color: "VINTAGE PU",
    price: 210000,
    material: "TEAK WOOD",
    size: "W440 D500 SH450 H790",
    origin: "인도네시아 OEM",
    render: 79
  },
  {
    id: 100019,
    type: "wood",
    name: "크로스",
    color: "NATURAL",
    price: 136000,
    material: "BEECH WOOD",
    size: "W470 D520 SH470 H915",
    origin: "중국 OEM",
    render: 78
  },
  {
    id: 100020,
    type: "wood",
    name: "크로스",
    color: "WALNUT",
    price: 136000,
    material: "BEECH WOOD",
    size: "W470 D520 SH470 H915",
    origin: "중국 OEM",
    render: 77
  },
  {
    id: 100021,
    type: "wood",
    name: "나폴레옹",
    color: "WALNUT",
    price: 170000,
    material: "BEECH WOOD",
    size: "W430 D450 SH450 H770",
    origin: "중국 OEM",
    render: 76
  },
  {
    id: 100022,
    type: "wood",
    name: "나폴레옹",
    color: "VINTAGE WALNUT",
    price: 170000,
    material: "BEECH WOOD",
    size: "W430 D450 SH450 H770",
    origin: "중국 OEM",
    render: 75
  },
  {
    id: 100023,
    type: "wood",
    name: "나폴레옹",
    color: "WHITE",
    price: 170000,
    material: "BEECH WOOD",
    size: "W430 D450 SH450 H770",
    origin: "중국 OEM",
    render: 74
  },
  {
    id: 100024,
    type: "wood",
    name: "나폴레옹",
    color: "VINTAGE WHITE",
    price: 170000,
    material: "BEECH WOOD",
    size: "W430 D450 SH450 H770",
    origin: "중국 OEM",
    render: 73
  },
  {
    id: 100025,
    type: "wood",
    name: "나폴레옹",
    color: "BLACK",
    price: 170000,
    material: "BEECH WOOD",
    size: "W430 D450 SH450 H770",
    origin: "중국 OEM",
    render: 72
  },
  {
    id: 100026,
    type: "wood",
    name: "나폴레옹",
    color: "VINTAGE BLACK",
    price: 170000,
    material: "BEECH WOOD",
    size: "W430 D450 SH450 H770",
    origin: "중국 OEM",
    render: 71
  },
  {
    id: 100027,
    type: "wood",
    name: "나폴레옹",
    color: "BLUE",
    price: 170000,
    material: "BEECH WOOD",
    size: "W430 D450 SH450 H770",
    origin: "중국 OEM",
    render: 70
  },
  {
    id: 100028,
    type: "wood",
    name: "나폴레옹",
    color: "GREEN",
    price: 170000,
    material: "BEECH WOOD",
    size: "W430 D450 SH450 H770",
    origin: "중국 OEM",
    render: 69
  },
  {
    id: 100029,
    type: "wood",
    name: "나폴레옹",
    color: "RED",
    price: 170000,
    material: "BEECH WOOD",
    size: "W430 D450 SH450 H770",
    origin: "중국 OEM",
    render: 68
  },
  {
    id: 100030,
    type: "wood",
    name: "윌리엄",
    color: "DARK",
    price: 260000,
    material: "OAK WOOD",
    size: "W480 D580 SH450 H950",
    origin: "중국 OEM",
    render: 67
  },
  {
    id: 100031,
    type: "wood",
    name: "윌리엄",
    color: "LIGHT",
    price: 260000,
    material: "OAK WOOD",
    size: "W480 D580 SH450 H950",
    origin: "중국 OEM",
    render: 66
  },
  {
    id: 100032,
    type: "wood",
    name: "벤",
    color: "FLOWER",
    price: 230000,
    material: "OAK WOOD",
    size: "W500 D500 SH460 H970",
    origin: "중국 OEM",
    render: 65
  },
  {
    id: 100033,
    type: "wood",
    name: "벤",
    color: "BROWN",
    price: 230000,
    material: "OAK WOOD",
    size: "W500 D500 SH460 H970",
    origin: "중국 OEM",
    render: 64
  },
  {
    id: 100034,
    type: "wood",
    name: "벤",
    color: "NAVY FABRIC",
    price: 230000,
    material: "OAK WOOD",
    size: "W500 D500 SH460 H970",
    origin: "중국 OEM",
    render: 63
  },
  {
    id: 100035,
    type: "wood",
    name: "벤",
    color: "GREEN",
    price: 230000,
    material: "OAK WOOD",
    size: "W500 D500 SH460 H970",
    origin: "중국 OEM",
    render: 62
  },
  {
    id: 100036,
    type: "wood",
    name: "라떼",
    color: "NATURAL",
    price: 190000,
    material: "TEAK WOOD",
    size: "W460 D490 SH450 H940",
    origin: "인도네시아 OEM",
    render: 61
  },
  {
    id: 100037,
    type: "wood",
    name: "라떼",
    color: "OLD TEAK",
    price: 190000,
    material: "TEAK WOOD",
    size: "W460 D490 SH450 H940",
    origin: "인도네시아 OEM",
    render: 60
  },
  {
    id: 100038,
    type: "wood",
    name: "라떼",
    color: "BLACK",
    price: 190000,
    material: "TEAK WOOD",
    size: "W460 D490 SH450 H940",
    origin: "인도네시아 OEM",
    render: 59
  },
  {
    id: 100039,
    type: "wood",
    name: "듀스",
    color: "NATURAL WOOD",
    price: 196000,
    material: "TEAK WOOD",
    size: "W465 D585 SH430 H800",
    origin: "인도네시아 OEM",
    render: 58
  },
  {
    id: 100040,
    type: "wood",
    name: "듀스",
    color: "NATURAL PU",
    price: 210000,
    material: "TEAK WOOD",
    size: "W465 D585 SH430 H800",
    origin: "인도네시아 OEM",
    render: 57
  },
  {
    id: 100041,
    type: "wood",
    name: "듀스",
    color: "WALNUT WOOD",
    price: 196000,
    material: "TEAK WOOD",
    size: "W465 D585 SH430 H800",
    origin: "인도네시아 OEM",
    render: 56
  },
  {
    id: 100042,
    type: "wood",
    name: "듀스",
    color: "WALNUT PU",
    price: 210000,
    material: "TEAK WOOD",
    size: "W465 D585 SH430 H800",
    origin: "인도네시아 OEM",
    render: 55
  },
  {
    id: 100043,
    type: "wood",
    name: "듀스",
    color: "VINTAGE WOOD",
    price: 196000,
    material: "TEAK WOOD",
    size: "W465 D585 SH430 H800",
    origin: "인도네시아 OEM",
    render: 54
  },
  {
    id: 100044,
    type: "wood",
    name: "듀스",
    color: "VINTAGE PU",
    price: 210000,
    material: "TEAK WOOD",
    size: "W465 D585 SH430 H800",
    origin: "인도네시아 OEM",
    render: 53
  },
  {
    id: 100045,
    type: "wood",
    name: "듀스",
    color: "RUSTIC WOOD",
    price: 196000,
    material: "TEAK WOOD",
    size: "W465 D585 SH430 H800",
    origin: "인도네시아 OEM",
    render: 52
  },
  {
    id: 100046,
    type: "wood",
    name: "듀스",
    color: "RUSTIC PU",
    price: 210000,
    material: "TEAK WOOD",
    size: "W465 D585 SH430 H800",
    origin: "인도네시아 OEM",
    render: 51
  },
  {
    id: 100047,
    type: "wood",
    name: "다이애나",
    color: "NATURAL",
    price: 180000,
    material: "TEAK WOOD",
    size: "W500 D520 SH450 H820",
    origin: "인도네시아 OEM",
    render: 50
  },
  {
    id: 100048,
    type: "wood",
    name: "다이애나",
    color: "WALNUT",
    price: 180000,
    material: "TEAK WOOD",
    size: "W500 D520 SH450 H820",
    origin: "인도네시아 OEM",
    render: 49
  },
  {
    id: 100049,
    type: "wood",
    name: "다이애나",
    color: "RUSTIC",
    price: 180000,
    material: "TEAK WOOD",
    size: "W500 D520 SH450 H820",
    origin: "인도네시아 OEM",
    render: 48
  },
  {
    id: 100050,
    type: "wood",
    name: "플라워",
    color: "IVORY PU",
    price: 230000,
    material: "RUBBER WOOD",
    size: "W500 D560 SH475 H960",
    origin: "중국 OEM",
    render: 47
  },
  {
    id: 100051,
    type: "wood",
    name: "플라워",
    color: "BROWN PU",
    price: 230000,
    material: "RUBBER WOOD",
    size: "W500 D560 SH475 H960",
    origin: "중국 OEM",
    render: 46
  },
  {
    id: 100052,
    type: "wood",
    name: "플라워",
    color: "GREY FABRIC",
    price: 230000,
    material: "RUBBER WOOD",
    size: "W500 D560 SH475 H960",
    origin: "중국 OEM",
    render: 45
  },
  {
    id: 100053,
    type: "wood",
    name: "플라워",
    color: "BLACK FABRIC",
    price: 230000,
    material: "RUBBER WOOD",
    size: "W500 D560 SH475 H960",
    origin: "중국 OEM",
    render: 44
  },
  {
    id: 100054,
    type: "wood",
    name: "커피 보조1",
    color: "COFFEE",
    price: 80000,
    material: "RUBBER WOOD",
    size: "W430 D430 SH430 Hundefined",
    origin: "중국 OEM",
    render: 43
  },
  {
    id: 100055,
    type: "wood",
    name: "커피 보조1",
    color: "BROWN",
    price: 90000,
    material: "RUBBER WOOD",
    size: "W430 D430 SH430 Hundefined",
    origin: "중국 OEM",
    render: 42
  },
  {
    id: 100056,
    type: "wood",
    name: "커피 보조1",
    color: "IVORY",
    price: 90000,
    material: "RUBBER WOOD",
    size: "W430 D430 SH430 Hundefined",
    origin: "중국 OEM",
    render: 41
  },
  {
    id: 100057,
    type: "wood",
    name: "커피 보조1",
    color: "RED",
    price: 90000,
    material: "RUBBER WOOD",
    size: "W430 D430 SH430 Hundefined",
    origin: "중국 OEM",
    render: 40
  },
  {
    id: 100058,
    type: "wood",
    name: "커피 보조2",
    color: "COFFEE",
    price: 170000,
    material: "RUBBER WOOD",
    size: "W1200 D430 SH430 Hundefined",
    origin: "중국 OEM",
    render: 39
  },
  {
    id: 100059,
    type: "wood",
    name: "커피 보조2",
    color: "BROWN",
    price: 180000,
    material: "RUBBER WOOD",
    size: "W1200 D430 SH430 Hundefined",
    origin: "중국 OEM",
    render: 38
  },
  {
    id: 100060,
    type: "wood",
    name: "커피 보조2",
    color: "IVORY",
    price: 180000,
    material: "RUBBER WOOD",
    size: "W1200 D430 SH430 Hundefined",
    origin: "중국 OEM",
    render: 37
  },
  {
    id: 100061,
    type: "wood",
    name: "커피 보조2",
    color: "RED",
    price: 180000,
    material: "RUBBER WOOD",
    size: "W1200 D430 SH430 Hundefined",
    origin: "중국 OEM",
    render: 36
  },
  {
    id: 100062,
    type: "wood",
    name: "커피",
    color: "SMALL",
    price: 170000,
    material: "RUBBER WOOD",
    size: "W455 D530 SH450 H720",
    origin: "중국 OEM",
    render: 35
  },
  {
    id: 100063,
    type: "wood",
    name: "커피",
    color: "BIG",
    price: 170000,
    material: "RUBBER WOOD",
    size: "W555 D530 SH450 H720",
    origin: "중국 OEM",
    render: 34
  },
  {
    id: 100064,
    type: "wood",
    name: "아쭈로",
    color: "BEIGE PU",
    price: 230000,
    material: "RUBBER WOOD",
    size: "W530 D570 SH450 H770",
    origin: "중국 OEM",
    render: 33
  },
  {
    id: 100065,
    type: "wood",
    name: "아쭈로",
    color: "BROWN PU",
    price: 230000,
    material: "RUBBER WOOD",
    size: "W530 D570 SH450 H770",
    origin: "중국 OEM",
    render: 32
  },
  {
    id: 100066,
    type: "wood",
    name: "아쭈로",
    color: "GREY FABRIC",
    price: 230000,
    material: "RUBBER WOOD",
    size: "W530 D570 SH450 H770",
    origin: "중국 OEM",
    render: 31
  },
  {
    id: 100067,
    type: "wood",
    name: "소피아",
    color: "KHAKI",
    price: 320000,
    material: "BEECH WOOD",
    size: "W620 D640 SH475 H930",
    origin: "중국 OEM",
    render: 30
  },
  {
    id: 100068,
    type: "wood",
    name: "소피아",
    color: "BROWN",
    price: 320000,
    material: "BEECH WOOD",
    size: "W620 D640 SH475 H930",
    origin: "중국 OEM",
    render: 29
  },
  {
    id: 100069,
    type: "wood",
    name: "소피아",
    color: "NAVY",
    price: 320000,
    material: "BEECH WOOD",
    size: "W620 D640 SH475 H930",
    origin: "중국 OEM",
    render: 28
  },
  {
    id: 100070,
    type: "wood",
    name: "샤프",
    color: "WALNUT",
    price: 150000,
    material: "ASH WOOD",
    size: "W450 D500 SH480 H880",
    origin: "중국 OEM",
    render: 27
  },
  {
    id: 100071,
    type: "wood",
    name: "샤프",
    color: "BLACK",
    price: 150000,
    material: "ASH WOOD",
    size: "W450 D500 SH480 H880",
    origin: "중국 OEM",
    render: 26
  },
  {
    id: 100072,
    type: "wood",
    name: "팀버튼",
    color: "RED",
    price: 230000,
    material: "RUBBER WOOD",
    size: "W515 D560 SH450 H860",
    origin: "중국 OEM",
    render: 25
  },
  {
    id: 100073,
    type: "wood",
    name: "팀버튼",
    color: "BROWN",
    price: 230000,
    material: "RUBBER WOOD",
    size: "W515 D560 SH450 H860",
    origin: "중국 OEM",
    render: 24
  },
  {
    id: 100074,
    type: "wood",
    name: "팀버튼",
    color: "KHAKI",
    price: 230000,
    material: "RUBBER WOOD",
    size: "W515 D560 SH450 H860",
    origin: "중국 OEM",
    render: 23
  },
  {
    id: 100075,
    type: "wood",
    name: "팀버튼",
    color: "NAVY",
    price: 230000,
    material: "RUBBER WOOD",
    size: "W515 D560 SH450 H860",
    origin: "중국 OEM",
    render: 22
  },
  {
    id: 100076,
    type: "wood",
    name: "팀버튼",
    color: "GREY",
    price: 230000,
    material: "RUBBER WOOD",
    size: "W515 D560 SH450 H860",
    origin: "중국 OEM",
    render: 21
  },
  {
    id: 100077,
    type: "wood",
    name: "나나",
    color: "A",
    price: 240000,
    material: "OAK WOOD",
    size: "W670 D630 SH420 H690",
    origin: "중국 OEM",
    render: 20
  },
  {
    id: 100078,
    type: "wood",
    name: "나나",
    color: "B",
    price: 240000,
    material: "OAK WOOD",
    size: "W560 D630 SH450 H720",
    origin: "중국 OEM",
    render: 19
  },
  {
    id: 100079,
    type: "wood",
    name: "트라이",
    color: "",
    price: 320000,
    material: "ASH WOOD",
    size: "W680 D760 SH430 H830",
    origin: "중국 OEM",
    render: 18
  },
  {
    id: 100080,
    type: "wood",
    name: "트론",
    color: "",
    price: 230000,
    material: "BEECH WOOD",
    size: "W475 D490 SH470 H990",
    origin: "중국 OEM",
    render: 17
  },
  {
    id: 100081,
    type: "wood",
    name: "엘라",
    color: "",
    price: 170000,
    material: "ASH WOOD",
    size: "W440 D480 SH450 H845",
    origin: "중국 OEM",
    render: 16
  },
  {
    id: 100082,
    type: "wood",
    name: "첼로",
    color: "",
    price: 180000,
    material: "ASH WOOD",
    size: "W575 D500 SH445 H1000",
    origin: "중국 OEM",
    render: 15
  },
  {
    id: 100083,
    type: "wood",
    name: "먼싱",
    color: "KHAKI",
    price: 180000,
    material: "ASH WOOD",
    size: "W600 D660 SH450 H800",
    origin: "중국 OEM",
    render: 14
  },
  {
    id: 100084,
    type: "wood",
    name: "먼싱",
    color: "BROWN",
    price: 180000,
    material: "ASH WOOD",
    size: "W600 D660 SH450 H800",
    origin: "중국 OEM",
    render: 13
  },
  {
    id: 100085,
    type: "wood",
    name: "디아망",
    color: "KHAKI",
    price: 230000,
    material: "BEECH WOOD",
    size: "W565 D600 SH450 H870",
    origin: "중국 OEM",
    render: 12
  },
  {
    id: 100086,
    type: "wood",
    name: "디아망",
    color: "BROWN",
    price: 230000,
    material: "BEECH WOOD",
    size: "W565 D600 SH450 H870",
    origin: "중국 OEM",
    render: 11
  },
  {
    id: 100087,
    type: "wood",
    name: "노블레스",
    color: "",
    price: 800000,
    material: "OAK WOOD",
    size: "W430 D505 SH470 H860",
    origin: "중국 OEM",
    render: 10
  },
  {
    id: 100088,
    type: "wood",
    name: "네로",
    color: "",
    price: 154000,
    material: "ASH WOOD",
    size: "W430 D470 SH450 H805",
    origin: "중국 OEM",
    render: 9
  },
  {
    id: 100089,
    type: "wood",
    name: "위뜨",
    color: "",
    price: 190000,
    material: "ASH WOOD",
    size: "W600 D650 SH460 H900",
    origin: "중국 OEM",
    render: 8
  },
  {
    id: 100090,
    type: "wood",
    name: "카우",
    color: "",
    price: 130000,
    material: "ASH WOOD",
    size: "W550 D500 SH450 H750",
    origin: "중국 OEM",
    render: 7
  },
  {
    id: 100091,
    type: "wood",
    name: "디렉터",
    color: "",
    price: 190000,
    material: "ASH WOOD",
    size: "W610 D560 SH480 H850",
    origin: "중국 OEM",
    render: 6
  },
  {
    id: 100092,
    type: "wood",
    name: "킹",
    color: "",
    price: 190000,
    material: "ASH WOOD",
    size: "W470 D570 SH460 H1000",
    origin: "중국 OEM",
    render: 5
  },
  {
    id: 100093,
    type: "wood",
    name: "토피",
    color: "",
    price: 170000,
    material: "TEAK WOOD",
    size: "W600 D500 SH445 H800",
    origin: "인도네시아 OEM",
    render: 4
  },
  {
    id: 100094,
    type: "wood",
    name: "미뇽",
    color: "",
    price: 190000,
    material: "ASH WOOD + RATTAN",
    size: "W600 D650 SH460 H900",
    origin: "중국 OEM",
    render: 3
  },
  {
    id: 100095,
    type: "wood",
    name: "하프사이드",
    color: "VINTAGE WHITE",
    price: 164000,
    material: "ASH WOOD",
    size: "W490 D520 SH450 H850",
    origin: "인도네시아 OEM",
    render: 2
  },
  {
    id: 100096,
    type: "wood",
    name: "하프사이드",
    color: "WALNUT",
    price: 164000,
    material: "ASH WOOD",
    size: "W490 D520 SH450 H850",
    origin: "인도네시아 OEM",
    render: 1
  },
  {
    id: 200001,
    type: "metal",
    name: "나인",
    color: "GREY",
    price: 136000,
    material: "STEEL + PU",
    size: "W480 D540 SH450 H820",
    origin: "중국 OEM",
    render: 30
  },
  {
    id: 200002,
    type: "metal",
    name: "나인",
    color: "GREEN",
    price: 136000,
    material: "STEEL + PU",
    size: "W480 D540 SH450 H820",
    origin: "중국 OEM",
    render: 29
  },
  {
    id: 200003,
    type: "metal",
    name: "다모아 암",
    color: "FLOWER",
    price: 136000,
    material: "STEEL",
    size: "W630 D470 SH440 H750",
    origin: "중국 OEM",
    render: 28
  },
  {
    id: 200004,
    type: "metal",
    name: "다모아 암",
    color: "BROWN",
    price: 136000,
    material: "STEEL",
    size: "W630 D470 SH440 H750",
    origin: "중국 OEM",
    render: 27
  },
  {
    id: 200005,
    type: "metal",
    name: "다모아 암",
    color: "ORANGE",
    price: 136000,
    material: "STEEL",
    size: "W630 D470 SH440 H750",
    origin: "중국 OEM",
    render: 26
  },
  {
    id: 200006,
    type: "metal",
    name: "다모아 사이드",
    color: "FLOWER",
    price: 116000,
    material: "STEEL",
    size: "W490 D470 SH440 H750",
    origin: "중국 OEM",
    render: 25
  },
  {
    id: 200007,
    type: "metal",
    name: "다모아 사이드",
    color: "GREY",
    price: 116000,
    material: "STEEL",
    size: "W490 D470 SH440 H750",
    origin: "중국 OEM",
    render: 24
  },
  {
    id: 200008,
    type: "metal",
    name: "다모아 사이드",
    color: "ORANGE",
    price: 116000,
    material: "STEEL",
    size: "W490 D470 SH440 H750",
    origin: "중국 OEM",
    render: 23
  },
  {
    id: 200009,
    type: "metal",
    name: "뽐뿌 스몰",
    color: "BROWN PU",
    price: 110000,
    material: "STEEL",
    size: "W470 D450 SH460 H770",
    origin: "중국 OEM",
    render: 22
  },
  {
    id: 200010,
    type: "metal",
    name: "뽐뿌 스몰",
    color: "NAVY PU",
    price: 110000,
    material: "STEEL",
    size: "W470 D450 SH460 H770",
    origin: "중국 OEM",
    render: 21
  },
  {
    id: 200011,
    type: "metal",
    name: "뽐뿌 스몰",
    color: "CHECK BROWN",
    price: 110000,
    material: "STEEL",
    size: "W470 D450 SH460 H770",
    origin: "중국 OEM",
    render: 20
  },
  {
    id: 200012,
    type: "metal",
    name: "뽐뿌 스몰",
    color: "LIGHT GREEN",
    price: 110000,
    material: "STEEL",
    size: "W470 D450 SH460 H770",
    origin: "중국 OEM",
    render: 19
  },
  {
    id: 200013,
    type: "metal",
    name: "뽐뿌 스몰",
    color: "GREY",
    price: 110000,
    material: "STEEL",
    size: "W470 D450 SH460 H770",
    origin: "중국 OEM",
    render: 18
  },
  {
    id: 200014,
    type: "metal",
    name: "인아웃",
    color: "ORANGE",
    price: 136000,
    check: "(방석 추가시 +14,000)",
    material: "STEEL",
    size: "W510 D480 SH450 H780",
    origin: "중국 OEM",
    render: 17
  },
  {
    id: 200015,
    type: "metal",
    name: "인아웃",
    color: "BLACK",
    price: 136000,
    check: "(방석 추가시 +14,000)",
    material: "STEEL",
    size: "W510 D480 SH450 H780",
    origin: "중국 OEM",
    render: 16
  },
  {
    id: 200016,
    type: "metal",
    name: "인아웃",
    color: "GREEN",
    price: 136000,
    check: "(방석 추가시 +14,000)",
    material: "STEEL",
    size: "W510 D480 SH450 H780",
    origin: "중국 OEM",
    render: 15
  },
  {
    id: 200017,
    type: "metal",
    name: "하비",
    color: "BLACK",
    price: 116000,
    material: "STEEL",
    size: "W480 D600 SH450 H780",
    origin: "중국 OEM",
    render: 14
  },
  {
    id: 200018,
    type: "metal",
    name: "하비",
    color: "BROWN",
    price: 116000,
    material: "STEEL",
    size: "W480 D600 SH450 H780",
    origin: "중국 OEM",
    render: 13
  },
  {
    id: 200019,
    type: "metal",
    name: "하비",
    color: "GREEN",
    price: 116000,
    material: "STEEL",
    size: "W480 D600 SH450 H780",
    origin: "중국 OEM",
    render: 12
  },
  {
    id: 200020,
    type: "metal",
    name: "브루",
    color: "PINK",
    price: 180000,
    material: "STEEL 도금",
    size: "W580 D640 SH380 H830",
    origin: "중국 OEM",
    render: 11
  },
  {
    id: 200021,
    type: "metal",
    name: "브루",
    color: "BLUE",
    price: 180000,
    material: "STEEL 도금",
    size: "W580 D640 SH380 H830",
    origin: "중국 OEM",
    render: 10
  },
  {
    id: 200022,
    type: "metal",
    name: "브루",
    color: "GREY",
    price: 180000,
    material: "STEEL 도금",
    size: "W580 D640 SH380 H830",
    origin: "중국 OEM",
    render: 9
  },
  {
    id: 200023,
    type: "metal",
    name: "샤이니",
    color: "BLUE",
    price: 160000,
    material: "STEEL 도금",
    size: "W530 D550 SH460 H770",
    origin: "중국 OEM",
    render: 8
  },
  {
    id: 200024,
    type: "metal",
    name: "샤이니",
    color: "RED",
    price: 160000,
    material: "STEEL 도금",
    size: "W530 D550 SH460 H770",
    origin: "중국 OEM",
    render: 7
  },
  {
    id: 200025,
    type: "metal",
    name: "샤이니",
    color: "GREY",
    price: 160000,
    material: "STEEL 도금",
    size: "W530 D550 SH460 H770",
    origin: "중국 OEM",
    render: 6
  },
  {
    id: 200026,
    type: "metal",
    name: "쉬크",
    color: "BLUE",
    price: 96000,
    material: "STEEL",
    size: "W450 D500 SH450 H1010",
    origin: "중국 OEM",
    render: 5
  },
  {
    id: 200027,
    type: "metal",
    name: "오로",
    color: "GOLD",
    price: 170000,
    material: "STEEL 도금",
    size: "W440 D420 SH450 H800",
    origin: "중국 OEM",
    render: 4
  },
  {
    id: 200028,
    type: "metal",
    name: "리프",
    color: "SILVER",
    price: 440000,
    material: "STEEL",
    size: "W510 D570 SH450 H830",
    origin: "이탈리아 OEM",
    render: 3
  },
  {
    id: 200029,
    type: "metal",
    name: "퀸스",
    color: "ROSEGOLD",
    price: 320000,
    material: "STAINLESS STEEL",
    size: "W515 D490 SH460 H1015",
    origin: "중국 OEM",
    render: 2
  },
  {
    id: 200030,
    type: "metal",
    name: "크라운",
    color: "",
    price: 150000,
    material: "ALUMINIUM",
    size: "W415 D430 SH920 Hundefined",
    origin: "중국 OEM",
    render: 1
  },
  {
    id: 400001,
    type: "table",
    name: "레인보우",
    color: "",
    price: "가격 문의",
    material: "RANDOM",
    size: "원하는 사이즈 주문 가능",
    origin: "국내 제작",
    render: 5
  },
  {
    id: 400002,
    type: "table",
    name: "티크 고재원형",
    color: "",
    price: "가격 문의",
    material: "OLD TEAK",
    size: "원하는 사이즈 주문 가능",
    origin: "국내 제작",
    render: 4
  },
  {
    id: 400003,
    type: "table",
    name: "티크 고재사각",
    color: "",
    price: "가격 문의",
    material: "OLD TEAK",
    size: "원하는 사이즈 주문 가능",
    origin: "국내 제작",
    render: 3
  },
  {
    id: 400004,
    type: "table",
    name: "토르 메탈",
    color: "",
    price: "가격 문의",
    material: "RANDOM",
    size: "원하는 사이즈, 나무(WALNUT, NATURAL) 주문 가능",
    origin: "국내 제작",
    render: 2
  },
  {
    id: 400005,
    type: "table",
    name: "토르 우드",
    color: "",
    price: "가격 문의",
    material: "RANDOM",
    size: "원하는 사이즈, 나무(WALNUT, NATURAL) 주문 가능",
    origin: "국내 제작",
    render: 1
  },{
    id: 500001,
    type: "stool",
    name: "주피",
    color: "",
    price: 220000,
    material: "TEAK WOOD + STEEL",
    size: "W350 D350 H560 ~ 680",
    origin: "중국 OEM",
    render: 10
    },
    {
    id: 500002,
    type: "stool",
    name: "뽐뿌 스툴",
    color: "",
    price: 96000,
    material: "ELM WOOD + STEEL",
    size: "W400 D400 H450",
    origin: "중국 OEM",
    render: 9
    },
    {
    id: 500003,
    type: "stool",
    name: "클릭2 하이 FABRIC",
    color: "FABRIC",
    price: 190000,
    material: "STEEL + FABRIC",
    size: "W320 D320 H650 ~ 850",
    origin: "중국 OEM",
    render: 8
    },
    {
    id: 500004,
    type: "stool",
    name: "클릭2 하이 WOOD",
    color: "WOOD",
    price: 190000,
    material: "STEEL + ELM WOOD",
    size: "W320 D320 H650 ~ 850",
    origin: "중국 OEM",
    render: 7
    },
    {
    id: 500005,
    type: "stool",
    name: "클릭2 하이 STEEL",
    color: "STEEL",
    price: 190000,
    material: "STEEL + STEEL",
    size: "W320 D320 H650 ~ 850",
    origin: "중국 OEM",
    render: 6
    },
    {
    id: 500006,
    type: "stool",
    name: "클릭2 로우 FABRIC",
    color: "FABRIC",
    price: 170000,
    material: "STEEL + FABRIC",
    size: "W320 D320 H500 ~ 700",
    origin: "중국 OEM",
    render: 5
    },
    {
    id: 500007,
    type: "stool",
    name: "클릭2 로우 WOOD",
    color: "WOOD",
    price: 170000,
    material: "STEEL + ELM WOOD",
    size: "W320 D320 H500 ~ 700",
    origin: "중국 OEM",
    render: 4
    },
    {
    id: 500008,
    type: "stool",
    name: "클릭2 로우 STEEL",
    color: "STEEL",
    price: 170000,
    material: "STEEL + STEEL",
    size: "W320 D320 H500 ~ 700",
    origin: "중국 OEM",
    render: 3
    },
    {
    id: 500009,
    type: "stool",
    name: "정크 로우",
    color: "",
    price: 190000,
    material: "STEEL",
    size: "W395 D435 H750 ~ 900",
    origin: "중국 OEM",
    render: 2
    },
    {
    id: 500010,
    type: "stool",
    name: "정크 하이",
    color: "",
    price: 210000,
    material: "STEEL",
    size: "W395 D450 H900 ~ 1050",
    origin: "중국 OEM",
    render: 1
    },
]

export default product;