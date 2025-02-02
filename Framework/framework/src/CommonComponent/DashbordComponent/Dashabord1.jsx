import React from 'react';

export default function Dashboard1() {
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
          <p style={infoTextStyle}>Welcome to the official documentation page for all standard guidelines within the application. Please follow the best practices and instructions for a smooth experience.</p>
        </section>

        <section style={infoSectionStyle}>
          <h2 style={infoTitleStyle}>Usage Instructions</h2>
          <p style={infoTextStyle}>Here, you will find the detailed instructions on how to navigate through the app, complete tasks, and manage settings. If you need assistance, contact our support team.</p>
        </section>

        {/* Additional Information Section */}
        <section style={infoSectionStyle}>
          <h2 style={infoTitleStyle}>Font Usage in the Application</h2>
          <p style={infoTextStyle}>In this application, we use the "Roboto" font for all text elements. This font is chosen for its clarity and legibility. Below are the details for each text element:</p>

          <ul style={infoListStyle}>
            <li><strong style={infoTextStrongStyle}>Font Family:</strong> Roboto, system-ui, sans-serif</li>
            <li><strong style={infoTextStrongStyle}>Font Sizes:</strong>
              <ul>
                <li><strong>Headers:</strong> 28px</li>
                <li><strong>Subheaders:</strong> 22px</li>
                <li><strong>Body Text:</strong> 16px</li>
                <li><strong>Small Text:</strong> 14px</li>
              </ul>
            </li>
            <li><strong style={infoTextStrongStyle}>Font Weights:</strong>
              <ul>
                <li><strong>Headers:</strong> 700 (Bold)</li>
                <li><strong>Subheaders:</strong> 600 (Semi-bold)</li>
                <li><strong>Body Text:</strong> 400 (Normal)</li>
                <li><strong>Small Text:</strong> 300 (Light)</li>
              </ul>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

// Inline styles for professional look
const containerStyle = {
  fontFamily: 'Roboto, system-ui, sans-serif', // Professional, clear font
  backgroundColor: '#F7F8FA', // Light background color for clean, readable look
  minHeight: '100vh',
};

const headerStyle = {
  backgroundColor: '#005A9C', // Professional dark blue (application bar)
  color: '#FFF',
  padding: '10px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const headerContentStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const headerTitleStyle = {
  fontSize: '28px', // Large title font size
  fontWeight: '700', // Bold weight
  margin: 0,
};

const mainContentStyle = {
  padding: '30px',
  backgroundColor: '#fff', // White background for content area
};

const infoSectionStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  marginBottom: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
};

const infoTitleStyle = {
  fontSize: '22px', // Section title font size
  fontWeight: '600', // Semi-bold weight for subheadings
  color: '#333', // Dark text for clarity
  marginBottom: '10px',
};

const infoTextStyle = {
  fontSize: '16px', // Standard text size for easy reading
  fontWeight: '400', // Normal weight for body text
  color: '#555',
};

const infoListStyle = {
  fontSize: '16px', // Same as body text size
  marginTop: '10px',
  color: '#555',
  lineHeight: '1.6',
};

const infoTextStrongStyle = {
  fontWeight: '600', // Semi-bold weight for emphasis
  color: '#333', // Darker color for clarity
};

