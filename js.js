let map = L.map('map').setView([-0.071850, -78.435068 ], 18 )  
L.tileLayer('https://dev.{s}.tile.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
	maxZoom: 20,
	attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([-0.225219, -78.5248 ]).addTo(map);
L.marker([-0.0866811,-78.5073176 ]).addTo(map);
L.marker([-0.2235145,-78.5113281 ]).addTo(map);
L.marker([-0.071850, -78.435068 ]).addTo(map);
L.marker([-0.290397, -78.552108 ]).addTo(map);
L.marker([-0.257128, -78.546270 ]).addTo(map);
L.marker([-0.241768, -78.526977 ]).addTo(map);
L.marker([-0.355708, -78.528793 ]).addTo(map);
var maker = L.polyline([[-0.0866811,-78.5073176],[-0.2235145,-78.5113281]]).addTo(map);
var maker = L.polyline([[-0.071850, -78.435068],[-0.290397, -78.552108]]).addTo(map);
var maker = L.polyline([[-0.257128, -78.546270],[-0.241768, -78.526977]]).addTo(map);
var maker = L.polyline([[-0.355708, -78.528793],[-0.225069,-78.5168959]]).addTo(map);
