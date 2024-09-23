import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import React from 'react';

const About = () => {
  const styles = useStyles()
  return (
    <div id="About" className={styles.container}>
      <div>
        <Typography variant='h5'>About</Typography>
        <Typography variant='body1'>Hey there! I’m Pradeep Kumar, a Frontend Developer with over 2+ years of hands-on experience creating responsive and user-friendly web applications. I’m passionate about building sleek and dynamic interfaces that not only look great but also deliver a seamless user experience.

During my time at ZufiZ Technologies, I’ve had the opportunity to work on some really exciting projects. From developing Progressive Web Apps that boosted user retention by 60% to cutting search query response times in half, I love solving problems with efficient and scalable solutions. One of my favorite wins was reducing page load times by 90% through techniques like code-splitting and lazy loading, it’s amazing how small optimizations can make such a big impact!

I’m well-versed in React.js, Redux, JavaScript (ES6+), TypeScript, Material UI, and a bunch of other tools and technologies that help bring ideas to life. I also have some backend experience with Node.js and Express.js, which helps me create more integrated and full-featured applications.

I’m always eager to learn and stay on top of the latest trends in web development. Whether it's experimenting with new libraries or finding ways to boost productivity using AI tools, I’m constantly pushing myself to improve.

When I’m not coding, I’m probably exploring new technologies, trying to optimize something or tinkering with personal projects. I’m ready to take on new challenges and would love to connect with like-minded people who share my passion for building things that make a difference.</Typography>
      </div>
    </div>
  )
}

export default About

const useStyles = makeStyles({
  container: {
    padding:'100px 20px 0px 20px',
    height: "auto",
    width: '100%',
    display:'flex',
    justifyContent:'center',
    '& >div':{
      maxWidth:'740px',
      textAlign:'center',
      '& >h5':{
        marginBottom:'20px',
        fontWeight:'700',
        textAlign:'center'
      }
    }
  }
})