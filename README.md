# Cloud Resume Challenge - Frontend Webpage

The project is a portfolio website showcasing the frontend part of the Cloud Resume Challenge. It includes a responsive design, interactive features, and a clean layout. The website is built using HTML, CSS, and JavaScript.

## Hosting in Azure

The files for this portfolio website are hosted in Azure Blob Storage and delivered via an Azure CDN at [https://www.zohaibzaheer.com/](https://www.zohaibzaheer.com/).

## Project Structure

The project follows a simple structure:

- `zohaibzaheer.com`: This directory holds all the files necessary for the website:
    - `index.html`: The main HTML file that serves as the entry point of the website.
    - `styles.css`: This file contains the CSS files used for styling the website.
    - `mediqueries.css`: This file contains CSS rules and styles specifically designed for different screen sizes and devices. It is responsible for making the website responsive and ensuring optimal layout and appearance across various devices.
    - `script.js`: This file contains all the JavaScript files used for adding interactivity to the website, including sending a get api request to the Azure Function API to fetch the total visitors from Azure Table Storage.
    - `assets/`: This directory contains all the assets used in the website.

- `.github/workflows`: This directory contains the GitHub Actions used for CI/CD work flow:
    - `purge_cdn.yml`: A GitHub Action to purge the CDN when a new push is made to the master branch, ensuring updated content is immediately pushed out.
    - `web_upload.yml`: A GitHub Action to upload all files to Azure Blob Storage when new changes are pushed to the repository.
