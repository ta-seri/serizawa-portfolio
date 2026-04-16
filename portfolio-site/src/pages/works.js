export default function Works() {
    const works = {
      techBlogs: [
        { year: "2026", title: "NLP2026参加レポート：LLMの人間理解とPhysical AIから見る言語処理の広がり", url: "https://www.ariseanalytics.com/tech-info/20260327" },
        { year: "2025", title: "LLM評価の現実と対策：LLM as a Judge実践で学んだ課題解決法", url: "https://www.ariseanalytics.com/tech-info/20250923" },
        { year: "2025", title: "JSAI2025参加レポート：対話AIとPhysical AIの最前線を追う", url: "https://www.ariseanalytics.com/tech-info/20250613" },
        { year: "2025", title: "論文から実装へ：スクラッチ開発者のためのAIエージェント入門", url: "https://www.ariseanalytics.com/activities/report/20250121/" },
        { year: "2024", title: "【JSAI2024】「LLM エージェントの人間との対話における 反芻的返答の親近感向上効果」についてポスター発表しました", url: "https://www.ariseanalytics.com/activities/report/20240619/" },
        { year: "2023", title: "LLM時代に人は対話AIを信頼できるか？Human Agent Interactionの視点から考える", url: "https://www.ariseanalytics.com/activities/report/20230920-2/" },
        { year: "2023", title: "RAG (Retrieval Augmented Generation) を活用！LLMで外部データを参照する方法を解説", url: "https://www.ariseanalytics.com/activities/report/20230818-2/" },
      ],
      blogs: [
        { title: "Qiita", url: "https://qiita.com/t_serizawa" },
        { title: "Zenn", url: "https://zenn.dev/seri_datasci" },
      ],
      papers: [
        { year: "2024", title: "LLMエージェントの人間との対話における反芻的返答の親近感向上効果", url: "https://www.jstage.jst.go.jp/article/pjsai/JSAI2024/0/JSAI2024_3Xin255/_article/-char/ja" },
        { year: "2022", title: "Optimization of Convolutional Neural Network Using the Linearly Decreasing Weight Particle Swarm Optimization", url: "https://www.jstage.jst.go.jp/article/pjsai/JSAI2022/0/JSAI2022_2S4IS2b03/_article/-char/ja/" },
        { year: "2019", title: "Emotion Recognition by Convolutional Neural Network Based on EEG-Images Plotting Time Series Data", url: "https://ebooks.iospress.nl/volumearticle/52677" },
      ],
      competition: [
        { year: "2024", title: "旅行パッケージの成約率予測コンペ, SIGNATE, 72/1,123位 (銅メダル)", url: "https://user.competition.signate.jp/ja/competition/detail/?competition=17002dd84863499e90815a7c5ef2ee21" },
        { year: "2019", title: "AI創薬： 薬物動態パラメータ予測コンペ, SIGNATE, 17/699位 (銀メダル)", url: "https://user.competition.signate.jp/ja/competition/detail/?competition=252d4bf7dcb244d693979ac9cdd43fc3" },
      ],
      books: [
        { year: "2025", title: "AIと話そう！音声対話AIアプリの作り方", url: "https://techbookfest.org/product/mccChq68eRYX4kkHEEQb24?productVariantID=nzzs926HiCyHBWVTh94a8H" },
      ],
      speakers: [
        { year: "2025", title: "JSAI参加報告会~生成AIに注目して~【 ABEJA × ARISE analytics 】", url: "https://ariseanalytics.connpass.com/event/355827/" },
        { year: "2025", title: "AIエージェントとの対話を崩壊させない！長期対話に関する工夫を論文から探る at ARSE LLM勉強会", url: "https://ariseanalytics.connpass.com/event/346077/" },
        { year: "2024", title: "データアナリティクスセミナー in 岩手県立大学", url: "https://note.ariseanalytics.com/n/nf8b8cf6f7b26" },
      ],
      other: [
        { year: "2024~", title: "(運営) LLM勉強会", url: "https://connpass.com/user/ariseanalytics/open/" },
      ],
    };

    const WorkList = ({ items }) => (
      <ul className="mt-2 space-y-2">
        {items.map((work, index) => (
          <li key={index} className="flex gap-4">
            <span className="text-gray-500 shrink-0 w-12">{work.year}</span>
            <a href={work.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              {work.title}
            </a>
          </li>
        ))}
      </ul>
    );

    return (
      <div className="min-h-screen bg-gray-100 text-gray-900 p-8 flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl">
          <h1 className="text-3xl font-bold text-center">My Works</h1>

          <div className="mt-6 space-y-6">

            {/* 論文 */}
            <div>
              <h2 className="text-2xl font-semibold">Papers</h2>
              <WorkList items={works.papers} />
            </div>

            {/* 書籍 */}
            <div>
              <h2 className="text-2xl font-semibold">Books</h2>
              <WorkList items={works.books} />
            </div>

            {/* テックブログ */}
            <div>
              <h2 className="text-2xl font-semibold">Official Tech Blogs</h2>
              <WorkList items={works.techBlogs} />
            </div>

            {/* 登壇 */}
            <div>
              <h2 className="text-2xl font-semibold">Speakers</h2>
              <WorkList items={works.speakers} />
            </div>

            {/* Competiotion */}
            <div>
              <h2 className="text-2xl font-semibold">Competiotion</h2>
              <WorkList items={works.competition} />
            </div>

            {/* Blogs (カードデザイン) */}
            <div>
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

            {/* その他
            <div>
              <h2 className="text-2xl font-semibold">Others</h2>
              <WorkList items={works.other} />
            </div> */}
          </div>

          <div className="mt-6 text-center">
            <a href="/" className="px-4 py-2 bg-gray-500 text-white rounded-md">Back to Home</a>
          </div>
        </div>
      </div>
    );
  }
