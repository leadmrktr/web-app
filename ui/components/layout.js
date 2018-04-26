import Header from "./header"

const layoutStyle = {
  margin: "0px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: '100vh',
}

const Layout = (props) => (
  <div style={layoutStyle} >
    <Header styles={props.styles || []} />
    {props.children}
  </div>
)

export default Layout