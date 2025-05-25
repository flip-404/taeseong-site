import type { GatsbySSR } from "gatsby"

export const onRenderBody: GatsbySSR["onRenderBody"] = ({ setHeadComponents }) => {
  setHeadComponents([
    <meta
      key="google-site-verification"
      name="google-site-verification"
      content="kVETuLAtpGK9FoCn5HOcpY8eNEp7XfBDVYYpM5eUGa4"
    />,
  ])
}