import React, { useState, useEffect } from 'react';
import { Box, IconButton, Typography, Drawer, Grid, Paper, styled, Divider, Accordion, AccordionSummary, AccordionDetails, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: theme.spacing(2),
}));

export default function UserDetails({ open, onClose }) {
    // State variables for user settings
    const [fontSize, setFontSize] = useState('medium');
    const [bgColor, setBgColor] = useState('#ffffff');
    const [sizeReducer, setSizeReducer] = useState(1);

    // Load settings from localStorage on component mount
    useEffect(() => {
        const savedFontSize = localStorage.getItem('fontSize');
        const savedBgColor = localStorage.getItem('bgColor');
        const savedSizeReducer = localStorage.getItem('sizeReducer');

        if (savedFontSize) setFontSize(savedFontSize);
        if (savedBgColor) setBgColor(savedBgColor);
        if (savedSizeReducer) setSizeReducer(Number(savedSizeReducer));
    }, []);

    // Save settings to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('fontSize', fontSize);
        localStorage.setItem('bgColor', bgColor);
        localStorage.setItem('sizeReducer', sizeReducer);
    }, [fontSize, bgColor, sizeReducer]);

    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <Box sx={{ width: 300, height: '80vh', padding: 2, display: 'flex', flexDirection: 'column' }}>
                {/* Header Section */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
                    <Typography variant="h6"></Typography>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                {/* Welcome and User Info Section */}
                <Box sx={{ padding: 2, position: 'relative', zIndex: 2, backgroundColor: '#fff', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <Typography variant='h5' sx={{ fontWeight: 600 }}>Welcome</Typography>
                    <Typography sx={{ fontWeight: 500 }}>Vishal Jagdhane</Typography>
                </Box>

                {/* Scrollable Content Section */}
                <Box sx={{ overflowY: 'auto', flexGrow: 1, padding: 2, marginTop: 2 }}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <Item>
                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <AccountCircleIcon sx={{ color: 'blueviolet', marginRight: 2, mt: 2, fontSize: '26px' }} />
                                        <Box>
                                            <Typography variant="body1" sx={{ fontWeight: 600 }}>Profile</Typography>
                                            <Typography variant="body2" color="textSecondary">User Information</Typography>
                                        </Box>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Name: Vishal Jagdhane <br />
                                            Email: vishal@example.com <br />
                                            Role: Administrator
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Item>
                        </Grid>

                        <Grid item>
                            <Item>
                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <SettingsIcon sx={{ color: 'blueviolet', marginRight: 2, mt: 1, fontSize: '26px' }} />
                                        <Box>
                                            <Typography variant="body1" sx={{ fontWeight: 600 }}>Settings</Typography>
                                            <Typography variant="body2" color="textSecondary">Customize your experience</Typography>
                                        </Box>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <FormControl component="fieldset" sx={{ mb: 2 }}>
                                            <FormLabel component="legend">Font Size</FormLabel>
                                            <RadioGroup
                                                value={fontSize}
                                                onChange={(e) => setFontSize(e.target.value)}
                                            >
                                                <FormControlLabel value="small" control={<Radio />} label="Small" />
                                                <FormControlLabel value="medium" control={<Radio />} label="Medium" />
                                                <FormControlLabel value="large" control={<Radio />} label="Large" />
                                            </RadioGroup>
                                        </FormControl>

                                        <FormControl component="fieldset" sx={{ mb: 2 }}>
                                            <FormLabel component="legend">Background Color</FormLabel>
                                            <RadioGroup
                                                value={bgColor}
                                                onChange={(e) => setBgColor(e.target.value)}
                                            >
                                                <FormControlLabel value="#ffffff" control={<Radio icon={<CheckCircleIcon />} />} label="White" />
                                                <FormControlLabel value="#f0f0f0" control={<Radio />} label="Light Grey" />
                                                <FormControlLabel value="#000000" control={<Radio />} label="Black" />
                                            </RadioGroup>
                                        </FormControl>

                                        <TextField
                                            label="Size Reducer"
                                            type="number"
                                            value={sizeReducer}
                                            onChange={(e) => setSizeReducer(Number(e.target.value))}
                                            fullWidth
                                        />
                                    </AccordionDetails>
                                </Accordion>
                            </Item>
                        </Grid>

                        <Grid item>
                            <Item>
                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <PowerSettingsNewIcon sx={{ color: 'blueviolet', marginRight: 2, mt: 1, fontSize: '26px' }} />
                                        <Box>
                                            <Typography variant="body1" sx={{ fontWeight: 600 }}>Sign Out</Typography>
                                            <Typography variant="body2" color="textSecondary">Sed ut perspiciatis</Typography>
                                        </Box>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Sign-out-related information goes here.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>

                {/* Notifications Section */}
                <Box sx={{ padding: 2 }}>
                    <Divider />
                    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
                        <Typography variant="body2">You have 3 notifications</Typography>
                    </Box>
                </Box>
            </Box>
        </Drawer>
    );
}
