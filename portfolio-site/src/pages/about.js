import Image from 'next/image';
import Link from 'next/link';

export default function About() {
    const experiences = [
      { year: "2022 - 現在", role: "データサイエンティスト・AIエンジニア @ ARISE analytics" },
      { year: "2021 - 2022", role: "AIエンジニア @ Welmo" },
      { year: "2020 - 2021", role: "SREエンジニア @ 富士通クラウドテクノロジーズ" },
      { year: "2018 - 2020", role: "岩手県立大学大学院ソフトウェア情報学研究科 修士" },
      { year: "2016 - 2018", role: "岩手県立大学ソフトウェア情報学部(編入) 学士" },
      { year: "2014 - 2016", role: "金沢工業大学工学部ロボティクス学科" },
    ];
  
    const techStack = [
      "Python", "Next.js", "Tailwind CSS", "C", "アセンブリ", "Keras", "Pytorch", "PySpark", "LangChain", "Docker", "Azure",
    ];

    const usedData = [
        "音声認識", "画像認識", "自然言語処理", "LLM fine-tuning・RAG", "大規模テーブルデータ", "生存時間分析", "効果検証",
    ]
  
    return (
      <div className="min-h-screen bg-gray-100 text-gray-900 p-8">
        <h1 className="text-3xl font-bold text-center">About Me</h1>

        <div className="flex justify-center mt-6 space-x-4">
          <Image src="/serizawa.jpg" width={150} height={150} className="rounded-full" alt="Profile 1" />
          <Image src="/seri_datasci.jpg" width={150} height={150} className="rounded-full" alt="Profile 2" />
        </div>

        {/* 簡単な自己紹介 */}
        <div className="mt-6 bg-white shadow-md rounded-lg p-6 max-w-2xl w-full text-center mx-auto">
            <p className="text-lg leading-relaxed">
                元々ロボットに興味があり，中学・高校・大学とロボコンに出場．ロボット制作過程で頭脳となるAIに興味が湧き，大学3年次～大学院では機械学習関連技術について研究．
                就職後もAIやデータ分析に関する業務を中心に従事．現在は生成AIを活用した対話システムやHuman Agent Interaction (HAI) に関心あり．
                また，メイン業務と並行してDevRelと呼ばれるような技術広報活動にも取り組み，勉強会などを開催している．
            </p>
        </div>
  
        {/* 経歴セクション */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">経歴</h2>
          <ul className="mt-2 space-y-2">
            {experiences.map((exp, index) => (
              <li key={index} className="bg-white p-4 rounded-lg shadow">
                <span className="text-gray-600 font-medium">{exp.year}</span>
                <p className="text-lg font-semibold">{exp.role}</p>
              </li>
            ))}
          </ul>
        </div>
  
        {/* 技術スタックセクション */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">技術スタック</h2>
          <div className="mt-2 flex flex-wrap gap-3">
            {techStack.map((tech, index) => (
              <span key={index} className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 分析経験セクション */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">データ分析・AI関連経験領域</h2>
          <div className="mt-2 flex flex-wrap gap-3">
            {usedData.map((tech, index) => (
              <span key={index} className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
  
        <div className="mt-6 text-center">
          <a href="/" className="px-4 py-2 bg-gray-500 text-white rounded-md">Back to Home</a>
        </div>
      </div>
    );
}
