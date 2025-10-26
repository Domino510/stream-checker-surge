const { getResponse } = require('surge-sdk');

// 定义需要检测的流媒体服务的 URL 或域名
const services = [
  { name: 'Netflix', domain: 'netflix.com', region: '美国' },
  { name: 'Disney+', domain: 'disneyplus.com', region: '美国' },
  { name: 'YouTube', domain: 'youtube.com', region: '日本' },
  { name: 'Hulu', domain: 'hulu.com', region: '美国' },
  { name: 'Amazon Prime Video', domain: 'primevideo.com', region: '美国' },
  { name: 'HBO Max', domain: 'hbomax.com', region: '美国' },
  { name: 'Peacock', domain: 'peacocktv.com', region: '美国' },
  { name: 'Vudu', domain: 'vudu.com', region: '美国' },
  { name: 'Paramount+', domain: 'paramountplus.com', region: '美国' },
  { name: 'Discovery+', domain: 'discoveryplus.com', region: '美国' },
  { name: 'BBC iPlayer', domain: 'bbc.co.uk', region: '英国' },
  { name: 'Apple TV+', domain: 'apple.com', region: '美国' }
];

// 获取当前节点
const getCurrentNode = () => {
  return $prefs.valueForKey('surge_node') || '未知节点';
}

// 请求检测每个流媒体服务
const checkStreamService = async () => {
  let result = [];
  for (let service of services) {
    try {
      const response = await getResponse(`https://${service.domain}`, { timeout: 10 });
      let node = getCurrentNode();
      result.push(`${service.name} 使用的是 ${node} 节点，当前区域: ${service.region}`);
    } catch (error) {
      result.push(`${service.name} 无法访问`);
    }
  }
  return result;
}

// 返回检测结果
(async () => {
  const result = await checkStreamService();
  return result.join('\n');
})();
