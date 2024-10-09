import React, { useState } from 'react';
import { Car, FileText, Send, Video, Type, Scissors, Camera, Film, Tv, Radio, Lightbulb, Building } from 'lucide-react';
import StoryboardScript from './components/StoryboardScript';
import ShootingScript from './components/ShootingScript';
import CorporateVideoScript from './components/CorporateVideoScript';
import VideoShootingOutline from './components/VideoShootingOutline';
import VideoMarketingIdeas from './components/VideoMarketingIdeas';
import VideoTranscript from './components/VideoTranscript';
import LiveStreamScript from './components/LiveStreamScript';

function App() {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'storyboard':
        return <StoryboardScript />;
      case 'shooting':
        return <ShootingScript />;
      case 'corporate':
        return <CorporateVideoScript />;
      case 'outline':
        return <VideoShootingOutline />;
      case 'marketing':
        return <VideoMarketingIdeas />;
      case 'transcript':
        return <VideoTranscript />;
      case 'livestream':
        return <LiveStreamScript />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">墨智云图园区运营项目</h1>
        </div>
      </header>

      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-600 flex items-center justify-center">
            <Car className="mr-2" /> AI视频文案生成平台
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              onClick={() => setActiveComponent('storyboard')}
              className="flex items-center justify-center p-4 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200 transition duration-200"
            >
              <FileText className="mr-2" /> 分镜脚本
            </button>
            <button
              onClick={() => setActiveComponent('shooting')}
              className="flex items-center justify-center p-4 bg-green-100 text-green-600 rounded-md hover:bg-green-200 transition duration-200"
            >
              <Video className="mr-2" /> 拍摄剧本
            </button>
            <button
              onClick={() => setActiveComponent('corporate')}
              className="flex items-center justify-center p-4 bg-yellow-100 text-yellow-600 rounded-md hover:bg-yellow-200 transition duration-200"
            >
              <Building className="mr-2" /> 企业宣传片脚本
            </button>
            <button
              onClick={() => setActiveComponent('outline')}
              className="flex items-center justify-center p-4 bg-purple-100 text-purple-600 rounded-md hover:bg-purple-200 transition duration-200"
            >
              <Camera className="mr-2" /> 视频拍摄大纲
            </button>
            <button
              onClick={() => setActiveComponent('marketing')}
              className="flex items-center justify-center p-4 bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition duration-200"
            >
              <Lightbulb className="mr-2" /> 视频营销灵感
            </button>
            <button
              onClick={() => setActiveComponent('transcript')}
              className="flex items-center justify-center p-4 bg-indigo-100 text-indigo-600 rounded-md hover:bg-indigo-200 transition duration-200"
            >
              <Type className="mr-2" /> 视频逐字稿
            </button>
            <button
              onClick={() => setActiveComponent('livestream')}
              className="flex items-center justify-center p-4 bg-pink-100 text-pink-600 rounded-md hover:bg-pink-200 transition duration-200"
            >
              <Radio className="mr-2" /> 直播脚本
            </button>
          </div>
          {renderComponent()}
        </div>
      </div>

      <footer className="bg-gray-200 py-4 text-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} 墨智云图（杭州）科技有限公司 版权所有
        </p>
      </footer>
    </div>
  );
}

export default App;