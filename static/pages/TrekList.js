import Sidebar from "../components/Sidebar.js";
import Navbar from "../components/Navbar.js";
import DashboardCards from "../components/DashboardCards.js";


export default {
    Component: {
        Sidebar,
        Navbar,
        DashboardCards,
    },
    template: `
        <div class="d-flex">
            <Sidebar />
            <div class="flex-grow-1 bg-light">
                <Navbar />
                <div class="container-fluid p-4">
                    <div class="card mt-4 shadow-sm">
                        <div class="card-header">
                            <h5 class="mb-0">
                                Treks List
                            </h5>
                        </div>
                        <table class="table table-hover mb-0">
                            <thead class="table-light">
                                <tr>
                                    <th>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Phone Number</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="trek in result" :key="trek.id">
                                    <td>{{trek.first_name}}</td>
                                    <td>{{trek.last_name}}</td>
                                    <td>{{trek.phone_number}}</td>
                                    <td>{{trek.address}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `,
    data: function () {
        return {
            result: []
        }
    },
    mounted() {
        fetch('/api/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => this.result = data)
    }
}