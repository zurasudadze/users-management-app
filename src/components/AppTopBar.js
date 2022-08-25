import {AppBar, styled, Toolbar, Typography} from "@mui/material"
import {Link} from "react-router-dom"

const LinkStyled = styled(Link)({
  color: "#fff",
  textDecoration: "none"
})

const ToolbarStyled = styled(Toolbar)({
  backgroundColor: "#fff"
})

const TitleStyled = styled(Typography)({
  flexGrow: 1,
  color: "#000",
})
const AppTopBar = ({title}) => (
  <AppBar>
    <ToolbarStyled>
      <LinkStyled to="/">
        <TitleStyled variant="h6" component="div">
          {title}
        </TitleStyled>
      </LinkStyled>
    </ToolbarStyled>
  </AppBar>
)

export default AppTopBar
