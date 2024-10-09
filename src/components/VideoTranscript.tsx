import React, { useState } from 'react';
import { FileText } from 'lucide-react';

const VideoTranscript: React.FC = () => {
  const [marketingTheme, setMarketingTheme] = useState('');
  const [contentScene, setContentScene] = useState('');
  const [scriptType, setScriptType] = useState('');
  const [videoTheme, setVideoTheme] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 处理表单提交逻辑
    console.log('Video Transcript submitted:', { marketingTheme, contentScene, scriptType, videoTheme });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <FileText className="mr-2" /> 视频逐字稿
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="marketingTheme" className="block text-sm font-medium text-gray-700 mb-1">
            营销主题/主体
          </label>
          <input
            type="text"
            id="marketingTheme"
            value={marketingTheme}
            onChange={(e) => setMarketingTheme(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="示例: 海上酒店"
            maxLength={30}
          />
        </div>
        <div>
          <label htmlFor="contentScene" className="block text-sm font-medium text-gray-700 mb-1">
            内容场景
          </label>
          <select
            id="contentScene"
            value={contentScene}
            onChange={(e) => setContentScene(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">选择内容场景</option>
            <option value="旅行">旅行</option>
            <option value="美食">美食</option>
            <option value="时尚">时尚</option>
          </select>
        </div>
        <div>
          <label htmlFor="scriptType" className="block text-sm font-medium text-gray-700 mb-1">
            脚本类型
          </label>
          <select
            id="scriptType"
            value={scriptType}
            onChange={(e) => setScriptType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">选择脚本类型</option>
            <option value="对话式">对话式</option>
            <option value="旁白式">旁白式</option>
            <option value="混合式">混合式</option>
          </select>
        </div>
        <div>
          <label htmlFor="videoTheme" className="block text-sm font-medium text-gray-700 mb-1">
            视频主题
          </label>
          <input
            type="text"
            id="videoTheme"
            value={videoTheme}
            onChange={(e) => setVideoTheme(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="示例: 试睡世界最危险的酒店，开业至今一差评，全靠一手绝活项目"
            maxLength={100}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
        >
          生成视频逐字稿
        </button>
      </form>
    </div>
  );
};

export default VideoTranscript;