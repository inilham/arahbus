// Helper function to get the appropriate icon for transfer type
function getTransferIcon(type) {
    switch (type) {
        case 'LRT': {
            const img = document.createElement('img');
            img.src = 'img/lrt-jak-ns.png';
            img.alt = 'LRT Jakarta Lin Selatan';
            img.width = 16;
            img.height = 16;
            img.style.cssText = 'vertical-align: bottom; display: inline-block; margin-left: 2px; margin-right: 2px;';
            return img;
            };
        case 'LRT-CB': {
            const img = document.createElement('img');
            img.src = 'img/lrt-cb-line.png';
            img.alt = 'LRT Jabodebek Lin Cibubur';
            img.width = 16;
            img.height = 16;
            img.style.cssText = 'vertical-align: bottom; display: inline-block; margin-left: 2px; margin-right: 2px;';
            return img;
            };
        case 'LRT-BK': {
            const img = document.createElement('img');
            img.src = 'img/lrt-bk-line.png';
            img.alt = 'LRT Jabodebek Lin Bekasi';
            img.width = 16;
            img.height = 16;
            img.style.cssText = 'vertical-align: bottom; display: inline-block; margin-left: 2px; margin-right: 2px;';
            return img;
            };
        case 'MRT': {
            const img = document.createElement('img');
            img.src = 'img/mrt-ns-line.png';
            img.alt = 'MRT Icon';
            img.width = 16;
            img.height = 16;
            img.style.cssText = 'vertical-align: bottom; display: inline-block; margin-left: 2px; margin-right: 2px;';
            return img;
            };
        case 'Train': {
            const img = document.createElement('img');
            img.src = 'img/train-station.png';
            img.alt = 'Train Icon';
            img.width = 16;
            img.height = 16;
            img.style.cssText = 'vertical-align: bottom; display: inline-block; margin-left: 2px; margin-right: 2px;';
            return img;
            };
        case 'CL-Airport': {
            const img = document.createElement('img');
            img.src = 'img/krl-a-line.png';
            img.alt = 'KA Bandara Soekarno Hatta';
            img.width = 16;
            img.height = 16;
            img.style.cssText = 'vertical-align: bottom; display: inline-block; margin-left: 2px; margin-right: 2px;';
            return img;
            };
        case 'CL-Bogor': {
            const img = document.createElement('img');
            img.src = 'img/krl-b-line.png';
            img.alt = 'KRL Komuter Lin Bogor';
            img.width = 16;
            img.height = 16;
            img.style.cssText = 'vertical-align: bottom; display: inline-block; margin-left: 2px; margin-right: 2px;';
            return img;
            };
        case 'CL-Cikarang': {
            const img = document.createElement('img');
            img.src = 'img/krl-c-line.png';
            img.alt = 'KRL Komuter Lin Lingkar Cikarang';
            img.width = 16;
            img.height = 16;
            img.style.cssText = 'vertical-align: bottom; display: inline-block; margin-left: 2px; margin-right: 2px;';
            return img;
            };
        case 'CL-Rangkas': {
            const img = document.createElement('img');
            img.src = 'img/krl-r-line.png';
            img.alt = 'KRL Komuter Lin Rangkasbitung';
            img.width = 16;
            img.height = 16;
            img.style.cssText = 'vertical-align: bottom; display: inline-block; margin-left: 2px; margin-right: 2px;';
            return img;
            };
        case 'CL-Tangerang': {
            const img = document.createElement('img');
            img.src = 'img/krl-t-line.png';
            img.alt = 'KRL Komuter Lin Tangerang';
            img.width = 16;
            img.height = 16;
            img.style.cssText = 'vertical-align: bottom; display: inline-block; margin-left: 2px; margin-right: 2px;';
            return img;
            };
        case 'CL-TP': {
            const img = document.createElement('img');
            img.src = 'img/krl-tp-line.png';
            img.alt = 'KRL Komuter Lin Tanjung Priok';
            img.width = 16;
            img.height = 16;
            img.style.cssText = 'vertical-align: bottom; display: inline-block; margin-left: 2px; margin-right: 2px;';
            return img;
            };
        case 'Airport': {
            const img = document.createElement('img');
            img.src = 'img/airport.png';
            img.alt = 'Bandara';
            img.width = 16;
            img.height = 16;
            img.style.cssText = 'vertical-align: bottom; display: inline-block; margin-left: 2px; margin-right: 2px;';
            return img;
            };
        case 'Terminal': {
            const img = document.createElement('img');
            img.src = 'img/bus-terminal.png';
            img.alt = 'Terminal Bus Icon';
            img.width = 16;
            img.height = 16;
            img.style.cssText = 'vertical-align: bottom; display: inline-block; margin-left: 2px; margin-right: 2px;';
            return img;
            };
        default: 
            return null;
    }
}

let mockBusRoutes = []; // Declare as a mutable variable, will be populated from data.json

// Declare a variable to hold the loaded walking connections data
let walkingConnectionsData = {}; //

/**
 * Asynchronously loads walking connections data from an external JSON file.
 * Assumes the JSON file is named 'walking_connections.json' and is in the same directory.
 */
async function loadWalkingConnections() { //
    try {
        const response = await fetch('walking_connections.json'); //
        if (!response.ok) { //
            throw new Error(`HTTP error! status: ${response.status}`); //
        }
        walkingConnectionsData = await response.json(); //
        console.log("Walking connections loaded:", walkingConnectionsData); //
    } catch (error) { //
        console.error("Could not load walking connections:", error); //
        // Initialize with an empty object or fallback data if loading fails
        walkingConnectionsData = {}; //
    }
}

// Function to fetch mock data
async function fetchMockBusRoutes() {
    try {
        const response = await fetch('data.json'); // Fetch data from the new JSON file
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        mockBusRoutes = await response.json();
        console.log('Bus routes loaded:', mockBusRoutes);
        // Initialize the application after data is loaded
        showHomepage(); // Show homepage only after data is ready
    } catch (error) {
        console.error('Could not fetch bus routes:', error);
        // Optionally display an error message to the user
        alert('Failed to load bus route data. Please try refreshing the page.');
    }
}

// Get references to HTML elements
const homepage = document.getElementById('homepage');
const detailPage = document.getElementById('detail-page');
const busNetworkPage = document.getElementById('bus-network-page'); // New bus network page element
const aboutPage = document.getElementById('about-page'); // New about page element
const howToPayPage = document.getElementById('how-to-pay-page'); // New how to pay page element

// Get references to new header elements
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

const searchInputHome = document.getElementById('search-input-home');
const suggestionsListHome = document.getElementById('suggestions-list-home');
const clearButtonHome = document.getElementById('clear-button-home'); // New clear button
const backButton = document.getElementById('back-button');
const busNetworkBackButton = document.getElementById('bus-network-back-button'); // New back button for bus network page
const aboutBackButton = document.getElementById('about-back-button'); // New back button for about page
const howToPayBackButton = document.getElementById('how-to-pay-back-button'); // New back button for how to pay page

// References for route details (table cells)
const detailRouteNumber = document.getElementById('detail-route-number');
const detailOriginTable = document.getElementById('detail-origin-table');
const detailDestinationTable = document.getElementById('detail-destination-table');
// Reference to the combined stops table body
const combinedStopsTableBody = document.getElementById('combined-stops-table-body');
// New LLM feature elements
const generateDescriptionButton = document.getElementById('generate-description-button');
const routeDescriptionOutput = document.getElementById('route-description-output');
const descriptionText = document.getElementById('description-text');
const loadingIndicator = document.getElementById('loading-indicator');

const searchInputDetail = document.getElementById('search-input-detail');
const suggestionsListDetail = document.getElementById('suggestions-list-detail');
const clearButtonDetail = document.getElementById('clear-button-detail'); // New clear button

const busNetworkTableBody = document.getElementById('bus-network-table-body'); // Table body for bus network


let currentRoute = null; // To store the currently displayed route

// Function to toggle mobile menu visibility
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const body = document.body;

    if (mobileMenu.classList.contains('hidden')) {
        // Menu is currently hidden, so show it
        mobileMenu.classList.remove('hidden');
        body.classList.add('overflow-hidden'); // Add overflow-hidden when menu opens
    } else {
        // Menu is currently visible, so hide it
        mobileMenu.classList.add('hidden');
        body.classList.remove('overflow-hidden'); // Always remove overflow-hidden when menu closes
    }
}

// Function to show the homepage and hide other pages
function showHomepage() {
    homepage.style.display = 'flex'; // Use flex for homepage layout
    detailPage.style.display = 'none';
    busNetworkPage.style.display = 'none';
    aboutPage.style.display = 'none';
    howToPayPage.style.display = 'none'; // Hide how to pay page
    searchInputHome.value = '';
    suggestionsListHome.classList.add('hidden');
    clearButtonHome.classList.add('hidden');
    mobileMenu.classList.add('hidden'); // Ensure mobile menu is hidden
    document.body.classList.remove('overflow-hidden'); // Ensure body can scroll
    console.log('Showing homepage');
}

// Function to show the detail page and hide other pages
function showDetailPage(route) {
    homepage.style.display = 'none';
    detailPage.style.display = 'block'; // Use block for detail page layout
    busNetworkPage.style.display = 'none';
    aboutPage.style.display = 'none';
    howToPayPage.style.display = 'none'; // Hide how to pay page
    currentRoute = route;
    displayRouteDetails(route);
    searchInputDetail.value = '';
    suggestionsListDetail.classList.add('hidden');
    clearButtonDetail.classList.add('hidden');
    mobileMenu.classList.add('hidden'); // Ensure mobile menu is hidden
    document.body.classList.remove('overflow-hidden'); // Ensure body can scroll
    console.log('Showing detail page for route:', route.number);
}

// Function to show the bus network page and hide other pages
function showBusNetworkPage() {
    homepage.style.display = 'none';
    detailPage.style.display = 'none';
    busNetworkPage.style.display = 'block'; // Use block for bus network page layout
    aboutPage.style.display = 'none';
    howToPayPage.style.display = 'none'; // Hide how to pay page
    populateBusNetworkTable();
    mobileMenu.classList.add('hidden'); // Ensure mobile menu is hidden
    document.body.classList.remove('overflow-hidden'); // Ensure body can scroll
    console.log('Showing bus network page');
}

// Function to show the about page and hide other pages
function showAboutPage() {
    homepage.style.display = 'none';
    detailPage.style.display = 'none';
    busNetworkPage.style.display = 'none';
    aboutPage.style.display = 'block'; // Show about page
    howToPayPage.style.display = 'none'; // Hide how to pay page
    mobileMenu.classList.add('hidden'); // Ensure mobile menu is hidden
    document.body.classList.remove('overflow-hidden'); // Ensure body can scroll
    console.log('Showing about page');
}

// Function to show the how to pay page and hide other pages
function showHowToPayPage() {
    homepage.style.display = 'none';
    detailPage.style.display = 'none';
    busNetworkPage.style.display = 'none';
    aboutPage.style.display = 'none';
    howToPayPage.style.display = 'block'; // Show how to pay page
    mobileMenu.classList.add('hidden'); // Ensure mobile menu is hidden
    document.body.classList.remove('overflow-hidden'); // Ensure body can scroll
    console.log('Showing how to pay page');
}

// Function to populate the bus network table
function populateBusNetworkTable() {
    busNetworkTableBody.innerHTML = ''; // Clear existing rows
    console.log('Attempting to populate bus network table. Current mockBusRoutes state:', mockBusRoutes);

    if (mockBusRoutes && mockBusRoutes.length > 0) {
        mockBusRoutes.forEach(route => {
            const row = document.createElement('tr');
            const busNumberCell = document.createElement('td');
            const routeNameCell = document.createElement('td');

            const busNumberLink = document.createElement('a');
            busNumberLink.href = "#"; // Prevent default navigation
            busNumberLink.textContent = route.number;
            busNumberLink.onclick = (event) => {
                event.preventDefault(); // Stop default link behavior
                showDetailPage(route);
            };
            busNumberCell.appendChild(busNumberLink);

            const routeNameLink = document.createElement('a');
            routeNameLink.href = "#"; // Prevent default navigation
            routeNameLink.textContent = `${route.origin} ⇆ ${route.destination}`;
            routeNameLink.onclick = (event) => {
                event.preventDefault(); // Stop default link behavior
                showDetailPage(route);
            };
            routeNameCell.appendChild(routeNameLink);

            row.appendChild(busNumberCell);
            row.appendChild(routeNameCell);
            busNetworkTableBody.appendChild(row);
        });
        console.log('Bus network table populated with', mockBusRoutes.length, 'routes.');
    } else {
        const row = document.createElement('tr');
        row.innerHTML = `<td colspan="2" class="text-center py-4 text-gray-500">Loading bus network data... Please wait.</td>`;
        busNetworkTableBody.appendChild(row);
        console.log('Bus routes not yet available, showing loading message.');
        // If data is not yet loaded, try again after a short delay
        // This handles cases where the user clicks before the fetch completes
        if (mockBusRoutes.length === 0) { // Only re-try if it's truly empty
            setTimeout(populateBusNetworkTable, 500); // Try again after 500ms
        }
    }
}

// Function to display route details on the detail page
async function displayRouteDetails(route) { // Made async to await walking connections
    // Populate the route detail table cells
    detailRouteNumber.textContent = route.number;
    detailOriginTable.textContent = route.origin;
    detailDestinationTable.textContent = route.destination;

    // Clear previous stops in the combined table
    combinedStopsTableBody.innerHTML = '';

    const outboundStops = route.stops.outbound;
    const inboundStops = route.stops.inbound;

    // Add the first stop (Origin) row for the overall route
    if (outboundStops.length > 0) {
        const firstOverallRow = document.createElement('tr');
        firstOverallRow.classList.add('edge', 'loop');
        const originStopData = outboundStops[0]; // Get the full stop object
        const originCell = document.createElement('td');
        originCell.setAttribute('colspan', '3');
        originCell.classList.add('stop-start');
        originCell.textContent = originStopData.name; // Use .name

        // Add transfers if available for origin
        if (originStopData.transfers && originStopData.transfers.length > 0) {
            // Separate bus transfers from other types
            const busTransfers = originStopData.transfers.filter(t => t.type === 'Bus');
            const otherTransfers = originStopData.transfers.filter(t => t.type !== 'Bus');

            // Handle Bus transfers (on one line)
            if (busTransfers.length > 0) {
                const busTransferDiv = document.createElement('div');
                busTransferDiv.classList.add('text-xs', 'text-gray-500', 'mt-1');
                //busTransferDiv.appendChild(document.createTextNode('Transit ke '));

                busTransfers.forEach((transfer, index) => {
                    const icon = getTransferIcon(transfer.type);
                    if (icon) {
                        busTransferDiv.appendChild(icon);
                    }

                    const transferLink = document.createElement('a');
                    transferLink.href = "#";
                    transferLink.textContent = transfer.line;
                    const targetRoute = mockBusRoutes.find(r => r.number === transfer.line);

                    let bgColor = '#eeeeee';
                    let textColor = '#555555';

                    if (targetRoute && targetRoute.bgColor && targetRoute.textColor) {
                        bgColor = targetRoute.bgColor;
                        textColor = targetRoute.textColor;
                    } else {
                        console.warn(`Color information not found for bus line: ${transfer.line}. Using default colors.`);
                    }
                    transferLink.classList.add(
                        'font-semibold', 
                        'hover:underline', 
                        'inline-flex', 
                        'items-center',
                        'justify-center', 
                        'w-auto', 
                        'min-w-4', 
                        'h-4',
                        'p-1',
                        'mb-1',
                        'rounded-full',
                    );
                    transferLink.style.backgroundColor = bgColor;
                    transferLink.style.color = textColor;
                    transferLink.onclick = (event) => {
                        event.preventDefault();
                        const targetRoute = mockBusRoutes.find(r => r.number === transfer.line);
                        if (targetRoute) {
                            showDetailPage(targetRoute);
                        } else {
                            alert(`Informasi bus ${transfer.line} belum tersedia.`);
                        }
                    };
                    busTransferDiv.appendChild(transferLink);

                    if (index < busTransfers.length - 1) {
                        busTransferDiv.appendChild(document.createTextNode(' ')); // Add a space between bus transfers
                    }
                });
                originCell.appendChild(busTransferDiv);
            }

            // Handle other transfer types (each on a new line)
            otherTransfers.forEach(transfer => {
                const otherTransferDiv = document.createElement('div');
                otherTransferDiv.classList.add('text-xs', 'text-gray-500', 'mt-1');
                //otherTransferDiv.appendChild(document.createTextNode('Transit ke '));

                const icon = getTransferIcon(transfer.type);
                if (icon) {
                    otherTransferDiv.appendChild(icon);
                }

                const span = document.createElement('span');
                span.className = 'font-semibold text-blue-600';
                span.textContent = transfer.line;
                otherTransferDiv.appendChild(span);

                originCell.appendChild(otherTransferDiv);
            });
        }
        firstOverallRow.appendChild(originCell);
        combinedStopsTableBody.appendChild(firstOverallRow);
    }

    // Reverse inbound stops for display
    const reversedInboundStops = [...inboundStops].reverse(); // Create a copy to avoid modifying original array

    // Determine the maximum number of intermediate rows needed
    // We need to account for the first and last stops being handled separately
    const effectiveOutboundLength = outboundStops.length > 1 ? outboundStops.length - 2 : 0;
    const effectiveInboundLength = inboundStops.length > 1 ? inboundStops.length - 2 : 0;
    const maxIntermediateLength = Math.max(effectiveOutboundLength, effectiveInboundLength);


    // Add intermediate stops
    for (let i = 0; i < maxIntermediateLength; i++) {
        const row = document.createElement('tr');
        row.classList.add('intermediate-row'); // Add a class for alternating background

        // Outbound stop cell (first column)
        const outboundCell = document.createElement('td');
        outboundCell.classList.add('intermediate-line'); // Always add line background

        // Check if the stop exists and is not the first or last stop of its respective list
        const currentOutboundStopData = outboundStops[i + 1];
        const outboundStopName = currentOutboundStopData ? currentOutboundStopData.name : '';

        // Inbound stop cell (third column) - moved up to get inboundStopName for comparison
        const inboundCell = document.createElement('td');
        inboundCell.classList.add('intermediate-line'); // Always add line background
        const currentInboundStopData = reversedInboundStops[i + 1];
        const inboundStopName = currentInboundStopData ? currentInboundStopData.name : '';
        
        if (outboundStopName !== '') { // Simplified condition
            // Apply conditional class based on name equality
            if (outboundStopName === inboundStopName) {
                outboundCell.classList.add('outbound-brt'); // Use outbound-stop-brt if names are same
            } else {
                outboundCell.classList.add('stop-cell'); // Use existing css if names are different
            }
            outboundCell.appendChild(document.createTextNode(outboundStopName));

            // Add transfers if available for outbound intermediate stop
            if (currentOutboundStopData.transfers && currentOutboundStopData.transfers.length > 0) {
                // Separate bus transfers from other types
                const busTransfers = currentOutboundStopData.transfers.filter(t => t.type === 'Bus');
                const otherTransfers = currentOutboundStopData.transfers.filter(t => t.type !== 'Bus');

                // Handle Bus transfers (on one line)
                if (busTransfers.length > 0) {
                    const busTransferDiv = document.createElement('div');
                    busTransferDiv.classList.add('text-xs', 'text-gray-500', 'mt-1');
                    //busTransferDiv.appendChild(document.createTextNode('Transit ke '));

                    busTransfers.forEach((transfer, index) => {
                        const icon = getTransferIcon(transfer.type);
                        if (icon) {
                            busTransferDiv.appendChild(icon);
                        }

                        const transferLink = document.createElement('a');
                        transferLink.href = "#";
                        transferLink.textContent = transfer.line;
                        const targetRoute = mockBusRoutes.find(r => r.number === transfer.line);

                        let bgColor = '#eeeeee';
                        let textColor = '#555555';

                        if (targetRoute && targetRoute.bgColor && targetRoute.textColor) {
                            bgColor = targetRoute.bgColor;
                            textColor = targetRoute.textColor;
                        } else {
                            console.warn(`Color information not found for bus line: ${transfer.line}. Using default colors.`);
                        }
                        transferLink.classList.add(
                            'hover:underline', 
                            'inline-flex', 
                            'items-center', 
                            'justify-center',
                            'w-auto', 
                            'min-w-4', 
                            'h-4',
                            'p-1',
                            'mb-1',
                            'rounded-full', 
                            'text-xs',
                        );
                        transferLink.style.backgroundColor = bgColor;
                        transferLink.style.color = textColor;
                        transferLink.onclick = (event) => {
                            event.preventDefault();
                            const targetRoute = mockBusRoutes.find(r => r.number === transfer.line);
                            if (targetRoute) {
                                showDetailPage(targetRoute);
                            } else {
                                alert(`Informasi bus ${transfer.line} belum tersedia.`);
                            }
                        };
                        busTransferDiv.appendChild(transferLink);

                        if (index < busTransfers.length - 1) {
                            busTransferDiv.appendChild(document.createTextNode(' '));
                        }
                    });
                    outboundCell.appendChild(busTransferDiv);
                }

                // Handle other transfer types (each on a new line)
                otherTransfers.forEach(transfer => {
                    const otherTransferDiv = document.createElement('div');
                    otherTransferDiv.classList.add('text-xs', 'text-gray-500', 'mt-1');
                    //otherTransferDiv.appendChild(document.createTextNode('Transit ke '));

                    const icon = getTransferIcon(transfer.type);
                    if (icon) {
                        otherTransferDiv.appendChild(icon);
                    }

                    const span = document.createElement('span');
                    span.className = 'font-semibold text-blue-600'; // Or other appropriate styling
                    span.textContent = transfer.line;
                    otherTransferDiv.appendChild(span);

                    outboundCell.appendChild(otherTransferDiv);
                });
            }
        } else if (currentOutboundStopData && currentOutboundStopData.name === '') {
            outboundCell.appendChild(document.createTextNode(''));
        }
        //row.appendChild(outboundCell);

        // Middle empty cell
        const middleCell = document.createElement('td');
        
        if (outboundStopName === '' || inboundStopName === '') {
            middleCell.classList.add('opposite'); // Use existing opposite class
        } else if (outboundStopName === inboundStopName) {
            middleCell.classList.add('solid-line'); // Add a class for solid horizontal line
        } else if (areBusStopsWalkingDistance(outboundStopName, inboundStopName)) { //
            middleCell.classList.add('dotted-line'); // Add a class for dotted horizontal line
        } else {
            middleCell.classList.add('opposite'); // Fallback if no connection
        }
        // row.appendChild(middleCell);

        // Inbound stop cell (third column)
        if (inboundStopName !== '') { // Simplified condition
            // Apply conditional class based on name equality
            if (outboundStopName === inboundStopName) {
                inboundCell.classList.add('inbound-brt'); // Use outbound-stop-brt if names are same
            } else {
                inboundCell.classList.add('stop-cell'); // Use existing css if names are different
            }
            inboundCell.appendChild(document.createTextNode(inboundStopName));

            // Add transfers if available for inbound intermediate stop
            if (currentInboundStopData.transfers && currentInboundStopData.transfers.length > 0) {
                                        // Separate bus transfers from other types
                const busTransfers = currentInboundStopData.transfers.filter(t => t.type === 'Bus');
                const otherTransfers = currentInboundStopData.transfers.filter(t => t.type !== 'Bus');

                // Handle Bus transfers (on one line)
                if (busTransfers.length > 0) {
                    const busTransferDiv = document.createElement('div');
                    busTransferDiv.classList.add('text-xs', 'text-gray-500', 'mt-1');
                    //busTransferDiv.appendChild(document.createTextNode('Transit ke '));

                    busTransfers.forEach((transfer, index) => {
                        const icon = getTransferIcon(transfer.type);
                        if (icon) {
                            busTransferDiv.appendChild(icon);
                        }

                        const transferLink = document.createElement('a');
                        transferLink.href = "#";
                        transferLink.textContent = transfer.line;
                        const targetRoute = mockBusRoutes.find(r => r.number === transfer.line);

                        let bgColor = '#eeeeee';
                        let textColor = '#555555';

                        if (targetRoute && targetRoute.bgColor && targetRoute.textColor) {
                            bgColor = targetRoute.bgColor;
                            textColor = targetRoute.textColor;
                        } else {
                            console.warn(`Color information not found for bus line: ${transfer.line}. Using default colors.`);
                        }
                        transferLink.classList.add(
                            'hover:underline', 
                            'inline-flex', 
                            'items-center', 
                            'justify-center',
                            'w-auto', 
                            'min-w-4', 
                            'h-4',
                            'p-1', 
                            'mb-1',
                            'rounded-full', 
                            'text-xs',
                        );
                        transferLink.style.backgroundColor = bgColor;
                        transferLink.style.color = textColor;
                        transferLink.onclick = (event) => {
                            event.preventDefault();
                            const targetRoute = mockBusRoutes.find(r => r.number === transfer.line);
                            if (targetRoute) {
                                showDetailPage(targetRoute);
                            } else {
                                alert(`Informasi bus ${transfer.line} belum tersedia.`);
                            }
                        };
                        busTransferDiv.appendChild(transferLink);

                        if (index < busTransfers.length - 1) {
                            busTransferDiv.appendChild(document.createTextNode(' '));
                        }
                    });
                    inboundCell.appendChild(busTransferDiv);
                }

                // Handle other transfer types (each on a new line)
                otherTransfers.forEach(transfer => {
                    const otherTransferDiv = document.createElement('div');
                    otherTransferDiv.classList.add('text-xs', 'text-gray-500', 'mt-1');
                    //otherTransferDiv.appendChild(document.createTextNode('Transit ke '));

                    const icon = getTransferIcon(transfer.type);
                    if (icon) {
                        otherTransferDiv.appendChild(icon);
                    }

                    const span = document.createElement('span');
                    span.className = 'font-semibold text-blue-600'; // Or other appropriate styling
                    span.textContent = transfer.line;
                    otherTransferDiv.appendChild(span);

                    inboundCell.appendChild(otherTransferDiv);
                });
            }
        } else if (currentInboundStopData && currentInboundStopData.name === '') {
            inboundCell.appendChild(document.createTextNode(''));
        }
        row.appendChild(inboundCell);
        row.appendChild(middleCell);
        row.appendChild(outboundCell);

        combinedStopsTableBody.appendChild(row);
    }

    // Add the last stop (Destination) row for the overall route
    if (outboundStops.length > 0) { // Check outboundStops for the actual destination object
        const lastOverallRow = document.createElement('tr');
        lastOverallRow.classList.add('edge', 'loop');
        // Correctly get the destination stop data from the outbound stops array
        const destinationStopData = outboundStops[outboundStops.length - 1];
        const destinationCell = document.createElement('td');
        destinationCell.setAttribute('colspan', '3');
        destinationCell.classList.add('stop-end');
        destinationCell.textContent = destinationStopData.name; // Use .name

        // Add transfers if available for destination
        if (destinationStopData.transfers && destinationStopData.transfers.length > 0) {
            // Separate bus transfers from other types
            const busTransfers = destinationStopData.transfers.filter(t => t.type === 'Bus');
            const otherTransfers = destinationStopData.transfers.filter(t => t.type !== 'Bus');

            // Handle Bus transfers (on one line)
            if (busTransfers.length > 0) {
                const busTransferDiv = document.createElement('div');
                busTransferDiv.classList.add('text-xs', 'text-gray-500', 'mt-1');
                //busTransferDiv.appendChild(document.createTextNode('Transit ke '));

                busTransfers.forEach((transfer, index) => {
                    const icon = getTransferIcon(transfer.type);
                    if (icon) {
                        busTransferDiv.appendChild(icon);
                    }

                    const transferLink = document.createElement('a');
                    transferLink.href = "#";
                    transferLink.textContent = transfer.line;
                    const targetRoute = mockBusRoutes.find(r => r.number === transfer.line);

                    let bgColor = '#eeeeee';
                    let textColor = '#555555';

                    if (targetRoute && targetRoute.bgColor && targetRoute.textColor) {
                        bgColor = targetRoute.bgColor;
                        textColor = targetRoute.textColor;
                    } else {
                        console.warn(`Color information not found for bus line: ${transfer.line}. Using default colors.`);
                    }
                    transferLink.classList.add(
                        'font-semibold', 
                        'hover:underline', 
                        'inline-flex', 
                        'items-center',
                        'justify-center', 
                        'w-auto', 
                        'min-w-4', 
                        'h-4',
                        'p-1', 
                        'mb-1',
                        'rounded-full',
                    );
                    transferLink.style.backgroundColor = bgColor;
                    transferLink.style.color = textColor;
                    transferLink.onclick = (event) => {
                        event.preventDefault();
                        const targetRoute = mockBusRoutes.find(r => r.number === transfer.line);
                        if (targetRoute) {
                            showDetailPage(targetRoute);
                        } else {
                            alert(`Informasi bus ${transfer.line} belum tersedia.`);
                        }
                    };
                    busTransferDiv.appendChild(transferLink);

                    if (index < busTransfers.length - 1) {
                        busTransferDiv.appendChild(document.createTextNode(' ')); // Add a space between bus transfers
                    }
                });
                destinationCell.appendChild(busTransferDiv);
            }

            // Handle other transfer types (each on a new line)
            otherTransfers.forEach(transfer => {
                const otherTransferDiv = document.createElement('div');
                otherTransferDiv.classList.add('text-xs', 'text-gray-500', 'mt-1');
                //otherTransferDiv.appendChild(document.createTextNode('Transit ke '));

                const icon = getTransferIcon(transfer.type);
                if (icon) {
                    otherTransferDiv.appendChild(icon);
                }

                const span = document.createElement('span');
                span.className = 'font-semibold text-blue-600';
                span.textContent = transfer.line;
                otherTransferDiv.appendChild(span);

                destinationCell.appendChild(otherTransferDiv);
            });
        }
        lastOverallRow.appendChild(destinationCell);
        combinedStopsTableBody.appendChild(lastOverallRow);
    }
}

// Function to filter and display suggestions
function updateSuggestions(searchTerm, suggestionsListElement, isHomePage) {
    suggestionsListElement.innerHTML = ''; // Clear previous suggestions
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const routesToDisplay = [];

    // Iterate through all mockBusRoutes to find matches
    mockBusRoutes.forEach(route => {
        // Check if route number, origin, or destination matches
        if (route.number.toLowerCase().includes(lowerCaseSearchTerm) ||
            route.origin.toLowerCase().includes(lowerCaseSearchTerm) ||
            route.destination.toLowerCase().includes(lowerCaseSearchTerm)) {
            routesToDisplay.push(route);
            return; // Move to the next route once a match is found
        }

        // Check if any stop name in inbound or outbound directions matches
        const stops = [...route.stops.inbound, ...route.stops.outbound];
        const stopMatches = stops.some(stop => 
            stop.name && stop.name.toLowerCase().includes(lowerCaseSearchTerm)
        );

        if (stopMatches) {
            routesToDisplay.push(route);
        }
    });

    if (routesToDisplay.length > 0) {
        suggestionsListElement.classList.remove('hidden');
        routesToDisplay.forEach(route => {
            const li = document.createElement('li');
            li.classList.add('px-4', 'py-2', 'hover:bg-gray-100', 'cursor-pointer', 'text-gray-700', 'text-sm');
            li.textContent = `${route.number} ${route.origin} ⇄ ${route.destination}`;
            li.addEventListener('click', () => {
                if (isHomePage) {
                    searchInputHome.value = li.textContent;
                    suggestionsListHome.classList.add('hidden');
                    showDetailPage(route);
                } else {
                    searchInputDetail.value = li.textContent;
                    suggestionsListDetail.classList.add('hidden');
                    // Directly call showDetailPage for the selected route
                    showDetailPage(route);
                }
            });
            suggestionsListElement.appendChild(li);
        });
    } else {
        suggestionsListElement.classList.add('hidden');
    }
}

// Function to toggle clear button visibility
function toggleClearButton(inputElement, buttonElement) {
    if (inputElement.value.length > 0) {
        buttonElement.classList.remove('hidden');
    } else {
        buttonElement.classList.add('hidden');
    }
}


// Event listener for input on the homepage search bar
searchInputHome.addEventListener('input', (event) => {
    updateSuggestions(event.target.value, suggestionsListHome, true);
    toggleClearButton(searchInputHome, clearButtonHome); // Toggle clear button visibility
});

// Event listener for focus on the homepage search bar
searchInputHome.addEventListener('focus', () => {
    updateSuggestions('', suggestionsListHome, true); // Pass empty string to show all
    toggleClearButton(searchInputHome, clearButtonHome); // Toggle clear button visibility
});

// Event listener for the homepage clear button
clearButtonHome.addEventListener('click', () => {
    searchInputHome.value = '';
    suggestionsListHome.classList.add('hidden');
    clearButtonHome.classList.add('hidden');
    searchInputHome.focus(); // Keep focus on search input after clearing
});


    // Event listener for input on the detail page search bar
searchInputDetail.addEventListener('input', (event) => {
    updateSuggestions(event.target.value, suggestionsListDetail, false);
    toggleClearButton(searchInputDetail, clearButtonDetail); // Toggle clear button visibility
});

// Event listener for focus on the detail page search bar
searchInputDetail.addEventListener('focus', () => {
    updateSuggestions('', suggestionsListDetail, false); // Pass empty string to show all
    toggleClearButton(searchInputDetail, clearButtonDetail); // Toggle clear button visibility
});

// Event listener for the detail page clear button
clearButtonDetail.addEventListener('click', () => {
    searchInputDetail.value = '';
    suggestionsListDetail.classList.add('hidden');
    clearButtonDetail.classList.add('hidden');
    searchInputDetail.focus(); // Keep focus on search input after clearing
});


// Event listener for clicking outside the suggestions list to hide it (Homepage)
document.addEventListener('click', (event) => {
    if (!searchInputHome.contains(event.target) && !suggestionsListHome.contains(event.target) && !clearButtonHome.contains(event.target)) {
        suggestionsListHome.classList.add('hidden');
        clearButtonHome.classList.add('hidden');
    }
        // Event listener for clicking outside the suggestions list to hide it (Detail Page)
    if (!searchInputDetail.contains(event.target) && !suggestionsListDetail.contains(event.target) && !clearButtonDetail.contains(event.target)) {
        suggestionsListDetail.classList.add('hidden');
        clearButtonDetail.classList.add('hidden');
    }
});


// Event listener for the back button (on detail page)
backButton.addEventListener('click', showHomepage);

// Event listener for the back button (on bus network page)
busNetworkBackButton.addEventListener('click', showHomepage);

// Event listener for the back button (on about page)
aboutBackButton.addEventListener('click', showHomepage);

// Event listener for the back button (on how to pay page)
howToPayBackButton.addEventListener('click', showHomepage);

// Event listener for hamburger button
mobileMenuButton.addEventListener('click', toggleMobileMenu);

// Add event listeners to mobile menu links to close the menu after click
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Call fetchMockBusRoutes and loadWalkingConnections when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', async () => { // Make DOMContentLoaded handler async
    await Promise.all([ //
        fetchMockBusRoutes(), //
        loadWalkingConnections() //
    ]);
    // Any initial page setup that depends on both datasets can go here.
    // showHomepage() is already called within fetchMockBusRoutes() for initial display.
});

/**
 * Determines if two *different* bus stop names are considered "walking distance" apart.
 * This function now uses the globally loaded `walkingConnectionsData`.
 *
 * @param {string} stop1Name The name of the first bus stop.
 * @param {string} stop2Name The name of the second bus stop.
 * @returns {boolean} True if the two stops are considered walking distance, false otherwise.
 */
function areBusStopsWalkingDistance(stop1Name, stop2Name) { //
    if (!walkingConnectionsData || Object.keys(walkingConnectionsData).length === 0) { //
        console.warn("Walking connections data not loaded or empty."); //
        return false; //
    }

    const normalizedStop1 = stop1Name.trim(); //
    const normalizedStop2 = stop2Name.trim(); //

    // Check if stop1 is connected to stop2 in the loaded data
    if (walkingConnectionsData[normalizedStop1] && walkingConnectionsData[normalizedStop1].includes(normalizedStop2)) { //
        return true; //
    }

    // Check if stop2 is connected to stop1 (for bidirectional check if not explicitly listed both ways)
    if (walkingConnectionsData[normalizedStop2] && walkingConnectionsData[normalizedStop2].includes(normalizedStop1)) {
        return true;
    }

    return false; //
}