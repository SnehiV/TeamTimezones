const timezones = [
  {timezone: 'Australian Central Daylight Savings Time',	offset: '10.5'},
  {timezone: 'Australian Central Standard Time',	offset: '9.5'},
  {timezone: 'Acre Time', offset: '-5'},
  {timezone: 'Atlantic Daylight Time', offset: '-3'},
  {timezone: 'Australian Eastern Daylight Savings Time',	offset: '11'},
  {timezone: 'Australian Eastern Standard Time',	offset: '10'},
  {timezone: 'Afghanistan Time',	offset: '4.5'},
  {timezone: 'Alaska Daylight Time', offset: '-8'},
  {timezone: 'Alaska Standard Time', offset: '-9'},
  {timezone: 'Amazon Summer Time (Brazil)', offset: '-3'},
  {timezone: 'Amazon Time (Brazil)', offset: '-4'},
  {timezone: 'Armenia Time',	offset: '4'},
  {timezone: 'Argentina Time', offset: '-3'},
  {timezone: 'Arabia Standard Time', offset: '3'},
  {timezone: 'Atlantic Standard Time', offset: '-4'},
  {timezone: 'Australian Western Standard Time', offset: '8'},
  {timezone: 'Azores Summer Time', offset: '0'},
  {timezone: 'Azores Standard Time', offset: '-1'},
  {timezone: 'Azerbaijan Time', offset: '4'},
  {timezone: 'Brunei Time', offset: '8'},
  {timezone: 'British Indian Ocean Time', offset: '6'},
  {timezone: 'Baker Island Time', offset: '-12'},
  {timezone: 'Bolivia Time', offset: '-4'},
  {timezone: 'Brasilia Summer Time', offset: '-2'},
  {timezone: 'Brasilia Time', offset: '-3'},
  {timezone: 'Bangladesh Standard Time', offset: '6'},
  {timezone: 'Bougainville Standard Time', offset: '11'},
  {timezone: 'British Summer Time', offset: '1'},
  {timezone: 'Bhutan Time', offset: '6'},
  {timezone: 'Central Africa Time', offset: '2'},
  {timezone: 'Cocos Islands Time', offset: '6.5'},
  {timezone: 'Central Daylight Time (North America)', offset: '-5'},
  {timezone: 'Cuba Daylight Time', offset: '-4'},
  {timezone: 'Central European Summer Time', offset: '2'},
  {timezone: 'Central European Time', offset: '1'},
  {timezone: 'Chatham Daylight Time', offset: '13.75'},
  {timezone: 'Chatham Standard Time', offset: '12.75'},
  {timezone: 'Choibalsan Standard Time', offset: '8'},
  {timezone: 'Choibalsan Summer Time', offset: '9'},
  {timezone: 'Chamorro Standard Time', offset: '10'},
  {timezone: 'Chuuk Time', offset: '10'},
  {timezone: 'Clipperton Island Standard Time', offset: '-8'},
  {timezone: 'Central Indonesia Time', offset: '8'},
  {timezone: 'Cook Island Time', offset: '-10'},
  {timezone: 'Chile Summer Time', offset: '-3'},
  {timezone: 'Chile Standard Time', offset: '-4'},
  {timezone: 'Colombia Summer Time', offset: '-4'},
  {timezone: 'Colombia Time', offset: '-5'},
  {timezone: 'Central Standard Time (North America)', offset: '-6'},
  {timezone: 'China Standard Time', offset: '8,'},
  {timezone: 'Central Standard Time (Australia)', offset: '9.5'},
  {timezone: 'Central Summer Time (Australia)', offset: '10.5'},
  {timezone: 'Cuba Standard Time', offset: '-5'},
  {timezone: 'China time', offset: '8'},
  {timezone: 'Cape Verde Time', offset: '-1'},
  {timezone: 'Central Western Standard Time (Australia)', offset: '8.75'},
  {timezone: 'Christmas Island Time', offset: '7'},
  {timezone: 'Davis Time', offset: '7'},
  {timezone: 'Dumont dUrville Time', offset: '10'},
  {timezone: 'Easter Island Summer Time', offset: '-5'},
  {timezone: 'Easter Island Standard Time', offset: '-6'},
  {timezone: 'East Africa Time', offset: '3'},
  {timezone: 'Eastern Caribbean Time', offset: '-4'},
  {timezone: 'Ecuador Time', offset: '-5'},
  {timezone: 'Eastern Daylight Time (North America)', offset: '-4'},
  {timezone: 'Eastern Summer Time (Australia)', offset: '11'},
  {timezone: 'Eastern European Summer Time', offset: '3'},
  {timezone: 'Eastern European Time', offset: '2'},
  {timezone: 'Eastern Greenland Summer Time',	offset: '0'},
  {timezone: 'Eastern Greenland Time', offset: '-1'},
  {timezone: 'Eastern Indonesian Time', offset: '9'},
  {timezone: 'Eastern Standard Time (North America)', offset: '-5'},
  {timezone: 'Eastern Standard Time (Australia)', offset: '10'},
  {timezone: 'Further-eastern European Time', offset: '3'},
  {timezone: 'Fiji Time', offset: '12'},
  {timezone: 'Falkland Islands Summer Time', offset: '-3'},
  {timezone: 'Falkland Islands Time', offset: '-4'},
  {timezone: 'Fernando de Noronha Time', offset: '-2'},
  {timezone: 'Galapagos Time', offset: '-6'},
  {timezone: 'Gambier Islands', offset: '-9'},
  {timezone: 'Georgia Standard Time', offset: '4'},
  {timezone: 'French Guiana Time', offset: '-3'},
  {timezone: 'Gilbert Island Time', offset: '12'},
  {timezone: 'Gambier Island Time', offset: '-9'},
  {timezone: 'Greenwich Mean Time', offset: '0'},
  {timezone: 'South Georgia and the South Sandwich Islands'  ,offset: '-2'},
  {timezone: 'Gulf Standard Time',offset: '4'},
  {timezone: 'Guyana Time', offset: '-4'},
  {timezone: 'Hawaii-Aleutian Daylight Time', offset: '-9'},
  {timezone: 'Hawaii-Aleutian Standard Time', offset: '-10'},
  {timezone: 'Hong Kong Time', offset: '8,'},
  {timezone: 'Heard and McDonald Islands Time',	offset: '5'},
  {timezone: 'Khovd Summer Time',	offset: '8'},
  {timezone: 'Khovd Standard Time',	offset: '7'},
  {timezone: 'Indochina Time', offset: '7'},
  {timezone: 'Israel Daylight Time', offset: '3'},
  {timezone: 'Indian Ocean Time',	offset: '3'},
  {timezone: 'Iran Daylight Time', offset: '4.5'},
  {timezone: 'Irkutsk Time', offset: '8'},
  {timezone: 'Iran Standard Time', offset: '3.5'},
  {timezone: 'Indian Standard Time', offset: '5.5'},
  {timezone: 'Irish Standard Time',	offset: '1'},
  {timezone: 'Israel Standard Time', offset: '2'},
  {timezone: 'Japan Standard Time',	offset: '9'},
  {timezone: 'Kyrgyzstan time',	offset: '6'},
  {timezone: 'Kosrae Time',	offset: ''},
  {timezone: 'Krasnoyarsk Time', offset: '7'},
  {timezone: 'Korea Standard Time',	offset: '9'},
  {timezone: 'Lord Howe Standard Time',	offset: '10.5'},
  {timezone: 'Lord Howe Summer Time',	offset: '11'},
  {timezone: 'Line Islands Time',	offset: '14'},
  {timezone: 'Magadan Time', offset: '12'},
  {timezone: 'Marquesas Islands Time', offset: '-9.5'},
  {timezone: 'Mawson Station Time',	offset: '5'},
  {timezone: 'Mountain Daylight Time (North America)', offset: '-6'},
  {timezone: 'Middle European Time Same zone as CET',	offset: '1'},
  {timezone: 'Middle European Summer Time Same zone as CEST',	offset: '2'},
  {timezone: 'Marshall Islands', offset: '12'},
  {timezone: 'Macquarie Island Station Time',	offset: '11'},
  {timezone: 'Marquesas Islands Time', offset: '-9.5'},
  {timezone: 'Myanmar Standard Time',	offset: '6.5'},
  {timezone: 'Moscow Time',	offset: '3'},
  {timezone: 'Malaysia Standard Time', offset: '8'},
  {timezone: 'Mountain Standard Time (North America)', offset: '-7'},
  {timezone: 'Mauritius Time', offset: '4'},
  {timezone: 'Maldives Time',	offset: '5'},
  {timezone: 'Malaysia Time',	offset: '8'},
  {timezone: 'New Caledonia Time', offset: '11'},
  {timezone: 'Newfoundland Daylight Time', offset: '-2.5'},
  {timezone: 'Norfolk Time', offset: '11'},
  {timezone: 'Nepal Time', offset: '5.75'},
  {timezone: 'Newfoundland Standard Time', offset: '-3.5'},
  {timezone: 'Newfoundland Time', offset: '-3.5'},
  {timezone: 'Niue Time', offset: "-11"},
  {timezone: 'New Zealand Daylight Time',	offset: '13'},
  {timezone: 'New Zealand Standard Time',	offset: '12'},
  {timezone: 'Omsk Time',	offset: '6'},
  {timezone: 'Oral Time',	offset: '5'},
  {timezone: 'Pacific Daylight Time (North America)', offset: '-7'},
  {timezone: 'Peru Time', offset: '-5'},
  {timezone: 'Kamchatka Time', offset: '12'},
  {timezone: 'Papua New Guinea Time',	offset: '0'},
  {timezone: 'Phoenix Island Time',	offset: '13'},
  {timezone: 'Pakistan Standard Time', offset: '5'},
  {timezone: 'Saint Pierre and Miquelon Daylight Time', offset: '-2'},
  {timezone: 'Saint Pierre and Miquelon Standard Time', offset: '-3'},
  {timezone: 'Pohnpei Standard Time',	offset: '11'},
  {timezone: 'Pacific Standard Time (North America)', offset: '-8'},
  {timezone: 'Philippine Standard Time', offset: '8'},
  {timezone: 'Paraguay Summer Time (South America)', offset: '-3'},
  {timezone: 'Paraguay Time (South America)', offset: '-4'},
  {timezone: 'Réunion Time', offset: '4'},
  {timezone: 'Rothera Research Station Time', offset: '-3'},
  {timezone: 'Sakhalin Island time', offset: '11'},
  {timezone: 'Samara Time',	offset: '4'},
  {timezone: 'South African Standard Time',	offset: '2'},
  {timezone: 'Solomon Islands Time', offset: '11'},
  {timezone: 'Seychelles Time',	offset: '4'},
  {timezone: 'Singapore Time', offset: '8'},
  {timezone: 'Sri Lanka Standard Time',	offset: '5.5'},
  {timezone: 'Srednekolymsk Time', offset: '11'},
  {timezone: 'Suriname Time', offset: '-3'},
  {timezone: 'Samoa Standard Time', offset: '-11'},
  {timezone: 'Singapore Standard Time',	offset: '8'},
  {timezone: 'Showa Station Time',	offset: '3'},
  {timezone: 'Tahiti Time', offset: '-10'},
  {timezone: 'Thailand Standard Time', offset: '7'},
  {timezone: 'Indian/Kerguelen', offset: '5'},
  {timezone: 'Tajikistan Time',	offset: '5'},
  {timezone: 'Tokelau Time', offset: '13'},
  {timezone: 'Timor Leste Time', offset: '9'},
  {timezone: 'Turkmenistan Time',	offset: '5'},
  {timezone: 'Turkey Time',	offset: '3'},
  {timezone: 'Tonga Time', offset: '13'},
  {timezone: 'Tuvalu Time',	offset: '12'},
  {timezone: 'Ulaanbaatar Summer Time',	offset: '9'},
  {timezone: 'Ulaanbaatar Standard Time',	offset: '8'},
  {timezone: 'Kaliningrad Time', offset: '2'},
  {timezone: 'Uruguay Summer Time', offset: '-2'},
  {timezone: 'Uruguay Standard Time', offset: '-3'},
  {timezone: 'Uzbekistan Time',	offset: '5'},
  {timezone: 'Venezuelan Standard Time', offset: '-4'},
  {timezone: 'Vladivostok Time', offset: '10'},
  {timezone: 'Volgograd Time', offset: '4'},
  {timezone: 'Vostok Station Time',	offset: '6'},
  {timezone: 'Vanuatu Time', offset: '11'},
  {timezone: 'Wake Island Time', offset: '12'},
  {timezone: 'West Africa Summer Time',	offset: '2'},
  {timezone: 'West Africa Time', offset: '1'},
  {timezone: 'Western European Summer Time', offset: '1'},
  {timezone: 'Western European Time', offset: '0'},
  {timezone: 'Western Indonesian Time', offset: '7'},
  {timezone: 'Western Standard Time', offset: '8'},
  {timezone: 'Yakutsk Time',	offset: '9'},
  {timezone: 'Yekaterinburg Time',	offset: '5'}
];

export default timezones;
