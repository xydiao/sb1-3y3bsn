import React, { useState } from 'react';
import { Building } from 'lucide-react';

const CorporateVideoScript: React.FC = () => {
  const [companyName, setCompanyName] = useState('');
  const [companyType, setCompanyType] = useState('');
  const [industry, setIndustry] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 处理表单提交逻辑
    console.log('Corporate Video Script submitted:', { companyName, companyType, industry, companyDescription });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Building className="mr-2" /> 企业宣传片脚本
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
            机构名称
          </label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="示例: 必优科技"
            maxLength={30}
          />
        </div>
        <div>
          <label htmlFor="companyType" className="block text-sm font-medium text-gray-700 mb-1">
            机构类型
          </label>
          <select
            id="companyType"
            value={companyType}
            onChange={(e) => setCompanyType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">选择机构类型</option>
            <option value="初创企业">初创企业</option>
            <option value="中小企业">中小企业</option>
            <option value="大型企业">大型企业</option>
          </select>
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
            <option value="人工智能">人工智能</option>
            <option value="电子商务">电子商务</option>
            <option value="金融科技">金融科技</option>
          </select>
        </div>
        <div>
          <label htmlFor="companyDescription" className="block text-sm font-medium text-gray-700 mb-1">
            机构愿景
          </label>
          <textarea
            id="companyDescription"
            value={companyDescription}
            onChange={(e) => setCompanyDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            placeholder="示例: 让内容创作更简单"
            maxLength={100}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
        >
          生成企业宣传片脚本
        </button>
      </form>
    </div>
  );
};

export default CorporateVideoScript;