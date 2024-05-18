import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

const translateTexts = [
  {
    desc: "title 1",
    text: "自由實現"
  },
  {
    desc: "desc 1",
    text: "易於上手，兼具遊戲開發基本核心系統，不關心專案目錄、不關心遊戲業務邏輯、不關心讀表方式，全部自由打造。"
  },
  {
    desc: "title 2",
    text: "加快開發"
  },
  {
    desc: "desc 2",
    text: "一套框架輕鬆搞定，結合強大開源 YooAsset + HybridCLR，快速打造商業化的遊戲流程，並且協助研發團隊提升產品迭代效率，支持 Win, OSX, Android, iOS, WebGL。"
  },
  {
    desc: "title 3",
    text: "調用容易"
  },
  {
    desc: "desc 3",
    text: "高內聚低耦合 (插件化)，透過各模塊 API，能夠輕鬆取得各自管理的組件，提升可讀性、維護性。"
  },
];

const FeatureList = [
  {
    title: <Translate>{translateTexts[0].text}</Translate>,
    Svg: require('@site/static/img/index/flexibility.svg').default,
    description: (
      <>
        <Translate>{translateTexts[1].text}</Translate>
      </>
    ),
  },
  {
    title: <Translate>{translateTexts[2].text}</Translate>,
    Svg: require('@site/static/img/index/performance.svg').default,
    description: (
      <>
        <Translate>{translateTexts[3].text}</Translate>
      </>
    ),
  },
  {
    title: <Translate>{translateTexts[4].text}</Translate>,
    Svg: require('@site/static/img/index/easy.svg').default,
    description: (
      <>
        <Translate>{translateTexts[5].text}</Translate>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
