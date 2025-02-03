import { Box, Grid, styled, Paper, Typography ,IconButton,Accordion, AccordionSummary, AccordionDetails} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FileCopyIcon from '@mui/icons-material/FileCopy'; // Importing the copy icon
export default function Dashboard1() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));
  const AppBarBackgroundColor = [
    { 
      "id": 1, 
      "backgroundColor": "#4285F4", // Google Blue
      "colorName": "Google Blue"
    },
    { 
      "id": 2, 
      "backgroundColor": "#0A74DA", // Official Dashboard Blue
      "colorName": "Official Dashboard Blue"
    },
    { 
      "id": 3, 
      "backgroundColor": "#FF6347", // Tomato Red (if red is used for alerts, etc.)
      "colorName": "Tomato Red"
    },
    { 
      "id": 4, 
      "backgroundColor": "#34A853", // Google Green
      "colorName": "Google Green"
    },
    { 
      "id": 5, 
      "backgroundColor": "#FBBC05", // Google Yellow
      "colorName": "Google Yellow"
    },
    { 
      "id": 6, 
      "backgroundColor": "#DB4437", // Google Red
      "colorName": "Google Red"
    },
    { 
      "id": 7, 
      "backgroundColor": "#6495ED", // Cornflower Blue
      "colorName": "Cornflower Blue"
    },
    { 
      "id": 8, 
      "backgroundColor": "#B9D9EB", // Cornflower Blue
      "colorName": "Columbia Blue"
    },
    { 
      "id": 9, 
      "backgroundColor": "#1F75FE", // Cornflower Blue
      "colorName": "Crayola Blue"
    },
    { 
      "id": 10, 
      "backgroundColor": "#0E3386", // Cornflower Blue
      "colorName": "Cubs Blue"
    },
  ];

  const copyColorCode = (colorCode) => {
    navigator.clipboard.writeText(colorCode) // This writes the color code to the clipboard
      .then(() => {
        alert(`Color code ${colorCode} copied to clipboard!`); // Show a success message
      })
      .catch((error) => {
        console.error('Failed to copy: ', error); // Log an error if something goes wrong
      });
  };
  

  return (
    <div style={containerStyle}>
      {/* Application Bar (Navigation Bar) */}
      <header style={headerStyle}>
        <div style={headerContentStyle}>
          <h1 style={headerTitleStyle}>Application Guidelines</h1>
        </div>
      </header>

      {/* Main Content */}
      <main style={mainContentStyle}>
        <section style={infoSectionStyle}>
          <h2 style={infoTitleStyle}>Standard Guidelines</h2>
          <p style={infoTextStyle}>
            Welcome to the official documentation page for all standard
            guidelines within the application. Please follow the best practices
            and instructions for a smooth experience.
          </p>
        </section>

        <section style={infoSectionStyle}>
          <h2 style={infoTitleStyle}>Usage Instructions</h2>
          <p style={infoTextStyle}>
            Here, you will find the detailed instructions on how to navigate
            through the app, complete tasks, and manage settings. If you need
            assistance, contact our support team.
          </p>
        </section>

        {/* Additional Information Section */}
        <section style={infoSectionStyle}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span" style={infoTitleStyle}>Font Usage in the Application</Typography>
          </AccordionSummary>
          <AccordionDetails>
       
        
          <p style={infoTextStyle}>
            In this application, we use the "Roboto" font for all text elements.
            This font is chosen for its clarity and legibility. Below are the
            details for each text element:
          </p>

          <ul style={infoListStyle}>
            <li>
              <strong style={infoTextStrongStyle}>Font Family:</strong> Roboto,
              system-ui, sans-serif
            </li>
            <li>
              <strong style={infoTextStrongStyle}>Font Sizes:</strong>
              <ul>
                <li>
                  <strong>Headers:</strong> 28px
                </li>
                <li>
                  <strong>Subheaders:</strong> 22px
                </li>
                <li>
                  <strong>Body Text:</strong> 16px
                </li>
                <li>
                  <strong>Small Text:</strong> 14px
                </li>
              </ul>
            </li>
            <li>
              <strong style={infoTextStrongStyle}>Font Weights:</strong>
              <ul>
                <li>
                  <strong>Headers:</strong> 700 (Bold)
                </li>
                <li>
                  <strong>Subheaders:</strong> 600 (Semi-bold)
                </li>
                <li>
                  <strong>Body Text:</strong> 400 (Normal)
                </li>
                <li>
                  <strong>Small Text:</strong> 300 (Light)
                </li>
              </ul>
            </li>
          </ul>
            
          </AccordionDetails>
        </Accordion>
        </section>

        <Box style={infoSectionStyle}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span" style={infoTitleStyle}>
                Use App Bar Background Color
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ flexGrow: 1 }}>
                {AppBarBackgroundColor.map((color) => (
                  <Box
                    key={color.id}
                    sx={{
                      marginBottom: "16px",
                      backgroundColor: color.backgroundColor,
                      color: "#fff", // Ensure text is visible on both dark and light backgrounds
                      padding: "16px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "8px",
                      textAlign: "center",
                      height: "100px", // Adjust the height as necessary
                      position: "relative", // To position the copy icon
                    }}
                  >
                    <Typography variant="h6">{color.colorName}</Typography>
                    <Typography variant="body2">
                      {color.backgroundColor}
                    </Typography>

                    {/* Copy Icon Button */}
                    <IconButton
                      sx={{
                        position: "absolute", // Position the copy icon inside the box
                        top: "8px",
                        right: "8px",
                        color: "#fff", // Icon color (white)
                      }}
                      onClick={() => copyColorCode(color.backgroundColor)} // Copy color code on click
                    >
                      <FileCopyIcon />
                    </IconButton>
                  </Box>
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
      </main>
    </div>
  );
}

// Inline styles for professional look
const containerStyle = {
  fontFamily: "Roboto, system-ui, sans-serif", // Professional, clear font
  backgroundColor: "#F7F8FA", // Light background color for clean, readable look
  minHeight: "100vh",
};

const headerStyle = {
  backgroundColor: "#005A9C", // Professional dark blue (application bar)
  color: "#FFF",
  padding: "10px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const headerContentStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const headerTitleStyle = {
  fontSize: "28px", // Large title font size
  fontWeight: "700", // Bold weight
  margin: 0,
};

const mainContentStyle = {
  padding: "30px",
  backgroundColor: "#fff", // White background for content area
};

const infoSectionStyle = {
  backgroundColor: "#fff",
  padding: "20px",
  marginBottom: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
};

const infoTitleStyle = {
  fontSize: "22px", // Section title font size
  fontWeight: "600", // Semi-bold weight for subheadings
  color: "#333", // Dark text for clarity
  marginBottom: "10px",
};

const infoTextStyle = {
  fontSize: "16px", // Standard text size for easy reading
  fontWeight: "400", // Normal weight for body text
  color: "#555",
};

const infoListStyle = {
  fontSize: "16px", // Same as body text size
  marginTop: "10px",
  color: "#555",
  lineHeight: "1.6",
};

const infoTextStrongStyle = {
  fontWeight: "600", // Semi-bold weight for emphasis
  color: "#333", // Darker color for clarity
};
