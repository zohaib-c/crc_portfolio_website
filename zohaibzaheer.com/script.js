function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Function to make an asynchronous GET request
async function sendGetRequest(url) {
  try {
      const response = await fetch(url, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
      });

      if (!response.ok) {
          console.error('Error sending GET request:', response.statusText);
          return null;
      }

      const responseData = await response.text(); // Await here to get the resolved value
      console.log('GET request sent successfully', responseData);
      return responseData;
  } catch (error) {
      console.error('Error sending GET request:', error);
      return null;
  }
}


// Function to update the visitor counter on the webpage
function updateVisitorCounter() {
  const azureFunctionURL = 'https://crctrigger.azurewebsites.net/api/http_trigger?code=t2zL3UucAOFLxBNvuo_MZYq0SZ88lNZvTao_T2VxOKc6AzFuxAk_Xg==';

  // Send GET request to Azure Function
  sendGetRequest(azureFunctionURL)
      .then(response => {
          if (response) {
              // Parse response as an integer
              const visitorCount = parseInt(response, 10);

              // Check if the parsed response is a valid number
              if (!isNaN(visitorCount)) {
                  // Update the counter element on the webpage
                  const counterElement = document.getElementById('loading-placeholder');
                  console.log('Updating counter with', visitorCount);

                  if (counterElement) {
                      counterElement.innerHTML = visitorCount;
                  }
              } else {
                  console.error('Invalid response for visitor counter:', response);
              }
          }
      })
      .catch(error => {
          console.error('Error updating visitor counter:', error);
      });
}

// Execute the updateVisitorCounter function when the page loads
window.onload = updateVisitorCounter;