{\rtf1\ansi\ansicpg936\cocoartf2865
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // \uc0\u23450 \u20041 \u38656 \u35201 \u26816 \u27979 \u30340 \u27969 \u23186 \u20307 \u26381 \u21153 \u30340  URL \u25110 \u22495 \u21517 \
const services = [\
  \{ name: 'Netflix', domain: 'netflix.com', region: '\uc0\u32654 \u22269 ' \},\
  \{ name: 'Disney+', domain: 'disneyplus.com', region: '\uc0\u32654 \u22269 ' \},\
  \{ name: 'YouTube', domain: 'youtube.com', region: '\uc0\u26085 \u26412 ' \},\
  \{ name: 'Hulu', domain: 'hulu.com', region: '\uc0\u32654 \u22269 ' \},\
  \{ name: 'Amazon Prime Video', domain: 'primevideo.com', region: '\uc0\u32654 \u22269 ' \},\
  \{ name: 'HBO Max', domain: 'hbomax.com', region: '\uc0\u32654 \u22269 ' \},\
  \{ name: 'Peacock', domain: 'peacocktv.com', region: '\uc0\u32654 \u22269 ' \},\
  \{ name: 'Vudu', domain: 'vudu.com', region: '\uc0\u32654 \u22269 ' \},\
  \{ name: 'Paramount+', domain: 'paramountplus.com', region: '\uc0\u32654 \u22269 ' \},\
  \{ name: 'Discovery+', domain: 'discoveryplus.com', region: '\uc0\u32654 \u22269 ' \},\
  \{ name: 'BBC iPlayer', domain: 'bbc.co.uk', region: '\uc0\u33521 \u22269 ' \},\
  \{ name: 'Apple TV+', domain: 'apple.com', region: '\uc0\u32654 \u22269 ' \}\
];\
\
// \uc0\u33719 \u21462 \u24403 \u21069 \u33410 \u28857 \
const getCurrentNode = () => \{\
  return $prefs.valueForKey('surge_node') || '\uc0\u26410 \u30693 \u33410 \u28857 ';\
\}\
\
// \uc0\u35831 \u27714 \u26816 \u27979 \u27599 \u20010 \u27969 \u23186 \u20307 \u26381 \u21153 \
const checkStreamService = async () => \{\
  let result = [];\
  for (let service of services) \{\
    try \{\
      const response = await $http.get(`https://$\{service.domain\}`);\
      let node = getCurrentNode();\
      if (response.status === 200) \{\
        result.push(`$\{service.name\} \uc0\u20351 \u29992 \u30340 \u26159  $\{node\} \u33410 \u28857 \u65292 \u24403 \u21069 \u21306 \u22495 : $\{service.region\}`);\
      \} else \{\
        result.push(`$\{service.name\} \uc0\u26080 \u27861 \u35775 \u38382 `);\
      \}\
    \} catch (error) \{\
      result.push(`$\{service.name\} \uc0\u26080 \u27861 \u35775 \u38382 `);\
    \}\
  \}\
  return result;\
\}\
\
// \uc0\u36820 \u22238 \u26816 \u27979 \u32467 \u26524 \
(async () => \{\
  const result = await checkStreamService();\
  $notification.post("\uc0\u27969 \u23186 \u20307 \u26816 \u27979 ", "\u26816 \u27979 \u23436 \u25104 ", result.join("\\n"));\
\})();\
}
