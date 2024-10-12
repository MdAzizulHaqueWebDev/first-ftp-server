const FtpServer = require("ftp-srv"); // Correct import

// Create an instance of the FTP server
const ftpServer = new FtpServer("ftp://127.0.0.1:21", {
	anonymous: true, // Allow anonymous access
	greetings: ["Welcome to the local FTP server!"],
});

// Handle connection events
ftpServer.on("login", (data, resolve, reject) => {
	// You can customize user authentication here
	// If anonymous login is allowed, you can call resolve() directly
	resolve({ user: data.username });
});

// Start the server
ftpServer
	.listen()
	.then(() => {
		console.log("FTP server is running on ftp://127.0.0.1:21");
	})
	.catch((err) => {
		console.error("Error starting FTP server:", err);
	});
