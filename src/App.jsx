import { useRef, useState, useEffect } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BuildIcon from '@mui/icons-material/Build';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import TimelineIcon from '@mui/icons-material/Timeline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function App() {
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const servicesRef = useRef(null);
  const techStackRef = useRef(null);
  const processRef = useRef(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Home');
  const [projectIndex, setProjectIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Move this up before projects array
  const personalFinanceImages = [
    '/images/personal-finance-1.png',
    '/images/personal-finance-2.png',
    '/images/personal-finance-3.png',
    '/images/personal-finance-4.png',
  ];

  const projects = [
    {
      title: 'Personal Finance Tracker',
      description: 'A desktop-based software to manage, visualize, and analyze your personal finances with advanced charts, budgeting, and security features.',
      image: personalFinanceImages[0],
      onLearnMore: () => {},
    },
    {
      title: 'Food Delivery Customer Website & App',
      description: 'A seamless food delivery platform for customers, available as both a website and mobile app. Real-time tracking, easy ordering, and secure payments. Live now at regalchoice.in!',
      image: '/images/RegalPalacecustomer.png',
      onLearnMore: () => window.open('https://regalchoice.in', '_blank'),
      livePreviewLink: 'https://regalchoice.in',
    },
    {
      title: 'Restaurant Management App',
      description: 'A comprehensive restaurant app to manage all operations: multi-page dashboard, promo codes, orders, dishes, add/edit banners, charges, and advanced analytics. Designed for efficiency and growth.',
      image: '/images/restaurant.png',
      onLearnMore: () => window.open('https://restaurant.regalchoice.in', '_blank'),
      livePreviewLink: 'https://restaurant.regalchoice.in',
    },
    {
      title: 'Sports Event Management Software',
      description: 'A robust sports event management system built with C programming, MySQL, Apache XAMPP, HTML, and CSS. Handles registrations, scheduling, results, and analytics for tournaments and leagues.',
      image: '/images/sems.png',
      onLearnMore: () => window.open('https://github.com/jayeshchaudhari-ai/Sports-Event-Management-System', '_blank'),
    },
    {
      title: 'Hotel Booking System',
      description: 'it is the hotel booking website for the guest to book rooms, tables, events, nearby tourist places, gallary, direction to hotel contact details, and more...',
      image: '/public/images/Hotel.png',
      onLearnMore: () => window.open('https://hotelbookingjalgaon.netlify.app', '_blank'),
      livePreviewLink: 'https://hotelbookingjalgaon.netlify.app',
    },
  ];

  const handleScroll = (ref, label) => {
    setDrawerOpen(false);
    setActive(label);
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Projects', ref: projectsRef },
    { label: 'Services', ref: servicesRef },
    { label: 'Process', ref: processRef },
    { label: 'Tech Stack', ref: techStackRef },
    { label: 'About', ref: testimonialsRef },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      // Set active nav based on scroll position
      const sections = [projectsRef, servicesRef, processRef, techStackRef, testimonialsRef];
      const offsets = sections.map(r => r.current ? r.current.getBoundingClientRect().top : Infinity);
      const idx = offsets.findIndex((top, i) => top > 0 && (i === 0 || offsets[i-1] <= 0));
      if (idx !== -1) setActive(navLinks[idx].label);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setProjectIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isMobile, projects.length]);

  return (
    <Box sx={{ bgcolor: '#f5f6fa', minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100vw', overflowX: 'hidden' }}>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ position: 'sticky', top: 0, zIndex: 1200 }}
      >
        <AppBar
          elevation={0}
          position="fixed"
          sx={{
            zIndex: 1200,
            background: 'rgba(25, 118, 210, 0.7)',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 4px 32px 0 #00bcd433',
            borderBottom: '2px solid',
            borderImage: 'linear-gradient(90deg, #00bcd4 0%, #ff9800 100%) 1',
            transition: 'background 0.4s, box-shadow 0.4s',
            
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                fontWeight: 'bold',
                letterSpacing: 2,
                background: 'linear-gradient(90deg,rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                textShadow: '0 2px 12px #00bcd444',
                userSelect: 'none',
              }}
            >
              JC Technology
            </Typography>
            {/* Desktop nav */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              {navLinks.map((link) => (
                <motion.div
                  key={link.label}
                  whileHover={{ scale: 1.1, color: '#00bcd4' }}
                  style={{ display: 'inline-block' }}
                >
                  <Button
                    color="inherit"
                    onClick={() => handleScroll(link.ref, link.label)}
                    sx={{
                      fontWeight: 'bold',
                      borderRadius: 6,
                      px: 2,
                      mx: 0.5,
                      background: active === link.label
                        ? 'linear-gradient(90deg, #00bcd4 0%, #ff9800 100%)'
                        : 'transparent',
                      color: active === link.label ? 'white' : '#fff',
                      boxShadow: active === link.label ? '0 0 16px 2px #00bcd488' : 'none',
                      transition: 'all 0.3s',
                      textShadow: active === link.label ? '0 2px 8px #00bcd488' : 'none',
                      '&:hover': {
                        background: 'linear-gradient(90deg, #ff9800 0%, #00bcd4 100%)',
                        color: '#fff',
                        boxShadow: '0 0 24px 4px #00bcd488',
                      },
                    }}
                  >
                    {link.label}
                  </Button>
                </motion.div>
              ))}
            </Box>
            {/* Mobile nav */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <List sx={{ minWidth: 180, background: 'linear-gradient(90deg, #00bcd4 0%, #ff9800 100%)', height: '100%' }}>
                  {navLinks.map((link) => (
                    <ListItem button key={link.label} onClick={() => handleScroll(link.ref, link.label)}>
                      <ListItemText
                        primary={link.label}
                        primaryTypographyProps={{
                          sx: {
                            fontWeight: 'bold',
                            color: active === link.label ? '#fff' : '#fff',
                            textShadow: active === link.label ? '0 2px 8px #00bcd488' : 'none',
                          },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </Box>
          </Toolbar>
        </AppBar>
      </motion.div>
      <Container sx={{ flex: 1, px: { xs: 1, sm: 2, md: 4 }, pt: { xs: '56px', md: '64px' }, position: 'relative', width: '100%', maxWidth: '100%!important', minWidth: '0!important', boxSizing: 'border-box' }}>
        {/* Techy SVG grid/circuit background for the whole page */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1920 1800"
          fill="none"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}
        >
          <defs>
            <linearGradient id="mainGridStroke" x1="0" y1="0" x2="1920" y2="1800" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00bcd4" stopOpacity="0.10" />
              <stop offset="1" stopColor="#ff9800" stopOpacity="0.08" />
            </linearGradient>
          </defs>
          {Array.from({ length: 25 }).map((_, i) => (
            <line
              key={`v-${i}`}
              x1={i * 80}
              y1="0"
              x2={i * 80}
              y2="1800"
              stroke="url(#mainGridStroke)"
              strokeWidth="1"
            />
          ))}
          {Array.from({ length: 24 }).map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={i * 75}
              x2="1920"
              y2={i * 75}
              stroke="url(#mainGridStroke)"
              strokeWidth="1"
            />
          ))}
        </svg>
        <Box ref={heroRef} id="hero" sx={{ width: '100%', minWidth: 0, boxSizing: 'border-box' }}>
          <Hero onContactClick={() => handleScroll(testimonialsRef, 'About')} />
        </Box>
        {/* Projects Section (now first) */}
        <Box ref={projectsRef} id="projects" sx={{
          py: { xs: 4, md: 8 },
          width: '100%',
          minWidth: 0,
          boxSizing: 'border-box',
          overflowX: 'hidden',
        }}>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 4, color: 'primary.main', textAlign: 'center', fontFamily: 'Roboto Mono, monospace', letterSpacing: 1 }}>
              Our Projects
            </Typography>
            {/* Mobile slider */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', justifyContent: 'center', width: '100%', position: 'relative', minHeight: 380 }}>
              <IconButton
                onClick={() => setProjectIndex((projectIndex - 1 + projects.length) % projects.length)}
                disabled={projects.length <= 1}
                sx={{ position: 'absolute', left: 0, zIndex: 2 }}
                aria-label="Previous project"
              >
                <ArrowBackIosNewIcon />
              </IconButton>
              <Box sx={{ width: '100%', maxWidth: 370, mx: 'auto' }}>
                <motion.div
                  key={projectIndex}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.5 }}
                >
                  <ProjectCard {...projects[projectIndex]} />
                </motion.div>
              </Box>
              <IconButton
                onClick={() => setProjectIndex((projectIndex + 1) % projects.length)}
                disabled={projects.length <= 1}
                sx={{ position: 'absolute', right: 0, zIndex: 2 }}
                aria-label="Next project"
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </Box>
            {/* Desktop grid */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                flexDirection: 'row',
                gap: 4,
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                maxWidth: '100vw',
                px: { xs: 1, sm: 2, md: 0 },
                boxSizing: 'border-box',
                mx: 'auto',
              }}
            >
              {projects.map((project, idx) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </Box>
          </motion.div>
        </Box>
        {/* Services Section */}
        <Box ref={servicesRef} id="services" sx={{ py: { xs: 4, md: 8 }, width: '100%', minWidth: 0, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ width: '100%' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 4, color: 'primary.main', textAlign: 'center', fontFamily: 'Roboto Mono, monospace', letterSpacing: 1 }}>
              Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 4, justifyContent: 'center', alignItems: 'stretch', width: '100%' }}>
              {[{
                icon: <BuildIcon sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />, title: 'Custom Software Development', desc: 'Web, desktop, and mobile solutions tailored to your business needs using the latest technologies.'
              }, {
                icon: <DesignServicesIcon sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />, title: 'UI/UX Design', desc: 'Modern, user-friendly interfaces and experiences that delight users and drive engagement.'
              }, {
                icon: <StorageIcon sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />, title: 'Backend & API Development', desc: 'Robust, scalable backend systems and RESTful APIs for seamless integration and performance.'
              }].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.18 }}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 32px 4px #00bcd444' }}
                  style={{ flex: 1, minWidth: 220, maxWidth: 340, margin: '0 auto', marginBottom: (idx < 2 ? 16 : 0) }}
                >
                  <Box sx={{ bgcolor: 'white', borderRadius: 4, boxShadow: 4, p: 3, background: 'linear-gradient(135deg, #e0f7fa 60%, #f5f6fa 100%)', border: '2px solid #00bcd4', boxShadow: '0 0 24px 2px #00bcd422', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                    {item.icon}
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: 'primary.main', textAlign: 'center' }}>{item.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>{item.desc}</Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Box>
        {/* Process Section */}
        <Box ref={processRef} id="process" sx={{ py: { xs: 4, md: 8 }, width: '100%', minWidth: 0, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ width: '100%' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 4, color: 'primary.main', textAlign: 'center', fontFamily: 'Roboto Mono, monospace', letterSpacing: 1 }}>
              My Process
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 4, justifyContent: 'center', alignItems: 'stretch', width: '100%' }}>
              {[{
                icon: <CheckCircleIcon sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />, title: '1. Discovery & Planning', desc: 'Understand your needs, define requirements, and plan the best solution.'
              }, {
                icon: <DesignServicesIcon sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />, title: '2. Design & Prototyping', desc: 'Create wireframes, UI/UX designs, and interactive prototypes for feedback.'
              }, {
                icon: <CodeIcon sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />, title: '3. Development', desc: 'Agile coding, regular updates, and transparent progress tracking.'
              }, {
                icon: <TimelineIcon sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />, title: '4. Testing & Launch', desc: 'Thorough QA, bug fixes, and a smooth launch with post-launch support.'
              }].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.18 }}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 32px 4px #00bcd444' }}
                  style={{ flex: 1, minWidth: 220, maxWidth: 340, margin: '0 auto', marginBottom: (idx < 3 ? 16 : 0) }}
                >
                  <Box sx={{ bgcolor: 'white', borderRadius: 4, boxShadow: 4, p: 3, background: 'linear-gradient(135deg, #e0f7fa 60%, #f5f6fa 100%)', border: '2px solid #00bcd4', boxShadow: '0 0 24px 2px #00bcd422', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                    {item.icon}
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: 'primary.main', textAlign: 'center' }}>{item.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>{item.desc}</Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Box>
        {/* Tech Stack Section */}
        <Box ref={techStackRef} id="techstack" sx={{ py: { xs: 4, md: 8 }, width: '100%', minWidth: 0, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ width: '100%' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 4, color: 'primary.main', textAlign: 'center', fontFamily: 'Roboto Mono, monospace', letterSpacing: 1 }}>
              Tech Stack
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
              {[{
                icon: <CodeIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />, title: 'MERN Stack', desc: 'MongoDB, Express, React, Node.js'
              }, {
                icon: <StorageIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />, title: 'SQL & NoSQL', desc: 'MySQL, MongoDB'
              }, {
                icon: <DesignServicesIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />, title: 'Frontend', desc: 'React, HTML, CSS, JS, MUI'
              }, {
                icon: <TimelineIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />, title: 'Tools', desc: 'Git, VS Code, Postman, XAMPP'
              }].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.15 }}
                  whileHover={{ scale: 1.07, boxShadow: '0 0 32px 4px #00bcd444' }}
                  style={{ minWidth: 120, maxWidth: 160, margin: '0 auto', marginBottom: 16 }}
                >
                  <Box sx={{ bgcolor: 'white', borderRadius: 4, boxShadow: 4, p: 2, border: '2px solid #00bcd4', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                    {item.icon}
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'primary.main', textAlign: 'center' }}>{item.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>{item.desc}</Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Box>
        {/* About Developer Section */}
        <Box ref={testimonialsRef} id="about" sx={{ py: { xs: 4, md: 8 }, width: '100%', minWidth: 0, boxSizing: 'border-box', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{
            bgcolor: 'white',
            borderRadius: 6,
            boxShadow: 6,
            background: 'linear-gradient(135deg, #e0f7fa 60%, #f5f6fa 100%)',
            border: '2px solid #00bcd4',
            boxShadow: '0 0 24px 2px #00bcd422',
            p: { xs: 3, md: 5 },
            maxWidth: 600,
            mx: 'auto',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}>
            {/* Contact Us heading and button */}
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 2, fontFamily: 'Roboto Mono, monospace', letterSpacing: 1 }}>
              Contact Us
            </Typography>
            <motion.div whileHover={{ scale: 1.08 }} style={{ width: '100%', marginBottom: 16 }}>
                
            </motion.div>
            {/* ...existing About content... */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
              <img src="/images/profile.jpg" alt="Jayesh Chaudhari" style={{ width: 100, height: 100, borderRadius: '50%', boxShadow: '0 2px 16px #00bcd422', border: '2px solid #e0f7fa', marginBottom: 12 }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main', fontFamily: 'Roboto Mono, monospace', letterSpacing: 1 }}>
                Jayesh Chaudhari
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'secondary.main', fontFamily: 'Roboto Mono, monospace' }}>
                Full Stack Developer | Computer Engineering aspirant
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary', fontFamily: 'Roboto Mono, monospace' }}>
              Expertise: MERN Stack, C, MySQL, Apache XAMPP, HTML, CSS<br/>
              Passionate about building modern, efficient, and user-friendly software solutions for web and desktop. Always learning, always coding!
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
              <Box sx={{ display: 'flex',  alignItems: 'center', bgcolor: 'linear-gradient(90deg, #00bcd4 0%, #ff9800 100%)', color: 'black', px: 2.5, py: 1, borderRadius: 99, fontWeight: 'bold', fontFamily: 'Roboto Mono, monospace', fontSize: '1.1rem', boxShadow: '0 2px 12px #00bcd444', gap: 1 }}>
                <span role="img" sx={{ fontSize: '1.2rem', color: 'white' }} aria-label="phone">📱</span>
                +91 8308881445
              </Box>
            </Box>
              <motion.div whileHover={{ scale: 1.08 }} style={{ width: '100%' }}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<EmailIcon />}
                  href="mailto:chaudharijayesh5757@gmail.com"
                  sx={{
                    fontWeight: 'bold',
                    borderRadius: 8,
                    px: 3,
                    py: 1.2,
                    fontFamily: 'Roboto Mono, monospace',
                    background: 'linear-gradient(90deg, #00bcd4 0%, #ff9800 100%)',
                    color: 'white',
                    boxShadow: '0 2px 12px #00bcd444',
                    my: 1,
                    '&:hover': {
                      background: 'linear-gradient(90deg, #ff9800 0%, #00bcd4 100%)',
                      color: '#fff',
                      boxShadow: '0 4px 24px #00bcd488',
                    },
                  }}
                >
                  chaudharijayesh5757@gmail.com
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.08 }} style={{ width: '100%' }}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<LinkedInIcon />}
                  href="https://www.linkedin.com/in/jayeshchaudhari5757"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    fontWeight: 'bold',
                    borderRadius: 8,
                    px: 3,
                    py: 1.2,
                    fontFamily: 'Roboto Mono, monospace',
                    background: 'linear-gradient(90deg, #00bcd4 0%, #ff9800 100%)',
                    color: 'white',
                    boxShadow: '0 2px 12px #00bcd444',
                    my: 1,
                    '&:hover': {
                      background: 'linear-gradient(90deg, #ff9800 0%, #00bcd4 100%)',
                      color: '#fff',
                      boxShadow: '0 4px 24px #00bcd488',
                    },
                  }}
                >
                  jayeshchaudhari5757
                </Button>
              </motion.div>
            </Box>
            <Typography variant="body2" sx={{ color: 'primary.main', fontFamily: 'Roboto Mono, monospace', fontStyle: 'italic' }}>
              "Let’s build something amazing together!"
            </Typography>
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
