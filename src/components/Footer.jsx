import { Box, Typography, IconButton, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const iconVariants = {
  hover: { scale: 1.2, rotate: 10, color: '#00bcd4' },
};

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <Box sx={{
      bgcolor: 'transparent',
      color: 'white',
      py: { xs: 1, md: 3 },
      mt: 8,
      borderRadius: 2,
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 0 32px 0 #00bcd444',
      border: '3px solid',
      borderImage: 'linear-gradient(90deg, #00bcd4 0%, #ff9800 100%) 1',
      background: 'linear-gradient(90deg, #1976d2 0%, #00bcd4 100%)',
    }}>
      <Stack direction="row" spacing={{ xs: 3, md: 2 }} justifyContent="center" sx={{ mb: 1 }}>
        <motion.div whileHover="hover" variants={iconVariants} style={{ display: 'inline-block' }}>
          <IconButton color="inherit" href="https://github.com/" target="_blank" sx={{ fontSize: { xs: 32, md: 24 } }}>
            <GitHubIcon sx={{ fontSize: { xs: 32, md: 24 } }} />
          </IconButton>
        </motion.div>
        <motion.div whileHover="hover" variants={iconVariants} style={{ display: 'inline-block' }}>
          <IconButton color="inherit" href="https://linkedin.com/" target="_blank" sx={{ fontSize: { xs: 32, md: 24 } }}>
            <LinkedInIcon sx={{ fontSize: { xs: 32, md: 24 } }} />
          </IconButton>
        </motion.div>
        <motion.div whileHover="hover" variants={iconVariants} style={{ display: 'inline-block' }}>
          <IconButton color="inherit" href="https://twitter.com/" target="_blank" sx={{ fontSize: { xs: 32, md: 24 } }}>
            <TwitterIcon sx={{ fontSize: { xs: 32, md: 24 } }} />
          </IconButton>
        </motion.div>
      </Stack>
      <Typography variant="body2" sx={{ fontSize: { xs: '0.7rem', md: '1rem' }, textShadow: '0 2px 8px #0008' }}>
        © {new Date().getFullYear()} JC Technology. All rights reserved.
      </Typography>
      {/* Animated glowing effect */}
      <motion.div
        animate={{
          opacity: [0.5, 1, 0.5],
          boxShadow: [
            '0 0 32px 8px #00bcd455',
            '0 0 64px 16px #00bcd499',
            '0 0 32px 8px #00bcd455',
          ],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 12,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
    </Box>
  </motion.footer>
);

export default Footer; 