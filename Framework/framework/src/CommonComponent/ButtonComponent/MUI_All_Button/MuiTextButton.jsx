import { Box, Typography, Button } from '@mui/material';
import React, { useState } from 'react';

export default function MuiTextButton() {
  // State to toggle the visibility of the code
  const [showCode, setShowCode] = useState(false);

  // Toggle the showCode state when the "Show Code" button is clicked
  const handleShowCodeClick = () => {
    setShowCode(!showCode);
  };

  return (
    <>
      <Box sx={{ position: 'relative', padding: 2 }}>
        <Typography>As Text Button MUI</Typography>
        <Box sx={{ position: 'relative', display: 'flex', gap: 5 }}>
          <Button variant="text">Text</Button>
          <Button variant="contained" onClick={handleShowCodeClick}>
            {showCode ? 'Hide Code' : 'Use Text Button'}
          </Button>
        </Box>

        {/* Conditionally render the code snippet */}
        {showCode && (
          <Box sx={{ marginTop: 2, padding: 2, border: '1px solid #ddd', backgroundColor: '#f5f5f5' }}>
            <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>
              {`import { Button } from '@mui/material';   <Button variant="text">Text</Button>\n`}
            </Typography>
          </Box>
        )}
      </Box>
    </>
  );
}
