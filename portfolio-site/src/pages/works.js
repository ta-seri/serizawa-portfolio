export default function Works() {
    const works = {
      techBlogs: [
        { title: "JSAI2025参加レポート：対話AIとPhysical AIの最前線を追う, 2025", url: "https://www.ariseanalytics.com/tech-info/20250613" },
        { title: "論文から実装へ：スクラッチ開発者のためのAIエージェント入門, 2025", url: "https://www.ariseanalytics.com/activities/report/20250121/" },
        { title: "【JSAI2024】「LLM エージェントの人間との対話における 反芻的返答の親近感向上効果」についてポスター発表しました, 2024", url: "https://www.ariseanalytics.com/activities/report/20240619/" },
        { title: "LLM時代に人は対話AIを信頼できるか？Human Agent Interactionの視点から考える, 2023", url: "https://www.ariseanalytics.com/activities/report/20230920-2/" },
        { title: "RAG (Retrieval Augmented Generation) を活用！LLMで外部データを参照する方法を解説, 2022", url: "https://www.ariseanalytics.com/activities/report/20230818-2/" },
      ],
      blogs: [
        { title: "Qiita", url: "https://qiita.com/t_serizawa" },
        { title: "Zenn", url: "https://zenn.dev/seri_datasci" },
      ],
      papers: [
        { title: "LLMエージェントの人間との対話における反芻的返答の親近感向上効果, 2024", url: "https://www.jstage.jst.go.jp/article/pjsai/JSAI2024/0/JSAI2024_3Xin255/_article/-char/ja" },
        { title: "Optimization of Convolutional Neural Network Using the Linearly Decreasing Weight Particle Swarm Optimization, 2022", url: "https://www.jstage.jst.go.jp/article/pjsai/JSAI2022/0/JSAI2022_2S4IS2b03/_article/-char/ja/" },
        { title: "Emotion Recognition by Convolutional Neural Network Based on EEG-Images Plotting Time Series Data, 2019", url: "https://ebooks.iospress.nl/volumearticle/52677" },
      ],
      competition: [
        { title: "SIGNATE (Expert)", url: "https://signate.jp/users/20983" },
      ],
      books: [
        { title: "AIと話そう！音声対話AIアプリの作り方, 2025", url: "https://techbookfest.org/product/mccChq68eRYX4kkHEEQb24?productVariantID=nzzs926HiCyHBWVTh94a8H" },
      ],
      speakers: [
        { title: "JSAI参加報告会~生成AIに注目して~【 ABEJA × ARISE analytics 】, 2025", url: "https://ariseanalytics.connpass.com/event/355827/"},
        { title: "AIエージェントとの対話を崩壊させない！長期対話に関する工夫を論文から探る at ARSE LLM勉強会, 2025", url: "https://ariseanalytics.connpass.com/event/346077/" },
        { title: "データアナリティクスセミナー in 岩手県立大学, 2024", url: "https://note.ariseanalytics.com/n/nf8b8cf6f7b26" },
      ],
      other: [
        { title: "(運営) LLM勉強会, 2024~", url: "https://connpass.com/user/ariseanalytics/open/" },
      ],
    };
  
    return (
      <div className="min-h-screen bg-gray-100 text-gray-900 p-8 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center">My Works</h1>
  
        <div className="mt-6 space-y-6">

          {/* 論文 */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Papers</h2>
            <ul className="mt-2 space-y-2">
              {works.papers.map((work, index) => (
                <li key={index}>
                  <a href={work.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    {work.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 書籍 */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Books</h2>
            <ul className="mt-2 space-y-2">
              {works.books.map((work, index) => (
                <li key={index}>
                  <a href={work.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    {work.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* テックブログ */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Official Tech Blogs</h2>
            <ul className="mt-2 space-y-2">
              {works.techBlogs.map((work, index) => (
                <li key={index}>
                  <a href={work.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    {work.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 登壇 */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Speakers</h2>
            <ul className="mt-2 space-y-2">
              {works.speakers.map((work, index) => (
                <li key={index}>
                  <a href={work.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    {work.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Blogs (カードデザイン) */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Tech Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              {works.blogs.map((work, index) => (
                <a
                  key={index}
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <h3 className="text-lg font-semibold text-gray-800">{work.title}</h3>
                </a>
              ))}
            </div>
          </div>

          {/* Competiotion (カードデザイン) */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Competiotion</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              {works.competition.map((work, index) => (
                <a
                  key={index}
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <h3 className="text-lg font-semibold text-gray-800">{work.title}</h3>
                </a>
              ))}
            </div>
          </div>

          {/* その他 */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Others</h2>
            <ul className="mt-2 space-y-2">
              {works.other.map((work, index) => (
                <li key={index}>
                  <a href={work.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    {work.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
  
        <div className="mt-6 text-center">
          <a href="/" className="px-4 py-2 bg-gray-500 text-white rounded-md">Back to Home</a>
        </div>
      </div>
    );
  }