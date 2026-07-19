import Sidebar from "./Sidebar.js"
import Navbar from "./Navbar.js"
import DashboardCards from "./DashboardCards.js"
import BookingTable from "./BookingTable.js"

export default {
    components: {
        Sidebar,
        Navbar,
        DashboardCards,
        BookingTable
    },
    data() {
        return {
            // Dashboard Cards
            cards: [
                {
                    title: "Total Treks",
                    value: 25,
                    icon: "bi-map",
                    color: "text-primary"
                },
                {
                    title: "Total Users",
                    value: 120,
                    icon: "bi-people",
                    color: "text-success"
                },
                {
                    title: "Total Staff",
                    value: 18,
                    icon: "bi-person-badge",
                    color: "text-warning"
                },
                {
                    title: "Total Bookings",
                    value: 185,
                    icon: "bi-calendar-check",
                    color: "text-danger"
                }
            ],
        }
    },
    template: `
        <div class="d-flex">
            <Sidebar />
            <div class="flex-grow-1 bg-light">
                <Navbar />
                <div class="container-fluid p-4">
                    <h2 class="fw-bold">
                        Dashboard
                    </h2>
                    <DashboardCards
                        :cards="cards"
                    />
                    <BookingTable
                        :columns="columns"
                        :rows="rows"
                    />
                </div>
            </div>
        </div>
    `
}