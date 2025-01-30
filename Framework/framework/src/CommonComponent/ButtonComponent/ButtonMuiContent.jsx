import { Box, Typography, Accordion, AccordionSummary, AccordionDetails,Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import MuiTextButton from "./MUI_All_Button/MuiTextButton";

export default function ButtonMuiContent() {
  return (
    <Box sx={{ width: "100%", height: "auto", display: "block", p: 2 }}>
      <Box
        sx={{
          width: "100%",
          height: "30px",
          borderBottom: "1px solid #ccc",
          fontWeight: "bold",
        }}
      >
        <Typography>This a MUI  buttons .</Typography>
      </Box>
      
      {/* Simple Button */}
      <Box sx={{ mt: 2 }}>
      <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">Simple Button</Typography>
         
          </AccordionSummary>
          <MuiTextButton/>
          <AccordionDetails>
         
          </AccordionDetails>
        </Accordion>
       
      </Box>

      {/* Content Button */}
      <Box sx={{ mt: 2 }}>
      <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">Content Button</Typography>
          </AccordionSummary>
          <AccordionDetails>
         
          </AccordionDetails>
        </Accordion>
      
      </Box>

      {/* Active Button */}
      <Box sx={{ mt: 2 }}>
      <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">Active Button</Typography>
          </AccordionSummary>
          <AccordionDetails>
         
          </AccordionDetails>
        </Accordion>
     
      </Box>

      {/* Deactive Button */}
      <Box sx={{ mt: 2 }}>
      <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">Content Button</Typography>
          </AccordionSummary>
          <AccordionDetails>
         
          </AccordionDetails>
        </Accordion>
        
      </Box>

      {/* Success Button */}
      <Box sx={{ mt: 2 }}>
      <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">Success Button</Typography>
          </AccordionSummary>
          <AccordionDetails>
         
          </AccordionDetails>
        </Accordion>
     
      </Box>


     
    </Box>
  );
}
