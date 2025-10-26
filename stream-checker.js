// 定义需要检测的流媒体服务
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
  { name: 'Apple TV+', domain: 'apple.com', region: '美国' },
  { name: 'YouTube Music', domain: 'music.youtube.com', region: '美国' },
  { name: 'Spotify', domain: 'spotify.com', region: '全球' },
  { name: 'Apple Music', domain: 'music.apple.com', region: '全球' }
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
      // 进行 HTTP 请求以检测是否能访问
      const response = await $http.get(`https://${service.domain}`, { timeout: 10 });
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
  $notify('流媒体解锁检测结果', '', result.join('\n'));
})();
