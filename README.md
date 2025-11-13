# College Admissions Landing Pages

Two responsive single-file landing pages for college admissions with form submission and fees modal.

## Files

- `LP-1.html` - Light-themed landing page with modern design
- `LP-2.html` - Dark-themed landing page with card-based layout
- `server.js` - Express server with mock APIs
- `package.json` - Node.js dependencies

## Features

- Responsive design (mobile-friendly)
- Client-side form validation
- Form submission to Pipedream webhook
- Modal with course fees table (8 B.Tech courses with prices in ₹)
- Mock API endpoints for fees and university data
- Fallback data when server is not running
- Modern UI with animations and glassmorphism effects

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

3. Open `http://localhost:3000/LP-1.html` or `http://localhost:3000/LP-2.html` in your browser.

## API Endpoints

- `GET /api/fees` - Returns course fees data
- `GET /api/university` - Returns university overview and courses
- `GET /health` - Health check

## Deployment

### Vercel Deployment

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to deploy your project.

4. Your landing pages will be available at the Vercel URL.

### Netlify Deployment

1. Go to [Netlify](https://netlify.com) and sign up/login.

2. Click "New site from Git" or drag & drop the project folder.

3. Set build command: `npm run build` (if needed, but for static files it's optional)

4. Deploy.

5. Your landing pages will be available at the Netlify URL.

## Pipedream Webhook Setup

1. Go to [Pipedream](https://pipedream.com) and create a free account.

2. Create a new workflow.

3. Add a "HTTP / Webhook" trigger.

4. Copy the webhook URL (it will look like `https://your-pipedream-workflow-url-here`).

5. In both `LP-1.html` and `LP-2.html`, replace the `PIPEDREAM_ENDPOINT` constant with your webhook URL:

   ```javascript
   const PIPEDREAM_ENDPOINT = 'https://your-pipedream-webhook-url-here';
   ```

6. In your Pipedream workflow, you can add steps to:
   - Send emails
   - Store data in databases
   - Integrate with CRM systems
   - Send Slack notifications
   - etc.

## Form Fields

The form collects:
- fullName (text)
- email (email)
- phone (10-digit Indian number)
- state (dropdown)
- courseInterested (dropdown)
- intakeYear (dropdown)
- consent (checkbox)

All fields are required with client-side validation.

## Customization

- Colors: Modify CSS variables in `:root`
- Content: Update text and images
- Form fields: Add/remove fields as needed
- API data: Modify mock data in `server.js`
- Styling: Adjust CSS for different themes

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive
- No external dependencies (pure HTML/CSS/JS)
