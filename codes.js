const restrictedCodes = [
    300610,
    3006400000,
    3006700000,
    3006910000,
    3701100000,
    3702100000,
    3815199000,
    3821000000,
    3822,
    3926909701,
    4818901000,
    6117801001,
    6210109200,
    6307909200,
    680422,
    730900,
    7311009900,
    8207,
    820900,
    8401,
    8402,
    8403,
    8404,
    8405,
    8406,
    8407,
    8408,
    8409,
    8410,
    8411,
    8412,
    8413502000,
    8413504000,
    8413506900,
    841360,
    841370,
    8413810000,
    8413820011,
    8413820091,
    8413910008,
    8413920000,
    8414108100,
    8414108900,
    8414308101,
    8414308109,
    8414308902,
    8414308909,
    841440,
    8414592000,
    841480,
    8414900000,
    8416,
    8417,
    8418690008,
    8419,
    8420,
    8421110000,
    842119200,
    842119700,
    8421220000,
    842129000,
    8421398002,
    8421990007,
    8422200009,
    8422300008,
    8422909000,
    8423,
    8424,
    8425,
    8426,
    8427,
    8428,
    8430,
    8431,
    8432,
    8433,
    8434,
    8435,
    8436,
    8437,
    8438,
    8439,
    8440,
    8441,
    8442,
    8443,
    844400,
    8445,
    8446,
    8447,
    8448,
    8452,
    8453,
    8454,
    8455,
    8456,
    8457,
    8458,
    8459,
    8460,
    8461,
    8462,
    8463,
    8464,
    8465,
    8466,
    8467,
    8468,
    8471,
    8474,
    8475,
    8477,
    8478100000,
    8479,
    8480,
    8481109908,
    8481309108,
    8481309908,
    8481401000,
    8481409009,
    848180,
    8485,
    8486,
    8501,
    8502,
    850300,
    8504,
    8506,
    8507,
    8514,
    8516808000,
    8517,
    8523,
    8525,
    8526,
    8527,
    8528,
    8531209500,
    8531809500,
    8532,
    853400,
    8535,
    8538909200,
    8540,
    8541,
    8542,
    8543,
    8544429009,
    8544700000,
    8545,
    8549,
    860800000,
    8701,
    8709,
    8802,
    8805,
    8806,
    8807,
    8905,
    8906,
    8908000000,
    9001,
    9002110000,
    9002200000,
    9013,
    9017,
    9018,
    9019200000,
    9020000000,
    9021,
    9022,
    9024,
    9027,
    9030,
    9031499000
]

const exceptionCodes = [
    8207309000,
    8407310000,
    840732,
    840733,
    840734,
    840820,
    8408902100,
    8412218008,
    8412298109,
    8412298909,
    841290,
    8416900000,
    8417900000,
    8419110000,
    8419190000,
    8419340000,
    8419350000,
    841981,
    8420918000,
    8420990000,
    8423200000,
    842381,
    842382,
    8424200000,
    84249,
    8425390006,
    84254,
    8428330000,
    8432900000,
    8433900000,
    8438900000,
    8440900000,
    844190,
    8442400000,
    8453900000,
    8454900000,
    8455900000,
    847490,
    8475900000,
    847790,
    847990,
    8485200000,
    8506900000,
    8514900000,
    852341,
    852349,
    8532900000,
    880790000,
    9013900000,
    9017801000,
    9021400000,
    9022900000,
    9024900000,
    9027905000,
    9027908000,
    903090,
    8439100001,
    8439100009,
    8439910000,
    8439990000,
    844331,
    844332,
    844339,
    8443911000,
    8443919100,
    844399,
    8481804000,
    8481806310,
    8481806320,
    8481807310,
    8481807320,
    8481807391,
    8481808110,
    8481808120,
    848180819,
    8481808501,
    8481808502,
    8481808507,
    8481809902,
    8481809907,
    852712,
    8527212001,
    8527215201,
    8527215901,
    8527215909,
    8527290001,
    8527921000,
    851771,
    8517790001,
    8541100001,
    8541100009,
    8541210000,
    8541290000,
    8541900000,
    8540910000,
    8540990000,
    8543400000,
    8543701000,
    8543705001,
    8543900000,
    8545110081,
    8545110082,
    8545190000,
    8709119000,
    8709900000,
    9001300000,
    9001402000,
    9001404100,
    9001502000,
    9001504100,
    3006103001,
    8207209000,
    8517140000,
    851779000,
    8523291503,
    8523293302,
    8523293303,
    8523293304,
    8523293306,
    8523293307,
    8523293903,
    8523293905,
    852352900,
    8525811100,
    8525821100,
    8525829101,
    8525831100,
    8525839101,
    8525891100,
    8525899101,
    8528624000,
    8528723002,
    8528723003,
    8528723009,
    854141000,
]