'use client';

import { Button } from '@mui/material';
import html2canvas from 'html2canvas';

const ExportButton = () => {
  const handleExport = async () => {
    const meme = document.getElementById('meme-box');
    if (!meme) return;

    const canvas = await html2canvas(meme);
    const link = document.createElement('a');
    link.download = 'meme.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <Button variant="contained" color="primary" onClick={handleExport} sx={{ mt: 2 }}>
      Download Meme
    </Button>
  );
};

export default ExportButton;
