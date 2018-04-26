import Head from 'next/head'

const Header = (props) => (
  <div>
    <Head>
      <title>{props.title ? prop.title : "Lead Mrktr"}</title>
      {props.styles.map((value, index) => {
        return (
          <link href={`/static/css/${value}.css`} rel="stylesheet" key={value} />
        )
      })}

      <link href={`/static/css/main.css`} rel="stylesheet" />
    </Head>
  </div>
)

export default Header
