import React, { useState } from 'react';
import { Radio } from 'lucide-react';

const LiveStreamScript: React.FC = () => {
  const [product, setProduct] = useState('');
  const [industry, setIndustry] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [scriptType, setScriptType] = useState('');
  const [keyFeatures, setKeyFeatures] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 处理表单提交逻辑
    console.log('Live Stream Script submitted:', { product, industry, productDescription, scriptType, keyFeatures });
  };

  const handleKeyFeatureChange = (feature: string) => {
    setKeyFeatures(prev => 
      prev.includes(feature) ? prev.filter(f => f !== feature) : [...prev, feature]
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Radio className="mr-2" /> 直播脚本
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">
            产品
          </label>
          <input
            type="text"
            id="product"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="示例: 剃须刀"
          />
        </div>
        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
            所属行业
          </label>
          <select
            id="industry"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">选择所属行业</option>
            <option value="3C及电器">3C及电器</option>
            <option value="美妆个护">美妆个护</option>
            <option value="食品饮料">食品饮料</option>
          </select>
        </div>
        <div>
          <label htmlFor="productDescription" className="block text-sm font-medium text-gray-700 mb-1">
            产品介绍
          </label>
          <textarea
            id="productDescription"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
            placeholder="示例: 三合一剃须刀，剃须不留渣！德国精工剃须刀"
            maxLength={100}
          ></textarea>
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
          <label className="block text-sm font-medium text-gray-700 mb-1">
            核心卖点
          </label>
          <div className="flex flex-wrap gap-2">
            {['多功能', '大马力', '鼻毛修剪器'].map(feature => (
              <button
                key={feature}
                type="button"
                onClick={() => handleKeyFeatureChange(feature)}
                className={`px-3 py-1 rounded-full text-sm ${
                  keyFeatures.includes(feature)
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {feature}
              </button>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
        >
          生成直播脚本
        </button>
      </form>
    </div>
  );
};

export default LiveStreamScript;