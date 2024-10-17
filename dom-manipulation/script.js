// Array to store quotes with categories
let Quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Inspiration" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", category: "Motivation" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", category: "Life" }
  ];
  
  // Function to display a random quote
  function showRandomQuote() {
    const quoteDisplay = document.getElementById('quoteDisplay');
    // Get a random quote from the array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    
    // Display the quote and its category
    quoteDisplay.innerHTML = `
      <p>"${randomQuote.text}"</p>
      <p><strong>Category:</strong> ${randomQuote.category}</p>
    `;
  }
  
  // Function to add a new quote to the array and update the DOM
  function addQuote() {
    const newQuoteText = document.getElementById('newQuoteText').value;
    const newQuoteCategory = document.getElementById('newQuoteCategory').value;
    
    if (newQuoteText && newQuoteCategory) {
      // Add the new quote to the quotes array
      quotes.push({ text: newQuoteText, category: newQuoteCategory });
      
      // Clear the input fields
      document.getElementById('newQuoteText').value = '';
      document.getElementById('newQuoteCategory').value = '';
      
      alert('New quote added successfully!');
    } else {
      alert('Please enter both a quote and a category.');
    }
  }

let quotes = [];

// Function to create the form for adding quotes
function createAddQuoteForm() {
  const formContainer = document.getElementById('quoteFormContainer');

  // Create form elements
  const newQuoteInput = document.createElement('input');
  newQuoteInput.id = 'newQuoteText';
  newQuoteInput.type = 'text';
  newQuoteInput.placeholder = 'Enter a new quote';

  const newCategoryInput = document.createElement('input');
  newCategoryInput.id = 'newQuoteCategory';
  newCategoryInput.type = 'text';
  newCategoryInput.placeholder = 'Enter quote category';

  const addButton = document.createElement('button');
  addButton.textContent = 'Add Quote';
  addButton.onclick = addQuote;

  // Append form elements to the container
  formContainer.appendChild(newQuoteInput);
  formContainer.appendChild(newCategoryInput);
  formContainer.appendChild(addButton);
}
  // Add an event listener to the "Show New Quote" button
  document.getElementById('newQuote').addEventListener('click', showRandomQuote);

  // Array to store quotes with categories
let quotes = [];

// Function to load quotes from localStorage when the page is loaded
function loadQuotes() {
  const storedQuotes = localStorage.getItem('quotes');
  if (storedQuotes) {
    quotes = JSON.parse(storedQuotes);
  } else {
    quotes = [
      { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Inspiration" },
      { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", category: "Motivation" },
      { text: "Life is 10% what happens to us and 90% how we react to it.", category: "Life" }
    ];
  }
}

// Function to save the quotes array to localStorage
function saveQuotes() {
  localStorage.setItem('quotes', JSON.stringify(quotes));
}

// Function to display a random quote
function showRandomQuote() {
  const quoteDisplay = document.getElementById('quoteDisplay');
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  
  // Display the quote and its category
  quoteDisplay.innerHTML = `
    <p>"${randomQuote.text}"</p>
    <p><strong>Category:</strong> ${randomQuote.category}</p>
  `;
}

// Function to add a new quote to the array and update the DOM
function addQuote() {
  const newQuoteText = document.getElementById('newQuoteText').value;
  const newQuoteCategory = document.getElementById('newQuoteCategory').value;
  
  if (newQuoteText && newQuoteCategory) {
    quotes.push({ text: newQuoteText, category: newQuoteCategory });
    
    // Save the updated quotes array to localStorage
    saveQuotes();

    // Clear the input fields
    document.getElementById('newQuoteText').value = '';
    document.getElementById('newQuoteCategory').value = '';
    
    alert('New quote added successfully!');
  } else {
    alert('Please enter both a quote and a category.');
  }
}

// Load quotes from localStorage when the page is loaded
document.addEventListener('DOMContentLoaded', loadQuotes);

// Add an event listener to the "Show New Quote" button
document.getElementById('newQuote').addEventListener('click', showRandomQuote);

// Store the last viewed quote in sessionStorage
function showRandomQuote() {
    const quoteDisplay = document.getElementById('quoteDisplay');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    
    // Display the quote and its category
    quoteDisplay.innerHTML = `
      <p>"${randomQuote.text}"</p>
      <p><strong>Category:</strong> ${randomQuote.category}</p>
    `;
    
    // Save the last viewed quote to sessionStorage
    sessionStorage.setItem('lastViewedQuote', JSON.stringify(randomQuote));
  }
  
  // Load the last viewed quote from sessionStorage
  function loadLastViewedQuote() {
    const lastViewed = sessionStorage.getItem('lastViewedQuote');
    if (lastViewed) {
      const lastQuote = JSON.parse(lastViewed);
      const quoteDisplay = document.getElementById('quoteDisplay');
      quoteDisplay.innerHTML = `
        <p>"${lastQuote.text}"</p>
        <p><strong>Category:</strong> ${lastQuote.category}</p>
      `;
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    loadQuotes();
    loadLastViewedQuote();
  });

  
  // Function to export quotes to a JSON file
function exportToJsonFile() {
    const dataStr = JSON.stringify(quotes, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
  
    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = "quotes.json";
    downloadLink.click();
  
    URL.revokeObjectURL(url);
  }

  
  // Function to import quotes from a JSON file
function importFromJsonFile(event) {
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
      const importedQuotes = JSON.parse(event.target.result);
      quotes.push(...importedQuotes);
      saveQuotes();
      alert('Quotes imported successfully!');
    };
    fileReader.readAsText(event.target.files[0]);
  }

  let quote = [];
let selectedCategory = 'all';

// Load quotes from localStorage
function loadQuotes() {
  const storedQuotes = localStorage.getItem('quotes');
  if (storedQuotes) {
    quotes = JSON.parse(storedQuotes);
  } else {
    quotes = [
      { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Inspiration" },
      { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", category: "Motivation" },
      { text: "Life is 10% what happens to us and 90% how we react to it.", category: "Life" }
    ];
  }

  // Populate the category filter dropdown
  populateCategories();
}

// Save the quotes array to localStorage
function saveQuotes() {
  localStorage.setItem('quotes', JSON.stringify(quotes));
}

// Function to populate categories in the dropdown
function populateCategories() {
  const categoryFilter = document.getElementById('categoryFilter');
  const uniqueCategories = [...new Set(quotes.map(quote => quote.category))];
  
  // Clear existing options except 'All Categories'
  categoryFilter.innerHTML = `<option value="all">All Categories</option>`;
  
  // Add unique categories to the dropdown
  uniqueCategories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });

  // Load the last selected category from localStorage
  const storedCategory = localStorage.getItem('selectedCategory');
  if (storedCategory) {
    categoryFilter.value = storedCategory;
    selectedCategory = storedCategory;
    filterQuotes();  // Apply the filter
  }
}

// Function to filter quotes based on selected category
function filterQuotes() {
  const categoryFilter = document.getElementById('categoryFilter');
  selectedCategory = categoryFilter.value;

  // Save the selected category to localStorage
  localStorage.setItem('selectedCategory', selectedCategory);

  const quoteDisplay = document.getElementById('quoteDisplay');
  quoteDisplay.innerHTML = '';

  const filteredQuotes = selectedCategory === 'all' 
    ? quotes 
    : quotes.filter(quote => quote.category === selectedCategory);

  filteredQuotes.forEach(quote => {
    const quoteElem = document.createElement('div');
    quoteElem.innerHTML = `
      <p>"${quote.text}"</p>
      <p><strong>Category:</strong> ${quote.category}</p>
    `;
    quoteDisplay.appendChild(quoteElem);
  });
}

// Function to add a new quote and update categories
function addQuote() {
  const newQuoteText = document.getElementById('newQuoteText').value;
  const newQuoteCategory = document.getElementById('newQuoteCategory').value;

  if (newQuoteText && newQuoteCategory) {
    quotes.push({ text: newQuoteText, category: newQuoteCategory });
    
    // Save the updated quotes array to localStorage
    saveQuotes();

    // Update categories in the dropdown
    populateCategories();

    // Clear the input fields
    document.getElementById('newQuoteText').value = '';
    document.getElementById('newQuoteCategory').value = '';
    
    alert('New quote added successfully!');
  } else {
    alert('Please enter both a quote and a category.');
  }
}

// Function to export quotes as a JSON file
function exportToJsonFile() {
  const dataStr = JSON.stringify(quotes, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const downloadLink = document.createElement('a');
  downloadLink.href = url;
  downloadLink.download = "quotes.json";
  downloadLink.click();

  URL.revokeObjectURL(url);
}

// Function to import quotes from a JSON file
function importFromJsonFile(event) {
  const fileReader = new FileReader();
  fileReader.onload = function(event) {
    const importedQuotes = JSON.parse(event.target.result);
    quotes.push(...importedQuotes);
    saveQuotes();
    populateCategories(); // Update the dropdown with new categories
    alert('Quotes imported successfully!');
  };
  fileReader.readAsText(event.target.files[0]);
}

// Load quotes and categories when the page is loaded
document.addEventListener('DOMContentLoaded', loadQuotes);

// Mock server URL for simulating server interaction
const SERVER_URL = "https://jsonplaceholder.typicode.com/posts";

// Function to simulate fetching quotes from the server
async function fetchQuotesFromServer() {
  try {
    const response = await fetch(SERVER_URL);
    const serverQuotes = await response.json();
    
    // Simulate receiving an array of quotes
    return serverQuotes.map(post => ({
      text: post.title,
      category: "Server"
    }));
  } catch (error) {
    console.error("Error fetching server quotes:", error);
  }
  return [];
}

// Function to simulate sending local quotes to the server (posting new quotes)
async function postLocalQuotesToServer(localQuotes) {
  try {
    await fetch(SERVER_URL, {
      method: "POST",
      body: JSON.stringify(localQuotes),
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error posting local quotes to server:", error);
  }
}

// Function to periodically fetch data from the server and sync with local data
function startPeriodicSync() {
    setInterval(async () => {
      const serverQuotes = await fetchQuotesFromServer();
      syncQuotesWithServer(serverQuotes);
    }, 30000); // Fetch every 30 seconds
  }

  // Function to sync quotes with server data
function syncQuotesWithServer(serverQuotes) {
    let localQuotes = JSON.parse(localStorage.getItem('quotes')) || [];
    
    // Compare local and server data and resolve conflicts
    const updatedLocalQuotes = serverQuotes.concat(localQuotes.filter(localQuote => 
      !serverQuotes.some(serverQuote => serverQuote.text === localQuote.text)));
    
    // Save the resolved quotes to localStorage
    localStorage.setItem('quotes', JSON.stringify(updatedLocalQuotes));
    
    // Update the UI to reflect the new quotes
    quotes = updatedLocalQuotes;
    filterQuotes();  // Reapply the current filter

     // Notify user that quotes were synced
  notifyUserOfSync();
  }
  
  // Start the sync process when the page loads
  document.addEventListener('DOMContentLoaded', () => {
    loadQuotes();
    startPeriodicSync();
  });

  // Notify the user of server updates
function notifyUserOfSync() {
    const notificationElem = document.createElement('div');
    notificationElem.innerHTML = `
      <p>Server data has been synced. Some quotes may have been updated.</p>
      <button onclick="resolveConflicts()">Resolve Conflicts</button>
    `;
    document.body.appendChild(notificationElem);
  }
  
  // Function to resolve conflicts manually (UI for conflict resolution)
  function resolveConflicts() {
    let localQuotes = JSON.parse(localStorage.getItem('quotes')) || [];
    const serverQuotes = await fetchServerQuotes();
    
    // Open a simple UI for conflict resolution (manual intervention)
    localQuotes.forEach((quote, index) => {
      const conflictElem = document.createElement('div');
      conflictElem.innerHTML = `
        <p>Conflict detected for: "${quote.text}"</p>
        <button onclick="keepLocalQuote(${index})">Keep Local</button>
        <button onclick="keepServerQuote(${index})">Keep Server</button>
      `;
      document.body.appendChild(conflictElem);
    });
  }
  
  function keepLocalQuote(index) {
    // Keep the local quote and remove conflict notification
  }
  
  function keepServerQuote(index) {
    // Keep the server quote and remove conflict notification
  }

  function syncQuotesWithServer(serverQuotes) {
    let localQuotes = JSON.parse(localStorage.getItem('quotes')) || [];
  
    // Resolve conflicts: Keep server quotes by default
    const updatedLocalQuotes = serverQuotes.concat(localQuotes.filter(localQuote => 
      !serverQuotes.some(serverQuote => serverQuote.text === localQuote.text)));
    
    // Notify user of the sync
    if (updatedLocalQuotes.length !== localQuotes.length) {
      notifyUserOfSync();
    }
  
    // Save the updated quotes to localStorage
    localStorage.setItem('quotes', JSON.stringify(updatedLocalQuotes));
  
    // Re-render the UI
    quotes = updatedLocalQuotes;
    filterQuotes();  // Reapply the current filter
  }
  
  


  
