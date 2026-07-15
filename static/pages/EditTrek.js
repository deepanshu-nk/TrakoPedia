import Sidebar from "../components/Sidebar.js";
import Navbar from "../components/Navbar.js";

export default {
    components: {
        Sidebar,
        Navbar
    },

    data() {
        return {
            trek: {
                trek_name: "",
                location: "",
                description: "",
                difficulty: "",
                duration: "",
                start_date: "",
                end_date: "",
                total_slots: "",
                available_slots: "",
            }
        }
    },

    methods: {
        submitForm() {
            fetch("/api/treks/" + this.$route.params.id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(this.trek)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Failed to update trek");
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Success:', data);
                    alert("Trek updated successfully!");
                    this.$router.push("/treks");
                })
                .catch(error => {
                    console.error("Error:", error);
                    alert("Something went wrong while updating the trek.");
                });
        },

        cancelForm() {
            this.$router.push("/treks");
        }
    },

    mounted() {
        fetch("/api/treks/" + this.$route.params.id, {

        })
            .then(response => response.json())
            .then(data => {
                this.trek = data;
            })
            .catch(error => {
                console.error("Error fetching trek details:", error);
            });
    },

    template: `
        <div class="d-flex">
            <Sidebar />
            <div class="flex-grow-1 bg-light">
                <Navbar />
                <div class="container mt-4 mb-4">
                    <div class="card shadow">
                        <div class="card-header bg-primary text-white">
                            <h4 class="mb-0">
                                Edit Trek
                            </h4>
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="submitForm">
                                <div class="mb-3">
                                    <label class="form-label">Trek Name</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        v-model="trek.trek_name"
                                        required
                                    >
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Location</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        v-model="trek.location"
                                        required
                                    >
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Description</label>
                                    <textarea
                                        class="form-control"
                                        rows="4"
                                        v-model="trek.description"
                                    ></textarea>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <label class="form-label">Difficulty</label>
                                        <select
                                            class="form-select"
                                            v-model="trek.difficulty"
                                            required
                                        >
                                            <option value="">Select Difficulty</option>
                                            <option value="Easy">Easy</option>
                                            <option value="Moderate">Moderate</option>
                                            <option value="Hard">Hard</option>
                                        </select>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label">Duration (Days)</label>
                                        <input
                                            type="number"
                                            class="form-control"
                                            v-model="trek.duration"
                                            required
                                        >
                                    </div>
                                </div>

                                <div class="row mt-3">
                                    <div class="col-md-6">
                                        <label class="form-label">Start Date</label>
                                        <input
                                            type="date"
                                            class="form-control"
                                            v-model="trek.start_date"
                                            required
                                        >
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label">End Date</label>
                                        <input
                                            type="date"
                                            class="form-control"
                                            v-model="trek.end_date"
                                            required
                                        >
                                    </div>
                                </div>

                                <div class="mt-3">
                                    <label class="form-label">Total Slots</label>
                                    <input
                                        type="number"
                                        class="form-control"
                                        v-model="trek.total_slots"
                                        required
                                    >
                                </div>

                                <div class="mt-3">
                                    <label class="form-label">Available Slots</label>
                                    <input
                                        type="number"
                                        class="form-control"
                                        v-model="trek.available_slots"
                                        required
                                    >
                                </div>

                                <div class="mt-4">
                                    <button
                                        type="submit"
                                        class="btn btn-success me-2"
                                    >
                                        Save Trek
                                    </button>

                                    <button
                                        type="button"
                                        class="btn btn-secondary"
                                        @click="cancelForm"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}