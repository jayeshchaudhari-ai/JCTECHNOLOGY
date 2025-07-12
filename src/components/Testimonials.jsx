import { Box, Typography, Avatar, IconButton } from '@mui/material';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
import MemoryIcon from '@mui/icons-material/Memory';

const testimonials = [
  {
    name: 'Alice Johnson',
    text: 'JC Technology delivered our project on time with outstanding quality. Highly recommended!',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Michael Smith',
    text: 'Their team is creative, professional, and always available for support.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Sara Lee',
    text: 'The animations and UI they built for us are simply stunning!',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

const TechNodeOverlay = () => (
  <svg width="100%" height="100%" viewBox="0 0 260 180" fill="none" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
    <rect x="1" y="1" width="258" height="178" rx="16" stroke="#00bcd4" strokeWidth="2" opacity="0.18" />
    <circle cx="30" cy="30" r="4" fill="#00bcd4" opacity="0.18" />
    <circle cx="230" cy="150" r="3" fill="#ff9800" opacity="0.18" />
    <line x1="30" y1="30" x2="230" y2="150" stroke="#00bcd4" strokeWidth="1.5" opacity="0.12" />
  </svg>
);

const getTechIcon = (idx) => {
  if (idx % 2 === 0) return <WifiTetheringIcon sx={{ fontSize: 32, color: 'primary.main', filter: 'drop-shadow(0 2px 8px #00bcd488)' }} />;
  return <MemoryIcon sx={{ fontSize: 32, color: 'primary.main', filter: 'drop-shadow(0 2px 8px #00bcd488)' }} />;
};

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <Box sx={{ py: 8, textAlign: 'center', position: 'relative' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, color: 'primary.main', fontSize: { xs: '1.3rem', md: '2.125rem' }, fontFamily: 'Roboto Mono, monospace', letterSpacing: 1 }}>
        What Our Clients Say
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
        <IconButton onClick={prev}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5 }}
            style={{ minWidth: '100%' }}
          >
            <Box sx={{ p: { xs: 1, md: 4 }, bgcolor: 'white', borderRadius: 4, boxShadow: 3, minHeight: 180, maxWidth: { xs: 260, sm: 350 }, mx: 'auto', position: 'relative', background: 'linear-gradient(135deg, #e0f7fa 60%, #f5f6fa 100%)', overflow: 'hidden', border: '2px solid #00bcd4', boxShadow: '0 0 24px 2px #00bcd422' }}>
              <TechNodeOverlay />
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                style={{ position: 'absolute', top: -24, left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}
              >
                <FormatQuoteIcon sx={{ fontSize: { xs: 28, md: 40 }, color: 'secondary.main', filter: 'drop-shadow(0 2px 8px #00bcd488)' }} />
                {getTechIcon(index)}
              </motion.div>
              <Avatar src={testimonials[index].avatar} sx={{ width: { xs: 36, md: 56 }, height: { xs: 36, md: 56 }, mx: 'auto', mb: 2, boxShadow: '0 2px 12px #00bcd444', position: 'relative', zIndex: 2 }} />
              <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic', fontSize: { xs: '0.95rem', md: '1.25rem' }, color: 'primary.main', fontFamily: 'Roboto Mono, monospace', textShadow: '0 0 8px #00bcd4' }}>
                "{testimonials[index].text}"
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'secondary.main', fontSize: { xs: '0.95rem', md: '1.1rem' }, fontFamily: 'Roboto Mono, monospace' }}>
                {testimonials[index].name}
              </Typography>
            </Box>
          </motion.div>
        </AnimatePresence>
        <IconButton onClick={next}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Testimonials; 
