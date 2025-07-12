import { Box, Typography, Button, Modal, IconButton } from '@mui/material';
import { useState } from 'react';
import { motion } from 'framer-motion';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import MemoryIcon from '@mui/icons-material/Memory';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import CodeIcon from '@mui/icons-material/Code';
import CloseIcon from '@mui/icons-material/Close';

const TechOverlay = () => (
  <svg width="100%" height="100%" viewBox="0 0 340 200" fill="none" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
    <rect x="1" y="1" width="338" height="198" rx="16" stroke="#00bcd4" strokeWidth="2" opacity="0.18" />
    <polyline points="1,40 1,1 40,1" stroke="#00bcd4" strokeWidth="2" opacity="0.25" />
    <polyline points="339,160 339,199 300,199" stroke="#ff9800" strokeWidth="2" opacity="0.18" />
    <circle cx="20" cy="20" r="3" fill="#00bcd4" opacity="0.25" />
    <circle cx="320" cy="180" r="2.5" fill="#ff9800" opacity="0.18" />
  </svg>
);

const getTechIcon = (title) => {
  if (/cloud/i.test(title)) return <CloudQueueIcon sx={{ fontSize: 48, color: 'primary.main', filter: 'drop-shadow(0 2px 8px #00bcd488)' }} />;
  if (/chip|ai|memory/i.test(title)) return <MemoryIcon sx={{ fontSize: 48, color: 'primary.main', filter: 'drop-shadow(0 2px 8px #00bcd488)' }} />;
  if (/code|dev|app/i.test(title)) return <CodeIcon sx={{ fontSize: 48, color: 'primary.main', filter: 'drop-shadow(0 2px 8px #00bcd488)' }} />;
  return <EmojiObjectsIcon sx={{ fontSize: 48, color: 'secondary.main', filter: 'drop-shadow(0 2px 8px #00bcd488)' }} />;
};

const ProjectCard = ({ title, description, onLearnMore, livePreviewLink, image }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      whileHover={{ scale: 1.07, boxShadow: '0 8px 32px 8px #00bcd444', borderColor: '#00bcd4' }}
      transition={{ type: 'spring', stiffness: 300 }}
      style={{
        width: '100%',
        maxWidth: 340, // Only for desktop
        margin: '12px auto',
        borderRadius: 16,
        border: '2px solid #00bcd4',
        background: 'linear-gradient(135deg, #e0f7fa 60%, #f5f6fa 100%)',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 0 24px 2px #00bcd422',
        boxSizing: 'border-box',
        minHeight: 480,
                maxHeight: 480,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <TechOverlay />
      <Box sx={{
        p: 3,
        borderRadius: 4,
        minHeight: 320,
        width: { xs: '100%', sm: 320 },
        maxWidth: { xs: '100%', sm: 320 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1,
        boxSizing: 'border-box',
      }}>
        {image && (
          <Box sx={{ mb: 2, width: '100%', display: 'flex', justifyContent: 'center', cursor: 'pointer' }} onClick={() => setOpen(true)}>
            <img
              src={image}
              alt={title + ' preview'}
              style={{
                width: '100%',
                maxWidth: '100vw',
                height: 'auto',
                maxHeight: 120,
                objectFit: 'cover',
                borderRadius: 12,
                boxShadow: '0 2px 16px #00bcd422',
                border: '2px solid #e0f7fa',
                transition: 'box-shadow 0.2s',
                display: 'block',
              }}
            />
          </Box>
        )}
        <Modal open={open} onClose={() => setOpen(false)}>
          <Box sx={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            borderRadius: 3,
            outline: 'none',
            p: 1,
            maxWidth: '98vw',
            maxHeight: '98vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}>
            <IconButton onClick={() => setOpen(false)} sx={{ mb: 1 }}>
              <CloseIcon />
            </IconButton>
            <img
              src={image}
              alt={title + ' preview large'}
              style={{
                width: '100%',
                maxWidth: '96vw',
                maxHeight: '80vh',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: 10,
                boxShadow: '0 4px 32px #00bcd488',
                background: '#fff',
                display: 'block',
              }}
            />
          </Box>
        </Modal>
        <motion.div
          initial={{ scale: 0.8, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200 }}
          style={{ marginBottom: 12 }}
        >
          {getTechIcon(title)}
        </motion.div>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: 'primary.main', textAlign: 'center', fontFamily: 'Roboto Mono, monospace', letterSpacing: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary', textAlign: 'center', fontFamily: 'Roboto Mono, monospace' }}>{description}</Typography>
        <motion.div whileHover={{ scale: 1.1 }}>
          {livePreviewLink ? (
            <Button variant="contained" sx={{
              background: 'linear-gradient(90deg, #00bcd4 0%, #ff9800 100%)',
              color: 'white',
              fontWeight: 'bold',
              borderRadius: 8,
              boxShadow: '0 2px 12px #00bcd444',
              px: 3,
              py: 1.5,
              fontSize: { xs: '1rem', md: '1.1rem' },
              width: { xs: '100%', sm: 'auto' },
              fontFamily: 'Roboto Mono, monospace',
              '&:hover': {
                background: 'linear-gradient(90deg, #ff9800 0%, #00bcd4 100%)',
                color: '#fff',
                boxShadow: '0 4px 24px #00bcd488',
              },
            }}
            href={livePreviewLink}
            target="_blank"
            rel="noopener noreferrer"
            >Live Preview</Button>
          ) : (
            <Button variant="contained" sx={{
              background: 'linear-gradient(90deg, #00bcd4 0%, #ff9800 100%)',
              color: 'white',
              fontWeight: 'bold',
              borderRadius: 8,
              boxShadow: '0 2px 12px #00bcd444',
              px: 3,
              py: 1.5,
              fontSize: { xs: '1rem', md: '1.1rem' },
              width: { xs: '100%', sm: 'auto' },
              fontFamily: 'Roboto Mono, monospace',
              '&:hover': {
                background: 'linear-gradient(90deg, #ff9800 0%, #00bcd4 100%)',
                color: '#fff',
                boxShadow: '0 4px 24px #00bcd488',
              },
            }} onClick={onLearnMore}>Learn More</Button>
          )}
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default ProjectCard; 