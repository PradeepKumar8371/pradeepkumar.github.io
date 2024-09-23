import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Link } from "react-scroll";
import Resume from '../s.pradeepkumar.pdf'
import Avatar from '../assets/3d.jpg'

const Header = () => {
    const styles = useStyles()
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navItems = ['Home', 'About', 'Projects', 'Contact'];

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    console.log('mobileOpen', mobileOpen)

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2, color: "#007bff", fontWeight: '700' }}>
                Portfolio
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <Link onClick={() => setMobileOpen(false)} to={item} spy={true} smooth={true}>
                        <ListItem key={item} disablePadding>
                            <ListItemButton sx={{ textAlign: 'center', color: item === 'Home' ? '#007bff' : 'black' }}>
                                <Typography className={styles.menuItems}>{item}</Typography>
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Box>
    );
    return (
        <div id='Home' className={styles.container}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar component="nav" sx={{ backgroundColor: 'white' }}>
                    <Toolbar>
                        <IconButton
                            color="black"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', my: 2, color: "#007bff", fontWeight: '700' } }}
                        >
                            Portfolio
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item) => (
                                <Button key={item} sx={{ color: item === 'Home' ? '#007bff' : 'black' }}>
                                    <Link to={item} spy={true} smooth={true}>
                                        <Typography className={styles.menuItems}>{item}</Typography>
                                    </Link>
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
                <nav>
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </nav>
            </Box>
            <div className={styles.contentContainer}>
                <div className={styles.nameAndDetailContainer}>
                    <div>
                        <Typography variant='h2' > Front-End React<br />Developer</Typography>
                        <Typography variant='body1' marginTop='10px'>Hi, I'm Pradeep Kumar. A Passionate Front-End React Developer</Typography>
                        <a href={Resume} download>
                            <Button variant="outlined">Download CV</Button>
                        </a>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img className={styles.avatar} src={Avatar} />
                </div>
            </div>
        </div>
    )
}

export default Header

const useStyles = makeStyles({
    container: {
        width: '100%',
        '@media (min-width: 769px)': {
            height: "100vh",
        },
    },
    subContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    menuItems: {
        fontSize: '18px !important',
        fontWeight: '700 !important',
        textTransform: 'capitalize !important'
    },
    contentContainer: {
        maxWidth: '1400px',
        margin: 'auto !important',
        '@media (min-width: 769px)': {
            height: "100vh",
        },
        padding: '76px 20px 20px 20px',
        display: "flex",
        justifyContent: 'space-around',
        // gridTemplateColumns: "100%",
        '@media (max-width: 546px)': {
            display: "grid !important",
            gridTemplateColumns: "100%",
        },
        '@media (max-width: 769px)': {
            paddingTop: '100px'
        },
    },
    avatar: {
        maxWidth: '100%',
        height: 'auto'
    },
    nameAndDetailContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '@media (max-width: 769px)': {
            height: '350px'
        },
        width: 'auto',
        '& >div': {
            '@media (min-width: 1023px)': {
                padding: '30px',
            },
            '& >h2': {
                '@media (max-width: 1023px)': {
                    fontSize: '50px',
                },
                '@media (max-width: 600px)': {
                    fontSize: '40px',
                },
            },
            '& >a': {
                '& >button': {
                    color: "#007bff",
                    margin: '10px 0',
                    borderRadius: '20px',
                    fontSize: '15px',
                    fontWeight: '600'
                },
                '& >button:hover': {
                    backgroundColor: '#007bff',
                    color: 'white'
                }
            }
        }
    }

})