import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import { Link } from 'gatsby';

const Index = () => (
  <Layout>
    <section className="py-20">
      <div className="container mx-auto px-8 lg:flex items-center">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            想いをwebへ
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            お客様の「作りたい」を実現！
          </p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="features" className="">
      <div className="container mx-auto px-4 mb-20 text-center">
        <h2 className="text-3xl font-semibold">コードテラスでは、ホームページやwebサービスを制作しています</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">webページ制作</p>
              <p className="mt-4">
                会社個人問わず、ランディングページの制作やホームページ制作をしています。SEOを重視したサイト設計を行いつつ、お客様の「作りたい」ホームページを作ります。
              </p> 
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">webサービス開発</p>
              <p className="mt-4">
                ポイントシステムや出退勤アプリなど、社内webアプリや新規webサービスなどお客様の「作りたい」を実現します。
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <section id="achievement" className="mb-20">
      <h2 className="text-3xl font-semibold text-center mb-4">制作実績</h2>
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Card className="mb-8 text-center h-full">
              <a href="https://akiblog10.com/web-programming-sample/lp_3571016/" className="font-semibold text-xl mb-4 block">クレジットカード<br />ランキングLP</a>
              <StaticImage 
                alt="クレジットカードランキングLP"
                src="../images/achievement_credit-card-lp.png"
              />
            </Card>
          </div>
          <div>
          <Card className="mb-8 text-center h-full">
              <a href="http://ad-n.co.jp/video/" className="font-semibold text-xl mb-4 block">広告会社<br />動画制作LP</a>
              <StaticImage 
                alt="広告会社動画制作LP"
                src="../images/achievement_ad-n-video-lp.png"
              />
            </Card>
          </div>
          <div>
            <Card className="mb-8 text-center h-full">
              <a href="http://ad-n.co.jp/lop-lite/" className="font-semibold text-xl mb-4 block">広告会社<br />リスティング広告LP</a>
              <StaticImage 
                alt="広告会社リスティング広告LP"
                src="../images/achievement_ad-n-ads-lp.png"
              />
            </Card>
          </div>
          <div>
            <Card className="mb-8 text-center h-full">
              <a href="https://lcm-atelier.com" className="font-semibold text-xl mb-4 block">結婚式ムービー制作会社<br />ホームページ</a>
              <StaticImage 
                alt="結婚式ムービー制作会社HP"
                src="../images/achievement_lcm-atelier-hp.png"
              />
            </Card>
          </div>
          <div>
            <Card className="mb-8 text-center h-full">
              <a href="https://ourdictionary.net/" className="font-semibold text-xl mb-4 block">言語学習SNS<br />Our Dictionary</a>
              <StaticImage 
                alt="ourdictionary"
                src="../images/achievement_ourdictionary.png"
              />
            </Card>
          </div>
          <div>
            <Card className="mb-8 text-center h-full">
              <a href="https://setform.site/" className="font-semibold text-xl mb-4 block">簡単フォーム作成<br />Set Form</a>
              <StaticImage 
                alt="広告会社リスティング広告LP"
                src="../images/achievement_set-form.png"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
    <section id="solution" className="mb-20">
      <h2 className="text-3xl font-semibold text-center mb-4">制作の例</h2>
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <h3 className="text-xl font-semibold text-center mb-3">webサイト制作</h3>
            <ul className="list-inside list-disc">
              <li>個人ブログを制作したい</li>
              <li>Wordpressの独自のテンプレートを作りたい</li>
              <li>自社でニュースやコラムを更新できるコーポレートサイトを作りたい</li>
              <li>自社でECサイトを作成したい</li>
              <li>既存サイトの内部SEOを意識して再構築したい</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-center mb-3">webサービス</h3>
            <ul className="list-disc list-inside">
              <li>出退勤アプリを作成したい</li>
              <li>飲食店でポイントシステムを導入したい</li>
              <li>自社でニュースやコラムを更新できるコーポレートサイトを作りたい</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className="container mx-auto mb-20 py-6 bg-gray-200 rounded-lg text-center">
      <h3 className="text-2xl font-semibold mb-4">お問い合わせはこちら</h3>
      <Link to="/contact" className="mt-8">
        <Button size="xl">お問い合わせ</Button>
      </Link>
    </section>
  </Layout>
);

export default Index;
