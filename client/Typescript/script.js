"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var BookingStatus;
(function (BookingStatus) {
    BookingStatus["Booked"] = "Booked";
    BookingStatus["Cancelled"] = "Cancelled";
})(BookingStatus || (BookingStatus = {}));
let currentUser;
let curIndex;
let sign1 = document.getElementById("signin");
let sign2 = document.getElementById("signup");
let sign3 = document.getElementById("si");
let sign4 = document.getElementById("su");
let homes = document.getElementById("home");
let screening = document.getElementById("screenings");
let stocks = document.getElementById("movies");
let purchases = document.getElementById("purchase");
let historys = document.getElementById("history");
let topp = document.getElementById("top");
let showw = document.getElementById("show");
let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2");
let movieName = document.getElementById("movieName");
let movieLanguage = document.getElementById("language");
let movieID = document.getElementById("movieID");
let theatreId = document.getElementById("theatreId");
let seats = document.getElementById("seats");
let price = document.getElementById("price");
function fetchUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = "http://localhost:5066/api/users";
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }
        return yield response.json();
    });
}
function fetchUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = `http://localhost:5066/api/users/${id}`;
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Failed to fetch user");
        }
        return yield response.json();
    });
}
function addUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("http://localhost:5066/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
    });
}
function updateAmount(id, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5066/api/users/${id}/${amount}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        return yield response.json();
    });
}
function postMovie(movie) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("http://localhost:5066/api/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(movie),
        });
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        movies();
    });
}
function fetchMovies() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = "http://localhost:5066/api/movies";
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Failed to fetch movies");
        }
        return yield response.json();
    });
}
function deleteMovie(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5066/api/movies/${id}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error("Failed to delete movie");
        }
        movies();
    });
}
function deleteScreening(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5066/api/screenings/${id}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error("Failed to delete screening");
        }
        movies();
    });
}
function fetchTheatres() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = "http://localhost:5066/api/theatres";
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Failed to fetch theatres");
        }
        return yield response.json();
    });
}
function updateMovie(id, movie) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5066/api/movies/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(movie),
        });
        if (!response.ok) {
            throw new Error("Failed to update movie");
        }
        movies();
    });
}
function postScreening(screening) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("http://localhost:5066/api/screenings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(screening),
        });
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
    });
}
function postBooking(booking) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("http://localhost:5066/api/bookings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(booking),
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch data`);
        }
    });
}
function updateBooking(id, booking) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5066/api/bookings/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(booking),
        });
        if (!response.ok) {
            throw new Error("failed to fetch Data");
        }
    });
}
function updateScreening(id, screening) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5066/api/screenings/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(screening),
        });
        if (!response.ok) {
            throw new Error("Failed to update screening");
        }
    });
}
function fetchScreenings() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = "http://localhost:5066/api/screenings";
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Failed to fetch screenings");
        }
        return yield response.json();
    });
}
function fetchBookings() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = "http://localhost:5066/api/bookings";
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Failed to fetch bookings");
        }
        return yield response.json();
    });
}
function signIn() {
    sign1.style.display = "block";
    sign2.style.display = "none";
    sign3.style.background = "orange";
    sign4.style.background = "none";
}
function signUp() {
    sign1.style.display = "none";
    sign2.style.display = "block";
    sign3.style.background = "none";
    sign4.style.background = "orange";
}
function signUpSubmit(e) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        e.preventDefault();
        let name = document.getElementById("name");
        let email = document.getElementById("email");
        let phone = document.getElementById("phone");
        let password = document.getElementById("password");
        let cpassword = document.getElementById("cpassword");
        let fileElement = document.getElementById("fileElement");
        let base64;
        let file;
        fileElement.addEventListener("change", () => {
            var _a;
            file = (_a = fileElement.files) === null || _a === void 0 ? void 0 : _a[0];
        });
        file = (_a = fileElement.files) === null || _a === void 0 ? void 0 : _a[0];
        // let phoneReg=/^[0-9]{10,10}$/;
        let passReg = /[a-zA-Z]{4,6}[@!#$%&*()]{1,2}[0-9]{1,4}/;
        if (password.value == cpassword.value) {
            let isavail = true;
            let UserArrayList = yield fetchUsers();
            UserArrayList.forEach((val) => {
                if (val.email.toLowerCase() == email.value.toLowerCase()) {
                    alert("you already have an ID. Please Sign In");
                    isavail = false;
                }
            });
            if (file) {
                let fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                fileReader.addEventListener("load", (event) => {
                    var _a;
                    base64 = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
                    if (isavail) {
                        addUser({
                            userID: undefined,
                            name: name.value,
                            email: email.value,
                            phoneNumber: phone.value,
                            password: password.value,
                            image: [base64],
                            balance: 0,
                        });
                        signIn();
                    }
                });
            }
        }
        else {
            let i = document.getElementById("signup");
            i.style.border = "2px solid red";
        }
    });
}
function signInSubmit(e) {
    e.preventDefault();
    let isavail = true;
    let email = document.getElementById("email1");
    let password = document.getElementById("password2");
    fetchUsers()
        .then((UserArrayList) => {
        UserArrayList.forEach((val) => {
            if (val.email.toLowerCase() == email.value.toLowerCase() &&
                val.password == password.value) {
                let a = document.getElementById("box");
                a.style.display = "none";
                let b = document.getElementById("menu");
                b.style.display = "block";
                currentUser = val;
                home();
                email.value = "";
                password.value = "";
                isavail = false;
                return;
            }
        });
        if (isavail) {
            alert("Invalid Email or Password");
        }
    })
        .catch((error) => {
        console.error("Error fetching users:", error);
    });
}
function home() {
    displayNone();
    homes.style.display = "block";
    let a = document.getElementById("welcome");
    let b = document.getElementById("imgTag");
    a.innerHTML = "Welcome " + currentUser.name;
    b.src = currentUser.image[0];
}
function displayNone() {
    homes.style.display = "none";
    stocks.style.display = "none";
    purchases.style.display = "none";
    historys.style.display = "none";
    topp.style.display = "none";
    showw.style.display = "none";
    form1.style.display = "none";
    screening.style.display = "none";
}
function recharge() {
    displayNone();
    topp.style.display = "block";
    document.getElementById("curBalance").innerHTML = `Available Balance :${currentUser.balance}`;
}
function showBalance() {
    displayNone();
    showw.style.display = "block";
    var a = document.getElementById("balance");
    a.innerHTML = "Your Balance is " + currentUser.balance;
}
function deposit() {
    return __awaiter(this, void 0, void 0, function* () {
        var a = document.getElementById("amount");
        var amt = currentUser.balance + Number(a.value);
        currentUser = yield updateAmount(currentUser.userID, amt);
        alert("Amount Deposited Successfully");
        a.value = "";
        document.getElementById("curBalance").innerHTML = `Available Balance :${currentUser.balance}`;
    });
}
function logout() {
    displayNone();
    document.getElementById("menu").style.display = "none";
    document.getElementById("box").style.display = "block";
}
function movies() {
    return __awaiter(this, void 0, void 0, function* () {
        displayNone();
        stocks.style.display = "block";
        var tbody = document.getElementById("tbody1");
        tbody.innerHTML = "";
        var movieList = yield fetchMovies();
        movieList.forEach((movie) => {
            var row = document.createElement("tr");
            row.innerHTML = `
  
        <td>${movie.movieName}</td>
        <td>${movie.language}</td>
       
        <td>
        <button onclick="Edit(${movie.movieID},'${movie.movieName}','${movie.language}')">Edit</button>
        <button onclick="deleteMovie(${movie.movieID})">Delete</button>
        </td>
        `;
            tbody.appendChild(row);
        });
    });
}
function Edit(id, name, language) {
    form1.style.display = "block";
    curIndex = id;
    movieName.value = name;
    movieLanguage.value = language;
}
var itemBase64;
function addMovieTo() {
    if (curIndex != null) {
        updateMovie(curIndex, {
            movieID: curIndex,
            movieName: movieName.value,
            language: movieLanguage.value,
        });
        curIndex = null;
        movieName.value = "";
        movieLanguage.value = "";
    }
    else {
        postMovie({
            movieID: undefined,
            movieName: movieName.value,
            language: movieLanguage.value,
        });
    }
}
function addMovie() {
    form1.style.display = "block";
}
function purchase() {
    return __awaiter(this, void 0, void 0, function* () {
        displayNone();
        purchases.style.display = "block";
        let purchaseTable = document.getElementById("purchaseTable");
        let len = purchaseTable === null || purchaseTable === void 0 ? void 0 : purchaseTable.getElementsByTagName("tr").length;
        if (purchaseTable === null || purchaseTable === void 0 ? void 0 : purchaseTable.hasChildNodes()) {
            for (let i = len - 1; i >= 1; i--) {
                purchaseTable.removeChild(purchaseTable.children[i]);
            }
        }
        var screenList = yield fetchScreenings();
        var movieList = yield fetchMovies();
        var theatreList = yield fetchTheatres();
        var tbody = document.querySelector("#purchaseTable");
        screenList.forEach((screening) => {
            movieList.forEach((movie) => {
                if (movie.movieID == screening.movieID) {
                    theatreList.forEach((theatre) => {
                        if (theatre.theatreID == screening.theatreID) {
                            var row = document.createElement("tr");
                            row.innerHTML = `
                  <td>${movie.movieName}</td> 
                  <td>${theatre.theatreName}</td>
                  <td>Rs. ${screening.ticketPrice}</td>
                  <td>${screening.noOfSeatsAvailable}</td>
                  <td><button class="buyButton" onclick="buy(${screening.screeningID})">Buy</button></td>
              `;
                            tbody === null || tbody === void 0 ? void 0 : tbody.appendChild(row);
                        }
                    });
                }
            });
        });
    });
}
function buy(screeningId) {
    return __awaiter(this, void 0, void 0, function* () {
        let screeningList = yield fetchScreenings();
        let screening = screeningList.find((screening) => screening.screeningID == screeningId);
        if (screening) {
            let count = prompt("Enter number of tickets:", "0");
            let ticketCount = Number(count);
            let total = 0;
            if (ticketCount > 0) {
                if (screening.noOfSeatsAvailable >= ticketCount) {
                    total += screening.ticketPrice * ticketCount;
                    if (currentUser.balance >= total) {
                        screening.noOfSeatsAvailable -= Number(ticketCount);
                        currentUser = yield updateAmount(currentUser.userID, currentUser.balance - total);
                        updateScreening(screeningId, screening);
                        const booking = {
                            userID: currentUser.userID,
                            movieID: screening.movieID,
                            theatreID: screening.theatreID,
                            seatCount: ticketCount,
                            totalAmount: total,
                            bookingStatus: BookingStatus.Booked,
                        };
                        yield postBooking(booking);
                        alert("Ticket purchased!");
                        yield fetchBookings();
                    }
                    else {
                        alert("Insufficient wallet balance. Please recharge your wallet");
                        return;
                    }
                }
                else {
                    alert(`Required seat count not available. Current availability is ${screening.noOfSeatsAvailable}`);
                    return;
                }
            }
            else {
                alert("Please enter a value greater than 0");
            }
        }
        else {
            alert("Screening not found");
        }
        yield fetchScreenings();
    });
}
function bookingHistory() {
    return __awaiter(this, void 0, void 0, function* () {
        displayNone();
        historys.style.display = "block";
        let orderTable = document.getElementById("tb3");
        if (!orderTable) {
            console.error("Order table not found!");
            return;
        }
        orderTable.innerHTML = `
    <tr>
      <th>Movie Name</th>
      <th>Theatre Name</th>
      <th>Seat Count</th>
      <th>Total Amount</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
  `;
        const [movieList, bookingList, screeningList, theatreList] = yield Promise.all([
            fetchMovies(),
            fetchBookings(),
            fetchScreenings(),
            fetchTheatres(),
        ]);
        const currentUserBookings = bookingList.filter((booking) => booking.userID === currentUser.userID);
        const rows = currentUserBookings
            .map((booking) => {
            const movie = movieList.find((movie) => movie.movieID === booking.movieID);
            if (!movie)
                return "";
            const screening = screeningList.find((screening) => screening.movieID === movie.movieID);
            if (!screening)
                return "";
            const theatre = theatreList.find((theatre) => theatre.theatreID === screening.theatreID);
            if (!theatre)
                return "";
            return `
      <tr>
        <td>${movie.movieName}</td>
        <td>${theatre.theatreName}</td>
        <td>${booking.seatCount}</td>
        <td>${booking.totalAmount}</td>
        <td>${booking.bookingStatus}</td>
        
        <td>
           <button 
            class="cancel-btn" 
            data-id="${booking.bookingID}" 
            onclick="${booking.bookingStatus === 'Cancelled' ? '' : `cancelBooking(${booking.bookingID})`}"
            ${booking.bookingStatus === 'Cancelled' ? 'disabled' : ''}>
            ${booking.bookingStatus === 'Cancelled' ? 'Cancelled' : 'Cancel'}
          </button>
        </td>
      </tr>
    `;
        })
            .join("");
        orderTable.innerHTML += rows;
    });
}
function screenings() {
    return __awaiter(this, void 0, void 0, function* () {
        displayNone();
        screening.style.display = "block";
        var tbody = document.getElementById("tbody2");
        tbody.innerHTML = "";
        var screeningList = yield fetchScreenings();
        screeningList.forEach((screening) => {
            var row = document.createElement("tr");
            row.innerHTML = `
  
        <td>${screening.movieID}</td>
        <td>${screening.theatreID}</td>
        <td>${screening.noOfSeatsAvailable}</td>
        <td>${screening.ticketPrice}</td>
       
        <td>
        <button class="editScreening" onclick="Edit(${screening.movieID},'${screening.theatreID}','${screening.noOfSeatsAvailable}','${screening.ticketPrice}')">Edit</button>
        <button class="deleteScreening" onclick="deleteScreening(${screening.movieID})">Delete</button>
        </td>
        `;
            tbody.appendChild(row);
        });
    });
}
function EditScreening(id, mId, tId, seatsAvailable, ticketPrice) {
    form1.style.display = "block";
    curIndex = id;
    movieID.value = mId;
    theatreId.value = tId;
    seats.value = seatsAvailable;
    price.value = ticketPrice;
}
var itemBase64;
function addScreeningTo() {
    if (curIndex != null) {
        updateScreening(curIndex, {
            screeningID: curIndex,
            movieID: movieID.value,
            theatreID: theatreId.value,
            noOfSeatsAvailable: seats.value,
            ticketPrice: price.value,
        });
        curIndex = null;
        movieID.value = "";
        theatreId.value = "";
        seats.value = "";
        price.value = "";
    }
    else {
        postScreening({
            screeningID: undefined,
            movieID: movieID.value,
            theatreID: theatreId.value,
            noOfSeatsAvailable: seats.value,
            ticketPrice: price.value,
        });
    }
}
function addScreening() {
    form2.style.display = "block";
}
function cancelBooking(id) {
    return __awaiter(this, void 0, void 0, function* () {
        var screenings = yield fetchScreenings();
        var movies = yield fetchMovies();
        var bookingList = yield fetchBookings();
        var booking = bookingList.find((booking) => booking.bookingID == id);
        if (booking != undefined &&
            booking.userID == currentUser.userID &&
            booking.bookingStatus == BookingStatus.Booked) {
            booking.bookingStatus = BookingStatus.Cancelled;
            currentUser = yield updateAmount(currentUser.userID, (currentUser.balance += booking.totalAmount));
            movies.forEach((movie) => {
                if (movie.movieID == (booking === null || booking === void 0 ? void 0 : booking.movieID)) {
                    screenings.forEach((screening) => {
                        if (screening.movieID == movie.movieID &&
                            (booking === null || booking === void 0 ? void 0 : booking.movieID) == movie.movieID &&
                            screening.theatreID == (booking === null || booking === void 0 ? void 0 : booking.theatreID)) {
                            screening.noOfSeatsAvailable += booking === null || booking === void 0 ? void 0 : booking.seatCount;
                            updateScreening(screening.screeningID, screening);
                        }
                    });
                }
            });
            yield updateBooking(id, booking);
            bookingHistory();
            alert("Booking Cancelled");
        }
    });
}
