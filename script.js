// script.js

// Helper function to get the appropriate icon for transfer type
function getTransferIcon(type) {
    switch (type) {
        case 'LRT': {
            const img = document.createElement('img');
            img.src = 'img/lrt-jak-ns.png'; // Assuming relative path works with base tag or for local testing
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

let mockBusRoutes = [];
let walkingConnectionsData = {};

async function loadWalkingConnections() {
    try {
        const response = await fetch('walking_connections.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        walkingConnectionsData = await response.json();
        console.log("Walking connections loaded:", walkingConnectionsData);
    } catch (error) {
        console.error("Could not load walking connections:", error);
        walkingConnectionsData = {};
    }
}

async function fetchMockBusRoutes() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        mockBusRoutes = await response.json();
        console.log('Bus routes loaded:', mockBusRoutes);
        // Initial page setup is handled by handleLocation now, not directly showHomepage()
    } catch (error) {
        console.error('Could not fetch bus routes:', error);
        alert('Failed to load bus route data. Please try refreshing the page.');
    }
}

const homepage = document.getElementById('homepage');
const detailPage = document.getElementById('detail-page');
const busNetworkPage = document.getElementById('bus-network-page');
const aboutPage = document.getElementById('about-page');
const howToPayPage = document.getElementById('how-to-pay-page');

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

const searchInputHome = document.getElementById('search-input-home');
const suggestionsListHome = document.getElementById('suggestions-list-home');
const clearButtonHome = document.getElementById('clear-button-home');
const backButton = document.getElementById('back-button');
const busNetworkBackButton = document.getElementById('bus-network-back-button');
const aboutBackButton = document.getElementById('about-back-button');
const howToPayBackButton = document.getElementById('how-to-pay-back-button');

const detailRouteNumber = document.getElementById('detail-route-number');
const detailOriginTable = document.getElementById('detail-origin-table');
const detailDestinationTable = document.getElementById('detail-destination-table');
const combinedStopsTableBody = document.getElementById('combined-stops-table-body');

const searchInputDetail = document.getElementById('search-input-detail');
const suggestionsListDetail = document.getElementById('suggestions-list-detail');
const clearButtonDetail = document.getElementById('clear-button-detail');

const busNetworkTableBody = document.getElementById('bus-network-table-body');

let currentRoute = null;

// --- BASE PATH CONFIGURATION (for GitHub Pages or Subdirectory Hosting) ---
// IMPORTANT: Replace 'your-repo-name' with your actual GitHub repository name if hosting there.
// If hosting at the root of a domain (e.g., Firebase, Netlify, custom domain), set to '' or '/'
const BASE_PATH = ''; // Example for root domain hosting (e.g., Firebase)
// const BASE_PATH = '/your-repo-name'; // Example for GitHub Pages project repo

// Helper function to create URL paths with the base path
function getPath(path) {
    // Ensure path starts with a slash relative to BASE_PATH
    return `${BASE_PATH}${path.startsWith('/') ? path : '/' + path}`;
}

// Function to toggle mobile menu visibility
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const body = document.body;

    // Toggle the 'mobile-menu-active' class to show/hide
    if (mobileMenu.classList.contains('mobile-menu-active')) {
        // Menu is currently active, so hide it
        mobileMenu.classList.remove('mobile-menu-active');
        body.classList.remove('overflow-hidden'); // Allow scrolling again
    } else {
        // Menu is currently hidden, so show it
        mobileMenu.classList.add('mobile-menu-active');
        body.classList.add('overflow-hidden'); // Prevent scrolling body when menu is open
    }
}

// Function to show the homepage and hide other pages, handles history pushState
function showHomepage(fromPopState = false) {
    if (!fromPopState) {
        history.pushState({ page: 'homepage' }, '', getPath('/'));
    }
    homepage.style.display = 'flex';
    detailPage.style.display = 'none';
    busNetworkPage.style.display = 'none';
    aboutPage.style.display = 'none';
    howToPayPage.style.display = 'none';
    searchInputHome.value = '';
    suggestionsListHome.classList.add('hidden');
    clearButtonHome.classList.add('hidden');
    mobileMenu.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    console.log('Showing homepage');
}

// Function to show the detail page, handles history pushState
function showDetailPage(route, fromPopState = false) {
    if (!fromPopState) {
        history.pushState({ page: 'detail', routeNumber: route.number }, '', getPath(`/layanan-bus/${route.number}`));
    }
    homepage.style.display = 'none';
    detailPage.style.display = 'block';
    busNetworkPage.style.display = 'none';
    aboutPage.style.display = 'none';
    howToPayPage.style.display = 'none';
    currentRoute = route;
    displayRouteDetails(route);
    searchInputDetail.value = '';
    suggestionsListDetail.classList.add('hidden');
    clearButtonDetail.classList.add('hidden');
    mobileMenu.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    console.log('Showing detail page for route:', route.number);
}

// Function to show the bus network page, handles history pushState
function showBusNetworkPage(fromPopState = false) {
    if (!fromPopState) {
        history.pushState({ page: 'busNetwork' }, '', getPath('/rute-bus'));
    }
    homepage.style.display = 'none';
    detailPage.style.display = 'none';
    busNetworkPage.style.display = 'block';
    aboutPage.style.display = 'none';
    howToPayPage.style.display = 'none';
    populateBusNetworkTable();
    mobileMenu.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    console.log('Showing bus network page');
}

// Function to show the about page, handles history pushState
function showAboutPage(fromPopState = false) {
    if (!fromPopState) {
        history.pushState({ page: 'about' }, '', getPath('/tentang'));
    }
    homepage.style.display = 'none';
    detailPage.style.display = 'none';
    busNetworkPage.style.display = 'none';
    aboutPage.style.display = 'block';
    howToPayPage.style.display = 'none';
    mobileMenu.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    console.log('Showing about page');
}

// Function to show the how to pay page, handles history pushState
function showHowToPayPage(fromPopState = false) {
    if (!fromPopState) {
        history.pushState({ page: 'howToPay' }, '', getPath('/cara-naik'));
    }
    homepage.style.display = 'none';
    detailPage.style.display = 'none';
    busNetworkPage.style.display = 'none';
    aboutPage.style.display = 'none';
    howToPayPage.style.display = 'block';
    mobileMenu.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    console.log('Showing how to pay page');
}


// Function to handle showing different pages based on the URL
function handleLocation() {
    const path = window.location.pathname;
    // Remove BASE_PATH from the beginning of the path for routing logic
    const relativePath = path.startsWith(BASE_PATH) ? path.substring(BASE_PATH.length) : path;

    console.log('Handling location:', path, 'Relative path:', relativePath);

    if (relativePath.startsWith('/layanan-bus/')) {
        const busNumber = relativePath.replace('/layanan-bus/', '');
        const route = mockBusRoutes.find(r => r.number === busNumber);
        if (route) {
            showDetailPage(route, true); // Pass true to indicate it's from a popstate or direct URL
        } else {
            console.warn(`Bus route ${busNumber} not found. Redirecting to homepage.`);
            showHomepage(true); // Treat as popstate so it doesn't add a new history entry
        }
    } else if (relativePath === '/cara-naik') {
        showHowToPayPage(true);
    } else if (relativePath === '/rute-bus') {
        showBusNetworkPage(true);
    } else if (relativePath === '/tentang') {
        showAboutPage(true);
    } else if (relativePath === '/' || relativePath === '') { // Handle root path
        showHomepage(true);
    } else {
        // Fallback for unknown paths (e.g., 404 behavior)
        console.warn('Unknown path, redirecting to homepage:', relativePath);
        showHomepage(true); // Redirect to homepage for unknown paths
    }
}


function populateBusNetworkTable() {
    busNetworkTableBody.innerHTML = '';
    console.log('Attempting to populate bus network table. Current mockBusRoutes state:', mockBusRoutes);

    if (mockBusRoutes && mockBusRoutes.length > 0) {
        mockBusRoutes.forEach(route => {
            const row = document.createElement('tr');
            const busNumberCell = document.createElement('td');
            const routeNameCell = document.createElement('td');

            const busNumberLink = document.createElement('a');
            busNumberLink.href = getPath(`/layanan-bus/${route.number}`); // Use getPath here
            busNumberLink.textContent = route.number;
            busNumberLink.onclick = (event) => {
                event.preventDefault();
                showDetailPage(route, false); // Explicitly state not from popstate
            };
            busNumberCell.appendChild(busNumberLink);

            const routeNameLink = document.createElement('a');
            routeNameLink.href = getPath(`/layanan-bus/${route.number}`); // Use getPath here
            routeNameLink.textContent = `${route.origin} ⇆ ${route.destination}`;
            routeNameLink.onclick = (event) => {
                event.preventDefault();
                showDetailPage(route, false); // Explicitly state not from popstate
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
        if (mockBusRoutes.length === 0) {
            setTimeout(populateBusNetworkTable, 500);
        }
    }
}

async function displayRouteDetails(route) {
    detailRouteNumber.textContent = route.number;
    detailOriginTable.textContent = route.origin;
    detailDestinationTable.textContent = route.destination;

    combinedStopsTableBody.innerHTML = '';

    const outboundStops = route.stops.outbound;
    const inboundStops = route.stops.inbound;

    if (outboundStops.length > 0) {
        const firstOverallRow = document.createElement('tr');
        firstOverallRow.classList.add('edge', 'loop');
        const originStopData = outboundStops[0];
        const originCell = document.createElement('td');
        originCell.setAttribute('colspan', '3');
        originCell.classList.add('stop-start');
        originCell.textContent = originStopData.name;

        if (originStopData.transfers && originStopData.transfers.length > 0) {
            const busTransfers = originStopData.transfers.filter(t => t.type === 'Bus');
            const otherTransfers = originStopData.transfers.filter(t => t.type !== 'Bus');

            if (busTransfers.length > 0) {
                const busTransferDiv = document.createElement('div');
                busTransferDiv.classList.add('text-xs', 'text-gray-500', 'mt-1');

                busTransfers.forEach((transfer, index) => {
                    const icon = getTransferIcon(transfer.type);
                    if (icon) {
                        busTransferDiv.appendChild(icon);
                    }

                    const transferLink = document.createElement('a');
                    transferLink.href = getPath(`/layanan-bus/${transfer.line}`); // Use getPath here
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
                            showDetailPage(targetRoute, false); // Explicitly state not from popstate
                        } else {
                            alert(`Informasi bus ${transfer.line} belum tersedia.`);
                        }
                    };
                    busTransferDiv.appendChild(transferLink);

                    if (index < busTransfers.length - 1) {
                        busTransferDiv.appendChild(document.createTextNode(' '));
                    }
                });
                originCell.appendChild(busTransferDiv);
            }

            otherTransfers.forEach(transfer => {
                const otherTransferDiv = document.createElement('div');
                otherTransferDiv.classList.add('text-xs', 'text-gray-500', 'mt-1');

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

    const reversedInboundStops = [...inboundStops].reverse();
    const effectiveOutboundLength = outboundStops.length > 1 ? outboundStops.length - 2 : 0;
    const effectiveInboundLength = inboundStops.length > 1 ? inboundStops.length - 2 : 0;
    const maxIntermediateLength = Math.max(effectiveOutboundLength, effectiveInboundLength);


    for (let i = 0; i < maxIntermediateLength; i++) {
        const row = document.createElement('tr');
        row.classList.add('intermediate-row');

        const outboundCell = document.createElement('td');
        outboundCell.classList.add('intermediate-line');

        const currentOutboundStopData = outboundStops[i + 1];
        const outboundStopName = currentOutboundStopData ? currentOutboundStopData.name : '';

        const inboundCell = document.createElement('td');
        inboundCell.classList.add('intermediate-line');
        const currentInboundStopData = reversedInboundStops[i + 1];
        const inboundStopName = currentInboundStopData ? currentInboundStopData.name : '';

        if (outboundStopName !== '') {
            if (outboundStopName === inboundStopName) {
                outboundCell.classList.add('outbound-brt');
            } else {
                outboundCell.classList.add('stop-cell');
            }
            outboundCell.appendChild(document.createTextNode(outboundStopName));

            if (currentOutboundStopData.transfers && currentOutboundStopData.transfers.length > 0) {
                const busTransfers = currentOutboundStopData.transfers.filter(t => t.type === 'Bus');
                const otherTransfers = currentOutboundStopData.transfers.filter(t => t.type !== 'Bus');

                if (busTransfers.length > 0) {
                    const busTransferDiv = document.createElement('div');
                    busTransferDiv.classList.add('text-xs', 'text-gray-500', 'mt-1');

                    busTransfers.forEach((transfer, index) => {
                        const icon = getTransferIcon(transfer.type);
                        if (icon) {
                            busTransferDiv.appendChild(icon);
                        }

                        const transferLink = document.createElement('a');
                        transferLink.href = getPath(`/layanan-bus/${transfer.line}`); // Use getPath here
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
                                showDetailPage(targetRoute, false); // Explicitly state not from popstate
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

                otherTransfers.forEach(transfer => {
                    const otherTransferDiv = document.createElement('div');
                    otherTransferDiv.classList.add('text-xs', 'text-gray-500', 'mt-1');

                    const icon = getTransferIcon(transfer.type);
                    if (icon) {
                        otherTransferDiv.appendChild(icon);
                    }

                    const span = document.createElement('span');
                    span.className = 'font-semibold text-blue-600';
                    span.textContent = transfer.line;
                    otherTransferDiv.appendChild(span);

                    outboundCell.appendChild(otherTransferDiv);
                });
            }
        } else if (currentOutboundStopData && currentOutboundStopData.name === '') {
            outboundCell.appendChild(document.createTextNode(''));
        }
        const middleCell = document.createElement('td');

        if (outboundStopName === '' || inboundStopName === '') {
            middleCell.classList.add('opposite');
        } else if (outboundStopName === inboundStopName) {
            middleCell.classList.add('solid-line');
        } else if (areBusStopsWalkingDistance(outboundStopName, inboundStopName)) {
            middleCell.classList.add('dotted-line');
        } else {
            middleCell.classList.add('opposite');
        }

        if (inboundStopName !== '') {
            if (outboundStopName === inboundStopName) {
                inboundCell.classList.add('inbound-brt');
            } else {
                inboundCell.classList.add('stop-cell');
            }
            inboundCell.appendChild(document.createTextNode(inboundStopName));

            if (currentInboundStopData.transfers && currentInboundStopData.transfers.length > 0) {
                const busTransfers = currentInboundStopData.transfers.filter(t => t.type === 'Bus');
                const otherTransfers = currentInboundStopData.transfers.filter(t => t.type !== 'Bus');

                if (busTransfers.length > 0) {
                    const busTransferDiv = document.createElement('div');
                    busTransferDiv.classList.add('text-xs', 'text-gray-500', 'mt-1');

                    busTransfers.forEach((transfer, index) => {
                        const icon = getTransferIcon(transfer.type);
                        if (icon) {
                            busTransferDiv.appendChild(icon);
                        }

                        const transferLink = document.createElement('a');
                        transferLink.href = getPath(`/layanan-bus/${transfer.line}`); // Use getPath here
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
                                showDetailPage(targetRoute, false); // Explicitly state not from popstate
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

                otherTransfers.forEach(transfer => {
                    const otherTransferDiv = document.createElement('div');
                    otherTransferDiv.classList.add('text-xs', 'text-gray-500', 'mt-1');

                    const icon = getTransferIcon(transfer.type);
                    if (icon) {
                        otherTransferDiv.appendChild(icon);
                    }

                    const span = document.createElement('span');
                    span.className = 'font-semibold text-blue-600';
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

    if (outboundStops.length > 0) {
        const lastOverallRow = document.createElement('tr');
        lastOverallRow.classList.add('edge', 'loop');
        const destinationStopData = outboundStops[outboundStops.length - 1];
        const destinationCell = document.createElement('td');
        destinationCell.setAttribute('colspan', '3');
        destinationCell.classList.add('stop-end');
        destinationCell.textContent = destinationStopData.name;

        if (destinationStopData.transfers && destinationStopData.transfers.length > 0) {
            const busTransfers = destinationStopData.transfers.filter(t => t.type === 'Bus');
            const otherTransfers = destinationStopData.transfers.filter(t => t.type !== 'Bus');

            if (busTransfers.length > 0) {
                const busTransferDiv = document.createElement('div');
                busTransferDiv.classList.add('text-xs', 'text-gray-500', 'mt-1');

                busTransfers.forEach((transfer, index) => {
                    const icon = getTransferIcon(transfer.type);
                    if (icon) {
                        busTransferDiv.appendChild(icon);
                    }

                    const transferLink = document.createElement('a');
                    transferLink.href = getPath(`/layanan-bus/${transfer.line}`); // Use getPath here
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
                            showDetailPage(targetRoute, false); // Explicitly state not from popstate
                        } else {
                            alert(`Informasi bus ${transfer.line} belum tersedia.`);
                        }
                    };
                    busTransferDiv.appendChild(transferLink);

                    if (index < busTransfers.length - 1) {
                        busTransferDiv.appendChild(document.createTextNode(' '));
                    }
                });
                destinationCell.appendChild(busTransferDiv);
            }

            otherTransfers.forEach(transfer => {
                const otherTransferDiv = document.createElement('div');
                otherTransferDiv.classList.add('text-xs', 'text-gray-500', 'mt-1');

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

function updateSuggestions(searchTerm, suggestionsListElement, isHomePage) {
    suggestionsListElement.innerHTML = '';
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const routesToDisplay = [];

    mockBusRoutes.forEach(route => {
        if (route.number.toLowerCase().includes(lowerCaseSearchTerm) ||
            route.origin.toLowerCase().includes(lowerCaseSearchTerm) ||
            route.destination.toLowerCase().includes(lowerCaseSearchTerm)) {
            routesToDisplay.push(route);
            return;
        }

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
                    showDetailPage(route, false); // Explicitly state not from popstate
                } else {
                    searchInputDetail.value = li.textContent;
                    suggestionsListDetail.classList.add('hidden');
                    showDetailPage(route, false); // Explicitly state not from popstate
                }
            });
            suggestionsListElement.appendChild(li);
        });
    } else {
        suggestionsListElement.classList.add('hidden');
    }
}

function toggleClearButton(inputElement, buttonElement) {
    if (inputElement.value.length > 0) {
        buttonElement.classList.remove('hidden');
    } else {
        buttonElement.classList.add('hidden');
    }
}

searchInputHome.addEventListener('input', (event) => {
    updateSuggestions(event.target.value, suggestionsListHome, true);
    toggleClearButton(searchInputHome, clearButtonHome);
});

searchInputHome.addEventListener('focus', () => {
    updateSuggestions('', suggestionsListHome, true);
    toggleClearButton(searchInputHome, clearButtonHome);
});

clearButtonHome.addEventListener('click', () => {
    searchInputHome.value = '';
    suggestionsListHome.classList.add('hidden');
    clearButtonHome.classList.add('hidden');
    searchInputHome.focus();
});

searchInputDetail.addEventListener('input', (event) => {
    updateSuggestions(event.target.value, suggestionsListDetail, false);
    toggleClearButton(searchInputDetail, clearButtonDetail);
});

searchInputDetail.addEventListener('focus', () => {
    updateSuggestions('', suggestionsListDetail, false);
    toggleClearButton(searchInputDetail, clearButtonDetail);
});

clearButtonDetail.addEventListener('click', () => {
    searchInputDetail.value = '';
    suggestionsListDetail.classList.add('hidden');
    clearButtonDetail.classList.add('hidden');
    searchInputDetail.focus();
});

document.addEventListener('click', (event) => {
    if (!searchInputHome.contains(event.target) && !suggestionsListHome.contains(event.target) && !clearButtonHome.contains(event.target)) {
        suggestionsListHome.classList.add('hidden');
        clearButtonHome.classList.add('hidden');
    }
    if (!searchInputDetail.contains(event.target) && !suggestionsListDetail.contains(event.target) && !clearButtonDetail.contains(event.target)) {
        suggestionsListDetail.classList.add('hidden');
        clearButtonDetail.classList.add('hidden');
    }
});

// IMPORTANT: Modify your back buttons to use history.back()
backButton.addEventListener('click', () => history.back());
busNetworkBackButton.addEventListener('click', () => history.back());
aboutBackButton.addEventListener('click', () => history.back());
howToPayBackButton.addEventListener('click', () => history.back());

mobileMenuButton.addEventListener('click', toggleMobileMenu);

document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', (event) => { // Added event parameter
        event.preventDefault(); // Prevent default link behavior
        const path = event.target.getAttribute('href'); // Get the href attribute
        // Determine which show function to call based on the path
        if (path.includes('cara-naik')) {
            showHowToPayPage(false);
        } else if (path.includes('rute-bus')) {
            showBusNetworkPage(false);
        } else if (path.includes('tentang')) {
            showAboutPage(false);
        }
        toggleMobileMenu(); // Close mobile menu after navigation
    });
});

// Event listener for browser's back/forward buttons
window.addEventListener('popstate', handleLocation);

document.addEventListener('DOMContentLoaded', async () => {
    await Promise.all([
        fetchMockBusRoutes(),
        loadWalkingConnections()
    ]);
    handleLocation(); // Call handleLocation on initial page load
});

function areBusStopsWalkingDistance(stop1Name, stop2Name) {
    if (!walkingConnectionsData || Object.keys(walkingConnectionsData).length === 0) {
        console.warn("Walking connections data not loaded or empty.");
        return false;
    }

    const normalizedStop1 = stop1Name.trim();
    const normalizedStop2 = stop2Name.trim();

    if (walkingConnectionsData[normalizedStop1] && walkingConnectionsData[normalizedStop1].includes(normalizedStop2)) {
        return true;
    }

    if (walkingConnectionsData[normalizedStop2] && walkingConnectionsData[normalizedStop2].includes(normalizedStop1)) {
        return true;
    }

    return false;
}
// Event listener for the website name/logo link
document.getElementById('website-name').querySelector('a').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    showHomepage(false);
});
// Event listeners for the desktop navigation menu links
document.querySelectorAll('header nav ul li a.menu-button').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        const path = event.target.getAttribute('href');
        // Route based on path (using getPath for consistency with BASE_PATH if applicable)
        if (path === getPath('/cara-naik')) {
            showHowToPayPage(false);
        } else if (path === getPath('/rute-bus')) {
            showBusNetworkPage(false);
        } else if (path === getPath('/tentang')) {
            showAboutPage(false);
        }
    });
});

