import { Box, Typography, Accordion, AccordionSummary, AccordionDetails,Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";


export default function AATableComponent() {
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
        <Typography>This Aligend Automation Pure CSS and Custom Functionality Table Component Very Component Is Resuable .</Typography>
      </Box>
      
      {/* Simple Button */}
      <Box sx={{ mt: 2 }}>
      <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">Simple Table</Typography>
         
          </AccordionSummary>
 
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
            <Typography component="span">Table With  Border</Typography>
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
            <Typography component="span">Table With Collapse</Typography>
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
            <Typography component="span">Table With Sticky Header</Typography>
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
            <Typography component="span">Simple Table Scroll Bar 20+ Data Frist Colum Sticky and Last Column sticky </Typography>
          </AccordionSummary>
          <AccordionDetails>
         
          </AccordionDetails>
        </Accordion>
     
      </Box>
      <Box sx={{ mt: 2 }}>
      <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">Table Export To excel </Typography>
          </AccordionSummary>
          <AccordionDetails>
         
          </AccordionDetails>
        </Accordion>
     
      </Box>
      <Box sx={{ mt: 2 }}>
      <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">Table Header And Boday Last row Sticky  </Typography>
          </AccordionSummary>
          <AccordionDetails>
         
          </AccordionDetails>
        </Accordion>
     
      </Box>
      <Box sx={{ mt: 2 }}>
      <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">Table With Resize </Typography>
          </AccordionSummary>
          <AccordionDetails>
         
          </AccordionDetails>
        </Accordion>
     
      </Box>
      <Box sx={{ mt: 2 }}>
      <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">Table with Excel Behivaor  </Typography>
          </AccordionSummary>
          <AccordionDetails>
         
          </AccordionDetails>
        </Accordion>
     
      </Box>
      <Box sx={{ mt: 2 }}>
      <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">Table With All Functionlity with Resubale Component   </Typography>
          </AccordionSummary>
          <AccordionDetails>
         
          </AccordionDetails>
        </Accordion>
     
      </Box>


     
    </Box>
  );
}
