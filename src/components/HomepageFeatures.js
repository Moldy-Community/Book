import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Moldy is designed for a Easy use with commands a beautiful documentation a beautifull error output command details etc
      </>
    ),
  },
  {
    title: 'Fast as ⚡',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Moldy is very Fast because is provide by Pure Golang and pure golang libs 
      </>
    ),
  },
  {
    title: 'Ultimate technologies',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Use the best standards and the new libs and framework most used in the world and the best developer enviroment :D
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
