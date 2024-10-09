import React, { useState } from 'react';
import { Camera } from 'lucide-react';

const VideoShootingOutline: React.FC = () => {
  const [marketingTheme, setMarketingTheme] = useState('');
  const [videoType, setVideoType] = useState('');
  const [videoTheme, setVideoTheme] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 处理表单提交逻辑
    console.log('Video Shooting Outline submitted:', { marketingTheme, videoType, videoTheme });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Camera className="mr-2" /> 视频拍摄大纲
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
            placeholder="示例: 蛋白棒"
            maxLength={30}
          />
        </div>
        <div>
          <label htmlFor="videoType" className="block text-sm font-medium text-gray-700 mb-1">
            视频类型
          </label>
          <select
            id="videoType"
            value={videoType}
            onChange={(e) => setVideoType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">选择视频类型</option>
            <option value="搞笑类">搞笑类</option>
            <option value="教育类">教育类</option>
            <option value="产品展示">产品展示</option>
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
            placeholder="示例: 无蔗糖低热量，减脂期补充高蛋白"
            maxLength={100}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
        >
          生成视频拍摄大纲
        </button>
      </form>
    </div>
  );
};

export default VideoShootingOutline;