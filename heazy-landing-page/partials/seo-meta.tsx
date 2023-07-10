import Head from 'next/head';
const Meta = (props: {
  title: string;
  desc: string;
  canonical: string;
  css: string;
  js: string;
}) => (
  <Head>
    <title></title>
    <meta name="description" content={props.desc} />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={props.title} />
    <meta name="og:description" property="og:description" content="" />
    <meta property="og:site_name" content={props.desc} />
    <meta property="og:url" content={props.canonical} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={props.title} />
    <meta name="twitter:description" content={props.desc} />
    <meta name="twitter:url" content={props.canonical} />
    <link rel="icon" type="image/png" href="/static/images/favicon.ico" />
    <link rel="apple-touch-icon" href="/static/images/favicon.ico" />
    <meta property="og:image" content="" />
    <meta name="twitter:image" content="" />
    <link rel="canonical" href={props.canonical} />
  </Head>
);
export default Meta;
