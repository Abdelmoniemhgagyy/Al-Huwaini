const items = [
    { id: 1,
      title:"كيف ننصر رسول الله",
      url: 'https://ia802906.us.archive.org/35/items/Abu_Ishaq_201303/1.mp3'
    },
    { id: 2,
      title:"الدفاع عن الصحابه ",
      url: 'https://ia802906.us.archive.org/35/items/Abu_Ishaq_201303/2.mp3'
    },
    { id: 3,
      title:" تلاوة سورة الفاتحة",
      url: 'https://ia600404.us.archive.org/23/items/alfirdwsiy1433_gmail_131_201802jh475787909-09087963532546678/001.mp3'
    },
    { id: 4,
      title:"كيف العبور",
      url: 'https://ia801300.us.archive.org/21/items/02KyfaAla3boor/02-kyfa-ala3boor.mp3'
    },
    { id: 5,
      title:"أستقم لأمر الله",
      url: 'https://ia600204.us.archive.org/2/items/hewini-10-4-2011/hewini-10-4-2011.mp3'
    },
    { id: 6,
      title:"إسلام عمرو بن العاص",
      url: 'https://ia601608.us.archive.org/12/items/alheweny.1/SAP_EL3AZAB_3ALA_MAN_SAB_ALASHAB_2B.ogv'
    },
    { id: 7,
      title:"رمضان لا مثيل له للشيخ أبى إسحاق الحوينى",
      url: 'https://ia800501.us.archive.org/19/items/rmadan-la-maseeel-lo-llhweny/rmadan-la-maseeel-lo-llhweny.mp3'
    },
    { id: 8,
      title:"ليلة في بيت النبي صلى الله عليه وسلم",
      url: 'https://archive.org/download/Al-Alheweny/001-.mp3'
    },
    { id: 9,
      title:"ابن تيمية",
      url: 'https://ia803406.us.archive.org/9/items/Al-Alheweny/002-.mp3'
    },
    { id: 10,
      title:"أبو سفيان وهرقل",
      url: 'https://archive.org/download/Al-Alheweny/003-12.mp3'
    },
    { id: 11,
      title:"اتقوا الله في الصحابة",
      url: 'https://archive.org/download/Al-Alheweny/004-.mp3'
    },
    { id: 12,
      title:"أثر الإسلام في الرجال",
      url: 'https://archive.org/download/Al-Alheweny/005-1.mp3'
    },
    { id: 13,
      title:"أثر الإسلام في الرجال 2",
      url: 'https://archive.org/download/Al-Alheweny/006-2.mp3'
    },
    { id: 14,
      title:"احذروا خطوات الشيطان",
      url: 'https://archive.org/download/Al-Alheweny/007-1.mp3'
    },
    { id: 15,
      title:"احــذروا خطوات الشيطان [2]",
      url: 'https://archive.org/download/Al-Alheweny/008-2.mp3'
    },
    { id: 15,
      title:"أحوال النفس",
      url: 'https://archive.org/download/Al-Alheweny/009-.mp3'
    },
    { id: 16,
      title:"اختيار الزوجة الصالحة",
      url: 'https://archive.org/download/Al-Alheweny/010-.mp3'
    },
    { id: 17,
      title:"آداب طالب العلم",
      url: 'http://archive.org/download/Al-Alheweny/011-1-2.mp3'
    },
    { id: 18,
      title:"أدب الخلاف",
      url: 'https://archive.org/download/Al-Alheweny/012-.mp3'
    },
    { id: 19,
      title:"إذا ضيعت الأمانة",
      url: 'https://archive.org/download/Al-Alheweny/013-.mp3'
    },
    { id: 20,
      title:"أسباب النصر والهزيمة",
      url: 'https://archive.org/download/Al-Alheweny/014-.mp3'
    },
    { id: 21,
      title:"استثمار الوقت عند العلماء",
      url: 'https://archive.org/download/Al-Alheweny/015-.mp3'
    },
    { id: 22,
      title:"استجيبو لله وللرسول",
      url: 'https://archive.org/download/Al-Alheweny/016-.mp3'
    },
    { id: 23,
      title:"اسم الله العزيز",
      url: 'https://archive.org/download/Al-Alheweny/017-.mp3'
    },
    { id: 24,
      title:"أسئلة وأجوبة [1] ",
      url: 'https://archive.org/download/Al-Alheweny/018-1.mp3'
    },
    { id: 25,
      title:"أسئلة وأجوبة [2]",
      url: 'https://archive.org/download/Al-Alheweny/019-2.mp3'
    },
    { id: 26,
      title:"أصحاب الأخدود [1، 2]",
      url: 'https://archive.org/download/Al-Alheweny/020-12.mp3'
    },
    { id: 27,
      title:"أصحاب الأضرحة",
      url: 'https://ia903406.us.archive.org/9/items/Al-Alheweny/021-.mp3'
    },
    { id: 28,
      title:"أصحاب الغار 1",
      url: 'https://ia803406.us.archive.org/9/items/Al-Alheweny/022-1.mp3'
    },
    { id: 29,
      title:"أصحاب الغار 2",
      url: 'https://ia903406.us.archive.org/9/items/Al-Alheweny/023-2.mp3'
    },
    { id: 30,
      title:"أصحاب الغار 3",
      url: 'https://ia803406.us.archive.org/9/items/Al-Alheweny/024-3.mp3'
    },
    { id: 31,
      title:"اعتداءات يتصدى لها",
      url: 'https://ia803406.us.archive.org/9/items/Al-Alheweny/025-.mp3'
    },
    { id: 32,
      title:"الابتلاء",
      url: 'https://ia803406.us.archive.org/9/items/Al-Alheweny/026-.mp3'
    },
    { id: 33,
      title:"الأحداث وتبلد الإحساس",
      url: 'https://ia803406.us.archive.org/9/items/Al-Alheweny/027-.mp3'
    }

    // { id: 16,
    //   title:"",
    //   url: ''
    // },
//http://www.islamic-tape.com/2013/11/lessons-Lectures-Speeches-mp3-sheikh-Abu-Ishaq-Al-Alheweny.html
]
export default items
