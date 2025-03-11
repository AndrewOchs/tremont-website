// Create a new script tag to load Babel for JSX support
const babelScript = document.createElement('script');
babelScript.src = 'https://unpkg.com/babel-standalone@6/babel.min.js';
document.head.appendChild(babelScript);

// Wait for Babel to load before initializing the calendar
babelScript.onload = () => {
    // Initialize the calendar component
    const root = ReactDOM.createRoot(document.getElementById('calendar-root'));
    root.render(React.createElement(MeetingCalendar));
};