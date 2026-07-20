import Sidebar from "../components/Sidebar.js";
import Navbar from "../components/Navbar.js";
import DashboardCards from "../components/DashboardCards.js";

export default {
    components: {
        Sidebar,
        Navbar,
        DashboardCards
    },
    template: `
        <div class="d-flex">
            <Sidebar />
            <div class="flex-grow-1 bg-light">
                <Navbar />
                
                <div class="container-fluid p-4">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h3 class="mb-0">
                            Users List
                        </h3>
                    </div>

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
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="u in result" :key="u.id">
                                    <td>{{ u.id }}</td>
                                    <td>{{ u.first_name }}</td>
                                    <td>{{ u.last_name }}</td>
                                    <td>{{ u.phone_number }}</td>
                                    <td>{{ u.address }}</td>
                                    <td>
                                        <router-link :to="'/treks/edit/' + trek.id" class="btn btn-sm btn-warning me-2">
                                            <i class="bi bi-pencil-square"></i>
                                        </router-link>
                                        <button class="btn btn-sm btn-danger" @click="deleteTrek(trek.id)">
                                            <i class="bi bi-trash"></i>
                                        </button>
                                    </td>
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
    methods: {
        loadUsers() {
            fetch("/api/users")
                .then(response => response.json())
                .then(data => {
                    this.result = data;
                })
                .catch(error => console.error("Error loading treks:", error));
        },
        deleteTrek(id) {
            const ok = confirm("Are you sure you want to delete this trek?");

            if (!ok) {
                return;
            }

            fetch("/api/users/" + id, {
                method: "DELETE",

            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Unable to delete trek");
                    }
                    return response.json();
                })
                .then(data => {
                    alert(data.message || "Trek deleted successfully");
                    this.loadTreks(); // Table ko refresh karne ke liye reload call karein
                })
                .catch(error => {
                    console.error("Error:", error);
                    alert("Failed to delete trek.");
                });
        }
    },
    mounted() {
        this.loadUsers();
    }
}