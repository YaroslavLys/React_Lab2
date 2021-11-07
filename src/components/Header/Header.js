import {LogoText, NavItem, Wrapper, Nav, LogoImage, NavWrapper, Search} from './Header.styles'
import {SearchOutlined} from '@ant-design/icons'
import Logo from "../../assets/logo.png"
import {Link} from "react-router-dom";


export function Header(props) {
    return (
        <Wrapper>
            <LogoText>Vase shop</LogoText>
            <Nav>
                <Link to="/" style={{textDecoration: 'none', color: 'black'}}><NavItem>Home</NavItem></Link>
                <Link to="/catalog" style={{textDecoration: 'none', color: 'black'}}><NavItem>Catalog</NavItem></Link>
                <Link to="/cart" style={{textDecoration: 'none', color: 'black'}}><NavItem>Cart</NavItem></Link>
            </Nav>
            <NavWrapper>
                {check(props.isHomePage)}
            </NavWrapper>

        </Wrapper>
    );
}

function check(isHomePage) {
    if (isHomePage) {
        return <LogoImage src={Logo}/>
    }
    return <div style={{display: 'flex', alignItems: 'center'}}>
        <Search id={"search_button"}/>
        <SearchOutlined />
    </div>
}

