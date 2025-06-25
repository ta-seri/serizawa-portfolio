import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Head>
        <title>Serizawa's Portfolio</title>
      </Head>

      <main className="container mx-auto p-8 text-center">
        <h2 className="text-3xl font-bold">Welcome to Serizawa's Portfolio</h2>
        <p className="text-lg text-gray-600 mt-2">芹澤龍生 / Data Scientist, AI Engineer</p>

        <div className="flex justify-center mt-6 space-x-4">
          <Image src="/serizawa.jpg" width={150} height={150} className="rounded-full" alt="Profile 1" />
          <Image src="/seri_datasci.jpg" width={150} height={150} className="rounded-full" alt="Profile 2" />
        </div>
        
        <p className="mt-4 text-center text-lg">
          データサイエンティスト・AIエンジニアとして，機械学習やLLMを活用した分析・開発に取り組んでいます．また，最近は DevRelと呼ばれるような技術広報活動にも取り組んでいます．
          業務外では，LLMを活用したAIエージェントやHuman Agent Interaction (HAI)，Physical AIに興味があります．
        </p>
        <p className="mt-4 text-center text-lg">
          I work on development using machine learning and generative AI. I am also involved in DevRel activities. Outside of work, I am interested in AI agents, Human Agent Interaction (HAI) using LLM and Physical AI.
        </p>

        <div className="mt-6 mb-6">
          <Link href="/about" className="px-4 py-2 bg-blue-500 text-white rounded-md">More About Me</Link>
        </div>

        <div className="flex space-x-6 justify-center">
          <a
              href="https://x.com/seri_datasci"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-700 text-3xl"
          >
              <FaXTwitter />
          </a>
          <a
              href="https://www.linkedin.com/in/tatsuki-serizawa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800 text-3xl"
          >
              <FaLinkedin />
          </a>
          <a
              href="https://github.com/TatsukiSerizawa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-600 text-3xl"
          >
              <FaGithub />
          </a>
        </div>
      </main>

      <footer className="p-4 bg-white text-center text-gray-600">
        © 2025 My Portfolio
      </footer>
    </div>
  );
}