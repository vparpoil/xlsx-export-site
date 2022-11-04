import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from "@docusaurus/core/lib/client/exports/Link.js";

const FeatureList = [
    {
        title: 'Easy to Use',
        Svg: require('@site/static/img/undraw_data.svg').default,
        description: (
            <>
                This API has been designed to make it seamless to generate real Excel
                files for any user.
            </>
        ),
    },
    {
        title: 'Focus on What Matters',
        Svg: require('@site/static/img/undraw_programming.svg').default,
        description: (
            <>
                You don't have to re-invent the wheel and search through StackOverflow what's the best way to generate
                Excel files. Start now and don't waist time!
            </>
        ),
    },
    {
        title: 'We are listening to your requests',
        Svg: require('@site/static/img/undraw_active_support.svg').default,
        description: (
            <>
                The API is in constant evolution. Please contact us if your needs are not covered yet:
                <Link
                    className=""
                    to="https://github.com/vparpoil/xlsx-export-site/issues">
                    Github issues
                </Link>
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
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
