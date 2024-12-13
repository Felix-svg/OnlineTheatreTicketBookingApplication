interface UserDetails {
  userID: any;
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  image: string[];
  balance: number;
}

interface MovieDetails {
  movieID: any;
  movieName: string;
  language: string;
}

interface BookingDetails {
  bookingID?: any;
  userID: any;
  movieID: any;
  theatreID: any;
  seatCount: any;
  totalAmount: any;
  bookingStatus: BookingStatus;
}

interface TheatreDetails {
  theatreID: any;
  theatreName: string;
  theatreLocation: string;
}

interface ScreeningDetails {
  screeningID: any;
  movieID: any;
  theatreID: any;
  noOfSeatsAvailable: any;
  ticketPrice: any;
}

enum BookingStatus {
  Booked = "Booked",
  Cancelled = "Cancelled",
}

let currentUser: UserDetails;
let curIndex: number | null;
let sign1 = document.getElementById("signin") as HTMLDivElement;
let sign2 = document.getElementById("signup") as HTMLDivElement;
let sign3 = document.getElementById("si") as HTMLDivElement;
let sign4 = document.getElementById("su") as HTMLDivElement;

let homes = document.getElementById("home") as HTMLDivElement;
let screening = document.getElementById("screenings") as HTMLDivElement;
let stocks = document.getElementById("movies") as HTMLDivElement;
let purchases = document.getElementById("purchase") as HTMLDivElement;
let historys = document.getElementById("history") as HTMLDivElement;
let topp = document.getElementById("top") as HTMLDivElement;
let showw = document.getElementById("show") as HTMLDivElement;
let form1 = document.getElementById("form1") as HTMLDivElement;
let form2 = document.getElementById("form2") as HTMLDivElement;

let movieName = document.getElementById("movieName") as HTMLInputElement;
let movieLanguage = document.getElementById("language") as HTMLInputElement;
let movieID = document.getElementById("movieID") as HTMLInputElement;
let theatreId = document.getElementById("theatreId") as HTMLInputElement;
let seats = document.getElementById("seats") as HTMLInputElement;
let price = document.getElementById("price") as HTMLInputElement;

async function fetchUsers(): Promise<UserDetails[]> {
  const apiUrl = "http://localhost:5066/api/users";
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return await response.json();
}

async function fetchUser(id: number): Promise<UserDetails> {
  const apiUrl = `http://localhost:5066/api/users/${id}`;
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }
  return await response.json();
}

async function addUser(user: UserDetails): Promise<void> {
  const response = await fetch("http://localhost:5066/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
}

async function updateAmount(id: number, amount: number) {
  const response = await fetch(
    `http://localhost:5066/api/users/${id}/${amount}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return await response.json();
}

async function postMovie(movie: MovieDetails): Promise<void> {
  const response = await fetch("http://localhost:5066/api/movies", {
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
}

async function fetchMovies(): Promise<MovieDetails[]> {
  const apiUrl = "http://localhost:5066/api/movies";
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }
  return await response.json();
}

async function deleteMovie(id: number): Promise<void> {
  const response = await fetch(`http://localhost:5066/api/movies/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete movie");
  }
  movies();
}

async function deleteScreening(id: number): Promise<void> {
  const response = await fetch(`http://localhost:5066/api/screenings/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete screening");
  }
  movies();
}

async function fetchTheatres(): Promise<TheatreDetails[]> {
  const apiUrl = "http://localhost:5066/api/theatres";
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error("Failed to fetch theatres");
  }
  return await response.json();
}

async function updateMovie(id: number, movie: MovieDetails): Promise<void> {
  const response = await fetch(`http://localhost:5066/api/movies/${id}`, {
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
}

async function postScreening(screening: ScreeningDetails): Promise<void> {
  const response = await fetch("http://localhost:5066/api/screenings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(screening),
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
}

async function postBooking(booking: BookingDetails): Promise<void> {
  const response = await fetch("http://localhost:5066/api/bookings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(booking),
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch data`);
  }
}

async function updateBooking(
  id: number,
  booking: BookingDetails
): Promise<void> {
  const response = await fetch(`http://localhost:5066/api/bookings/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(booking),
  });
  if (!response.ok) {
    throw new Error("failed to fetch Data");
  }
}

async function updateScreening(
  id: number,
  screening: ScreeningDetails
): Promise<void> {
  const response = await fetch(`http://localhost:5066/api/screenings/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(screening),
  });
  if (!response.ok) {
    throw new Error("Failed to update screening");
  }
}

async function fetchScreenings(): Promise<ScreeningDetails[]> {
  const apiUrl = "http://localhost:5066/api/screenings";
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error("Failed to fetch screenings");
  }
  return await response.json();
}

async function fetchBookings(): Promise<BookingDetails[]> {
  const apiUrl = "http://localhost:5066/api/bookings";
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error("Failed to fetch bookings");
  }
  return await response.json();
}

function signIn(): void {
  sign1.style.display = "block";
  sign2.style.display = "none";
  sign3.style.background = "orange";
  sign4.style.background = "none";
}

function signUp(): void {
  sign1.style.display = "none";
  sign2.style.display = "block";
  sign3.style.background = "none";
  sign4.style.background = "orange";
}

async function signUpSubmit(e: Event) {
  e.preventDefault();
  let name = document.getElementById("name") as HTMLInputElement;
  let email = document.getElementById("email") as HTMLInputElement;
  let phone = document.getElementById("phone") as HTMLInputElement;
  let password = document.getElementById("password") as HTMLInputElement;
  let cpassword = document.getElementById("cpassword") as HTMLInputElement;
  let fileElement = document.getElementById("fileElement") as HTMLInputElement;

  let base64: string;
  let file;
  fileElement.addEventListener("change", () => {
    file = fileElement.files?.[0];
  });
  file = fileElement.files?.[0];
  // let phoneReg=/^[0-9]{10,10}$/;
  let passReg = /[a-zA-Z]{4,6}[@!#$%&*()]{1,2}[0-9]{1,4}/;

  if (password.value == cpassword.value) {
    let isavail: boolean = true;

    let UserArrayList = await fetchUsers();

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
        base64 = event.target?.result as string;
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
  } else {
    let i = document.getElementById("signup") as HTMLDivElement;
    i.style.border = "2px solid red";
  }
}

function signInSubmit(e: Event) {
  e.preventDefault();
  let isavail: boolean = true;
  let email = document.getElementById("email1") as HTMLInputElement;
  let password = document.getElementById("password2") as HTMLInputElement;

  fetchUsers()
    .then((UserArrayList) => {
      UserArrayList.forEach((val) => {
        if (
          val.email.toLowerCase() == email.value.toLowerCase() &&
          val.password == password.value
        ) {
          let a = document.getElementById("box") as HTMLDivElement;
          a.style.display = "none";
          let b = document.getElementById("menu") as HTMLDivElement;
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
  let a = document.getElementById("welcome") as HTMLHeadingElement;
  let b = document.getElementById("imgTag") as HTMLImageElement;
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
  (
    document.getElementById("curBalance") as HTMLHeadingElement
  ).innerHTML = `Available Balance :${currentUser.balance}`;
}

function showBalance() {
  displayNone();
  showw.style.display = "block";
  var a = document.getElementById("balance") as HTMLHeadingElement;
  a.innerHTML = "Your Balance is " + currentUser.balance;
}

async function deposit() {
  var a = document.getElementById("amount") as HTMLInputElement;
  var amt: number = currentUser.balance + Number(a.value);
  currentUser = await updateAmount(currentUser.userID, amt);

  alert("Amount Deposited Successfully");
  a.value = "";
  (
    document.getElementById("curBalance") as HTMLHeadingElement
  ).innerHTML = `Available Balance :${currentUser.balance}`;
}

function logout() {
  displayNone();
  (document.getElementById("menu") as HTMLDivElement).style.display = "none";
  (document.getElementById("box") as HTMLDivElement).style.display = "block";
}

async function movies() {
  displayNone();
  stocks.style.display = "block";
  var tbody = document.getElementById("tbody1") as HTMLTableSectionElement;
  tbody.innerHTML = "";

  var movieList = await fetchMovies();
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
}

function Edit(id: number, name: string, language: string) {
  form1.style.display = "block";
  curIndex = id;
  movieName.value = name;
  movieLanguage.value = language;
}

var itemBase64: string;
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
  } else {
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

async function purchase() {
  displayNone();
  purchases.style.display = "block";

  let purchaseTable = document.getElementById("purchaseTable");
  let len = purchaseTable?.getElementsByTagName("tr").length;
  if (purchaseTable?.hasChildNodes()) {
    for (let i: number = len! - 1; i >= 1; i--) {
      purchaseTable.removeChild(purchaseTable.children[i]);
    }
  }
  var screenList = await fetchScreenings();
  var movieList = await fetchMovies();
  var theatreList = await fetchTheatres();

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
            tbody?.appendChild(row);
          }
        });
      }
    });
  });
}

async function buy(screeningId: number) {
  let screeningList = await fetchScreenings();
  let screening = screeningList.find(
    (screening) => screening.screeningID == screeningId
  );

  if (screening) {
    let count = prompt("Enter number of tickets:", "0");
    let ticketCount = Number(count);
    let total: number = 0;

    if (ticketCount > 0) {
      if (screening.noOfSeatsAvailable >= ticketCount) {
        total += screening.ticketPrice * ticketCount;
        if (currentUser.balance >= total) {
          screening.noOfSeatsAvailable -= Number(ticketCount);

          currentUser = await updateAmount(
            currentUser.userID,
            currentUser.balance - total
          );
          updateScreening(screeningId, screening);
          const booking: BookingDetails = {
            userID: currentUser.userID,
            movieID: screening.movieID,
            theatreID: screening.theatreID,
            seatCount: ticketCount,
            totalAmount: total,
            bookingStatus: BookingStatus.Booked,
          };

          await postBooking(booking);
          alert("Ticket purchased!");
          await fetchBookings();
        } else {
          alert("Insufficient wallet balance. Please recharge your wallet");
          return;
        }
      } else {
        alert(
          `Required seat count not available. Current availability is ${screening.noOfSeatsAvailable}`
        );
        return;
      }
    } else {
      alert("Please enter a value greater than 0");
    }
  } else {
    alert("Screening not found");
  }
  await fetchScreenings();
}

async function bookingHistory() {
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

  const [movieList, bookingList, screeningList, theatreList] =
    await Promise.all([
      fetchMovies(),
      fetchBookings(),
      fetchScreenings(),
      fetchTheatres(),
    ]);

  const currentUserBookings = bookingList.filter(
    (booking) => booking.userID === currentUser.userID
  );

  const rows = currentUserBookings
    .map((booking) => {
      const movie = movieList.find(
        (movie) => movie.movieID === booking.movieID
      );
      if (!movie) return "";

      const screening = screeningList.find(
        (screening) => screening.movieID === movie.movieID
      );
      if (!screening) return "";

      const theatre = theatreList.find(
        (theatre) => theatre.theatreID === screening.theatreID
      );
      if (!theatre) return "";

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
}

async function screenings() {
  displayNone();
  screening.style.display = "block";
  var tbody = document.getElementById("tbody2") as HTMLTableSectionElement;
  tbody.innerHTML = "";

  var screeningList = await fetchScreenings();
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
}

function EditScreening(
  id: number,
  mId: any,
  tId: any,
  seatsAvailable: any,
  ticketPrice: any
) {
  form1.style.display = "block";
  curIndex = id;
  movieID.value = mId;
  theatreId.value = tId;
  seats.value = seatsAvailable;
  price.value = ticketPrice;
}

var itemBase64: string;
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
  } else {
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

async function cancelBooking(id: number) {
  var screenings: ScreeningDetails[] = await fetchScreenings();
  var movies: MovieDetails[] = await fetchMovies();
  var bookingList: BookingDetails[] = await fetchBookings();
  var booking = bookingList.find((booking) => booking.bookingID == id);
  if (
    booking != undefined &&
    booking.userID == currentUser.userID &&
    booking.bookingStatus == BookingStatus.Booked
  ) {
    booking.bookingStatus = BookingStatus.Cancelled;

    currentUser = await updateAmount(
      currentUser.userID,
      (currentUser.balance += booking.totalAmount)
    );

    movies.forEach((movie) => {
      if (movie.movieID == booking?.movieID) {
        screenings.forEach((screening) => {
          if (
            screening.movieID == movie.movieID &&
            booking?.movieID == movie.movieID &&
            screening.theatreID == booking?.theatreID
          ) {
            screening.noOfSeatsAvailable += booking?.seatCount;
            updateScreening(screening.screeningID, screening);
          }
        });
      }
    });

    await updateBooking(id, booking);
    bookingHistory();
    alert("Booking Cancelled");
  }
}
