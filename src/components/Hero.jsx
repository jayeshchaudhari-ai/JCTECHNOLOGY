import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    x: [0, 10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'easeInOut',
    },
  },
};

const TechGrid = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 1440 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
  >
    <defs>
      <linearGradient id="gridStroke" x1="0" y1="0" x2="1440" y2="400" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00bcd4" stopOpacity="0.18" />
        <stop offset="1" stopColor="#ff9800" stopOpacity="0.12" />
      </linearGradient>
    </defs>
    {/* Vertical lines */}
    {Array.from({ length: 15 }).map((_, i) => (
      <line
        key={`v-${i}`}
        x1={i * 96}
        y1="0"
        x2={i * 96}
        y2="400"
        stroke="url(#gridStroke)"
        strokeWidth="1"
      />
    ))}
    {/* Horizontal lines */}
    {Array.from({ length: 9 }).map((_, i) => (
      <line
        key={`h-${i}`}
        x1="0"
        y1={i * 50}
        x2="1440"
        y2={i * 50}
        stroke="url(#gridStroke)"
        strokeWidth="1"
      />
    ))}
    {/* Animated circuit dots */}
    <motion.circle
      cx="200"
      cy="100"
      r="6"
      fill="#00bcd4"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.circle
      cx="900"
      cy="300"
      r="5"
      fill="#ff9800"
      animate={{ opacity: [1, 0.5, 1] }}
      transition={{ duration: 2.5, repeat: Infinity }}
    />
    <motion.circle
      cx="1200"
      cy="80"
      r="4"
      fill="#00bcd4"
      animate={{ opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 3, repeat: Infinity }}
    />
  </svg>
);

const Hero = ({ onContactClick }) => (
  <Box
    sx={{
      position: 'relative',
      minHeight: { xs: '55vh', md: '60vh' },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(120deg, #1976d2 0%, #ff9800 50%, #00bcd4 100%)',
      color: 'white',
      borderRadius: { xs: 2, md: 6 },
      boxShadow: 6,
      overflow: 'hidden',
      mt: { xs: 3, md: 3 },
      mb: { xs: 3, md: 6 },
      px: { xs: 1, sm: 2, md: 0 },
      py: { xs: 2, md: 0 },
    }}
  >
    {/* Techy SVG grid/circuit background */}
    <TechGrid />
    {/* Animated floating shapes */}
    <motion.div
      variants={floatingVariants}
      animate="animate"
      style={{
        position: 'absolute',
        top: 20,
        left: 20,
        width: 40,
        height: 40,
        background: 'linear-gradient(135deg, #ff9800 0%, #00bcd4 100%)',
        borderRadius: '50%',
        filter: 'blur(2px)',
        opacity: 0.9,
        zIndex: 1,
      }}
    />
    <motion.div
      variants={floatingVariants}
      animate="animate"
      style={{
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 60,
        height: 60,
        background: 'linear-gradient(135deg, #1976d2 0%, #00bcd4 100%)',
        borderRadius: '50%',
        filter: 'blur(3px)',
        opacity: 0.9,
        zIndex: 1,
      }}
    />
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1 }}
      style={{ width: '100%', textAlign: 'center', position: 'relative', zIndex: 2 }}
    >
      <Typography variant="h2" sx={{
        fontWeight: 900,
        mb: 2,
        letterSpacing: 2,
        fontSize: { xs: '1.3rem', sm: '2.5rem', md: '3.75rem' },
        textShadow: '0 0 16px #00bcd4, 0 4px 32px #0006',
        fontFamily: 'Roboto Mono, monospace',
        textTransform: 'uppercase',
        wordBreak: 'break-word',
        whiteSpace: 'normal',
        textAlign: 'center',
        px: { xs: 1, sm: 0 },
      }}>
        JC Technology
      </Typography>
      <Typography variant="h5" sx={{ mb: 4, fontWeight: 500, fontSize: { xs: '0.95rem', sm: '1.3rem', md: '2.125rem' }, textShadow: '0 2px 12px #0004', fontFamily: 'Roboto Mono, monospace', wordBreak: 'break-word', whiteSpace: 'normal', textAlign: 'center', px: { xs: 1, sm: 0 } }}>
        Outstanding Software Development Solutions
      </Typography>
      <motion.div
        whileHover={{ scale: 1.08, boxShadow: '0 0 32px 8px #00bcd488' }}
        transition={{ type: 'spring', stiffness: 300 }}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <Button
          variant="contained"
          size="large"
          sx={{
            fontWeight: 'bold',
            borderRadius: 8,
            bgcolor: 'white',
            color: '#1976d2',
            px: { xs: 2, md: 5 },
            py: { xs: 1.2, md: 1.5 },
            fontSize: { xs: '1rem', md: '1.25rem' },
            boxShadow: '0 0 24px 4px #00bcd455',
            transition: 'box-shadow 0.3s',
            mb: { xs: 2, md: 0 },
            width: { xs: '100%', sm: 'auto' },
            maxWidth: { xs: 220, sm: 'none' },
          }}
          onClick={onContactClick}
        >
          GET IN TOUCH
        </Button>
      </motion.div>
    </motion.div>
    {/* Extra animated background shapes for more color */}
    <motion.div
      variants={floatingVariants}
      animate="animate"
      style={{
        position: 'absolute',
        top: 60,
        right: 60,
        width: 30,
        height: 30,
        background: 'linear-gradient(135deg, #00bcd4 0%, #ff9800 100%)',
        borderRadius: '50%',
        filter: 'blur(1.5px)',
        opacity: 0.5,
        zIndex: 1,
      }}
    />
    <motion.div
      variants={floatingVariants}
      animate="animate"
      style={{
        position: 'absolute',
        bottom: 10,
        left: 30,
        width: 30,
        height: 30,
        background: 'linear-gradient(135deg, #1976d2 0%, #00bcd4 100%)',
        borderRadius: '50%',
        filter: 'blur(2.5px)',
        opacity: 0.4,
        zIndex: 1,
      }}
    />
  </Box>
);

export default Hero; 