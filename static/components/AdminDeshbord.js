// import Sidebar from "../components/Sidebar.js"
// import Navbar from "../components/Navbar.js"
// import DashboardCards from "../components/DashboardCards.js"
// import BookingTable from "../components/BookingTable.js"

// export default {
//     components: {
//         Sidebar,
//         Navbar,
//         DashboardCards,
//         BookingTable
//     },
//     data() {
//         return {
//             // Dashboard Cards
//             cards: [
//                 {
//                     title: "Total Treks",
//                     value: 25,
//                     icon: "bi-map",
//                     color: "text-primary"
//                 },
//                 {
//                     title: "Total Users",
//                     value: 120,
//                     icon: "bi-people",
//                     color: "text-success"
//                 },
//                 {
//                     title: "Total Staff",
//                     value: 18,
//                     icon: "bi-person-badge",
//                     color: "text-warning"
//                 },
//                 {
//                     title: "Total Bookings",
//                     value: 185,
//                     icon: "bi-calendar-check",
//                     color: "text-danger"
//                 }
//             ],
//             // Table Heading
//             columns: [
//                 "Booking ID",
//                 "User",
//                 "Trek",
//                 "Booking Date",
//                 "Status"
//             ],
//             // Table Data
//             rows: [
//                 [
//                     "B001",
//                     "Amit Sharma",
//                     "Everest Base Camp",
//                     "12 May 2026",
//                     "Booked"
//                 ],
//                 [
//                     "B002",
//                     "Priya Patel",
//                     "Roopkund Trek",
//                     "11 May 2026",
//                     "Booked"
//                 ],
//                 [
//                     "B003",
//                     "Rahul Verma",
//                     "Kedarkantha Trek",
//                     "10 May 2026",
//                     "Cancelled"
//                 ]
//             ]
//         }
//     },
//     template: `
//         <div class="d-flex">
//             <Sidebar />
//             <div class="flex-grow-1 bg-light">
//                 <Navbar />
//                 <div class="container-fluid p-4">
//                     <h2 class="fw-bold">
//                         Dashboard
//                     </h2>
//                     <DashboardCards
//                         :cards="cards"
//                     />
//                     <BookingTable
//                         :columns="columns"
//                         :rows="rows"
//                     />
//                 </div>
//             </div>
//         </div>
//     `
// }